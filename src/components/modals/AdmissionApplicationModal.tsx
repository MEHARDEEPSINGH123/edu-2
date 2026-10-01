'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { PATHWAYS } from '@/data/academyData';
import { PathwayKey } from '@/types/academy';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import {
  UserCheck,
  CheckCircle2,
  X,
  Sparkles,
  FileText,
  Building,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

export default function AdmissionApplicationModal() {
  const { activeModal, modalData, closeModal, currentPathway, setPathway } = usePathway();

  const isOpen = activeModal === 'admission-intake';
  useBodyScrollLock(isOpen);

  const [selectedPathway, setSelectedPathway] = useState<PathwayKey>((modalData?.pathway as PathwayKey) || currentPathway);
  const [candidateName, setCandidateName] = useState<string>('');
  const [currentSchool, setCurrentSchool] = useState<string>('');
  const [recentGrades, setRecentGrades] = useState<string>('');
  const [targetOutcome, setTargetOutcome] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [isDone, setIsDone] = useState<boolean>(false);
  const [dossierId, setDossierId] = useState<string>('');

  if (!isOpen) return null;

  const pathwayInfo = PATHWAYS[selectedPathway];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `EDV-ADM-${Math.floor(100000 + Math.random() * 900000)}`;
    setDossierId(id);
    setIsDone(true);
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
        className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-[#E5E5E5] relative max-h-[85vh] sm:max-h-[88vh] flex flex-col overflow-hidden overscroll-contain"
      >
        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="absolute top-5 right-5 z-20 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isDone ? (
          <form onSubmit={handleSubmit} className="flex flex-col h-full overflow-hidden">
            <div className="p-6 sm:p-7 pb-4 border-b border-[#E5E5E5] shrink-0 bg-white pr-14">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#457B9D] block mb-1">
                Admission Studio Dossier
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1D3557] leading-tight">
                Initiate Candidate Admission Intake
              </h3>
              <p className="text-xs text-[#1D3557]/70 font-sans mt-0.5">
                Submit academic transcripts and goal declarations for review by the Eduvanta Academic Council.
              </p>
            </div>

            <div
              data-lenis-prevent="true"
              className="flex-1 overflow-y-auto p-6 sm:p-7 py-4 space-y-4 overscroll-contain"
            >
              <div>
                <label className="block text-xs font-bold uppercase text-[#1D3557] mb-1.5">
                  Academic Pathway
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['psle', 'olevel', 'alevel', 'ib', 'igcse', 'skills'] as PathwayKey[]).map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setSelectedPathway(k)}
                      className={`p-2 rounded-xl text-xs font-semibold text-center border cursor-pointer ${
                        selectedPathway === k
                          ? 'bg-[#1D3557] text-white border-[#1D3557]'
                          : 'bg-[#F8F7F4] text-[#1D3557] border-gray-200'
                      }`}
                    >
                      {PATHWAYS[k].name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Candidate Name *</label>
                  <input
                    type="text"
                    required
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    placeholder="Candidate full name"
                    className="w-full p-2.5 rounded-xl bg-[#F8F7F4] border border-gray-200 text-xs text-[#1D3557]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Current School *</label>
                  <input
                    type="text"
                    required
                    value={currentSchool}
                    onChange={(e) => setCurrentSchool(e.target.value)}
                    placeholder="e.g. Hwa Chong / Raffles"
                    className="w-full p-2.5 rounded-xl bg-[#F8F7F4] border border-gray-200 text-xs text-[#1D3557]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">
                  Recent Academic Results / Weighted Assessment (WA) *
                </label>
                <input
                  type="text"
                  required
                  value={recentGrades}
                  onChange={(e) => setRecentGrades(e.target.value)}
                  placeholder="e.g. Math AL2, Science AL1 or Sec 3 A-Math B3, Physics A2"
                  className="w-full p-2.5 rounded-xl bg-[#F8F7F4] border border-gray-200 text-xs text-[#1D3557]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Target Ambition / Exam Goal *</label>
                <input
                  type="text"
                  required
                  value={targetOutcome}
                  onChange={(e) => setTargetOutcome(e.target.value)}
                  placeholder="e.g. Raw L1R5 6, 90RP, 45 Points IB, Medicine direct admit"
                  className="w-full p-2.5 rounded-xl bg-[#F8F7F4] border border-gray-200 text-xs text-[#1D3557]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Contact Email *</label>
                  <input
                    type="email"
                    required
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="parent@domain.com"
                    className="w-full p-2.5 rounded-xl bg-[#F8F7F4] border border-gray-200 text-xs text-[#1D3557]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Mobile (+65) *</label>
                  <input
                    type="tel"
                    required
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+65 9123 4567"
                    className="w-full p-2.5 rounded-xl bg-[#F8F7F4] border border-gray-200 text-xs text-[#1D3557]"
                  />
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 border-t border-[#E5E5E5] bg-white shrink-0">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-[#1D3557] hover:bg-[#152740] text-white font-heading font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-4 h-4 text-[#F4E1C1]" />
                <span>Submit Intake Dossier to Academic Council</span>
              </button>
            </div>
          </form>
        ) : (
          <div
            data-lenis-prevent="true"
            className="flex-1 overflow-y-auto p-6 sm:p-8 text-center overscroll-contain"
          >
            <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-[#1D3557]">
              Admission Dossier Lodged
            </h3>
            <p className="text-xs text-[#1D3557]/70 font-sans mt-1 max-w-sm mx-auto">
              Your dossier reference has been logged. An academic director will contact you within 24 hours to schedule the strategic consultation.
            </p>

            <div className="mt-5 p-4 rounded-xl bg-[#F8F7F4] border border-[#E5E5E5] text-xs font-mono font-bold text-[#1D3557]">
              Dossier Reference ID: {dossierId}
            </div>

            <button
              onClick={closeModal}
              className="mt-6 py-2.5 px-6 rounded-xl bg-[#1D3557] text-white hover:bg-[#152740] font-heading font-semibold text-xs cursor-pointer"
            >
              Close Dossier
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
