'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { getCoursesByPathway, getEnrichedCourses, PATHWAYS } from '@/data/academyData';
import { EnrichedCourse, PathwayKey } from '@/types/academy';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import {
  Compass,
  ArrowRight,
  Sparkles,
  BookOpen,
  Calendar,
  Layers,
  CheckCircle2,
  Clock,
  Award,
  ChevronRight,
  Filter,
  Users,
  Search,
  ExternalLink
} from 'lucide-react';

export default function Section3CourseDiscovery() {
  const { currentPathway, setPathway, openModal } = usePathway();

  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedJourneyCourse, setSelectedJourneyCourse] = useState<EnrichedCourse | null>(null);
  useBodyScrollLock(Boolean(selectedJourneyCourse));

  const coursesInPathway = getCoursesByPathway(currentPathway);

  // Extract unique subjects for filtering
  const subjects = ['All', ...Array.from(new Set(coursesInPathway.map(c => c.subject)))];

  const filteredCourses = coursesInPathway.filter(c => {
    const matchesDiscipline = selectedDiscipline === 'All' || c.subject === selectedDiscipline;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiscipline && matchesSearch;
  });

  // Group filtered courses into dynamic learning journeys
  const journeyTracks = [
    {
      title: 'Foundation to Distinction Flightpath',
      subtitle: 'Progressive mastery from core principles to high-distinction examination execution',
      courses: filteredCourses.slice(0, 3)
    },
    {
      title: 'Advanced Honours & Olympiad Trajectory',
      subtitle: 'Accelerated problem-solving heuristics and competitive scholarly depth',
      courses: filteredCourses.slice(3, 6)
    }
  ];

  return (
    <section id="course-discovery" className="py-20 lg:py-28 bg-[#F8F7F4] border-t border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Learning Journeys, NOT Course Cards */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/5 border border-[#1D3557]/15 text-xs font-semibold text-[#1D3557] mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#D4A373]" />
            <span className="uppercase tracking-wider">Section 03</span>
            <span className="text-gray-300">·</span>
            <span className="text-[#457B9D]">Goal-Connected Pathways</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1D3557] tracking-tight">
            Course Discovery{' '}
            <span className="font-editorial italic font-normal text-[#D4A373]">
              Experience.
            </span>
          </h2>

          <p className="mt-4 text-base text-[#1D3557]/75 font-sans leading-relaxed">
            We reject the concept of browsing isolated course cards. In our platform, every academic
            offering is an interconnected waypoint on an integrated learning journey toward your goal.
          </p>
        </div>

        {/* Filter & Subject Selection Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#E5E5E5] mb-10 shadow-xs">
          
          {/* Disciplines Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {subjects.map((subj) => (
              <button
                key={subj}
                onClick={() => setSelectedDiscipline(subj)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedDiscipline === subj
                    ? 'bg-[#1D3557] text-white shadow-xs'
                    : 'bg-[#F8F7F4] text-[#1D3557]/70 hover:bg-gray-100 hover:text-[#1D3557]'
                }`}
              >
                {subj}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search syllabus, code or ID..."
              className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-[#F8F7F4] border border-[#E5E5E5] text-xs text-[#1D3557] focus:outline-none focus:border-[#1D3557]"
            />
          </div>

        </div>

        {/* Learning Journeys Presentation (Interconnected Track Flow) */}
        <div className="space-y-12">
          {journeyTracks.map((track, trackIdx) => {
            if (track.courses.length === 0) return null;
            return (
              <div
                key={trackIdx}
                className="academic-card rounded-3xl p-6 sm:p-8 bg-white border border-[#E5E5E5] shadow-sm relative overflow-hidden"
              >
                {/* Track Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E5E5] mb-8">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#D4A373]" />
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#457B9D]">
                        Trajectory 0{trackIdx + 1}
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1D3557]">
                      {track.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1D3557]/70 font-sans mt-0.5">
                      {track.subtitle}
                    </p>
                  </div>

                  <div className="text-right sm:shrink-0">
                    <span className="text-xs font-semibold text-[#1D3557] bg-[#F8F7F4] px-3 py-1.5 rounded-xl border border-gray-200">
                      {track.courses.length} Sequential Modules
                    </span>
                  </div>
                </div>

                {/* Sequential Journey Pipeline */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                  {track.courses.map((course, cIdx) => (
                    <div
                      key={course.id}
                      onClick={() => setSelectedJourneyCourse(course)}
                      className="group relative rounded-2xl p-6 bg-[#F8F7F4] hover:bg-white border border-[#E5E5E5] hover:border-[#D4A373] transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
                    >
                      {/* Step Indicator */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#1D3557] text-[#F4E1C1]">
                            Waypoint 0{cIdx + 1}
                          </span>
                          <span className="text-[10px] font-semibold text-gray-500 font-mono">
                            {course.id} · {course.code.split('-')[0]}
                          </span>
                        </div>

                        <h4 className="font-heading font-bold text-base text-[#1D3557] group-hover:text-[#457B9D] transition-colors leading-snug mb-2">
                          {course.name}
                        </h4>

                        <div className="text-xs text-[#1D3557]/70 font-sans line-clamp-2 mb-4">
                          Target: {course.targetMilestone}
                        </div>

                        {/* Syllabus preview pills */}
                        <div className="space-y-1.5 mb-4">
                          {course.syllabusModules.slice(0, 2).map((mod, mIdx) => (
                            <div key={mIdx} className="text-[11px] text-gray-600 flex items-center gap-1.5 truncate">
                              <span className="w-1 h-1 rounded-full bg-[#D4A373] shrink-0" />
                              <span className="truncate">{mod}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Course Footer & Meta */}
                      <div className="pt-4 border-t border-gray-200/80">
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="text-gray-500 font-medium">{course.format}</span>
                          <span className="font-bold text-[#1D3557]">S${course.monthlyFeeSGD} / mo</span>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-[#457B9D]">
                          <span className="truncate">Fellow: {course.facultyMentorName.split(',')[0]}</span>
                          <span className="font-semibold text-emerald-600 shrink-0">
                            {course.spotsRemaining} spots left
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Journey Outcome & Route CTA */}
                <div className="mt-8 pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-2 text-[#1D3557]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A373] shrink-0" />
                    <span>
                      Completing this journey yields accreditation for{' '}
                      <strong className="text-[#1D3557]">{track.courses[0]?.certificationId}</strong> & Direct Admission eligibility.
                    </span>
                  </div>

                  <button
                    onClick={() => openModal('trial-booking', { pathway: currentPathway, courseId: track.courses[0]?.id })}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D3557] hover:text-[#457B9D] transition-colors cursor-pointer group"
                  >
                    <span>Inspect Diagnostic Trial for this Track</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D4A373]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Course Deep-Dive Drawer Modal (When course clicked) */}
        <AnimatePresence>
          {selectedJourneyCourse && (
            <motion.div
              data-lenis-prevent="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overscroll-contain"
              onClick={() => setSelectedJourneyCourse(null)}
            >
              <motion.div
                data-lenis-prevent="true"
                role="dialog"
                aria-modal="true"
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#E5E5E5] max-h-[88vh] overflow-y-auto overscroll-contain"
              >
                <div className="flex items-center justify-between pb-4 border-b border-[#E5E5E5] mb-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#457B9D] block">
                      Course Specification Dossier · {selectedJourneyCourse.id}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-[#1D3557]">
                      {selectedJourneyCourse.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedJourneyCourse(null)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:text-black cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E5] mb-6 text-xs">
                  <div>
                    <span className="text-gray-500 block text-[10px]">Academic Rigor</span>
                    <span className="font-bold text-[#1D3557]">{selectedJourneyCourse.academicRigor}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Modality</span>
                    <span className="font-bold text-[#1D3557]">{selectedJourneyCourse.format}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Monthly Fee</span>
                    <span className="font-bold text-[#1D3557]">S${selectedJourneyCourse.monthlyFeeSGD}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block text-[10px]">Weekly Rigor</span>
                    <span className="font-bold text-[#1D3557]">{selectedJourneyCourse.hoursPerWeek} Hours</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#1D3557] mb-2">
                      Syllabus Modules & Analytical Scaffolding
                    </h5>
                    <div className="space-y-2">
                      {selectedJourneyCourse.syllabusModules.map((mod, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-gray-50 border border-gray-200 text-xs text-[#1D3557] flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-[#1D3557] text-[#F4E1C1] text-[10px] font-bold flex items-center justify-center shrink-0">
                            {i + 1}
                          </span>
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#1D3557] mb-2">
                      Target Learning Competencies
                    </h5>
                    <ul className="space-y-1.5">
                      {selectedJourneyCourse.learningOutcomes.map((out, i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F4E1C1]/20 border border-[#D4A373]/30 text-xs">
                    <span className="font-bold text-[#1D3557] block mb-0.5">Faculty Lead Mentor:</span>
                    <span className="text-[#457B9D] font-medium">{selectedJourneyCourse.facultyMentorName}</span>
                    <span className="text-gray-500 block text-[11px] mt-1">Eligibility: {selectedJourneyCourse.eligibility}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const courseId = selectedJourneyCourse.id;
                      setSelectedJourneyCourse(null);
                      openModal('trial-booking', { pathway: currentPathway, courseId });
                    }}
                    className="flex-1 py-3 rounded-xl bg-[#1D3557] text-white hover:bg-[#152740] font-heading font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#F4E1C1]" />
                    <span>Book Diagnostic Masterclass for this Module</span>
                  </button>

                  <button
                    onClick={() => {
                      setSelectedJourneyCourse(null);
                      openModal('admission-intake', { course: selectedJourneyCourse });
                    }}
                    className="px-4 py-3 rounded-xl bg-white border border-[#E5E5E5] text-[#1D3557] font-heading font-semibold text-xs hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Admission Route
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
