'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { getEnrichedCertifications, PATHWAYS } from '@/data/academyData';
import { EnrichedCertification, PathwayKey } from '@/types/academy';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Layers,
  GraduationCap
} from 'lucide-react';

export default function Section12Certifications() {
  const { currentPathway, openModal } = usePathway();
  const allCertifications = getEnrichedCertifications();

  const [selectedPathwayFilter, setSelectedPathwayFilter] = useState<PathwayKey | 'all'>(currentPathway);
  const [activeCert, setActiveCert] = useState<EnrichedCertification | null>(null);

  React.useEffect(() => {
    setSelectedPathwayFilter(currentPathway);
  }, [currentPathway]);

  const filteredCerts = allCertifications.filter((c) =>
    selectedPathwayFilter === 'all' ? true : c.pathway === selectedPathwayFilter
  );

  return (
    <section id="certifications" className="py-20 lg:py-28 bg-white border-t border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/5 border border-[#1D3557]/15 text-xs font-semibold text-[#1D3557] mb-3">
              <Award className="w-3.5 h-3.5 text-[#D4A373]" />
              <span className="uppercase tracking-wider">Section 12</span>
              <span className="text-gray-300">·</span>
              <span className="text-[#457B9D]">Academic Credentials</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1D3557] tracking-tight">
              Recognized{' '}
              <span className="font-editorial italic font-normal text-[#D4A373]">
                Certifications.
              </span>
            </h2>

            <p className="mt-4 text-base text-[#1D3557]/75 font-sans leading-relaxed">
              Every milestone completed at Eduvanta yields an accredited digital credential.
              These honors provide verifiable proof of intellectual capability for DSA-Sec, DSA-JC, Common App, and UCAS dossiers.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>20 Nationally & Globally Recognized Academic Honors</span>
          </div>
        </div>

        {/* Pathway Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#E5E5E5] scrollbar-none">
          <button
            onClick={() => setSelectedPathwayFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedPathwayFilter === 'all'
                ? 'bg-[#1D3557] text-white shadow-xs'
                : 'bg-[#F8F7F4] text-[#1D3557]/70 hover:bg-gray-100 hover:text-[#1D3557]'
            }`}
          >
            All Credentials (20)
          </button>
          {(['psle', 'olevel', 'alevel', 'ib', 'igcse', 'skills'] as PathwayKey[]).map((k) => (
            <button
              key={k}
              onClick={() => setSelectedPathwayFilter(k)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedPathwayFilter === k
                  ? 'bg-[#1D3557] text-white shadow-xs'
                  : 'bg-[#F8F7F4] text-[#1D3557]/70 hover:bg-gray-100 hover:text-[#1D3557]'
              }`}
            >
              {PATHWAYS[k].name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Certification Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <motion.div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="academic-card rounded-2xl p-6 bg-[#F8F7F4] hover:bg-white border border-[#E5E5E5] hover:border-[#D4A373] transition-all cursor-pointer shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-bold text-[#457B9D] uppercase mb-3">
                  <span className="font-mono text-gray-500">{cert.id}</span>
                  <span className="bg-white px-2 py-0.5 rounded border border-gray-200">
                    {cert.academicRigor}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-[#1D3557] leading-snug mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs text-gray-600 font-sans line-clamp-2 mb-4">
                  {cert.accreditation}
                </p>

                {/* Competency bullets */}
                <div className="space-y-1 text-[11px] text-gray-700 mb-4">
                  {cert.competencies.slice(0, 2).map((comp, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 truncate">
                      <CheckCircle2 className="w-3 h-3 text-[#D4A373] shrink-0 mt-0.5" />
                      <span className="truncate">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200/80">
                <div className="text-[11px] text-[#457B9D] font-medium flex items-center justify-between">
                  <span>Prereqs: {cert.prerequisiteCourseIds.join(', ')}</span>
                  <span className="font-semibold text-[#1D3557] flex items-center gap-0.5">
                    Inspect
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Inspection Modal */}
        <AnimatePresence>
          {activeCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
              onClick={() => setActiveCert(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5E5] relative"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#457B9D] block">
                      Accredited Credential · {activeCert.id}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-[#1D3557]">
                      {activeCert.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveCert(null)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-black cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E5] mb-5 text-xs space-y-2">
                  <div>
                    <span className="text-gray-400 text-[10px] uppercase font-bold block">Issuing Body</span>
                    <span className="font-semibold text-[#1D3557]">{activeCert.issuer}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] uppercase font-bold block">Accreditation Standard</span>
                    <span className="font-medium text-[#457B9D]">{activeCert.accreditation}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#1D3557] mb-2">
                      Conferred Competency Rubric
                    </h5>
                    <ul className="space-y-1.5">
                      {activeCert.competencies.map((comp, i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F4E1C1]/20 border border-[#D4A373]/30 text-xs">
                    <span className="font-bold text-[#1D3557] block mb-1">Portfolio & Admission Impact:</span>
                    <span className="text-gray-700 leading-relaxed font-sans">{activeCert.portfolioValue}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const certId = activeCert.id;
                    setActiveCert(null);
                    openModal('trial-booking', { pathway: activeCert.pathway });
                  }}
                  className="w-full py-3 rounded-xl bg-[#1D3557] text-white hover:bg-[#152740] font-heading font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-[#F4E1C1]" />
                  <span>Enroll in Prerequisite Journey Tracks</span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
