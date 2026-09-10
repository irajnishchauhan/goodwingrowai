"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { GlowButton } from "@/components/ui/GlowButton";
import { GoodwinLogo } from "@/components/ui/GoodwinLogo";

const navLinks = [
  { name: "Solutions", href: "#solutions" },
  { name: "AI Growth Engine", href: "#engine" },
  { name: "Industries", href: "#industries" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Insights", href: "#insights" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Basic lock body scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          <Link href="/" className="relative z-50 flex items-center gap-2 group">
            <GoodwinLogo variant="horizontal" theme="dark" size="md" />
            {/* AI Status Indicator */}
            <div className="hidden md:flex items-center gap-2 ml-4 px-3 py-1 rounded-full bg-surface border border-white/10 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              AI Growth Engine Online
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-secondary hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="#audit">
              <GlowButton variant="primary" className="py-2.5 px-6 text-sm">
                Book a Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
              </GlowButton>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-50 p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : -20 }}
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl flex flex-col pt-32 px-6 ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <nav className="flex flex-col gap-6 text-2xl font-semibold">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground border-b border-white/10 pb-4"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pb-12 flex flex-col gap-4">
          <Link href="#audit" onClick={() => setMobileMenuOpen(false)}>
            <GlowButton variant="primary" className="w-full">
              Book a Strategy Call
            </GlowButton>
          </Link>
        </div>
      </motion.div>
    </>
  );
};
