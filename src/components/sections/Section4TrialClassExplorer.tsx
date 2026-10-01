'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { getEnrichedTrialClasses } from '@/data/academyData';
import { EnrichedTrialClass, PathwayKey } from '@/types/academy';
import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  Users,
  Sparkles,
  ArrowRight,
  Filter,
  ShieldCheck,
  Search
} from 'lucide-react';

export default function Section4TrialClassExplorer() {
  const { currentPathway, openModal } = usePathway();

  const [selectedLevelFilter, setSelectedLevelFilter] = useState<string>('All');
  const [selectedFormatFilter, setSelectedFormatFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const allTrialClasses = getEnrichedTrialClasses();

  // Filter dynamically
  const filteredTrials = allTrialClasses.filter((t) => {
    const matchesPathway = selectedLevelFilter === 'All'
      ? t.pathway === currentPathway
      : true;
    const matchesLevel = selectedLevelFilter === 'All' || t.level.toLowerCase().includes(selectedLevelFilter.toLowerCase());
    const matchesFormat = selectedFormatFilter === 'All' || t.format === selectedFormatFilter;
    const matchesSearch = t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.campusName.toLowerCase().includes(searchTerm.toLowerCase());

    return (selectedLevelFilter === 'All' ? matchesPathway : matchesLevel) && matchesFormat && matchesSearch;
  });

  return (
    <section id="trial-classes" className="py-20 lg:py-28 bg-white border-t border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/5 border border-[#1D3557]/15 text-xs font-semibold text-[#1D3557] mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#D4A373]" />
              <span className="uppercase tracking-wider">Section 04</span>
              <span className="text-gray-300">·</span>
              <span className="text-[#457B9D]">Diagnostic Assessments</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1D3557] tracking-tight">
              Trial Class{' '}
              <span className="font-editorial italic font-normal text-[#D4A373]">
                Explorer.
              </span>
            </h2>

            <p className="mt-4 text-base text-[#1D3557]/75 font-sans leading-relaxed">
              Experience the Eduvanta academic methodology firsthand. Every trial session includes a
              rigorous 90-minute conceptual masterclass followed by an individual cognitive diagnostic report.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs bg-[#F4E1C1]/30 border border-[#D4A373]/30 px-3.5 py-2 rounded-xl text-[#1D3557]">
            <ShieldCheck className="w-4 h-4 text-[#D4A373] shrink-0" />
            <span>Complimentary Diagnostic Assessment Included (Standard S$150 Fee Waived)</span>
          </div>
        </div>

        {/* Dynamic Interactive Filters */}
        <div className="p-4 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E5] mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            
            {/* Level Selector */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              <span className="text-[11px] font-bold text-gray-500 uppercase mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#457B9D]" />
                Level:
              </span>
              {['All', 'Primary', 'Secondary', 'Junior College', 'IBDP', 'IGCSE'].map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevelFilter(lvl)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedLevelFilter === lvl
                      ? 'bg-[#1D3557] text-white shadow-xs'
                      : 'bg-white text-[#1D3557]/70 hover:bg-gray-100 hover:text-[#1D3557]'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Format Filter */}
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-gray-500 uppercase mr-1">Format:</span>
              {['All', 'In-Person', 'Hybrid', 'Virtual Live'].map((fmt) => (
                <button
                  key={fmt}
                  onClick={() => setSelectedFormatFilter(fmt)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedFormatFilter === fmt
                      ? 'bg-[#457B9D] text-white shadow-xs'
                      : 'bg-white text-[#1D3557]/70 hover:bg-gray-100 hover:text-[#1D3557]'
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>

          </div>

          {/* Quick Search inside trial classes */}
          <div className="relative w-full">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by topic, subject or campus sanctuary (e.g. Marina Bay, Calculus, Pure Physics)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-[#E5E5E5] text-xs text-[#1D3557] focus:outline-none focus:border-[#1D3557]"
            />
          </div>
        </div>

        {/* Live Availability Trial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTrials.slice(0, 9).map((trial) => {
            const isFillingFast = trial.slotsAvailable <= 2;
            return (
              <motion.div
                key={trial.id}
                className="academic-card rounded-2xl p-6 bg-white border border-[#E5E5E5] hover:border-[#D4A373] transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#1D3557]/10 text-[#1D3557]">
                      {trial.id} · {trial.level}
                    </span>

                    {/* Live Availability Badge */}
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                        isFillingFast
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isFillingFast ? 'bg-rose-500 animate-ping' : 'bg-emerald-500'}`} />
                      {trial.slotsAvailable} Seats Remaining
                    </span>
                  </div>

                  <h4 className="font-heading font-bold text-base text-[#1D3557] leading-snug mb-2">
                    {trial.title}
                  </h4>

                  <div className="space-y-1.5 text-xs text-[#1D3557]/75 font-sans mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-3.5 h-3.5 text-[#D4A373]" />
                      <span>{trial.date} · {trial.time} ({trial.durationMinutes} mins)</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-3.5 h-3.5 text-[#457B9D]" />
                      <span className="truncate">{trial.campusName}</span>
                    </div>
                  </div>

                  {/* Diagnostic Components */}
                  <div className="p-3 rounded-xl bg-[#F8F7F4] border border-[#E5E5E5] mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-1">
                      Included Diagnostic Protocol:
                    </span>
                    <ul className="space-y-1 text-[11px] text-gray-700">
                      {trial.diagnosticComponents.slice(0, 2).map((comp, idx) => (
                        <li key={idx} className="flex items-start gap-1.5 truncate">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="truncate">{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking Button */}
                <button
                  type="button"
                  onClick={() => openModal('trial-booking', { trial })}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#1D3557] hover:bg-[#152740] text-white font-heading font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs group"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#F4E1C1]" />
                  <span>Reserve Diagnostic Seat</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4A373] group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
