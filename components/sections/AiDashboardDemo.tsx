"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, Activity } from "lucide-react";

const Counter = ({ from, to, duration = 2, prefix = "", suffix = "", decimals = 0 }: any) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const current = from + (to - from) * easeProgress;
      
      setCount(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [from, to, duration]);

  return <span>{prefix}{count.toFixed(decimals)}{suffix}</span>;
};

export const AiDashboardDemo = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
           <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-full px-4 py-1.5 mb-6 text-sm text-secondary flex items-center gap-2"
           >
             <Activity className="w-4 h-4 text-accent" /> Sample Growth Intelligence Dashboard
           </motion.div>
        </div>

        <div className="max-w-5xl mx-auto glass rounded-2xl border-white/10 p-2 md:p-6 shadow-2xl relative overflow-hidden">
          
          {/* Dashboard Header */}
          <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6 px-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="text-xs text-secondary font-medium uppercase tracking-wider">Goodwin Analytics Engine</div>
            <div className="w-10" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 md:px-0">
            {/* Metric 1 */}
            <div className="bg-surface/50 border border-white/5 rounded-xl p-6 relative overflow-hidden group">
              <div className="text-secondary text-sm font-medium mb-2">Revenue</div>
              <div className="text-3xl font-bold text-foreground">
                <Counter from={0} to={18.4} duration={2.5} prefix="₹" suffix="L" decimals={1} />
              </div>
              <div className="mt-2 flex items-center text-accent text-xs font-medium">
                <ArrowUpRight className="w-3 h-3 mr-1" /> +24% vs last month
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-surface/50 border border-white/5 rounded-xl p-6 relative overflow-hidden group">
              <div className="text-secondary text-sm font-medium mb-2">Leads Generated</div>
              <div className="text-3xl font-bold text-foreground">
                <Counter from={0} to={2847} duration={2} />
              </div>
              <div className="mt-2 flex items-center text-accent text-xs font-medium">
                <ArrowUpRight className="w-3 h-3 mr-1" /> +12% vs last month
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-surface/50 border border-white/5 rounded-xl p-6 relative overflow-hidden group">
              <div className="text-secondary text-sm font-medium mb-2">ROAS</div>
              <div className="text-3xl font-bold text-foreground">
                <Counter from={0} to={4.8} duration={2.2} suffix="x" decimals={1} />
              </div>
              <div className="mt-2 flex items-center text-accent text-xs font-medium">
                <ArrowUpRight className="w-3 h-3 mr-1" /> Target achieved
              </div>
            </div>

            {/* Metric 4 */}
            <div className="bg-surface/50 border border-white/5 rounded-xl p-6 relative overflow-hidden group">
              <div className="text-secondary text-sm font-medium mb-2">AI Search Visibility</div>
              <div className="text-3xl font-bold text-foreground">
                <Counter from={0} to={38} duration={2.4} prefix="+" suffix="%" />
              </div>
              <div className="mt-2 flex items-center text-accent text-xs font-medium">
                <ArrowUpRight className="w-3 h-3 mr-1" /> Top 3 positions
              </div>
            </div>
          </div>
          
          {/* Mock Chart Area */}
          <div className="mt-4 px-2 md:px-0">
             <div className="bg-surface/30 border border-white/5 rounded-xl h-64 p-6 flex flex-col justify-end relative">
                <div className="absolute top-6 left-6 text-sm text-secondary font-medium">Conversion Trajectory</div>
                <div className="flex items-end gap-2 w-full h-40">
                  {[40, 45, 30, 50, 60, 55, 75, 80, 70, 90, 85, 100].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.05, type: "spring" }}
                      className="flex-1 bg-accent/20 rounded-t-sm relative group"
                    >
                      <div className="absolute inset-0 bg-accent/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  ))}
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};
