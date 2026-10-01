'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { PathwayKey } from '@/types/academy';
import { PATHWAYS } from '@/data/academyData';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import {
  Compass,
  Download,
  Share2,
  CheckCircle2,
  X,
  Sparkles,
  Calendar,
  Layers,
  Award,
  Clock,
  Printer
} from 'lucide-react';

export default function JourneyBlueprintModal() {
  const { activeModal, modalData, closeModal, currentPathway, currentLevel, targetGoal, timeline, learningPreference, openModal } = usePathway();

  const isOpen = activeModal === 'blueprint-export';
  useBodyScrollLock(isOpen);

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const pathwayKey: PathwayKey = (modalData?.pathway as PathwayKey) || currentPathway;
  const pathwayInfo = PATHWAYS[pathwayKey];
  const courses = modalData?.courses || [];
  const mentor = modalData?.mentor;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      data-lenis-prevent="true"
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs overscroll-contain"
    >
      <motion.div
        data-lenis-prevent="true"
        role="dialog"
        aria-modal="true"
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#E5E5E5] relative max-h-[85vh] sm:max-h-[88vh] flex flex-col overflow-hidden overscroll-contain"
      >
        <button
          onClick={closeModal}
          aria-label="Close dialog"
          className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Fixed Header */}
        <div className="p-6 sm:p-7 pb-4 border-b border-[#E5E5E5] shrink-0 bg-white pr-14">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#457B9D] mb-1">
            <Compass className="w-4 h-4 text-[#D4A373]" />
            <span>Eduvanta Academy Dossier</span>
          </div>
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1D3557] leading-tight">
            Official Academic Blueprint
          </h3>
          <p className="text-xs text-gray-500 font-sans mt-0.5">
            Engineered Pathway Specification & Milestone Schedule
          </p>
        </div>

        {/* Scrollable Body */}
        <div
          data-lenis-prevent="true"
          className="flex-1 overflow-y-auto p-6 sm:p-7 py-4 space-y-5 overscroll-contain"
        >
          {/* Blueprint Overview Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E5] text-xs">
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block">Academic Pathway</span>
              <span className="font-bold text-[#1D3557]">{pathwayInfo.name}</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block">Pacing Timeline</span>
              <span className="font-bold text-[#1D3557]">{timeline}</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block">Target Ambition</span>
              <span className="font-bold text-[#1D3557] truncate block">{targetGoal}</span>
            </div>
            <div>
              <span className="text-[10px] text-gray-400 font-bold uppercase block">Modality</span>
              <span className="font-bold text-[#1D3557]">{learningPreference}</span>
            </div>
          </div>

          {/* Recommended Sequential Course Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1D3557] mb-3">
              Integrated Course Sequence ({courses.length} Modules)
            </h4>
            <div className="space-y-2">
              {courses.map((course: any, idx: number) => (
                <div key={course.id || idx} className="p-3 rounded-xl bg-white border border-[#E5E5E5] text-xs flex items-center justify-between">
                  <div className="max-w-[70%]">
                    <div className="font-semibold text-[#1D3557] truncate">{course.name}</div>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">
                      {course.id} · {course.academicRigor} · {course.hoursPerWeek} hrs/wk
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#1D3557]">S${course.monthlyFeeSGD}/mo</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">{course.spotsRemaining} spots remaining</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Faculty Mentor */}
          {mentor && (
            <div className="p-4 rounded-2xl bg-[#F4E1C1]/20 border border-[#D4A373]/30 text-xs">
              <span className="text-[10px] font-bold uppercase text-[#D4A373] block mb-1">
                Supervising Senior Academic Fellow
              </span>
              <div className="font-heading font-bold text-sm text-[#1D3557]">{mentor.name}</div>
              <div className="text-[#457B9D] mt-0.5">{mentor.title}</div>
              <div className="text-gray-500 text-[11px] mt-0.5">{mentor.academicBackground}</div>
            </div>
          )}
        </div>

        {/* Fixed Footer with Action Buttons */}
        <div className="p-5 sm:p-6 border-t border-[#E5E5E5] bg-white shrink-0 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-[#F8F7F4] hover:bg-gray-100 border border-[#E5E5E5] text-xs font-semibold text-[#1D3557] flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-gray-500" />
            <span>Print Blueprint</span>
          </button>

          <button
            onClick={handleCopy}
            className="w-full sm:w-auto py-2.5 px-4 rounded-xl bg-[#F8F7F4] hover:bg-gray-100 border border-[#E5E5E5] text-xs font-semibold text-[#1D3557] flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-gray-500" />
            <span>{copied ? 'Link Copied!' : 'Share Dossier'}</span>
          </button>

          <button
            onClick={() => {
              closeModal();
              openModal('trial-booking', { pathway: currentPathway });
            }}
            className="flex-1 w-full py-2.5 px-5 rounded-xl bg-[#1D3557] hover:bg-[#152740] text-white font-heading font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <Calendar className="w-3.5 h-3.5 text-[#F4E1C1]" />
            <span>Proceed to Diagnostic Booking</span>
          </button>
        </div>

      </motion.div>
    </div>
  );
}
