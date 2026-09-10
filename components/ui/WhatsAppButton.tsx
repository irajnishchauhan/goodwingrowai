"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { motion } from "framer-motion";

export const WhatsAppButton = () => {
  return (
    <motion.a
      href={siteConfig.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2 }}
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/20 hover:scale-110 transition-transform flex items-center justify-center group"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-4 bg-surface text-foreground text-sm py-1.5 px-3 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </motion.a>
  );
};
