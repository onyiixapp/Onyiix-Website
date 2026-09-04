import React from "react";
import { Mail, MapPin, GitFork, Link2, MessageSquare, Globe, ArrowUpRight } from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import { OnyiixLogo } from "@/components/OnyiixLogo";

const footerLinks = [
  {
    title: "Studio",
    links: [
      { label: "About ONYIIX", href: "/about" },
      { label: "Founder profiles", href: "/about#founders" },
      { label: "Careers", href: "/careers" },
      { label: "Global delivery", href: "/global" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web development", href: "/services/web-development" },
      { label: "SaaS platforms", href: "/services/saas-platforms" },
      { label: "AI workflows", href: "/services/ai-workflows" },
      { label: "Digital marketing", href: "/services/digital-marketing" },
      { label: "Digital systems", href: "/services/digital-systems" },
    ],
  },
];

const contactInfo = [
  {
    icon: <Mail size={18} className="text-[#3ca2fa]" />,
    text: "sumansingh.np@gmail.com",
    href: "mailto:sumansingh.np@gmail.com",
  },
  {
    icon: <Mail size={18} className="text-[#3ca2fa]" />,
    text: "maazmohammed112@gmail.com",
    href: "mailto:maazmohammed112@gmail.com",
  },
  {
    icon: <MapPin size={18} className="text-[#3ca2fa]" />,
    text: "Bengaluru, Karnataka, India",
  },
];

const socialLinks = [
  { icon: <GitFork size={20} />, label: "GitHub", href: "#" },
  { icon: <Link2 size={20} />, label: "LinkedIn", href: "#" },
  { icon: <MessageSquare size={20} />, label: "Twitter", href: "#" },
  { icon: <Globe size={20} />, label: "Website", href: "https://asme.studio" },
];

function HoverFooter() {
  return (
    <footer className="bg-[#0F0F11] text-neutral-400 relative rounded-t-3xl overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 pt-12 sm:pt-16 pb-6 z-40 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 pb-12">
          {/* Brand */}
          <div className="flex flex-col space-y-4 sm:col-span-2 lg:col-span-1">
            <OnyiixLogo variant="white" height={36} />
            <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
              Useful digital products, thoughtfully designed and engineered to last. Founder-led from Bengaluru.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#3ca2fa] hover:text-white transition-colors"
            >
              Start a project <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-5">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm hover:text-[#3ca2fa] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-[0.12em] mb-5">Contact</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex-shrink-0">{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="hover:text-[#3ca2fa] transition-colors break-all">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-white/10 my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex gap-5 text-neutral-500">
            {socialLinks.map(({ icon, label, href }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="hover:text-[#3ca2fa] transition-colors">
                {icon}
              </a>
            ))}
          </div>
          <div className="flex gap-4 text-neutral-500">
            <a href="/terms" className="hover:text-[#3ca2fa] transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-[#3ca2fa] transition-colors">Privacy</a>
            <a href="/sitemap" className="hover:text-[#3ca2fa] transition-colors">Sitemap</a>
          </div>
          <p className="text-neutral-600">&copy; {new Date().getFullYear()} ONYIIX. Bengaluru, India.</p>
        </div>
      </div>

      {/* Text hover effect */}
      <div className="lg:flex hidden h-[28rem] -mt-48 -mb-32 relative z-10">
        <TextHoverEffect text="ONYIIX" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;
