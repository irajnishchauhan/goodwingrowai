"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: "https://www.instagram.com/goodwingrow/",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800",
    link: "https://www.instagram.com/goodwingrow/",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    link: "https://www.instagram.com/goodwingrow/",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
    link: "https://www.instagram.com/goodwingrow/",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
    link: "https://www.instagram.com/goodwingrow/",
  }
];

export const InstagramFeed = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-foreground border">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-foreground uppercase leading-none mb-4">
              Behind the <br />
              <span className="text-foreground/30">Scenes.</span>
            </h2>
            <p className="max-w-md text-lg text-secondary font-medium">
              Follow our journey on Instagram as we build the future of AI growth systems.
            </p>
          </div>
          <Link 
            href="https://www.instagram.com/goodwingrow/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-medium transition-colors border border-foreground/20 text-foreground hover:bg-foreground hover:text-foreground group whitespace-nowrap"
          >
            <span className="flex items-center gap-2">
              <InstagramIcon className="w-5 h-5" />
              @goodwingrow
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </div>

      {/* Scrolling Feed */}
      <div className="relative w-full overflow-hidden flex pb-8">
        <motion.div 
          className="flex gap-4 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Double array to create seamless loop */}
          {[...instagramPosts, ...instagramPosts].map((post, idx) => (
            <Link 
              key={`${post.id}-${idx}`}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-[280px] md:w-[350px] aspect-square flex-shrink-0 group rounded-[30px] overflow-hidden block border border-foreground border"
            >
              <Image 
                src={post.image}
                alt="Instagram Post"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                <InstagramIcon className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
