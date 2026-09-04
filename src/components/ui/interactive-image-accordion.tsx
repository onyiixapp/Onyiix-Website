import React, { useState } from 'react';

const accordionItems = [
  {
    id: 1,
    title: 'Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'SaaS Platforms',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'AI Workflows',
    imageUrl: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Digital Systems',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop',
  },
];

interface AccordionItemProps {
  item: typeof accordionItems[0];
  isActive: boolean;
  onMouseEnter: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`relative h-[420px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${isActive ? 'w-[360px]' : 'w-[60px]'}`}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800';
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <span
        className={`absolute text-white text-base font-bold whitespace-nowrap transition-all duration-300 ease-in-out ${
          isActive
            ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
            : 'bottom-20 left-1/2 -translate-x-1/2 rotate-90'
        }`}
      >
        {item.title}
      </span>
    </div>
  );
};

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(4);

  return (
    <div className="bg-[#F4F7FC]">
      <section className="container mx-auto px-5 py-16 sm:py-24 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-600">What we build</span>
            <h2 className="mt-3 text-[clamp(2.2rem,5vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#0B1020]">
              Five studios.<br />One focused team.
            </h2>
            <p className="mt-6 text-sm leading-7 text-slate-600 max-w-xl mx-auto lg:mx-0 sm:text-base">
              From conversion-led websites to multi-tenant SaaS platforms, AI workflow automation, growth-focused digital marketing, and custom operational systems — every engagement is founder-led.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0B1020] text-white font-bold px-7 py-3.5 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 text-sm"
              >
                Start a project
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-2">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
