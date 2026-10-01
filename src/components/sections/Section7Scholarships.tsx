'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { SCHOLARSHIPS_DATA } from '@/data/academyData';
import { EnrichedScholarship } from '@/types/academy';
import {
  Award,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Coins,
  FileCheck,
  ChevronRight
} from 'lucide-react';

export default function Section7Scholarships() {
  const { currentPathway, openModal } = usePathway();
  const [selectedScholarship, setSelectedScholarship] = useState<EnrichedScholarship>(SCHOLARSHIPS_DATA[0]);

  return (
    <section id="scholarships" className="py-20 lg:py-28 bg-[#F8F7F4] border-t border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/5 border border-[#1D3557]/15 text-xs font-semibold text-[#1D3557] mb-3">
            <Award className="w-3.5 h-3.5 text-[#D4A373]" />
            <span className="uppercase tracking-wider">Section 07</span>
            <span className="text-gray-300">·</span>
            <span className="text-[#457B9D]">Opportunity Pathways</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1D3557] tracking-tight">
            Scholarship{' '}
            <span className="font-editorial italic font-normal text-[#D4A373]">
              Opportunities.
            </span>
          </h2>

          <p className="mt-4 text-base text-[#1D3557]/75 font-sans leading-relaxed">
            Intellectual brilliance should never be constrained by financial means. Eduvanta Academy
            awards merit fellowships and need-based bursaries to cultivate Singapore's most promising minds.
          </p>
        </div>

        {/* Scholarships Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Scholarship List (Left 5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {SCHOLARSHIPS_DATA.map((scholarship) => {
              const isSelected = selectedScholarship.id === scholarship.id;
              return (
                <div
                  key={scholarship.id}
                  onClick={() => setSelectedScholarship(scholarship)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#D4A373] shadow-md ring-1 ring-[#D4A373]/30'
                      : 'bg-white/70 border-[#E5E5E5] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#457B9D] mb-1">
                    <span>{scholarship.academicAward}</span>
                    <span className="text-[#D4A373]">{scholarship.grantValueSGD}</span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#1D3557] mb-1">
                    {scholarship.title}
                  </h3>

                  <p className="text-xs text-[#1D3557]/75 font-sans line-clamp-1 mb-2">
                    {scholarship.coverage}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-gray-500 pt-2 border-t border-gray-100">
                    <span>Tenure: {scholarship.tenure.split('(')[0]}</span>
                    <span className="text-[#457B9D] font-medium flex items-center gap-0.5">
                      View details
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Scholarship Deep-Dive (Right 7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedScholarship.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="academic-card rounded-3xl p-6 sm:p-8 bg-white border border-[#E5E5E5] shadow-lg relative overflow-hidden"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#457B9D] block">
                      Fellowship Dossier
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl text-[#1D3557]">
                      {selectedScholarship.title}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F4E1C1]/40 border border-[#D4A373]/30 text-[#1D3557]">
                    {selectedScholarship.grantValueSGD}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E5] mb-6 text-xs text-[#1D3557]">
                  <span className="text-gray-500 font-semibold block mb-0.5">Coverage Scope:</span>
                  <span className="font-bold text-sm text-[#1D3557]">{selectedScholarship.coverage}</span>
                </div>

                {/* Eligibility Criteria */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D3557] mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A373]" />
                    Eligibility Criteria Checklist
                  </h4>
                  <ul className="space-y-2">
                    {selectedScholarship.eligibilityCriteria.map((crit, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2.5 text-xs text-[#1D3557]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1D3557] mt-1.5 shrink-0" />
                        <span>{crit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Selection Process */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D3557] mb-3 flex items-center gap-1.5">
                    <FileCheck className="w-4 h-4 text-[#457B9D]" />
                    Adjudication & Selection Rounds
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedScholarship.selectionProcess.map((proc, pIdx) => (
                      <div key={pIdx} className="p-2.5 rounded-xl bg-[#F8F7F4] border border-[#E5E5E5] flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-[#1D3557] text-[#F4E1C1] text-[10px] font-bold flex items-center justify-center shrink-0">
                          {pIdx + 1}
                        </span>
                        <span className="truncate">{proc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-xs text-gray-500">
                    <span className="block font-semibold text-[#D4A373]">{selectedScholarship.deadline}</span>
                    <span>Tenure: {selectedScholarship.tenure}</span>
                  </div>

                  <button
                    onClick={() => openModal('admission-intake', {
                      pathway: currentPathway,
                      scholarship: selectedScholarship.title
                    })}
                    className="py-3 px-6 rounded-xl bg-[#1D3557] text-white hover:bg-[#152740] font-heading font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#F4E1C1]" />
                    <span>Apply for Fellowship Grant</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
