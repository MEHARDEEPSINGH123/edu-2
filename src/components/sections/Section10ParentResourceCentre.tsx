'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { PARENT_RESOURCES_DATA } from '@/data/academyData';
import { EnrichedParentResource } from '@/types/academy';
import {
  BookOpen,
  Sparkles,
  Download,
  FileText,
  Calculator,
  Compass,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function Section10ParentResourceCentre() {
  const { openModal } = usePathway();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeResource, setActiveResource] = useState<EnrichedParentResource>(PARENT_RESOURCES_DATA[0]);

  // Interactive JAE L1R5 Calculator State
  const [langGrade, setLangGrade] = useState<number>(1);
  const [mathGrade, setMathGrade] = useState<number>(1);
  const [sciGrade, setSciGrade] = useState<number>(1);
  const [humGrade, setHumGrade] = useState<number>(1);
  const [sub5Grade, setSub5Grade] = useState<number>(1);
  const [sub6Grade, setSub6Grade] = useState<number>(1);
  const [ccaBonus, setCcaBonus] = useState<number>(2);

  const rawL1R5 = langGrade + mathGrade + sciGrade + humGrade + sub5Grade + sub6Grade;
  const netL1R5 = Math.max(2, rawL1R5 - ccaBonus);

  const categories = ['All', 'Syllabus Changes', 'Scoring Guides', 'Exam Strategy', 'University Pathways', 'Parental Support'];

  const filteredResources = PARENT_RESOURCES_DATA.filter((r) =>
    selectedCategory === 'All' ? true : r.category === selectedCategory
  );

  return (
    <section id="parent-resource-centre" className="py-20 lg:py-28 bg-white border-t border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/5 border border-[#1D3557]/15 text-xs font-semibold text-[#1D3557] mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#D4A373]" />
              <span className="uppercase tracking-wider">Section 10</span>
              <span className="text-gray-300">·</span>
              <span className="text-[#457B9D]">Parent Advisory Wing</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1D3557] tracking-tight">
              Parent Resource{' '}
              <span className="font-editorial italic font-normal text-[#D4A373]">
                Centre.
              </span>
            </h2>

            <p className="mt-4 text-base text-[#1D3557]/75 font-sans leading-relaxed">
              Navigating the Singapore academic landscape requires clarity, data, and foresight.
              We provide parents with executive syllabus briefings, scoring simulators, and university roadmaps.
            </p>
          </div>

          <button
            onClick={() => openModal('trial-booking', { parentConsultation: true })}
            className="py-3 px-5 rounded-xl bg-[#1D3557] text-white hover:bg-[#152740] font-heading font-semibold text-xs transition-colors flex items-center gap-2 shadow-xs cursor-pointer shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F4E1C1]" />
            <span>Book Private Parent Strategic Consultation</span>
          </button>
        </div>

        {/* Two-Column Layout: Guides & Interactive Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Guides Library (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#1D3557] text-white shadow-xs'
                      : 'bg-[#F8F7F4] text-[#1D3557]/70 hover:bg-gray-100 hover:text-[#1D3557]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Guides List */}
            <div className="space-y-3">
              {filteredResources.map((res) => {
                const isSelected = activeResource.id === res.id;
                return (
                  <div
                    key={res.id}
                    onClick={() => setActiveResource(res)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#F8F7F4] border-[#D4A373] shadow-xs ring-1 ring-[#D4A373]/20'
                        : 'bg-white border-[#E5E5E5] hover:bg-[#F8F7F4]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase text-[#457B9D] mb-1.5">
                      <span>{res.category}</span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Clock className="w-3 h-3 text-[#D4A373]" />
                        {res.readTime}
                      </span>
                    </div>

                    <h4 className="font-heading font-bold text-base text-[#1D3557] mb-2 leading-snug">
                      {res.title}
                    </h4>

                    <p className="text-xs text-[#1D3557]/75 font-sans line-clamp-2 mb-3 leading-relaxed">
                      {res.summary}
                    </p>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-200/60 text-xs">
                      <span className="text-gray-500 text-[11px] font-medium">{res.downloadableType}</span>
                      <span className="text-[#1D3557] font-semibold flex items-center gap-1 hover:text-[#D4A373] transition-colors">
                        Read Insights
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Interactive JAE L1R5 Calculator Tool (5 cols) */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="academic-card rounded-3xl p-6 sm:p-7 bg-[#F8F7F4] border border-[#E5E5E5] shadow-lg">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#457B9D] block">
                    Interactive Parent Tool
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-[#1D3557]">
                    JAE L1R5 Optimization Calculator
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1D3557] shadow-xs">
                  <Calculator className="w-4 h-4 text-[#D4A373]" />
                </div>
              </div>

              <p className="text-xs text-[#1D3557]/75 font-sans mb-4 leading-relaxed">
                Estimate your child's cut-off eligibility for Singapore Junior Colleges. Adjust subject grade bands below:
              </p>

              <div className="grid grid-cols-2 gap-3 mb-5">
                <div>
                  <label className="text-[10px] font-bold text-gray-500 block mb-1">Language (L1)</label>
                  <select
                    value={langGrade}
                    onChange={(e) => setLangGrade(Number(e.target.value))}
                    className="w-full p-2 rounded-lg bg-white border border-[#E5E5E5] text-xs font-semibold text-[#1D3557]"
                  >
                    {[1, 2, 3, 4, 5, 6].map(g => <option key={g} value={g}>Grade A{g === 1 ? '1' : g === 2 ? '2' : `B${g}`}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-500 block mb-1">Mathematics (R1)</label>
                  <select
                    value={mathGrade}
                    onChange={(e) => setMathGrade(Number(e.target.value))}
                    className="w-full p-2 rounded-lg bg-white border border-[#E5E5E5] text-xs font-semibold text-[#1D3557]"
                  >
                    {[1, 2, 3, 4, 5, 6].map(g => <option key={g} value={g}>Grade A{g === 1 ? '1' : g === 2 ? '2' : `B${g}`}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-500 block mb-1">Pure Science (R2)</label>
                  <select
                    value={sciGrade}
                    onChange={(e) => setSciGrade(Number(e.target.value))}
                    className="w-full p-2 rounded-lg bg-white border border-[#E5E5E5] text-xs font-semibold text-[#1D3557]"
                  >
                    {[1, 2, 3, 4, 5, 6].map(g => <option key={g} value={g}>Grade A{g === 1 ? '1' : g === 2 ? '2' : `B${g}`}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-500 block mb-1">Humanities (R3)</label>
                  <select
                    value={humGrade}
                    onChange={(e) => setHumGrade(Number(e.target.value))}
                    className="w-full p-2 rounded-lg bg-white border border-[#E5E5E5] text-xs font-semibold text-[#1D3557]"
                  >
                    {[1, 2, 3, 4, 5, 6].map(g => <option key={g} value={g}>Grade A{g === 1 ? '1' : g === 2 ? '2' : `B${g}`}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-500 block mb-1">Relevant Sub 5 (R4)</label>
                  <select
                    value={sub5Grade}
                    onChange={(e) => setSub5Grade(Number(e.target.value))}
                    className="w-full p-2 rounded-lg bg-white border border-[#E5E5E5] text-xs font-semibold text-[#1D3557]"
                  >
                    {[1, 2, 3, 4, 5, 6].map(g => <option key={g} value={g}>Grade A{g === 1 ? '1' : g === 2 ? '2' : `B${g}`}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-gray-500 block mb-1">Relevant Sub 6 (R5)</label>
                  <select
                    value={sub6Grade}
                    onChange={(e) => setSub6Grade(Number(e.target.value))}
                    className="w-full p-2 rounded-lg bg-white border border-[#E5E5E5] text-xs font-semibold text-[#1D3557]"
                  >
                    {[1, 2, 3, 4, 5, 6].map(g => <option key={g} value={g}>Grade A{g === 1 ? '1' : g === 2 ? '2' : `B${g}`}</option>)}
                  </select>
                </div>
              </div>

              {/* Bonus Points */}
              <div className="mb-5 p-3 rounded-xl bg-white border border-[#E5E5E5]">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-semibold text-[#1D3557]">CCA & Language Bonus Deductions:</span>
                  <span className="font-bold text-[#D4A373]">-{ccaBonus} Points</span>
                </div>
                <div className="flex items-center gap-2">
                  {[0, 1, 2, 4].map((pts) => (
                    <button
                      key={pts}
                      onClick={() => setCcaBonus(pts)}
                      className={`flex-1 py-1 text-xs rounded border cursor-pointer font-medium ${
                        ccaBonus === pts
                          ? 'bg-[#1D3557] text-white border-[#1D3557]'
                          : 'bg-[#F8F7F4] text-gray-700 border-gray-200'
                      }`}
                    >
                      -{pts} Pts
                    </button>
                  ))}
                </div>
              </div>

              {/* Score Computation Result */}
              <div className="p-4 rounded-2xl bg-white border border-[#E5E5E5] mb-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500">Projected Raw L1R5:</span>
                  <span className="font-mono font-bold text-sm text-[#1D3557]">{rawL1R5}</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-xs font-bold text-[#1D3557]">Net L1R5 Score:</span>
                  <span className="font-heading font-extrabold text-2xl text-[#1D3557]">{netL1R5}</span>
                </div>
                <div className="text-[11px] text-emerald-700 font-semibold mt-2">
                  {netL1R5 <= 6 ? '✓ Qualifies for Raffles Institution / Hwa Chong Institution' :
                   netL1R5 <= 8 ? '✓ Qualifies for Victoria JC / National JC / Anglo-Chinese JC' :
                   '✓ Standard Junior College & Polytechnic Eligibility'}
                </div>
              </div>

              <button
                onClick={() => openModal('trial-booking', { parentConsultation: true })}
                className="w-full py-3 rounded-xl bg-[#1D3557] text-white hover:bg-[#152740] font-heading font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Request Comprehensive Roadmap Report</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4A373]" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
