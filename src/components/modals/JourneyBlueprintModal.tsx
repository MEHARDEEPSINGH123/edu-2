'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { PathwayKey } from '@/types/academy';
import { PATHWAYS } from '@/data/academyData';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5E5] relative max-h-[92vh] overflow-y-auto"
      >
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="pb-4 border-b border-[#E5E5E5] mb-6">
          <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#457B9D] mb-1">
            <Compass className="w-4 h-4 text-[#D4A373]" />
            <span>Eduvanta Academy Dossier</span>
          </div>
          <h3 className="font-heading font-extrabold text-2xl text-[#1D3557]">
            Official Academic Blueprint
          </h3>
          <p className="text-xs text-gray-500 font-sans mt-0.5">
            Engineered Pathway Specification & Milestone Schedule
          </p>
        </div>

        {/* Blueprint Overview Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E5] mb-6 text-xs">
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
        <div className="mb-6">
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
          <div className="p-4 rounded-2xl bg-[#F4E1C1]/20 border border-[#D4A373]/30 mb-6 text-xs">
            <span className="text-[10px] font-bold uppercase text-[#D4A373] block mb-1">
              Supervising Senior Academic Fellow
            </span>
            <div className="font-heading font-bold text-sm text-[#1D3557]">{mentor.name}</div>
            <div className="text-[#457B9D] mt-0.5">{mentor.title}</div>
            <div className="text-gray-500 text-[11px] mt-0.5">{mentor.academicBackground}</div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
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
