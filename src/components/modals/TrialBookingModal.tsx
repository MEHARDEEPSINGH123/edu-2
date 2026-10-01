'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { PathwayKey } from '@/types/academy';
import { getEnrichedCampuses, getEnrichedTrialClasses, PATHWAYS } from '@/data/academyData';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  User,
  Phone,
  Mail,
  School,
  X,
  Ticket
} from 'lucide-react';

export default function TrialBookingModal() {
  const { activeModal, modalData, closeModal, currentPathway } = usePathway();

  const isOpen = activeModal === 'trial-booking';
  const campuses = getEnrichedCampuses();
  const trialClasses = getEnrichedTrialClasses();

  // Form State
  const [selectedCampusId, setSelectedCampusId] = useState<string>(modalData?.campusId || campuses[0]?.id || 'CMP001');
  const [studentName, setStudentName] = useState<string>('');
  const [currentSchool, setCurrentSchool] = useState<string>('');
  const [parentName, setParentName] = useState<string>('');
  const [parentPhone, setParentPhone] = useState<string>('');
  const [parentEmail, setParentEmail] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('Upcoming Saturday (10:00 - 11:30 SGT)');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingId, setBookingId] = useState<string>('');

  if (!isOpen) return null;

  const activeCampus = campuses.find(c => c.id === selectedCampusId) || campuses[0];
  const pathwayKey: PathwayKey = (modalData?.pathway as PathwayKey) || currentPathway;
  const pathwayInfo = PATHWAYS[pathwayKey];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `EDV-DIAG-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(generatedId);
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5E5] relative max-h-[92vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="pb-4 border-b border-[#E5E5E5] mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#1D3557]/10 text-[10px] font-bold text-[#1D3557] mb-2 uppercase tracking-wider">
                <Calendar className="w-3 h-3 text-[#D4A373]" />
                <span>Diagnostic Masterclass Intake</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-[#1D3557]">
                Reserve Diagnostic Assessment
              </h3>
              <p className="text-xs text-[#1D3557]/70 font-sans mt-1">
                90-minute conceptual masterclass followed by an individual cognitive diagnostic report.
                Standard S$150 diagnostic fee is complimentary for first-time intakes.
              </p>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Campus Sanctuary Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1D3557] mb-1.5">
                  1. Select Singapore Academic Sanctuary
                </label>
                <select
                  value={selectedCampusId}
                  onChange={(e) => setSelectedCampusId(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#F8F7F4] border border-[#E5E5E5] text-xs font-semibold text-[#1D3557] focus:outline-none focus:border-[#1D3557]"
                  required
                >
                  {campuses.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name} ({c.district}) - {c.nearestMrt}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-gray-500 mt-1 block">
                  Location: {activeCampus.address}
                </span>
              </div>

              {/* Date & Time Slot */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1D3557] mb-1.5">
                  2. Preferred Masterclass Slot
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'Upcoming Saturday (10:00 - 11:30 SGT)',
                    'Upcoming Sunday (14:30 - 16:00 SGT)',
                    'Upcoming Wednesday (17:30 - 19:00 SGT)',
                    'Next Saturday (11:30 - 13:00 SGT)'
                  ].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setPreferredDate(slot)}
                      className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                        preferredDate === slot
                          ? 'bg-[#1D3557] border-[#1D3557] text-white font-semibold'
                          : 'bg-[#F8F7F4] border-[#E5E5E5] text-[#1D3557] hover:border-[#D4A373]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Student & Parent Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="e.g. Rachel Tan"
                    className="w-full p-2.5 rounded-xl bg-[#F8F7F4] border border-[#E5E5E5] text-xs text-[#1D3557] focus:outline-none focus:border-[#1D3557]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Current School *</label>
                  <input
                    type="text"
                    required
                    value={currentSchool}
                    onChange={(e) => setCurrentSchool(e.target.value)}
                    placeholder="e.g. Raffles Girls / Hwa Chong"
                    className="w-full p-2.5 rounded-xl bg-[#F8F7F4] border border-[#E5E5E5] text-xs text-[#1D3557] focus:outline-none focus:border-[#1D3557]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Parent / Guardian Name *</label>
                  <input
                    type="text"
                    required
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="e.g. Mr. Marcus Tan"
                    className="w-full p-2.5 rounded-xl bg-[#F8F7F4] border border-[#E5E5E5] text-xs text-[#1D3557] focus:outline-none focus:border-[#1D3557]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-gray-600 mb-1">Singapore Mobile Number (+65) *</label>
                  <input
                    type="tel"
                    required
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    placeholder="e.g. 9123 4567"
                    className="w-full p-2.5 rounded-xl bg-[#F8F7F4] border border-[#E5E5E5] text-xs text-[#1D3557] focus:outline-none focus:border-[#1D3557]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-gray-600 mb-1">Parent Email Address *</label>
                <input
                  type="email"
                  required
                  value={parentEmail}
                  onChange={(e) => setParentEmail(e.target.value)}
                  placeholder="e.g. marcus.tan@gmail.com"
                  className="w-full p-2.5 rounded-xl bg-[#F8F7F4] border border-[#E5E5E5] text-xs text-[#1D3557] focus:outline-none focus:border-[#1D3557]"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#1D3557] hover:bg-[#152740] text-white font-heading font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Sparkles className="w-4 h-4 text-[#F4E1C1]" />
                  <span>Confirm Diagnostic Masterclass Reservation</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Ticket Pass */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-heading font-extrabold text-2xl text-[#1D3557]">
              Diagnostic Reservation Confirmed
            </h3>
            <p className="text-xs text-[#1D3557]/70 font-sans mt-1 max-w-md mx-auto">
              Your diagnostic masterclass seat is secured. A calendar invitation and pre-assessment
              preparation briefing have been dispatched to {parentEmail || 'your email'}.
            </p>

            {/* Boarding Pass Style Ticket */}
            <div className="mt-6 p-6 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E5] text-left max-w-lg mx-auto relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-dashed border-gray-300 mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase text-gray-400 block">Intake Pass Reference</span>
                  <span className="font-mono font-bold text-sm text-[#1D3557]">{bookingId}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase text-[#D4A373] block">Status</span>
                  <span className="text-xs font-bold text-emerald-700">CONFIRMED SEAT</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                <div>
                  <span className="text-gray-400 text-[10px] block">Candidate:</span>
                  <span className="font-bold text-[#1D3557]">{studentName} ({currentSchool})</span>
                </div>
                <div>
                  <span className="text-gray-400 text-[10px] block">Pathway:</span>
                  <span className="font-bold text-[#1D3557]">{pathwayInfo.name}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-[10px] block">Sanctuary:</span>
                  <span className="font-bold text-[#1D3557]">{activeCampus.name}</span>
                </div>
                <div>
                  <span className="text-gray-400 text-[10px] block">Scheduled Slot:</span>
                  <span className="font-bold text-[#1D3557]">{preferredDate}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200 text-[11px] text-gray-500">
                Address: {activeCampus.address} (Near {activeCampus.nearestMrt})
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={closeModal}
                className="py-2.5 px-6 rounded-xl bg-[#1D3557] text-white hover:bg-[#152740] font-heading font-semibold text-xs cursor-pointer"
              >
                Return to Academic Roadmap
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
