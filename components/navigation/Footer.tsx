import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { GoodwinLogo } from "@/components/ui/GoodwinLogo";

const footerLinks = {
  services: [
    { name: "AI Marketing", href: "#" },
    { name: "Performance Ads", href: "#" },
    { name: "Lead Generation", href: "#" },
    { name: "Automation", href: "#" },
    { name: "Analytics & BI", href: "#" },
    { name: "Growth Strategy", href: "#" },
  ],
  industries: [
    { name: "Healthcare & Clinics", href: "#" },
    { name: "Real Estate & Property", href: "#" },
    { name: "B2B SaaS & Tech", href: "#" },
    { name: "E-Commerce & D2C", href: "#" },
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
            <Link href="/" className="mb-6 inline-block">
              <GoodwinLogo variant="stacked" theme="dark" size="lg" />
            </Link>
            <p className="text-secondary mb-6 max-w-sm">
              AI-powered growth for ambitious businesses.
            </p>
            <div className="flex flex-col gap-3 text-sm text-secondary">
              <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center bg-white/5 rounded-md text-base">📧</span>
                {siteConfig.contact.email}
              </a>
              <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-accent transition-colors flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center bg-white/5 rounded-md text-base">📞</span>
                {siteConfig.contact.phone}
              </a>
              <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center bg-white/5 rounded-md text-base">💬</span>
                WhatsApp Us
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm tracking-wide">Services</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-secondary hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4 text-sm tracking-wide">Industries</h4>
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
            <h4 className="text-foreground font-semibold mb-4 text-sm tracking-wide">Company</h4>
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
            <h4 className="text-foreground font-semibold mb-4 text-sm tracking-wide">Legal</h4>
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
            <Link href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-foreground transition-colors">
              LinkedIn
            </Link>
            <Link href={siteConfig.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-foreground transition-colors">
              X (Twitter)
            </Link>
            <Link href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-foreground transition-colors">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
