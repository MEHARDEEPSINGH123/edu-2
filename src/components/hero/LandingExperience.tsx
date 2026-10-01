'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { PATHWAYS } from '@/data/academyData';
import { PathwayKey } from '@/types/academy';
import {
  Compass,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  GraduationCap,
  Target,
  Clock,
  Award,
  ChevronRight,
  TrendingUp,
  MapPin,
  ShieldCheck,
  Building2
} from 'lucide-react';

interface AcademicLevelOption {
  level: string;
  sub: string;
  pathway: PathwayKey;
  defaultGoal: string;
}

const LEVEL_OPTIONS: AcademicLevelOption[] = [
  {
    level: 'Primary 5 – 6',
    sub: 'PSLE Foundation',
    pathway: 'psle',
    defaultGoal: 'PSLE AL1 Score & Top IP School Direct Admission (DSA)'
  },
  {
    level: 'Secondary 3 – 4',
    sub: 'GCE O-Level / IP',
    pathway: 'olevel',
    defaultGoal: 'Raw L1R5 ≤ 6 & Entry into Raffles / Hwa Chong / VJC'
  },
  {
    level: 'Junior College 1 – 2',
    sub: 'GCE A-Level H1/H2/H3',
    pathway: 'alevel',
    defaultGoal: 'Perfect 90 Rank Points & PSC Overseas Merit Scholarship'
  },
  {
    level: 'IB Year 1 – 2',
    sub: 'IB Diploma Programme',
    pathway: 'ib',
    defaultGoal: '44 – 45 Points IB Diploma & Ivy League / Oxbridge Offer'
  },
  {
    level: 'Grade 9 – 10',
    sub: 'Cambridge IGCSE',
    pathway: 'igcse',
    defaultGoal: 'Straight A* (8+ Grade 9s) & Cambridge Learner Distinction'
  },
  {
    level: 'Pre-University',
    sub: 'Scholars & Research',
    pathway: 'skills',
    defaultGoal: 'Published Academic Research Paper & AI Algorithmic Mastery'
  }
];

const GOAL_OPTIONS: Record<PathwayKey, string[]> = {
  psle: [
    'PSLE AL1 Score & Top IP School Direct Admission (DSA)',
    'National Mathematical Olympiad (SMOPS/NMOS) Gold Distinction',
    'Cognitive Bar Model Transcendence & Advanced Science Inquiry',
    'Gifted Education Programme (GEP) Secondary Transition'
  ],
  olevel: [
    'Raw L1R5 ≤ 6 & Entry into Raffles / Hwa Chong / VJC',
    'Double / Triple Pure Sciences Straight Distinctions (A1)',
    'Additional Mathematics Analytical Mechanics Mastery',
    'Junior College DSA-JC Academic Talent Qualification'
  ],
  alevel: [
    'Perfect 90 Rank Points & PSC Overseas Merit Scholarship',
    'Distinction in H3 Specialized University-Level Subjects',
    'Direct Entry to NUS / NTU Yong Loo Lin School of Medicine',
    'Oxford, Cambridge & Ivy League Early Decision Admissions'
  ],
  ib: [
    '44 – 45 Points IB Diploma & Ivy League / Oxbridge Offer',
    'Grade 7 across all 3 Higher Level (HL) Subjects',
    'Perfect 3/3 Core Bonus Points (Grade A Extended Essay & TOK)',
    'Pre-Law & Pre-Medicine Global University Placement'
  ],
  igcse: [
    'Straight A* (8+ Grade 9s) & Cambridge Learner Distinction',
    'Top in Singapore / Top in World Cambridge Outstanding Learner',
    'Foundational Scaffolding for A-Levels & IBDP HL Excellence',
    'Global Academic Fluency & International Transcript Standing'
  ],
  skills: [
    'Published Academic Research Paper & AI Algorithmic Mastery',
    'National Olympiad in Informatics (NOI) Gold & Competitive Code',
    'Quantitative Financial Modeling & Econometric Thesis',
    'Oxbridge Socratic Interview Defense & High-Stakes Poise'
  ]
};

export default function LandingExperience() {
  const { currentPathway, setPathway, targetGoal, setTargetGoal, currentLevel, setCurrentLevel, openModal } = usePathway();

  const selectedLevelOption = LEVEL_OPTIONS.find(o => o.pathway === currentPathway) || LEVEL_OPTIONS[1];
  const activePathwayInfo = PATHWAYS[currentPathway];
  const goalsForPathway = GOAL_OPTIONS[currentPathway] || GOAL_OPTIONS.olevel;

  const handleLevelSelect = (opt: AcademicLevelOption) => {
    setCurrentLevel(opt.level);
    setPathway(opt.pathway);
    setTargetGoal(opt.defaultGoal);
  };

  const handleGoalSelect = (goal: string) => {
    setTargetGoal(goal);
  };

  const scrollToBuilder = () => {
    const el = document.getElementById('journey-builder');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[calc(100vh-7rem)] flex flex-col justify-center py-8 lg:py-16 overflow-hidden bg-academic-grid">
      
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#F4E1C1]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-[32rem] h-[32rem] bg-[#457B9D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Editorial Sub-header Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] text-[11px] font-semibold text-[#1D3557] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#D4A373] animate-ping" />
            <span className="tracking-wide uppercase">Academic Architecture Platform</span>
            <span className="text-gray-300">|</span>
            <span className="text-[#457B9D]">Singapore Focused</span>
          </div>
        </motion.div>

        {/* Hero Title & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#1D3557] leading-[1.08]"
            >
              Design Your{' '}
              <span className="font-editorial italic font-normal text-[#D4A373] block sm:inline">
                Academic Journey.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-base sm:text-lg text-[#1D3557]/80 max-w-2xl leading-relaxed font-sans"
            >
              Education is not a random collection of tuition classes. It is an engineered roadmap.
              Select your current baseline and future ambition — our platform synthesizes an
              unambiguous pathway from foundational schemas to national distinctions.
            </motion.p>

            {/* Quick value badges (editorial, zero tuition clichés) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 text-xs text-[#1D3557]/70"
            >
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#E5E5E5]">
                <ShieldCheck className="w-4 h-4 text-[#2A9D8F]" />
                <span>Cambridge & MOE Aligned Rigor</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#E5E5E5]">
                <Building2 className="w-4 h-4 text-[#D4A373]" />
                <span>10 Singapore Academic Sanctuaries</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-[#E5E5E5]">
                <Award className="w-4 h-4 text-[#1D3557]" />
                <span>1-on-1 Faculty Fellow Mentorship</span>
              </div>
            </motion.div>
          </div>

          {/* Primary Interaction: Fullscreen Academic Journey Designer Box */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="academic-card rounded-2xl p-6 sm:p-7 relative overflow-hidden bg-white shadow-xl border border-[#E5E5E5]"
            >
              {/* Top Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1D3557] via-[#457B9D] to-[#D4A373]" />

              <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#457B9D] block">
                    Interactive Simulator
                  </span>
                  <h3 className="font-heading font-bold text-lg text-[#1D3557]">
                    Student Roadmap Engine
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#F4E1C1]/50 flex items-center justify-center text-[#1D3557]">
                  <Compass className="w-4 h-4 text-[#1D3557]" />
                </div>
              </div>

              {/* Step 1: Current Academic Level */}
              <div className="mb-5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1D3557]/70 mb-2.5">
                  1. Current Academic Baseline
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {LEVEL_OPTIONS.map((opt) => {
                    const isSelected = currentPathway === opt.pathway;
                    return (
                      <button
                        key={opt.pathway}
                        type="button"
                        onClick={() => handleLevelSelect(opt)}
                        className={`p-2.5 rounded-xl text-left transition-all border cursor-pointer ${
                          isSelected
                            ? 'bg-[#1D3557] border-[#1D3557] text-white shadow-sm'
                            : 'bg-[#F8F7F4] border-[#E5E5E5] text-[#1D3557] hover:border-[#D4A373]'
                        }`}
                      >
                        <span className="block font-heading font-semibold text-xs leading-tight">
                          {opt.level}
                        </span>
                        <span
                          className={`block text-[10px] mt-0.5 tracking-tight ${
                            isSelected ? 'text-[#F4E1C1]' : 'text-gray-500'
                          }`}
                        >
                          {opt.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Target Academic Ambition */}
              <div className="mb-6">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#1D3557]/70 mb-2.5">
                  2. Targeted Academic Outcome
                </label>
                <div className="space-y-2">
                  {goalsForPathway.map((goal, idx) => {
                    const isSelected = targetGoal === goal;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleGoalSelect(goal)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${
                          isSelected
                            ? 'bg-[#F4E1C1]/30 border-[#D4A373] text-[#1D3557] font-medium shadow-xs'
                            : 'bg-white border-[#E5E5E5] text-[#1D3557]/80 hover:bg-[#F8F7F4]'
                        }`}
                      >
                        <div className="mt-0.5">
                          {isSelected ? (
                            <CheckCircle2 className="w-4 h-4 text-[#D4A373] shrink-0" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-gray-300 shrink-0" />
                          )}
                        </div>
                        <span className="leading-snug">{goal}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Visual Trajectory Preview Strip */}
              <div className="p-3.5 rounded-xl bg-[#F8F7F4] border border-[#E5E5E5] mb-5">
                <div className="flex items-center justify-between text-[11px] text-[#457B9D] font-medium mb-1.5">
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Projected Pathway Velocity</span>
                  </span>
                  <span className="text-[#1D3557] font-bold">Top 3% Cohort Standard</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-200 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#457B9D] to-[#D4A373]"
                    initial={{ width: '25%' }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-gray-500 mt-1.5">
                  <span>Diagnostic Baseline</span>
                  <span className="text-[#D4A373] font-semibold">{activePathwayInfo.nationalExam.split('(')[0]}</span>
                </div>
              </div>

              {/* Primary Call to Action */}
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={scrollToBuilder}
                  className="w-full py-3 px-4 rounded-xl bg-[#1D3557] text-[#F8F7F4] hover:bg-[#152740] font-heading font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <Sparkles className="w-4 h-4 text-[#F4E1C1]" />
                  <span>Synthesize Full Roadmap</span>
                  <ArrowRight className="w-4 h-4 text-[#D4A373] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => openModal('trial-booking', { pathway: currentPathway })}
                  className="w-full py-2.5 px-4 rounded-xl bg-transparent hover:bg-gray-50 text-[#457B9D] border border-dashed border-[#457B9D]/40 font-medium text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4A373]" />
                  <span>Book Complimentary Diagnostic Assessment (Worth S$150)</span>
                </button>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
