'use client';

import React from 'react';
import PathwayNavigation from '@/components/navigation/PathwayNavigation';
import LandingExperience from '@/components/hero/LandingExperience';
import Section1JourneyBuilder from '@/components/sections/Section1JourneyBuilder';
import Section2LearningPathways from '@/components/sections/Section2LearningPathways';
import Section3CourseDiscovery from '@/components/sections/Section3CourseDiscovery';
import Section4TrialClassExplorer from '@/components/sections/Section4TrialClassExplorer';
import Section5LearningFormats from '@/components/sections/Section5LearningFormats';
import Section6AdmissionStudio from '@/components/sections/Section6AdmissionStudio';
import Section7Scholarships from '@/components/sections/Section7Scholarships';
import Section8CampusExperience from '@/components/sections/Section8CampusExperience';
import Section9SuccessStories from '@/components/sections/Section9SuccessStories';
import Section10ParentResourceCentre from '@/components/sections/Section10ParentResourceCentre';
import Section11ExamCalendar from '@/components/sections/Section11ExamCalendar';
import Section12Certifications from '@/components/sections/Section12Certifications';
import Section13FinalCTA from '@/components/sections/Section13FinalCTA';
import AcademicFooter from '@/components/footer/AcademicFooter';
import TrialBookingModal from '@/components/modals/TrialBookingModal';
import AdmissionApplicationModal from '@/components/modals/AdmissionApplicationModal';
import JourneyBlueprintModal from '@/components/modals/JourneyBlueprintModal';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4] text-[#1D3557] relative">
      
      {/* Dynamic Academic Pathway Navigation */}
      <PathwayNavigation />

      {/* Hero: Design Your Academic Journey (Fullscreen Landing Experience) */}
      <LandingExperience />

      {/* Section 01: Academic Journey Builder (The Centerpiece) */}
      <Section1JourneyBuilder />

      {/* Section 02: Learning Pathways */}
      <Section2LearningPathways />

      {/* Section 03: Course Discovery Experience (Learning Journeys, NOT Cards) */}
      <Section3CourseDiscovery />

      {/* Section 04: Trial Class Explorer (Live Availability) */}
      <Section4TrialClassExplorer />

      {/* Section 05: Learning Formats */}
      <Section5LearningFormats />

      {/* Section 06: Admission Studio */}
      <Section6AdmissionStudio />

      {/* Section 07: Scholarship Opportunities */}
      <Section7Scholarships />

      {/* Section 08: Campus Experience (Virtual Exploration, NOT Cards) */}
      <Section8CampusExperience />

      {/* Section 09: Academic Success Stories (Editorial Storytelling, NO Sliders) */}
      <Section9SuccessStories />

      {/* Section 10: Parent Resource Centre */}
      <Section10ParentResourceCentre />

      {/* Section 11: Exam Calendar (Singapore-Focused Timeline) */}
      <Section11ExamCalendar />

      {/* Section 12: Certifications */}
      <Section12Certifications />

      {/* Section 13: Final CTA (Your Future Starts With A Plan) */}
      <Section13FinalCTA />

      {/* Platform Academic Footer */}
      <AcademicFooter />

      {/* Interactive Modals */}
      <TrialBookingModal />
      <AdmissionApplicationModal />
      <JourneyBlueprintModal />

    </main>
  );
}
