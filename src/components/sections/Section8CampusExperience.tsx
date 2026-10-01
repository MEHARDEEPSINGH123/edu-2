'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { getEnrichedCampuses } from '@/data/academyData';
import { EnrichedCampus } from '@/types/academy';
import {
  Building2,
  MapPin,
  Clock,
  Compass,
  Sparkles,
  Train,
  CheckCircle2,
  Calendar,
  Phone,
  Mail,
  ChevronRight,
  Eye,
  Maximize2
} from 'lucide-react';

export default function Section8CampusExperience() {
  const { openModal } = usePathway();
  const campuses = getEnrichedCampuses();
  const [selectedCampus, setSelectedCampus] = useState<EnrichedCampus>(campuses[0]);
  const [activeTab, setActiveTab] = useState<'overview' | 'facilities' | 'virtualTour'>('overview');

  return (
    <section id="campus-experience" className="py-20 lg:py-28 bg-white border-t border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Virtual Experience Feel, NOT Campus Cards */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/5 border border-[#1D3557]/15 text-xs font-semibold text-[#1D3557] mb-3">
              <Building2 className="w-3.5 h-3.5 text-[#D4A373]" />
              <span className="uppercase tracking-wider">Section 08</span>
              <span className="text-gray-300">·</span>
              <span className="text-[#457B9D]">Singapore Academic Sanctuaries</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1D3557] tracking-tight">
              Campus{' '}
              <span className="font-editorial italic font-normal text-[#D4A373]">
                Experience.
              </span>
            </h2>

            <p className="mt-4 text-base text-[#1D3557]/75 font-sans leading-relaxed">
              We do not operate generic classrooms with row seating. Eduvanta Sanctuaries are purpose-designed
              architectural environments engineered for cognitive clarity, acoustic tranquility, and scholarly focus.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
            <MapPin className="w-4 h-4 text-[#D4A373]" />
            <span>10 Strategically Located Academic Sanctuaries across Singapore</span>
          </div>
        </div>

        {/* Interactive Singapore Campus Switcher Dock */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#E5E5E5] scrollbar-none">
          {campuses.map((campus) => {
            const isSelected = selectedCampus.id === campus.id;
            return (
              <button
                key={campus.id}
                onClick={() => {
                  setSelectedCampus(campus);
                  setActiveTab('overview');
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#1D3557] text-white shadow-xs'
                    : 'bg-[#F8F7F4] text-[#1D3557]/70 hover:bg-gray-100 hover:text-[#1D3557]'
                }`}
              >
                <span className="text-[10px] text-[#D4A373] font-mono">{campus.id}</span>
                <span>{campus.name.split(' ')[0]} {campus.name.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Immersive Virtual Sanctuary Exploration Stage */}
        <div className="academic-card rounded-3xl overflow-hidden bg-[#F8F7F4] border border-[#E5E5E5] shadow-xl">
          
          {/* Main Visual Showcase (Large Hero Image with virtual overlay) */}
          <div className="relative aspect-[21/9] sm:aspect-[21/8] w-full overflow-hidden bg-gray-900">
            <img
              src={selectedCampus.imageUrl}
              alt={selectedCampus.name}
              className="w-full h-full object-cover object-center opacity-90 transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

            {/* Floating Sanctuary Badge */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold">{selectedCampus.district}</span>
              </div>

              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs">
                <Train className="w-3.5 h-3.5 text-[#F4E1C1]" />
                <span className="hidden sm:inline text-[#F4E1C1] font-medium">{selectedCampus.nearestMrt}</span>
              </div>
            </div>

            {/* Bottom Title Bar */}
            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase text-[#F4E1C1] tracking-wider block">
                  {selectedCampus.id} · Singapore Sanctuary
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white mt-1">
                  {selectedCampus.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 mt-1 max-w-xl font-sans">
                  {selectedCampus.address}
                </p>
              </div>

              <button
                onClick={() => openModal('trial-booking', { campusId: selectedCampus.id, campusName: selectedCampus.name })}
                className="py-2.5 px-5 rounded-xl bg-white text-[#1D3557] hover:bg-[#F4E1C1] font-heading font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-md shrink-0 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D4A373]" />
                <span>Book Diagnostic at this Sanctuary</span>
              </button>
            </div>
          </div>

          {/* Interactive Navigation within Sanctuary Experience */}
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-[#E5E5E5] pb-4 mb-6 text-xs">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-2 border-b-2 font-semibold transition-colors cursor-pointer ${
                  activeTab === 'overview'
                    ? 'border-[#1D3557] text-[#1D3557]'
                    : 'border-transparent text-gray-400 hover:text-gray-700'
                }`}
              >
                Architectural Blueprint & Philosophy
              </button>
              <button
                onClick={() => setActiveTab('facilities')}
                className={`pb-2 border-b-2 font-semibold transition-colors cursor-pointer ${
                  activeTab === 'facilities'
                    ? 'border-[#1D3557] text-[#1D3557]'
                    : 'border-transparent text-gray-400 hover:text-gray-700'
                }`}
              >
                Specialized Laboratories ({selectedCampus.specializedFacilities.length})
              </button>
              <button
                onClick={() => setActiveTab('virtualTour')}
                className={`pb-2 border-b-2 font-semibold transition-colors cursor-pointer ${
                  activeTab === 'virtualTour'
                    ? 'border-[#1D3557] text-[#1D3557]'
                    : 'border-transparent text-gray-400 hover:text-gray-700'
                }`}
              >
                Virtual 360 Exploration Notes
              </button>
            </div>

            {/* Tab Contents */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-8">
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <h4 className="font-heading font-bold text-lg text-[#1D3557]">
                      Architectural Concept & Spatial Design
                    </h4>
                    <p className="text-sm text-[#1D3557]/80 leading-relaxed font-sans">
                      {selectedCampus.architecturalConcept}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                      <div className="p-3.5 rounded-xl bg-white border border-[#E5E5E5] text-xs">
                        <span className="text-gray-400 text-[10px] uppercase font-bold block">Operating Schedule</span>
                        <span className="font-semibold text-[#1D3557] block mt-0.5">{selectedCampus.operatingHours}</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white border border-[#E5E5E5] text-xs">
                        <span className="text-gray-400 text-[10px] uppercase font-bold block">Transit Link</span>
                        <span className="font-semibold text-[#1D3557] block mt-0.5">{selectedCampus.nearestMrt}</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'facilities' && (
                  <div className="space-y-3">
                    <h4 className="font-heading font-bold text-lg text-[#1D3557] mb-2">
                      Purpose-Engineered Research & Study Facilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedCampus.specializedFacilities.map((fac, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E5E5E5] flex items-start gap-2.5 text-xs text-[#1D3557]">
                          <CheckCircle2 className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                          <span className="font-medium">{fac}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'virtualTour' && (
                  <div className="space-y-3">
                    <h4 className="font-heading font-bold text-lg text-[#1D3557] mb-2">
                      Virtual Immersion Highlights & Features
                    </h4>
                    <div className="space-y-2">
                      {selectedCampus.virtualTourKeyFeatures.map((feat, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#E5E5E5] flex items-start gap-2.5 text-xs text-[#1D3557]">
                          <Eye className="w-4 h-4 text-[#457B9D] shrink-0 mt-0.5" />
                          <span className="font-medium">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Concierge & Visit Scheduling Card (Right 4 cols) */}
              <div className="lg:col-span-4 bg-white rounded-2xl p-5 border border-[#E5E5E5] space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#457B9D] block">
                  Sanctuary Concierge
                </span>

                <div className="space-y-2 text-xs text-[#1D3557]">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-3.5 h-3.5 text-[#D4A373]" />
                    <span>{selectedCampus.contactPhone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-3.5 h-3.5 text-[#457B9D]" />
                    <span>{selectedCampus.contactEmail}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <button
                    onClick={() => openModal('trial-booking', { campusId: selectedCampus.id, campusName: selectedCampus.name })}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#1D3557] text-white hover:bg-[#152740] font-heading font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Schedule Sanctuary Visit</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4A373]" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
