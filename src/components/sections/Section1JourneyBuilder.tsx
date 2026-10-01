'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { PATHWAYS, getCoursesByPathway, getEnrichedFaculty } from '@/data/academyData';
import {
  Sparkles,
  Compass,
  ArrowRight,
  Clock,
  BookOpen,
  Calendar,
  CheckCircle2,
  Download,
  Share2,
  Award,
  Layers,
  UserCheck,
  Building,
  Target,
  FileText
} from 'lucide-react';

const TIMELINE_OPTIONS = [
  { id: '6m', label: '6-Month Intensive Sprint', sub: 'Rapid grade recovery & exam crucible' },
  { id: '12m', label: '12-Month Academic Year', sub: 'Comprehensive syllabus mastery' },
  { id: '24m', label: '24-Month Distinction Track', sub: 'Multi-year foundational acceleration' }
];

const PREFERENCE_OPTIONS = [
  { id: 'inperson', label: 'In-Person Academic Sanctuary', icon: '🏛️', sub: 'Physical campus immersion & wet lab access' },
  { id: 'hybrid', label: 'Hybrid Flexible Rigor', icon: '🔄', sub: 'Campus masterclasses + digital review suites' },
  { id: 'mentorship', label: '1-on-1 Faculty Mentorship', icon: '🎯', sub: 'Bespoke syllabus speed & thesis defense' },
  { id: 'cohort', label: 'Socratic Circle (Max 6)', icon: '👥', sub: 'Collaborative peer dialectic & debate' }
];

export default function Section1JourneyBuilder() {
  const { currentPathway, targetGoal, currentLevel, timeline, setTimeline, learningPreference, setLearningPreference, openModal } = usePathway();

  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const pathwayInfo = PATHWAYS[currentPathway];
  const pathwayCourses = getCoursesByPathway(currentPathway);
  const facultyMembers = getEnrichedFaculty().filter(f => f.pathway === currentPathway || f.pathway === 'alevel');
  const leadMentor = facultyMembers[0] || getEnrichedFaculty()[0];

  // Dynamic calculations based on timeline and pathway
  const recommendedCourses = pathwayCourses.slice(0, 3);
  const totalMonthlyFee = recommendedCourses.reduce((sum, c) => sum + c.monthlyFeeSGD, 0);

  return (
    <section id="journey-builder" className="py-20 lg:py-28 bg-[#F8F7F4] relative border-t border-[#E5E5E5]">
      
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-academic-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/5 border border-[#1D3557]/15 text-xs font-semibold text-[#1D3557] mb-3">
            <Compass className="w-3.5 h-3.5 text-[#D4A373]" />
            <span className="uppercase tracking-wider">The Centerpiece</span>
            <span className="text-gray-300">·</span>
            <span className="text-[#457B9D]">Interactive Roadmap Engine</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1D3557] tracking-tight">
            Academic Journey{' '}
            <span className="font-editorial italic font-normal text-[#D4A373]">
              Builder.
            </span>
          </h2>

          <p className="mt-4 text-base text-[#1D3557]/75 font-sans leading-relaxed">
            Every student’s cognitive baseline is unique. Configure your timeline and learning style
            below to observe how our pedagogical milestones adapt to deliver your desired outcome.
          </p>
        </div>

        {/* Configuration Bar (Timeline & Learning Preference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Timeline Selector */}
          <div className="academic-card rounded-2xl p-5 bg-white border border-[#E5E5E5]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#457B9D] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#D4A373]" />
                Pacing & Timeline
              </span>
              <span className="text-xs font-semibold text-[#1D3557] bg-[#F8F7F4] px-2.5 py-0.5 rounded-full border border-gray-200">
                {timeline}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {TIMELINE_OPTIONS.map((t) => {
                const isSelected = timeline.includes(t.label.split(' ')[0]);
                return (
                  <button
                    key={t.id}
                    onClick={() => setTimeline(t.label)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#1D3557] border-[#1D3557] text-white shadow-xs'
                        : 'bg-[#F8F7F4] border-[#E5E5E5] text-[#1D3557] hover:border-[#D4A373]'
                    }`}
                  >
                    <div className="font-heading font-semibold text-xs leading-tight">{t.label.split(' ')[0]}</div>
                    <div className={`text-[10px] mt-0.5 line-clamp-2 ${isSelected ? 'text-[#F4E1C1]' : 'text-gray-500'}`}>
                      {t.sub}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Learning Preference Selector */}
          <div className="academic-card rounded-2xl p-5 bg-white border border-[#E5E5E5]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#457B9D] flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#D4A373]" />
                Learning Modality
              </span>
              <span className="text-xs font-semibold text-[#1D3557] bg-[#F8F7F4] px-2.5 py-0.5 rounded-full border border-gray-200">
                {learningPreference}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {PREFERENCE_OPTIONS.map((p) => {
                const isSelected = learningPreference === p.label;
                return (
                  <button
                    key={p.id}
                    onClick={() => setLearningPreference(p.label)}
                    className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#1D3557] border-[#1D3557] text-white shadow-xs'
                        : 'bg-[#F8F7F4] border-[#E5E5E5] text-[#1D3557] hover:border-[#D4A373]'
                    }`}
                  >
                    <div className="font-heading font-semibold text-xs leading-tight flex items-center gap-1.5">
                      <span>{p.icon}</span>
                      <span>{p.label.split(' ')[0]}</span>
                    </div>
                    <div className={`text-[10px] mt-0.5 truncate ${isSelected ? 'text-[#F4E1C1]' : 'text-gray-500'}`}>
                      {p.sub}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Visual Roadmap Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Milestone Pathway Stepper (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            
            <div className="p-4 rounded-xl bg-white border border-[#E5E5E5] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4A373]" />
                <span className="font-semibold text-[#1D3557]">Current Baseline:</span>
                <span className="text-[#457B9D] font-medium">{currentLevel}</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-[#1D3557]" />
                <span className="font-semibold text-[#1D3557]">Target Outcome:</span>
                <span className="text-[#1D3557] font-bold">{targetGoal}</span>
              </div>
            </div>

            {/* Interactive Milestone Nodes */}
            <div className="relative border-l-2 border-[#1D3557]/20 pl-6 sm:pl-8 space-y-6 ml-4 sm:ml-6 py-2">
              {pathwayInfo.milestones.map((milestone, idx) => {
                const isActive = activePhaseIndex === idx;
                return (
                  <motion.div
                    key={idx}
                    onClick={() => setActivePhaseIndex(idx)}
                    className={`relative p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#D4A373] shadow-md ring-1 ring-[#D4A373]/30'
                        : 'bg-white/70 border-[#E5E5E5] hover:bg-white'
                    }`}
                  >
                    {/* Node Dot on the timeline line */}
                    <div
                      className={`absolute -left-[35px] sm:-left-[43px] top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#1D3557] border-[#D4A373] scale-110 shadow-xs'
                          : 'bg-white border-[#1D3557]/40'
                      }`}
                    >
                      <span className={`text-[9px] font-bold ${isActive ? 'text-white' : 'text-[#1D3557]'}`}>
                        {idx + 1}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#1D3557]/10 text-[#1D3557]">
                          Phase {idx + 1}
                        </span>
                        <h4 className="font-heading font-bold text-base sm:text-lg text-[#1D3557]">
                          {milestone.stage}
                        </h4>
                      </div>
                      <span className="text-xs font-semibold text-[#D4A373] bg-[#F4E1C1]/20 px-2.5 py-1 rounded-md border border-[#D4A373]/30">
                        {milestone.checkpoint}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#1D3557]/80 leading-relaxed font-sans mb-3">
                      {milestone.description}
                    </p>

                    <div className="p-3 rounded-xl bg-[#F8F7F4] border border-[#E5E5E5] flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#1D3557] block">Pedagogical Milestone Outcome:</span>
                        <span className="text-[#1D3557]/70 font-medium">{milestone.expectedOutcome}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

          {/* Synthesis Blueprint Panel (Right 4 cols) */}
          <div className="lg:col-span-4 sticky top-32 space-y-4">
            
            <div className="academic-card rounded-2xl p-6 bg-white border border-[#E5E5E5] shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#457B9D] block">
                    Dynamic Dossier
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#1D3557]">
                    Academic Blueprint
                  </h3>
                </div>
                <div className="px-2 py-1 rounded bg-[#F4E1C1]/40 border border-[#D4A373]/30 text-[10px] font-bold text-[#1D3557]">
                  SINGAPORE MOE ALIGNED
                </div>
              </div>

              {/* Recommended Course Stack */}
              <div className="mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1D3557]/70 block mb-2">
                  Engineered Course Sequence ({recommendedCourses.length} Modules)
                </span>
                <div className="space-y-2">
                  {recommendedCourses.map((c) => (
                    <div key={c.id} className="p-2.5 rounded-lg bg-[#F8F7F4] border border-[#E5E5E5] text-xs">
                      <div className="font-semibold text-[#1D3557] truncate">{c.name}</div>
                      <div className="flex items-center justify-between text-[10px] text-gray-500 mt-1">
                        <span>{c.academicRigor}</span>
                        <span className="font-bold text-[#1D3557]">S${c.monthlyFeeSGD}/mo</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assigned Faculty Mentor */}
              <div className="p-3 rounded-xl bg-[#F4E1C1]/20 border border-[#D4A373]/30 mb-5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A373] block mb-1">
                  Assigned Lead Academic Fellow
                </span>
                <div className="font-heading font-bold text-xs text-[#1D3557]">{leadMentor.name}</div>
                <div className="text-[10px] text-[#457B9D] mt-0.5 line-clamp-1">{leadMentor.title}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{leadMentor.academicBackground}</div>
              </div>

              {/* Estimated Investment Summary */}
              <div className="p-3 rounded-xl bg-white border border-[#E5E5E5] mb-5">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                  <span>Pathway Investment:</span>
                  <span className="font-bold text-[#1D3557]">From S${totalMonthlyFee} / month</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#2A9D8F]">
                  <span>Diagnostic Assessment:</span>
                  <span className="font-semibold">S$0 (Complimentary)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => openModal('blueprint-export', {
                    pathway: currentPathway,
                    courses: recommendedCourses,
                    mentor: leadMentor,
                    timeline,
                    preference: learningPreference,
                    targetGoal
                  })}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#1D3557] text-white hover:bg-[#152740] font-heading font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#F4E1C1]" />
                  <span>Download Academic Blueprint</span>
                </button>

                <button
                  type="button"
                  onClick={() => openModal('trial-booking', {
                    pathway: currentPathway,
                    courseId: recommendedCourses[0]?.id
                  })}
                  className="w-full py-2.5 px-3 rounded-xl bg-white text-[#1D3557] hover:bg-gray-50 border border-[#E5E5E5] font-heading font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D4A373]" />
                  <span>Schedule Diagnostic Intake</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
