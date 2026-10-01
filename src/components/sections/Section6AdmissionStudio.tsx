'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import { PATHWAYS } from '@/data/academyData';
import {
  UserCheck,
  CheckCircle2,
  FileText,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Building,
  GraduationCap,
  Sparkles
} from 'lucide-react';

interface AdmissionStep {
  step: number;
  title: string;
  subtitle: string;
  duration: string;
  details: string;
  requirements: string[];
}

const ADMISSION_STEPS: AdmissionStep[] = [
  {
    step: 1,
    title: 'Diagnostic Baseline & Cognitive Portfolio',
    subtitle: 'Evaluate underlying problem-solving schemas rather than raw memorization',
    duration: '90 Minutes Diagnostic',
    details: 'The candidate completes a specialized cognitive assessment evaluating first-principles conceptual grasp, heuristic classification speed, and spatial logic.',
    requirements: [
      'Submission of latest semester school report card or transcript',
      'Completion of 90-minute Eduvanta cognitive rubric test',
      'Declaration of target academic goals and university/JC aspirations'
    ]
  },
  {
    step: 2,
    title: 'Faculty Fellow Strategic Consultation',
    subtitle: 'A bespoke 1-on-1 dialogue with senior academic director',
    duration: '45 Minutes Dialogue',
    details: 'Parents and student meet with a Senior Fellow to review the diagnostic analysis. We formulate an unambiguous roadmap bridging current gaps to target examination grades.',
    requirements: [
      'Joint parent-student attendance at preferred campus sanctuary',
      'Discussion of learning modality and scheduling preferences',
      'Selection of recommended academic velocity track'
    ]
  },
  {
    step: 3,
    title: 'Transcript Verification & Prerequisite Audit',
    subtitle: 'Ensuring cohort intellectual alignment and prerequisite integrity',
    duration: '24-48 Hours Turnaround',
    details: 'Our admissions council verifies candidate documentation and aligns placement with fellow peers of matching intellectual velocity to ensure peer-learning synergy.',
    requirements: [
      'Official identification verification (Singapore NRIC / Student Pass)',
      'Signed Academic Integrity & Socratic Code of Conduct',
      'For Olympiad / H3 tracks: proof of qualifying prerequisite grades'
    ]
  },
  {
    step: 4,
    title: 'Sanctuary Allocation & Cohort Matching',
    subtitle: 'Placement into your chosen regional campus and time slot',
    duration: 'Instant Allocation',
    details: 'Formal assignment to your cohort of maximum 6 to 10 scholars at Marina Bay, Bukit Timah, Buona Vista, or regional sanctuaries.',
    requirements: [
      'Finalization of weekly timetable slot',
      'Sanctuary access pass and digital portal credential issuance',
      'Orientation welcome package and initial curriculum materials'
    ]
  },
  {
    step: 5,
    title: 'Term Onboarding & First Crucible',
    subtitle: 'Beginning your transformed academic trajectory',
    duration: 'Week 1 Onboarding',
    details: 'Student enters their first academic seminar with clear benchmark metrics, assigned personal faculty mentor, and direct communication access.',
    requirements: [
      'Access to digital lecture recording archive',
      'Receipt of physical curated problem sets and bound treatises',
      'First milestone checkpoint scheduled at Week 4'
    ]
  }
];

export default function Section6AdmissionStudio() {
  const { currentPathway, openModal } = usePathway();
  const [activeStep, setActiveStep] = useState<number>(1);

  // Quick Eligibility Checker State
  const [studentScore, setStudentScore] = useState<string>('75-84%');
  const [targetAim, setTargetAim] = useState<string>('Top Distinction');

  const pathwayInfo = PATHWAYS[currentPathway];

  return (
    <section id="admission-studio" className="py-20 lg:py-28 bg-white border-t border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/5 border border-[#1D3557]/15 text-xs font-semibold text-[#1D3557] mb-3">
              <UserCheck className="w-3.5 h-3.5 text-[#D4A373]" />
              <span className="uppercase tracking-wider">Section 06</span>
              <span className="text-gray-300">·</span>
              <span className="text-[#457B9D]">Admission Studio</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1D3557] tracking-tight">
              Admission{' '}
              <span className="font-editorial italic font-normal text-[#D4A373]">
                Studio.
              </span>
            </h2>

            <p className="mt-4 text-base text-[#1D3557]/75 font-sans leading-relaxed">
              Admission to Eduvanta Academy is cohort-based and diagnostic-first. We maintain strict
              scholar-to-faculty ratios to preserve exceptional intellectual rigor and individual accountability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              onClick={() => openModal('admission-intake', { pathway: currentPathway })}
              className="py-3 px-5 rounded-xl bg-[#1D3557] text-white hover:bg-[#152740] font-heading font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#F4E1C1]" />
              <span>Begin Intake Dossier</span>
            </button>
          </div>
        </div>

        {/* Dynamic Admission Progressive Workflow UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Steps Stepper Selector (Left 4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2 px-2">
              Progressive Admission Milestones
            </span>
            {ADMISSION_STEPS.map((step) => {
              const isSelected = activeStep === step.step;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-[#1D3557] border-[#1D3557] text-white shadow-sm'
                      : 'bg-[#F8F7F4] border-[#E5E5E5] text-[#1D3557] hover:border-[#D4A373]'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-[#D4A373] text-[#1D3557]'
                        : 'bg-white text-[#1D3557] border border-gray-300'
                    }`}
                  >
                    {step.step}
                  </span>
                  <div>
                    <div className="font-heading font-bold text-xs sm:text-sm leading-snug">
                      {step.title}
                    </div>
                    <div
                      className={`text-[10px] mt-0.5 line-clamp-1 ${
                        isSelected ? 'text-[#F4E1C1]' : 'text-gray-500'
                      }`}
                    >
                      {step.duration}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Canvas (Right 8 cols) */}
          <div className="lg:col-span-8">
            <div className="academic-card rounded-3xl p-6 sm:p-8 bg-[#F8F7F4] border border-[#E5E5E5] shadow-sm">
              {(() => {
                const current = ADMISSION_STEPS.find(s => s.step === activeStep) || ADMISSION_STEPS[0];
                return (
                  <div>
                    <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E5E5E5] mb-5">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#457B9D] block">
                          Stage {current.step} of 5
                        </span>
                        <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1D3557]">
                          {current.title}
                        </h3>
                        <p className="font-editorial italic text-base text-[#D4A373] mt-0.5">
                          "{current.subtitle}"
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-[#1D3557] bg-white px-3 py-1 rounded-full border border-gray-200">
                        {current.duration}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#1D3557]/80 leading-relaxed font-sans mb-6">
                      {current.details}
                    </p>

                    {/* Requirements checklist */}
                    <div className="bg-white rounded-2xl p-5 border border-[#E5E5E5] mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1D3557] block mb-3 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#D4A373]" />
                        Prerequisite Documentation & Criteria
                      </span>
                      <ul className="space-y-2 text-xs text-[#1D3557]/80">
                        {current.requirements.map((req, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="text-xs text-gray-500">
                        Current Pathway: <strong className="text-[#1D3557]">{pathwayInfo.name}</strong>
                      </div>
                      <div className="flex items-center gap-3">
                        {activeStep < 5 && (
                          <button
                            onClick={() => setActiveStep(activeStep + 1)}
                            className="py-2.5 px-4 rounded-xl bg-white border border-[#E5E5E5] text-[#1D3557] hover:bg-gray-50 font-heading font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer"
                          >
                            <span>Next: Stage {activeStep + 1}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#D4A373]" />
                          </button>
                        )}
                        <button
                          onClick={() => openModal('admission-intake', { pathway: currentPathway, step: activeStep })}
                          className="py-2.5 px-5 rounded-xl bg-[#1D3557] text-white hover:bg-[#152740] font-heading font-semibold text-xs transition-colors cursor-pointer shadow-xs"
                        >
                          Submit Stage Dossier
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

        </div>

        {/* Dynamic Intake Calendar & Deadlines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E5]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#457B9D] block mb-1">
              Upcoming Intake Cycle
            </span>
            <div className="font-heading font-bold text-base text-[#1D3557] mb-1">
              Semester 1 Scholar Intake
            </div>
            <div className="text-xs text-gray-600 mb-3">
              Rolling intake for Term 1. Diagnostic slots allocated by date of dossier submission.
            </div>
            <div className="text-[11px] font-semibold text-[#D4A373]">
              Application Deadline: October 31, 2026
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E5]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#457B9D] block mb-1">
              Olympiad & H3 Fellowships
            </span>
            <div className="font-heading font-bold text-base text-[#1D3557] mb-1">
              Advanced Research Track
            </div>
            <div className="text-xs text-gray-600 mb-3">
              Requires diagnostic assessment score &gt; 80% or school nomination letter.
            </div>
            <div className="text-[11px] font-semibold text-[#D4A373]">
              Assessment Window: Open Year-Round
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E5]">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#457B9D] block mb-1">
              Direct School Admission (DSA)
            </span>
            <div className="font-heading font-bold text-base text-[#1D3557] mb-1">
              Talent Portfolio Review
            </div>
            <div className="text-xs text-gray-600 mb-3">
              Tailored curation of science and mathematical competitions for P6 & Sec 4 applicants.
            </div>
            <div className="text-[11px] font-semibold text-[#D4A373]">
              Intake Closing: Rolling Consultations
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
