import React from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import { OnyiixLogo } from "@/components/OnyiixLogo";

const footerLinks = [
  {
    title: "Studio",
    links: [
      { label: "About ONYIIX", href: "/about" },
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
    text: "info@onyiix.com",
    href: "mailto:info@onyiix.com",
  },
  {
    icon: <MapPin size={18} className="text-[#3ca2fa]" />,
    text: "Bengaluru, Karnataka, India",
  },
];

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const socialLinks = [
  { icon: <LinkedinIcon size={18} />, label: "LinkedIn", href: "http://linkedin.com/company/onyiix" },
  { icon: <InstagramIcon size={18} />, label: "Instagram", href: "https://www.instagram.com/onyiix.co/" },
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

            {/* Social Icons moved below Bengaluru text in Contact section */}
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-3">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-neutral-400 hover:text-[#3ca2fa] hover:border-[#3ca2fa]/50 hover:bg-[#3ca2fa]/10 transition-all"
                  title={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-t border-white/10 my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <span className="text-neutral-500">&copy; 2026 Onyiix. All rights reserved.</span>
          <span className="text-neutral-500">Crafted with creativity from Bengaluru.</span>
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
