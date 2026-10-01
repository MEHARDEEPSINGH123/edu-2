'use client';

import React from 'react';
import { usePathway } from '@/context/PathwayContext';
import { PATHWAYS, getEnrichedCampuses } from '@/data/academyData';
import { PathwayKey } from '@/types/academy';
import { Compass, MapPin, ShieldCheck, Mail, Phone, ArrowUp } from 'lucide-react';
import { scrollToId, scrollToTop as smoothScrollToTop } from '@/lib/scroll';

export default function AcademicFooter() {
  const { setPathway } = usePathway();
  const campuses = getEnrichedCampuses();

  const scrollToTop = () => {
    smoothScrollToTop();
  };

  const scrollTo = (id: string) => {
    scrollToId(id, -85);
  };

  return (
    <footer className="bg-[#152740] text-gray-300 pt-16 pb-12 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1D3557] flex items-center justify-center text-[#F4E1C1] border border-white/20">
                <Compass className="w-5 h-5 text-[#D4A373]" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white block leading-none">
                  Eduvanta <span className="font-editorial italic font-normal text-[#D4A373]">Academy</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#457B9D] block mt-0.5">
                  Academic Journey Platform
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Singapore’s premier academic success platform. Dedicated to engineering unambiguous
              milestone trajectories across PSLE, GCE O-Level, A-Level, IBDP, IGCSE, and Pre-University Research.
            </p>

            <div className="text-xs text-gray-400 space-y-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>directorate@eduvanta.edu.sg</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>+65 6832 9000 (Central Academic Concierge)</span>
              </div>
            </div>
          </div>

          {/* Academic Pathways Col (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Academic Pathways
            </h4>
            <ul className="space-y-2 text-xs">
              {(['psle', 'olevel', 'alevel', 'ib', 'igcse', 'skills'] as PathwayKey[]).map((k) => (
                <li key={k}>
                  <button
                    onClick={() => {
                      setPathway(k);
                      scrollTo('journey-builder');
                    }}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {PATHWAYS[k].name} ({PATHWAYS[k].badge})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Singapore Sanctuaries Directory Col (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Singapore Sanctuaries
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400">
              {campuses.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => scrollTo('campus-experience')}
                    className="hover:text-white transition-colors cursor-pointer text-left truncate block max-w-full"
                  >
                    {c.name} · {c.district.split('&')[0]}
                  </button>
                </li>
              ))}
              <li className="text-[11px] text-[#D4A373]">
                + 4 Additional Regional Sanctuaries
              </li>
            </ul>
          </div>

          {/* Governance & Back to top (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo('journey-builder')} className="hover:text-white transition-colors cursor-pointer">
                  Journey Builder
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('course-discovery')} className="hover:text-white transition-colors cursor-pointer">
                  Course Discovery
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('trial-classes')} className="hover:text-white transition-colors cursor-pointer">
                  Trial Classes
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('admission-studio')} className="hover:text-white transition-colors cursor-pointer">
                  Admission Studio
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('scholarships')} className="hover:text-white transition-colors cursor-pointer">
                  Scholarships
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('parent-resource-centre')} className="hover:text-white transition-colors cursor-pointer">
                  Parent Resource Centre
                </button>
              </li>
            </ul>

            <button
              onClick={scrollToTop}
              className="mt-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 text-xs transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Legal & Accreditation Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>
            © {new Date().getFullYear()} Eduvanta Academy (Singapore) Pte Ltd. All rights reserved.
            Registered Educational Institution.
          </p>
          <div className="flex items-center gap-4">
            <span>MOE Curriculum Aligned</span>
            <span>•</span>
            <span>Cambridge International Benchmark</span>
            <span>•</span>
            <span>IBDP Recognized Framework</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
