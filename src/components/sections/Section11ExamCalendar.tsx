'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { EXAM_CALENDAR_DATA, PATHWAYS } from '@/data/academyData';
import { PathwayKey } from '@/types/academy';
import {
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Target,
  ChevronRight
} from 'lucide-react';

export default function Section11ExamCalendar() {
  const { currentPathway, setPathway, openModal } = usePathway();
  const [calendarFilter, setCalendarFilter] = useState<PathwayKey | 'all'>('all');

  const filteredExams = EXAM_CALENDAR_DATA.filter((e) =>
    calendarFilter === 'all' ? true : e.pathway === calendarFilter
  );

  return (
    <section id="exam-calendar" className="py-20 lg:py-28 bg-[#F8F7F4] border-t border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/5 border border-[#1D3557]/15 text-xs font-semibold text-[#1D3557] mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#D4A373]" />
              <span className="uppercase tracking-wider">Section 11</span>
              <span className="text-gray-300">·</span>
              <span className="text-[#457B9D]">National Examination Timeline</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1D3557] tracking-tight">
              Exam{' '}
              <span className="font-editorial italic font-normal text-[#D4A373]">
                Calendar.
              </span>
            </h2>

            <p className="mt-4 text-base text-[#1D3557]/75 font-sans leading-relaxed">
              Timely strategic preparation is the difference between anxiety and distinction.
              Track official Singapore national examination dates, countdown phases, and crucible targets.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs bg-white border border-[#E5E5E5] px-3.5 py-2 rounded-xl text-[#1D3557]">
            <Clock className="w-4 h-4 text-[#D4A373] shrink-0" />
            <span>Singapore SEAB & Cambridge Official Schedule Sync</span>
          </div>
        </div>

        {/* Pathway Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#E5E5E5] scrollbar-none">
          <button
            onClick={() => setCalendarFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              calendarFilter === 'all'
                ? 'bg-[#1D3557] text-white shadow-xs'
                : 'bg-white text-[#1D3557]/70 hover:bg-gray-100 hover:text-[#1D3557]'
            }`}
          >
            All National Examinations
          </button>
          {(['psle', 'olevel', 'alevel', 'ib', 'igcse'] as PathwayKey[]).map((k) => (
            <button
              key={k}
              onClick={() => setCalendarFilter(k)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                calendarFilter === k
                  ? 'bg-[#1D3557] text-white shadow-xs'
                  : 'bg-white text-[#1D3557]/70 hover:bg-gray-100 hover:text-[#1D3557]'
              }`}
            >
              {PATHWAYS[k].name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Exam Timeline Interface */}
        <div className="space-y-4">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="academic-card rounded-2xl p-6 bg-white border border-[#E5E5E5] hover:border-[#D4A373] transition-all shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              {/* Exam Info */}
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#1D3557]/10 text-[#1D3557]">
                    {exam.pathway.toUpperCase()}
                  </span>
                  <span className="text-xs font-semibold text-[#D4A373]">
                    {exam.officialDate}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#1D3557] mb-1">
                  {exam.examName}
                </h3>
                <p className="text-xs text-[#1D3557]/75 font-sans mb-3">
                  {exam.paper}
                </p>

                <div className="p-3 rounded-xl bg-[#F8F7F4] border border-[#E5E5E5] text-xs text-gray-700">
                  <span className="font-bold text-[#1D3557] block mb-0.5">Active Preparation Phase:</span>
                  <span>{exam.preparationPhase}</span>
                </div>
              </div>

              {/* Action Plan & Countdown */}
              <div className="md:text-right shrink-0 space-y-3">
                <div className="inline-block p-3 rounded-xl bg-[#F4E1C1]/20 border border-[#D4A373]/30 text-center min-w-[140px]">
                  <span className="text-[10px] uppercase font-bold text-[#457B9D] block">Countdown</span>
                  <span className="font-heading font-extrabold text-2xl text-[#1D3557] block leading-none my-1">
                    {exam.daysRemaining}
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium">Days to National Sitting</span>
                </div>

                <div>
                  <button
                    onClick={() => openModal('trial-booking', { pathway: exam.pathway })}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#1D3557] text-white hover:bg-[#152740] font-heading font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#F4E1C1]" />
                    <span>Join Exam Crucible Sprint</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
