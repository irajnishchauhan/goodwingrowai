"""
Adds an ElevenLabs voiceover to the Goodwin Grow AI reel, synced to each scene,
and ducks the music under the voice.

Setup (once):   pip install requests
Needs ffmpeg installed (https://ffmpeg.org).

Run:
  export ELEVENLABS_API_KEY="your_key"          # Windows: set ELEVENLABS_API_KEY=your_key
  export ELEVENLABS_VOICE_ID="your_voice_id"    # pick a voice in ElevenLabs > Voices > copy ID
  python add_voiceover.py

Keep these 3 files in the same folder:
  goodwin-grow-ai-reel-silent.mp4, goodwin-reel-music.mp3, add_voiceover.py
Output: goodwin-grow-ai-reel-final.mp4
"""
import os, subprocess, requests, sys

KEY = os.environ.get("ELEVENLABS_API_KEY")
VOICE = os.environ.get("ELEVENLABS_VOICE_ID")
if not KEY or not VOICE:
    sys.exit("Set ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID first.")

# (scene start in seconds, line to speak). Edit the text freely; keep each line short.
LINES = [
    (0.3,  "Goodwin Grow AI. Your AI-powered growth partner."),
    (3.5,  "We don't just market."),
    (6.1,  "We grow."),
    (8.3,  "AI lead generation that fills your pipeline, on autopilot."),
    (11.7, "WhatsApp and CRM automation, so no follow-up is ever missed."),
    (15.3, "AI marketing and content that scales your brand."),
    (18.5, "Sales automation, from first lead to final close."),
    (21.5, "Built for manufacturers and growing businesses."),
    (24.8, "It's time to grow with AI. Talk to Goodwin Grow AI today."),
]

files = []
for i, (start, text) in enumerate(LINES):
    out = f"vo_{i}.mp3"
    r = requests.post(
        f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE}",
        headers={"xi-api-key": KEY, "Content-Type": "application/json"},
        json={"text": text, "model_id": "eleven_multilingual_v2",
              "voice_settings": {"stability": 0.5, "similarity_boost": 0.8, "style": 0.3}},
        timeout=120)
    r.raise_for_status()
    open(out, "wb").write(r.content)
    files.append((start, out))
    print("made", out)

cmd = ["ffmpeg", "-y", "-i", "goodwin-grow-ai-reel-silent.mp4", "-i", "goodwin-reel-music.mp3"]
for _, f in files:
    cmd += ["-i", f]
delays = ";".join(f"[{i+2}:a]adelay={int(s*1000)}|{int(s*1000)}[v{i}]" for i, (s, _) in enumerate(files))
vlabels = "".join(f"[v{i}]" for i in range(len(files)))
fc = (f"{delays};{vlabels}amix=inputs={len(files)}:normalize=0[vo];"
      f"[vo]asplit=2[vo1][vo2];"
      f"[1:a]volume=0.8[m];"
      f"[m][vo1]sidechaincompress=threshold=0.02:ratio=10:attack=20:release=400[duck];"
      f"[duck][vo2]amix=inputs=2:normalize=0,alimiter=limit=0.95[a]")
cmd += ["-filter_complex", fc, "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "aac",
        "-b:a", "192k", "-shortest", "goodwin-grow-ai-reel-final.mp4"]
subprocess.run(cmd, check=True)
print("Done -> goodwin-grow-ai-reel-final.mp4")
