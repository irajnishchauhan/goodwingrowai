"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with AI marketing.",
    price: "₹79,997",
    period: "/mo",
    features: [
      "AI Growth Audit",
      "Basic Automation Setup",
      "Lead Generation Engine",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing businesses ready to scale with full automation.",
    price: "₹1,99,997",
    period: "/mo",
    features: [
      "Everything in Starter",
      "Advanced AI Routing",
      "Custom Workflow Automation",
      "Performance Ads Management",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations and specific needs.",
    price: "Custom",
    period: "",
    features: [
      "Everything in Pro",
      "Dedicated Growth Manager",
      "Custom AI Models",
      "Full CRM Integration",
      "24/7 Phone Support",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Simple, transparent pricing."
          subtitle="Choose the plan that fits your business needs. No hidden fees or surprises."
        />

        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative bg-surface/40 backdrop-blur-md rounded-2xl border ${plan.popular ? 'border-primary/50' : 'border-white/10'} p-8 flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              {plan.popular && (
                <div className="absolute -inset-[1px] bg-gradient-to-b from-primary/30 to-transparent rounded-2xl -z-10 blur-sm" />
              )}
              
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-secondary text-sm mb-6 h-10">{plan.description}</p>
              
              <div className="flex items-end gap-1 mb-8">
                <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
                <span className="text-secondary mb-1">{plan.period}</span>
              </div>
              
              <ul className="flex flex-col gap-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <GlowButton variant={plan.popular ? "primary" : "secondary"} className="w-full">
                Get Started
              </GlowButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
