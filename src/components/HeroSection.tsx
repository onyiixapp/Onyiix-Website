import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Globe, Mail, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onOpenContactModal: (service?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContactModal }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [emailInput, setEmailInput] = useState('');

  // Seamless Crossfade Video Controller
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let fadeReq: number;

    const fade = (start: number, end: number, duration: number, onDone?: () => void) => {
      const startTime = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        video.style.opacity = (start + (end - start) * progress).toString();
        if (progress < 1) {
          fadeReq = requestAnimationFrame(step);
        } else if (onDone) {
          onDone();
        }
      };
      fadeReq = requestAnimationFrame(step);
    };

    const handleCanPlay = () => {
      video.play().catch(() => {});
      fade(0, 1, 500);
    };

    let fadingOut = false;
    const handleTimeUpdate = () => {
      if (video.duration && video.duration - video.currentTime <= 0.55 && !fadingOut) {
        fadingOut = true;
        fade(parseFloat(video.style.opacity || '1'), 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        fadingOut = false;
        video.play().catch(() => {});
        fade(0, 1, 500);
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      cancelAnimationFrame(fadeReq);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    onOpenContactModal(emailInput);
  };

  return (
    <section className="min-h-screen overflow-hidden relative flex flex-col justify-between pt-28 sm:pt-36">
      {/* Background Video */}
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none z-0"
        style={{ opacity: 0 }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
          type="video/mp4"
        />
      </video>

      {/* Luminous Ambient Blue / Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-b from-sky-950/30 via-transparent to-[#030712]/95" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[120px] pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 text-center max-w-5xl mx-auto -translate-y-[4%] sm:-translate-y-[8%]">
        {/* Core Positioning Statement */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="liquid-glass rounded-full px-5 py-2 flex items-center gap-2 mb-6 backdrop-blur-xl border border-white/15 shadow-xl"
        >
          <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          <span className="text-white/90 text-xs sm:text-sm font-sans tracking-wide">
            Every business deserves a powerful{' '}
            <span className="font-serif italic text-sky-300">digital presence</span> in the modern world.
          </span>
        </motion.div>

        {/* Instrument Serif Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap font-serif leading-[1.05]"
        >
          Know it then <em className="italic text-white/85">all</em>.
        </motion.h1>

        {/* Dual-Literacy Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed px-4 max-w-2xl font-sans"
        >
          We engineer high-converting <strong className="text-white">CMS Websites</strong>, distributed <strong className="text-white">SaaS Platforms</strong>, and bespoke <strong className="text-white">Full-Stack Systems</strong> backed by our 1-Month Free Maintenance SLA.
        </motion.p>

        {/* Email / Brief Pill */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl w-full mt-7 liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 shadow-2xl backdrop-blur-xl border border-white/15"
        >
          <input
            type="email"
            placeholder="Enter your email to start your project..."
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder:text-white/40 text-xs sm:text-base focus:outline-none font-sans"
          />
          <button
            type="submit"
            aria-label="Submit email"
            className="bg-white rounded-full p-3 text-black hover:scale-105 active:scale-95 transition-transform shrink-0 flex items-center justify-center shadow-lg"
          >
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 stroke-[2.5]" />
          </button>
        </motion.form>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#selector"
            className="liquid-glass rounded-full px-6 sm:px-8 py-3 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2 shadow-lg border border-white/15"
          >
            <Layers className="w-4 h-4 text-sky-400" />
            <span>Interactive Package Selector</span>
          </a>

          <a
            href="#portfolio"
            className="liquid-glass rounded-full px-5 sm:px-7 py-3 text-white/80 text-xs sm:text-sm font-medium hover:text-white hover:bg-white/5 transition-all border border-white/10"
          >
            Explore Portfolio ↗
          </a>
        </motion.div>

        {/* Premium Sans-Serif Value Micro-Pills (Image 3 fix) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs font-sans text-white/70"
        >
          <span className="flex items-center gap-1.5 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>1-Month Free Maintenance</span>
          </span>
          <span className="flex items-center gap-1.5 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <span className="text-sky-400">✦</span>
            <span>100% Code Ownership</span>
          </span>
          <span className="flex items-center gap-1.5 bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            <span className="text-sky-400">✦</span>
            <span>Dual-Literacy Architecture</span>
          </span>
        </motion.div>
      </div>

      {/* Social Links Footer */}
      <div className="relative z-10 flex items-center justify-center gap-4 pb-10">
        <a
          href="https://linkedin.com/in/mohammed-maaz-a-0aa730217/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="liquid-glass rounded-full p-3.5 text-white/80 hover:text-white hover:bg-white/10 hover:scale-110 transition-all shadow-lg border border-white/10"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-3.32 0c0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
          </svg>
        </a>

        <a
          href="https://maazprofile.tech"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Portfolio"
          className="liquid-glass rounded-full p-3.5 text-white/80 hover:text-white hover:bg-white/10 hover:scale-110 transition-all shadow-lg border border-white/10"
        >
          <Globe className="w-4 h-4" />
        </a>

        <a
          href="mailto:maazmohammed112@gmail.com"
          aria-label="Email"
          className="liquid-glass rounded-full p-3.5 text-white/80 hover:text-white hover:bg-white/10 hover:scale-110 transition-all shadow-lg border border-white/10"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
