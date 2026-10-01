'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { PATHWAYS, getCertificationsByPathway } from '@/data/academyData';
import { PathwayKey } from '@/types/academy';
import {
  Compass,
  ArrowRight,
  Sparkles,
  Award,
  Layers,
  CheckCircle2,
  Clock,
  BookOpen,
  ChevronRight,
  TrendingUp,
  GraduationCap
} from 'lucide-react';

export default function Section2LearningPathways() {
  const { currentPathway, setPathway, openModal } = usePathway();
  const [selectedPathwayTab, setSelectedPathwayTab] = useState<PathwayKey>(currentPathway);

  // Sync if global pathway changes
  React.useEffect(() => {
    setSelectedPathwayTab(currentPathway);
  }, [currentPathway]);

  const pathwayKeys: PathwayKey[] = ['psle', 'olevel', 'alevel', 'ib', 'igcse', 'skills'];
  const activePathway = PATHWAYS[selectedPathwayTab];
  const certifications = getCertificationsByPathway(selectedPathwayTab);

  return (
    <section id="learning-pathways" className="py-20 lg:py-28 bg-white border-t border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/5 border border-[#1D3557]/15 text-xs font-semibold text-[#1D3557] mb-3">
              <Layers className="w-3.5 h-3.5 text-[#D4A373]" />
              <span className="uppercase tracking-wider">Section 02</span>
              <span className="text-gray-300">·</span>
              <span className="text-[#457B9D]">Academic Architecture</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1D3557] tracking-tight">
              Learning{' '}
              <span className="font-editorial italic font-normal text-[#D4A373]">
                Pathways.
              </span>
            </h2>

            <p className="mt-4 text-base text-[#1D3557]/75 font-sans leading-relaxed">
              Explore the six distinct academic pathways engineered for Singapore students.
              Every journey connects starting cognitive baselines to accredited milestones and world-class outcomes.
            </p>
          </div>

          {/* Quick Stats or Pathway Switch Button */}
          <button
            onClick={() => {
              setPathway(selectedPathwayTab);
              const el = document.getElementById('journey-builder');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#1D3557] text-[#F8F7F4] hover:bg-[#152740] font-heading font-semibold text-xs transition-all shadow-xs cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-[#F4E1C1]" />
            <span>Set As Active ({activePathway.name.split(' ')[0]})</span>
            <ChevronRight className="w-4 h-4 text-[#D4A373] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Pathway Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#E5E5E5] scrollbar-none">
          {pathwayKeys.map((key) => {
            const p = PATHWAYS[key];
            const isSelected = selectedPathwayTab === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setSelectedPathwayTab(key);
                  setPathway(key);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#1D3557] text-white shadow-xs'
                    : 'bg-[#F8F7F4] text-[#1D3557]/75 hover:bg-gray-100 hover:text-[#1D3557]'
                }`}
              >
                <span>{p.name}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-[#F4E1C1]' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {p.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Visual Roadmap Card for Active Pathway */}
        <div className="academic-card rounded-3xl p-6 sm:p-10 bg-[#F8F7F4] border border-[#E5E5E5] relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4E1C1]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Top Banner: Title & Metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-[#E5E5E5] mb-8">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#457B9D] mb-2">
                <span>{activePathway.targetAge}</span>
                <span>•</span>
                <span>{activePathway.duration}</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1D3557]">
                {activePathway.name}
              </h3>
              <p className="font-editorial italic text-lg sm:text-xl text-[#D4A373] mt-1">
                "{activePathway.tagline}"
              </p>
              <p className="text-sm text-[#1D3557]/80 mt-3 max-w-2xl leading-relaxed">
                {activePathway.description}
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-[#E5E5E5] space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                Official Examination / Target Benchmark
              </span>
              <div className="font-heading font-bold text-sm text-[#1D3557]">
                {activePathway.nationalExam}
              </div>
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-[#457B9D]">
                <span>Rigor Level:</span>
                <span className="font-bold text-[#1D3557]">Distinction Tier</span>
              </div>
            </div>
          </div>

          {/* 4-Column Visual Pathway Roadmap */}
          <div className="mb-10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D3557]/70 mb-5 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-[#D4A373]" />
              Architectural Roadmap & Progression Milestones
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activePathway.milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-[#E5E5E5] relative shadow-xs flex flex-col justify-between"
                >
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-6 h-6 rounded-full bg-[#1D3557] text-[#F4E1C1] text-xs font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span className="text-[10px] font-semibold text-[#D4A373] bg-[#F4E1C1]/20 px-2 py-0.5 rounded border border-[#D4A373]/30">
                        {milestone.checkpoint}
                      </span>
                    </div>
                    <div className="font-heading font-bold text-sm text-[#1D3557] mb-1.5">
                      {milestone.stage}
                    </div>
                    <p className="text-xs text-[#1D3557]/70 leading-relaxed font-sans">
                      {milestone.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 text-[11px] text-[#2A9D8F] font-medium flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>{milestone.expectedOutcome}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Grid: Targeted Outcomes & Linked Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Target Goals */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
              <h4 className="font-heading font-bold text-sm text-[#1D3557] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4A373]" />
                Primary Academic Outcomes
              </h4>
              <ul className="space-y-2.5">
                {activePathway.targetGoals.map((goal, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#1D3557]/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373] mt-1.5 shrink-0" />
                    <span className="font-medium">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Linked Certifications from Dataset */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E5E5]">
              <h4 className="font-heading font-bold text-sm text-[#1D3557] mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#1D3557]" />
                Conferred Digital Certifications & Portfolios
              </h4>
              <div className="space-y-3">
                {certifications.slice(0, 2).map((cert) => (
                  <div key={cert.id} className="p-3 rounded-xl bg-[#F8F7F4] border border-[#E5E5E5]">
                    <div className="flex items-center justify-between text-[10px] font-bold text-[#457B9D] uppercase mb-1">
                      <span>{cert.id}</span>
                      <span>{cert.academicRigor}</span>
                    </div>
                    <div className="font-heading font-semibold text-xs text-[#1D3557] mb-1">
                      {cert.title}
                    </div>
                    <div className="text-[11px] text-gray-500 line-clamp-2">
                      {cert.portfolioValue}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
