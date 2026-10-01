'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { Compass, Sparkles, ArrowRight, Calendar, ShieldCheck, MapPin } from 'lucide-react';
import { scrollToId } from '@/lib/scroll';

export default function Section13FinalCTA() {
  const { currentPathway, openModal } = usePathway();

  const scrollToBuilder = () => {
    scrollToId('journey-builder', -85);
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center py-24 bg-[#1D3557] text-white overflow-hidden border-t border-[#1D3557]">
      
      {/* Background glow and subtle dot matrix */}
      <div className="absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#457B9D]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle Brand Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#F4E1C1] mb-6 backdrop-blur-xs"
        >
          <Compass className="w-4 h-4 text-[#D4A373] animate-spin-slow" />
          <span className="uppercase tracking-widest text-[11px]">Eduvanta Academy · Singapore</span>
        </motion.div>

        {/* Master Headline (Exact Requirement) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white"
        >
          Your Future Starts{' '}
          <span className="font-editorial italic font-normal text-[#F4E1C1] block sm:inline">
            With A Plan.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Stop browsing tuition classes. Begin engineering your academic future.
          Synthesize an accredited roadmap across PSLE, O-Level, A-Level, IBDP, or Advanced Research.
        </motion.p>

        {/* Action Button (Exact Requirement) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToBuilder}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#D4A373] text-[#1D3557] hover:bg-[#F4E1C1] font-heading font-bold text-sm sm:text-base transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <Sparkles className="w-5 h-5 text-[#1D3557] group-hover:rotate-12 transition-transform" />
            <span>Start Your Academic Journey</span>
            <ArrowRight className="w-5 h-5 text-[#1D3557] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => openModal('trial-booking', { pathway: currentPathway })}
            className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-heading font-semibold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer backdrop-blur-xs"
          >
            <Calendar className="w-4 h-4 text-[#F4E1C1]" />
            <span>Book Diagnostic Assessment</span>
          </button>
        </motion.div>

        {/* Quality Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs text-gray-400"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2A9D8F]" />
            <span>MOE & Cambridge Curriculum Alignment</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#D4A373]" />
            <span>10 Singapore Campus Sanctuaries</span>
          </div>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#F4E1C1]" />
            <span>Strict 1:6 to 1:10 Scholar-Faculty Ratios</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
