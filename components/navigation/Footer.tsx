import Link from "next/link";
import { siteConfig } from "@/lib/config";

const footerLinks = {
  solutions: [
    { name: "AI Strategy", href: "#" },
    { name: "AI Creative", href: "#" },
    { name: "AI Performance", href: "#" },
    { name: "AI Search", href: "#" },
    { name: "AI Automation", href: "#" },
    { name: "AI Analytics", href: "#" },
  ],
  industries: [
    { name: "Healthcare", href: "#" },
    { name: "Real Estate", href: "#" },
    { name: "Education", href: "#" },
    { name: "D2C", href: "#" },
    { name: "Automotive", href: "#" },
    { name: "Professional Services", href: "#" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Insights", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex flex-col text-2xl font-bold leading-tight tracking-tighter mb-4">
              <span>GOODWIN</span>
              <span className="text-secondary">GROW AI</span>
            </Link>
            <p className="text-secondary mb-6 max-w-sm">
              AI-powered growth for ambitious businesses.
            </p>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Solutions</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-secondary hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Industries</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-secondary hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-secondary hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Legal</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-secondary hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary text-sm text-center md:text-left">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href={siteConfig.socials.linkedin} className="text-secondary hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href={siteConfig.socials.instagram} className="text-secondary hover:text-foreground transition-colors">
              Instagram
            </Link>
            <Link href="#" className="text-secondary hover:text-foreground transition-colors">
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
