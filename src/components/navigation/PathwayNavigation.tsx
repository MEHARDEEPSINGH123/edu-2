'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { PathwayKey } from '@/types/academy';
import { PATHWAYS } from '@/data/academyData';
import {
  Compass,
  Sparkles,
  Calendar,
  Layers,
  ChevronRight,
  ShieldCheck,
  X,
  Menu,
  GraduationCap
} from 'lucide-react';
import { scrollToId, scrollToTop } from '@/lib/scroll';

const PATHWAY_ITEMS: { key: PathwayKey; label: string; sub: string }[] = [
  { key: 'psle', label: 'PSLE', sub: 'Primary 5–6' },
  { key: 'olevel', label: 'O-Level', sub: 'Sec 3–4' },
  { key: 'alevel', label: 'A-Level', sub: 'JC 1–2' },
  { key: 'ib', label: 'IBDP', sub: 'Year 1–2' },
  { key: 'igcse', label: 'IGCSE', sub: 'Grades 9–10' },
  { key: 'skills', label: 'Pre-Uni & Skills', sub: 'Scholars' }
];

export default function PathwayNavigation() {
  const { currentPathway, setPathway, openModal } = usePathway();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<PathwayKey | null>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 25);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeInfo = PATHWAYS[currentPathway];

  const scrollTo = (id: string) => {
    scrollToId(id, -85);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-2.5 bg-[#F8F7F4]/92 backdrop-blur-md shadow-xs border-b border-[#E5E5E5]'
            : 'py-3.5 bg-[#F8F7F4]/70 backdrop-blur-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            
            {/* Brand Identity */}
            <div
              className="flex items-center gap-2.5 cursor-pointer select-none shrink-0 group"
              onClick={() => scrollToTop()}
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1D3557] flex items-center justify-center text-[#F4E1C1] shadow-xs border border-[#1D3557]/20 group-hover:scale-105 transition-transform duration-300">
                <Compass className="w-5 h-5 text-[#D4A373] group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <div>
                <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-[#1D3557] block leading-none">
                  Eduvanta <span className="font-editorial italic font-normal text-[#D4A373]">Academy</span>
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-semibold text-[#457B9D] block mt-0.5">
                  Academic Journey Platform
                </span>
              </div>
            </div>

            {/* Academic Pathway Navigation Dock (Linear/Apple/Stripe style) */}
            <nav
              onMouseLeave={() => setHoveredTab(null)}
              className="hidden lg:flex items-center p-1 rounded-full bg-white/90 border border-[#E5E5E5] shadow-xs backdrop-blur-md relative"
            >
              {PATHWAY_ITEMS.map((item) => {
                const isActive = currentPathway === item.key;
                const isHovered = hoveredTab === item.key;

                return (
                  <button
                    key={item.key}
                    onClick={() => setPathway(item.key)}
                    onMouseEnter={() => setHoveredTab(item.key)}
                    className="relative px-3.5 py-1.5 rounded-full cursor-pointer select-none text-left flex flex-col items-center justify-center focus:outline-none"
                    style={{ minWidth: '82px' }}
                  >
                    {/* Hover indicator pill */}
                    {isHovered && !isActive && (
                      <motion.div
                        layoutId="navHoverPill"
                        className="absolute inset-0 bg-[#1D3557]/5 rounded-full"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}

                    {/* Active pathway pill with smooth spring */}
                    {isActive && (
                      <motion.div
                        layoutId="activePathwayPill"
                        className="absolute inset-0 bg-[#1D3557] rounded-full shadow-sm"
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 30
                        }}
                      />
                    )}

                    {/* Label */}
                    <span
                      className={`relative z-10 font-heading font-bold text-xs tracking-tight transition-colors duration-200 ${
                        isActive
                          ? 'text-white'
                          : 'text-[#1D3557]/80 hover:text-[#1D3557]'
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Sub-label */}
                    <span
                      className={`relative z-10 text-[9px] leading-tight mt-0.5 tracking-tight transition-colors duration-200 ${
                        isActive
                          ? 'text-[#F4E1C1]'
                          : 'text-gray-400'
                      }`}
                    >
                      {item.sub}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Quick Action Bar */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <button
                onClick={() => openModal('trial-booking', { pathway: currentPathway })}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white text-[#1D3557] border border-[#E5E5E5] hover:border-[#D4A373] hover:text-[#1D3557] transition-all shadow-2xs cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>Diagnostic Trial</span>
              </button>

              <button
                onClick={() => scrollTo('journey-builder')}
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold bg-[#1D3557] text-[#F8F7F4] hover:bg-[#152740] transition-all shadow-xs cursor-pointer group"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F4E1C1] group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline">Design Pathway</span>
                <span className="sm:hidden">Roadmap</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#D4A373] group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-white border border-[#E5E5E5] text-[#1D3557] cursor-pointer"
                aria-label="Toggle Pathways"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#1D3557]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#1D3557]" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Dynamic Context Ribbon with Animated Transition on Pathway Change */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPathway}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="flex items-center justify-between py-1 px-3 sm:px-3.5 rounded-lg bg-[#F4E1C1]/25 border border-[#D4A373]/25 text-[11px] text-[#1D3557]"
            >
              <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="font-bold text-[#1D3557]">{activeInfo.name}</span>
                <span className="hidden md:inline text-gray-300">·</span>
                <span className="hidden md:inline text-[#457B9D] italic font-editorial text-xs">{activeInfo.tagline}</span>
              </div>

              <div className="flex items-center gap-3 shrink-0 text-[10px] font-semibold text-[#1D3557]/80">
                <button
                  onClick={() => scrollTo('journey-builder')}
                  className="hover:text-[#1D3557] transition-colors cursor-pointer hidden sm:inline"
                >
                  Builder
                </button>
                <button
                  onClick={() => scrollTo('course-discovery')}
                  className="hover:text-[#1D3557] transition-colors cursor-pointer hidden sm:inline"
                >
                  Journeys
                </button>
                <button
                  onClick={() => scrollTo('campus-experience')}
                  className="hover:text-[#1D3557] transition-colors cursor-pointer hidden sm:inline"
                >
                  Sanctuaries
                </button>
                <button
                  onClick={() => scrollTo('admission-studio')}
                  className="text-[#457B9D] hover:text-[#1D3557] transition-colors cursor-pointer flex items-center gap-0.5"
                >
                  <span>Intake</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Pathways Drawer with Staggered Animation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="lg:hidden border-b border-[#E5E5E5] bg-white/98 backdrop-blur-xl px-4 py-4 shadow-xl overflow-hidden mt-2"
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#457B9D] mb-2.5">
                Switch Academic Pathway:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {PATHWAY_ITEMS.map((item) => {
                  const isActive = currentPathway === item.key;
                  return (
                    <button
                      key={item.key}
                      onClick={() => {
                        setPathway(item.key);
                        setMobileMenuOpen(false);
                      }}
                      className={`p-3 rounded-xl text-left transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#1D3557] text-white shadow-xs'
                          : 'bg-[#F8F7F4] text-[#1D3557] hover:bg-[#F4E1C1]/30 border border-gray-200/60'
                      }`}
                    >
                      <div className="font-heading font-bold text-xs">{item.label}</div>
                      <div className={`text-[10px] mt-0.5 ${isActive ? 'text-[#F4E1C1]' : 'text-gray-500'}`}>
                        {item.sub}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    openModal('trial-booking', { pathway: currentPathway });
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 text-xs font-semibold text-center rounded-xl bg-[#1D3557] text-white cursor-pointer"
                >
                  Book Diagnostic Session ({PATHWAYS[currentPathway].name.split(' ')[0]})
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Spacer to prevent layout shift */}
      <div className="h-24 sm:h-28" />
    </>
  );
}
