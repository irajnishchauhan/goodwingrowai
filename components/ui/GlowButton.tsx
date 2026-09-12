"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface GlowButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = "primary", children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none group";
    
    const variants = {
      primary: "bg-foreground text-background hover:bg-white",
      secondary: "bg-surface border border-white/10 text-foreground hover:bg-surface/80 hover:border-white/20",
      outline: "bg-transparent border border-white/20 text-foreground hover:border-accent hover:text-accent",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        {variant === 'primary' && (
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100 blur-xl" />
        )}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);
GlowButton.displayName = "GlowButton";
