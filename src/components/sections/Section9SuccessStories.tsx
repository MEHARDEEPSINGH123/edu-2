'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { getEnrichedReviewStories, PATHWAYS } from '@/data/academyData';
import { EnrichedReviewStory, PathwayKey } from '@/types/academy';
import {
  Quote,
  Sparkles,
  ArrowRight,
  Award,
  GraduationCap,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Star,
  ChevronRight
} from 'lucide-react';

export default function Section9SuccessStories() {
  const { currentPathway, setPathway } = usePathway();
  const [selectedStoryPathway, setSelectedStoryPathway] = useState<PathwayKey>(currentPathway);
  
  // Keep synced with global pathway
  React.useEffect(() => {
    setSelectedStoryPathway(currentPathway);
  }, [currentPathway]);

  const allStories = getEnrichedReviewStories();
  const pathwayStories = allStories.filter(s => s.pathway === selectedStoryPathway);
  const featuredStory = pathwayStories[0] || allStories[0];
  const secondaryStories = pathwayStories.slice(1, 4);

  const pathwayKeys: PathwayKey[] = ['psle', 'olevel', 'alevel', 'ib', 'igcse', 'skills'];

  return (
    <section id="success-stories" className="py-20 lg:py-28 bg-[#F8F7F4] border-t border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Editorial Storytelling, NOT Testimonial Sliders */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/5 border border-[#1D3557]/15 text-xs font-semibold text-[#1D3557] mb-3">
              <Quote className="w-3.5 h-3.5 text-[#D4A373]" />
              <span className="uppercase tracking-wider">Section 09</span>
              <span className="text-gray-300">·</span>
              <span className="text-[#457B9D]">Transformation Case Studies</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1D3557] tracking-tight">
              Academic Success{' '}
              <span className="font-editorial italic font-normal text-[#D4A373]">
                Stories.
              </span>
            </h2>

            <p className="mt-4 text-base text-[#1D3557]/75 font-sans leading-relaxed">
              We do not publish generic quotes. Every profile below is an audited transformation case study
              documenting the starting hurdle, the faculty breakthrough, and the realized academic outcome.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs bg-white border border-[#E5E5E5] px-3.5 py-2 rounded-xl text-[#1D3557]">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>200 Verified Longitudinal Alumni Case Studies</span>
          </div>
        </div>

        {/* Pathway Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-[#E5E5E5] scrollbar-none">
          {pathwayKeys.map((key) => {
            const p = PATHWAYS[key];
            const isSelected = selectedStoryPathway === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setSelectedStoryPathway(key);
                  setPathway(key);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1D3557] text-white shadow-xs'
                    : 'bg-white text-[#1D3557]/70 hover:bg-gray-100 hover:text-[#1D3557]'
                }`}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        {/* Lead Editorial Feature (Magazine Layout) */}
        {featuredStory && (
          <div className="academic-card rounded-3xl p-6 sm:p-10 bg-white border border-[#E5E5E5] shadow-lg mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#F4E1C1]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Narrative Editorial Column */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#457B9D] mb-3">
                  <span>Alumni Case Retrospective</span>
                  <span>•</span>
                  <span>{featuredStory.academicYear}</span>
                  <span>•</span>
                  <span className="text-[#D4A373]">{featuredStory.id}</span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1D3557] mb-2">
                  {featuredStory.studentName}
                </h3>
                <div className="text-xs sm:text-sm font-semibold text-[#457B9D] mb-6">
                  {featuredStory.school}
                </div>

                <div className="relative pl-6 border-l-2 border-[#D4A373] mb-6">
                  <p className="font-editorial italic text-lg sm:text-xl text-[#1D3557] leading-relaxed">
                    "{featuredStory.storyNarrative}"
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E5] text-xs">
                  <span className="font-bold text-[#1D3557] uppercase tracking-wider block mb-1">
                    Key Pedagogical Takeaway:
                  </span>
                  <span className="text-[#1D3557]/80 leading-relaxed font-sans">
                    {featuredStory.keyTakeaway}
                  </span>
                </div>
              </div>

              {/* Transformation Metrics Card */}
              <div className="lg:col-span-4 bg-[#F8F7F4] rounded-2xl p-6 border border-[#E5E5E5] space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                  Transformation Progression
                </span>

                <div>
                  <span className="text-[10px] font-bold uppercase text-rose-600 block">
                    Starting Baseline
                  </span>
                  <div className="text-xs text-[#1D3557] font-medium mt-0.5">
                    {featuredStory.startingPoint}
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <span className="text-[10px] font-bold uppercase text-[#457B9D] block">
                    Inflection Breakthrough
                  </span>
                  <div className="text-xs text-[#1D3557] font-medium mt-0.5">
                    {featuredStory.milestoneBreakthrough}
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200">
                  <span className="text-[10px] font-bold uppercase text-emerald-600 block">
                    Achieved Outcome
                  </span>
                  <div className="font-heading font-bold text-sm text-[#1D3557] mt-0.5">
                    {featuredStory.achievedOutcome}
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-200 bg-white p-3 rounded-xl border border-gray-200">
                  <span className="text-[10px] font-bold uppercase text-[#D4A373] block">
                    Current Destination
                  </span>
                  <div className="text-xs font-semibold text-[#1D3557] mt-0.5">
                    {featuredStory.currentDestination}
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Secondary Editorial Stories Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {secondaryStories.map((story) => (
            <div
              key={story.id}
              className="academic-card rounded-2xl p-6 bg-white border border-[#E5E5E5] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-2">
                  <span>{story.id}</span>
                  <span className="text-[#457B9D] font-bold">{story.school.split('(')[0]}</span>
                </div>

                <h4 className="font-heading font-bold text-base text-[#1D3557] mb-1">
                  {story.studentName}
                </h4>

                <p className="text-xs text-emerald-700 font-semibold mb-3">
                  {story.achievedOutcome}
                </p>

                <p className="text-xs text-[#1D3557]/70 font-sans line-clamp-3 mb-4 leading-relaxed">
                  "{story.storyNarrative}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 text-[11px] text-gray-500 font-medium">
                Destination: <span className="text-[#1D3557] font-semibold">{story.currentDestination.replace('Admitted to ', '')}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
