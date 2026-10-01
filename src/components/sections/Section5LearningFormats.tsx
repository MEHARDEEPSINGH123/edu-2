'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathway } from '@/context/PathwayContext';
import {
  Layers,
  Compass,
  ArrowRight,
  CheckCircle2,
  Users,
  Monitor,
  Building,
  Target,
  Flame,
  Zap,
  Clock,
  Sparkles
} from 'lucide-react';

interface FormatSpecification {
  id: string;
  name: string;
  tagline: string;
  icon: any;
  ratio: string;
  environment: string;
  weeklyHours: string;
  idealFor: string;
  description: string;
  features: string[];
  image: string;
}

const LEARNING_FORMATS: FormatSpecification[] = [
  {
    id: 'in-person',
    name: 'In-Person Academic Sanctuary',
    tagline: 'Total cognitive immersion within architectural study sanctuaries',
    icon: Building,
    ratio: '1 Faculty Fellow : 8-10 Scholars',
    environment: '10 Singapore Sanctuaries (Marina Bay, Bukit Timah, Buona Vista...)',
    weeklyHours: '3.0 - 4.5 Hours / Week',
    idealFor: 'Students who thrive on quiet physical focus, laboratory apparatus, and face-to-face Socratic interaction.',
    description: 'Our physical sanctuaries are architecturally acoustically baffled spaces equipped with Herman Miller workstations, dual-display research terminals, and physical demonstration benches. Designed to completely eliminate domestic distractions.',
    features: [
      'Access to specialized physical laboratory and wet science equipment',
      'Dedicated silent study carrels available 7 days a week',
      'Immediate in-person heuristic feedback during problem drills',
      'Full physical library of historical Singapore & Cambridge exam archives'
    ],
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'hybrid',
    name: 'Hybrid Flexible Rigor',
    tagline: 'Seamless synchrony between campus immersion and home review',
    icon: Layers,
    ratio: '1 Faculty Fellow : 8 Scholars',
    environment: 'Bi-weekly Sanctuary attendance + 4K Synchronous Digital Stream',
    weeklyHours: '3.0 Hours / Week + Asynchronous Vault',
    idealFor: 'Active student leaders, athletes, and busy scholars balancing intense CCAs with top academic targets.',
    description: 'Never miss a crucial syllabus concept. Attend core analytical lectures physically at your regional campus, while accessing digital problem clinics and revision suites seamlessly from home.',
    features: [
      'Synchronous 4K dual-camera lecture broadcasts with digital whiteboard feeds',
      'On-demand searchable session recordings with AI conceptual indexing',
      'Flexibility to swap between campus and online attendance as schedules demand',
      'Bi-weekly physical mock paper crucible sessions at regional hubs'
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'online-live',
    name: 'Online Live Interactive Seminar',
    tagline: 'Real-time Socratic discourse with Singapore’s premier educators',
    icon: Monitor,
    ratio: '1 Faculty Fellow : 6 Scholars',
    environment: 'Low-latency interactive digital whiteboard studio',
    weeklyHours: '2.5 Hours / Week',
    idealFor: 'Students residing across Singapore or overseas international candidates seeking Cambridge/IBDP distinction.',
    description: 'Not a passive webinar. Our online live seminars mandate active Socratic dialogue, real-time tablet step-by-step problem annotation, and interactive breakout problem-solving crucible rounds.',
    features: [
      'Interactive real-time stylus whiteboard collaboration on student tablets',
      'Live code execution and computational simulation sandboxes',
      'Instant polling for conceptual misconception detection',
      'Digital annotated PDF notes delivered immediately upon seminar conclusion'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'mentorship',
    name: '1-on-1 Academic Mentorship',
    tagline: 'Bespoke syllabus velocity and direct research thesis direction',
    icon: Target,
    ratio: 'Strict 1 : 1 Academic Fellow',
    environment: 'Private Executive Mentorship Suites or Dedicated Virtual Suite',
    weeklyHours: 'Flexible (2.0 - 4.0 Hours / Week)',
    idealFor: 'Olympiad aspirants, H3/Extended Essay researchers, or students requiring rapid grade turnaround.',
    description: 'The pinnacle of personalized academic cultivation. You are paired with a senior Cambridge, Oxford, or NUS faculty fellow who tailors every minute of instruction to your specific cognitive blueprint.',
    features: [
      'Customized syllabus pacing accelerated up to 2x standard school curriculum',
      'Dedicated guidance for Olympiad papers, DSA talent portfolios, and research fairs',
      'Direct WhatsApp/Slack communication channel with your faculty mentor',
      'Comprehensive weekly written analytical progress reports provided to parents'
    ],
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'small-group',
    name: 'Small Cohort Socratic Circle',
    tagline: 'Collaborative peer dialectic capped strictly at six scholars',
    icon: Users,
    ratio: 'Strict Cap: Max 6 Scholars',
    environment: 'Colonial Roundtable Salon or Glass Amphitheater Pod',
    weeklyHours: '3.0 Hours / Week',
    idealFor: 'Scholars aiming for top 1% percentiles who benefit from high-level peer debate and mutual accountability.',
    description: 'Modelled after Oxford and Cambridge tutorial colloquia. In a circle of 6 ambitious peers, ideas are debated, alternative mathematical proofs are compared, and students learn to defend their reasoning under faculty guidance.',
    features: [
      'Peer-to-peer proof critique and mark scheme defense rounds',
      'Dynamic group problem solving for 6-mark non-routine questions',
      'Healthy intellectual camaraderie fostering long-term academic resilience',
      'Curated cohort pairing based on matching diagnostic cognitive speeds'
    ],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'bootcamp',
    name: 'Intensive Holiday Sprint Bootcamp',
    tagline: 'High-velocity exam crucibles during March, June, and September breaks',
    icon: Flame,
    ratio: '1 Faculty Fellow : 10 Scholars',
    environment: 'Immersive All-Day Academic Intensives',
    weeklyHours: '15 - 20 Hours / Intensive Sprint',
    idealFor: 'Sec 4, JC2, and IB Year 2 candidates seeking to eliminate syllabus backlogs and calibrate exam endurance.',
    description: 'Concentrated intellectual sprints designed to transform a year of material into crystal-clear schemas. Includes simulated morning/afternoon papers, cross-school prelim triaging, and real-time error eradication.',
    features: [
      'Timed full-dress examination simulations under official exam conditions',
      'Surgical triage of the 50 most difficult questions from top school prelim papers',
      'Daily physiological focus recovery protocols and stamina conditioning',
      'Guaranteed elimination of conceptual blind-spots prior to national sittings'
    ],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80'
  }
];

export default function Section5LearningFormats() {
  const { currentPathway, setLearningPreference, openModal } = usePathway();
  const [activeFormat, setActiveFormat] = useState<FormatSpecification>(LEARNING_FORMATS[0]);

  return (
    <section id="learning-formats" className="py-20 lg:py-28 bg-[#F8F7F4] border-t border-[#E5E5E5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1D3557]/5 border border-[#1D3557]/15 text-xs font-semibold text-[#1D3557] mb-3">
            <Layers className="w-3.5 h-3.5 text-[#D4A373]" />
            <span className="uppercase tracking-wider">Section 05</span>
            <span className="text-gray-300">·</span>
            <span className="text-[#457B9D]">Pedagogical Modalities</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1D3557] tracking-tight">
            Learning{' '}
            <span className="font-editorial italic font-normal text-[#D4A373]">
              Formats.
            </span>
          </h2>

          <p className="mt-4 text-base text-[#1D3557]/75 font-sans leading-relaxed">
            Pedagogy cannot follow a one-size-fits-all model. Explore our six distinct learning
            architectures designed to match individual cognitive rhythms and logistical realities.
          </p>
        </div>

        {/* Formats Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
          {LEARNING_FORMATS.map((fmt) => {
            const isSelected = activeFormat.id === fmt.id;
            const Icon = fmt.icon;
            return (
              <button
                key={fmt.id}
                onClick={() => {
                  setActiveFormat(fmt);
                  setLearningPreference(fmt.name);
                }}
                className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1D3557] border-[#1D3557] text-white shadow-sm'
                    : 'bg-white border-[#E5E5E5] text-[#1D3557] hover:border-[#D4A373]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#F4E1C1]' : 'text-[#457B9D]'}`} />
                  <span className={`text-[9px] font-bold uppercase ${isSelected ? 'text-[#D4A373]' : 'text-gray-400'}`}>
                    {fmt.ratio.split(':')[0].trim()}
                  </span>
                </div>
                <div className="font-heading font-bold text-xs leading-snug">
                  {fmt.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Format Immersive Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFormat.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="academic-card rounded-3xl p-6 sm:p-10 bg-white border border-[#E5E5E5] shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Details & Specs */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#457B9D] mb-2">
                  <span>Pedagogical Architecture</span>
                  <span>•</span>
                  <span>{activeFormat.ratio}</span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1D3557] mb-2">
                  {activeFormat.name}
                </h3>

                <p className="font-editorial italic text-lg sm:text-xl text-[#D4A373] mb-4">
                  "{activeFormat.tagline}"
                </p>

                <p className="text-sm text-[#1D3557]/80 leading-relaxed font-sans mb-6">
                  {activeFormat.description}
                </p>

                {/* Key Spec Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-[#F8F7F4] border border-[#E5E5E5] text-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Weekly Commitment</span>
                    <span className="font-bold text-[#1D3557]">{activeFormat.weeklyHours}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 block">Ideal Candidate Profile</span>
                    <span className="font-bold text-[#1D3557]">{activeFormat.idealFor}</span>
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-2 mb-8">
                  {activeFormat.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1D3557]/85 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      setLearningPreference(activeFormat.name);
                      openModal('trial-booking', { pathway: currentPathway, preference: activeFormat.name });
                    }}
                    className="py-3 px-5 rounded-xl bg-[#1D3557] text-white hover:bg-[#152740] font-heading font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#F4E1C1]" />
                    <span>Select & Book Diagnostic in This Modality</span>
                  </button>

                  <button
                    onClick={() => {
                      const el = document.getElementById('journey-builder');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="py-3 px-4 rounded-xl bg-[#F8F7F4] text-[#1D3557] hover:bg-gray-100 font-heading font-semibold text-xs border border-[#E5E5E5] transition-colors cursor-pointer"
                  >
                    Adopt in Journey Builder
                  </button>
                </div>
              </div>

              {/* Right Column: High-Res Editorial Photography */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-[#E5E5E5]">
                  <img
                    src={activeFormat.image}
                    alt={activeFormat.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4E1C1] block">
                      Authentic Learning Environment
                    </span>
                    <span className="text-xs font-semibold block mt-0.5">
                      {activeFormat.environment}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
