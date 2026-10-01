import rawDatasetJson from './eduvanta_academy_dataset.json';
import {
  RawDataset,
  PathwayKey,
  PathwayInfo,
  EnrichedCourse,
  EnrichedFacultyMentor,
  EnrichedSchedule,
  EnrichedTrialClass,
  EnrichedCertification,
  EnrichedReviewStory,
  EnrichedCampus,
  EnrichedScholarship,
  EnrichedParentResource,
  EnrichedExamCalendarItem
} from '@/types/academy';

const rawData = rawDatasetJson as RawDataset;

// Master Pathway Definitions
export const PATHWAYS: Record<PathwayKey, PathwayInfo> = {
  psle: {
    key: 'psle',
    name: 'PSLE Foundation & Olympiad',
    badge: 'Primary 5 - 6',
    tagline: 'Cognitive Agility & Critical Problem Heuristics',
    description: 'Transform foundational learning into deep conceptual mastery and Olympiad-level heuristics for Singapore Primary School Leaving Examination (PSLE) Achievement Level (AL1) success.',
    targetAge: 'Ages 10 - 12 (P5 to P6)',
    duration: '1 to 2 Academic Years',
    nationalExam: 'Singapore MOE PSLE Examination (October)',
    accentColor: '#457B9D',
    targetGoals: [
      'Attain AL1 in Mathematics & Science',
      'Direct School Admission (DSA-Sec) Talent Portfolio',
      'Mathematical Olympiad (SMOPS/NMOS) Distinction',
      'Integrated Programme (IP) School Direct Placement'
    ],
    milestones: [
      {
        stage: 'Diagnostic Baseline',
        description: 'Comprehensive cognitive heuristic mapping across 14 PSLE question archetypes.',
        checkpoint: 'Term 1 Week 4',
        expectedOutcome: 'Zero-ambiguity diagnostics on non-routine heuristic problem solving'
      },
      {
        stage: 'Structural Mastery',
        description: 'Advanced heuristic modeling, bar modeling transcendence, and science inquiry application.',
        checkpoint: 'Term 2 Week 8',
        expectedOutcome: 'Consistent >85% performance on top-tier IP primary school preliminary papers'
      },
      {
        stage: 'DSA Academic Portfolio',
        description: 'Olympiad competition preparation and academic talent interview curation for IP schools.',
        checkpoint: 'June Intensive Sprint',
        expectedOutcome: 'Confirmed DSA interview readiness and Olympiad medal qualification'
      },
      {
        stage: 'Final Exam Simulation',
        description: 'Time-pressured national standard simulation papers with biometric focus tracking.',
        checkpoint: 'August Pre-PSLE Intensive',
        expectedOutcome: 'AL1 target precision in English, Math, and Science'
      }
    ]
  },
  olevel: {
    key: 'olevel',
    name: 'GCE O-Level & IP Core',
    badge: 'Secondary 3 - 4',
    tagline: 'Analytical Rigor & Systematic First-Principles Mastery',
    description: 'Elevate lower-secondary knowledge into rigorous upper-secondary analytical power. Engineered for L1R5 ≤ 8 and direct entry into Raffles, Hwa Chong, and premier Junior Colleges.',
    targetAge: 'Ages 14 - 16 (Sec 3 to Sec 4 / Year 3-4 IP)',
    duration: '2 Academic Years',
    nationalExam: 'Singapore-Cambridge GCE O-Level (October - November)',
    accentColor: '#1D3557',
    targetGoals: [
      'Raw L1R5 ≤ 6 Target Score',
      'Double / Triple Pure Sciences Distinctions (A1)',
      'Additional Mathematics (A-Math) Pure Mastery',
      'Junior College DSA-JC Academic Track Qualification'
    ],
    milestones: [
      {
        stage: 'Foundational Proofs & Schemas',
        description: 'Deconstruct complex calculus, kinematics, organic chemistry, and literature treaties.',
        checkpoint: 'Sec 3 Term 2',
        expectedOutcome: 'Mastery of foundational theorem derivations and multi-step deduction'
      },
      {
        stage: 'Cross-Topic Synthesis',
        description: 'Synthesizing electrochemistry with thermodynamics; coordinate geometry with vectors.',
        checkpoint: 'Sec 4 Term 1',
        expectedOutcome: 'Consistent Grade A1 on cross-thematic integrated examination problems'
      },
      {
        stage: 'Prelim Mastery & JAE Strategy',
        description: 'Comprehensive school prelim triage, timing discipline, and mock mark-scheme calibration.',
        checkpoint: 'July Prelim Sprint',
        expectedOutcome: 'L1R5 raw score below 8 across national top school prelim papers'
      },
      {
        stage: 'O-Level Distinction Crucible',
        description: 'Final refinement on Cambridge marker nuances, keyword precision, and exam psychological flow.',
        checkpoint: 'September O-Level Crucible',
        expectedOutcome: 'Target A1 in minimum 6 examinable subjects'
      }
    ]
  },
  alevel: {
    key: 'alevel',
    name: 'GCE A-Level H1/H2/H3',
    badge: 'JC 1 - JC 2',
    tagline: 'Epistemic Depth & Pre-University Academic Excellence',
    description: 'Bespoke pre-university scholarship coaching covering H2/H3 Mathematics, Sciences, Economics, and General Paper. Designed for 90 Rank Points and global tier-1 university admissions.',
    targetAge: 'Ages 17 - 19 (JC1 & JC2)',
    duration: '2 Academic Years',
    nationalExam: 'Singapore-Cambridge GCE A-Level (November)',
    accentColor: '#D4A373',
    targetGoals: [
      'Perfect 90/90 or 70/70 UAS Rank Points',
      'Distinction in H3 Specialized University-Level Subjects',
      'Admission to Medicine, Law, Computer Science, or Ivy/Oxbridge',
      'Public Service Commission (PSC) & Government Merit Scholarships'
    ],
    milestones: [
      {
        stage: 'Epistemology & Abstract Rigor',
        description: 'Transition from rote mechanics to university-grade abstract mathematical and physical rigor.',
        checkpoint: 'JC1 Promo Milestones',
        expectedOutcome: 'Attainment of High B or A grades across all 4 H2 subjects in Promotional Exams'
      },
      {
        stage: 'H3 Research & University Paper Mastery',
        description: 'Engagement with university faculty research, advanced proofs, and micro-macro economic modeling.',
        checkpoint: 'JC2 Term 1',
        expectedOutcome: 'H3 distinction trajectory and scholarly publication / presentation readiness'
      },
      {
        stage: 'A-Level Prelim Crucible',
        description: 'Rigorous cross-school preliminary paper dissection under Cambridge examiner scrutiny.',
        checkpoint: 'JC2 August Prelims',
        expectedOutcome: 'University Admission Score (UAS) projection of 88.75 - 90 Rank Points'
      },
      {
        stage: 'National Examination Pinnacle',
        description: 'Final masterclass focus on General Paper rhetorical nuance and H2 examination execution.',
        checkpoint: 'October Final Crucible',
        expectedOutcome: 'Top 1% percentile national academic performance'
      }
    ]
  },
  ib: {
    key: 'ib',
    name: 'IB Diploma Programme (IBDP)',
    badge: 'IB Year 1 - 2',
    tagline: 'Global Mindset, Critical Inquiry & Holistic Distinction',
    description: 'Tailored for students at ACS(I), SJI, and international schools seeking a 43-45 point IB Diploma. Deep mentorship for Higher Level (HL) subjects, Theory of Knowledge, and Extended Essay.',
    targetAge: 'Ages 16 - 19 (Year 5 - 6 / IB DP)',
    duration: '2 Academic Years',
    nationalExam: 'International Baccalaureate DP Examination (May / November)',
    accentColor: '#2A9D8F',
    targetGoals: [
      'Target Score: 43 - 45 Points (World-Class Distinction)',
      'Grade 7 in all three Higher Level (HL) Disciplines',
      'Bonus 3 Points (Grade A in Extended Essay & TOK)',
      'Early Decision Admission to Stanford, MIT, Harvard, Oxford, Cambridge'
    ],
    milestones: [
      {
        stage: 'HL Conceptual Scaffolding',
        description: 'Deconstruct IBDP Assessment Criteria, Higher Level core syllabi, and inquiry methodologies.',
        checkpoint: 'Year 1 Term 2',
        expectedOutcome: 'Consistent Level 7 tracking on criterion-referenced HL assessments'
      },
      {
        stage: 'Internal Assessment (IA) & EE Mentorship',
        description: 'One-on-one thesis mentorship with academic research scholars for 24/24 IA submissions.',
        checkpoint: 'Year 1 Term 4 / Summer',
        expectedOutcome: 'Grade A caliber Extended Essay draft and polished Internal Assessments'
      },
      {
        stage: 'Theory of Knowledge (TOK) Exhibition & Essay',
        description: 'Epistemological framework defense, knowledge questions deconstruction, and rubric alignment.',
        checkpoint: 'Year 2 Term 1',
        expectedOutcome: 'High Grade A evaluation on TOK Essay and Exhibition curation'
      },
      {
        stage: 'Global Exam Simulation',
        description: 'Full time-bound simulations of Paper 1, Paper 2, and Paper 3 across all enrolled disciplines.',
        checkpoint: 'Year 2 Pre-Exam Intensive',
        expectedOutcome: 'Projected 44-45 Points with seamless international transcript release'
      }
    ]
  },
  igcse: {
    key: 'igcse',
    name: 'Cambridge IGCSE & International',
    badge: 'Grade 9 - 10',
    tagline: 'International Benchmarking & Accelerated Academic Foundation',
    description: 'World-recognized Cambridge Assessment International Education preparation. Cultivates global analytical capability, scientific inquiry, and language fluency for seamless transition to A-Levels or IB.',
    targetAge: 'Ages 13 - 16 (Years 9 - 10 / Grades 9 - 10)',
    duration: '1 to 2 Academic Years',
    nationalExam: 'Cambridge IGCSE Examination (May / June & Oct / Nov Series)',
    accentColor: '#E76F51',
    targetGoals: [
      'Straight A* / Grade 9s across all 8 Enrolled Subjects',
      'Cambridge Outstanding Learner Top in Singapore / World Award',
      'Seamless foundation for IBDP or GCE A-Levels',
      'Global academic fluency and competitive international transcript'
    ],
    milestones: [
      {
        stage: 'Cambridge Syllabus Mapping',
        description: 'Deep dive into extended curriculum syllabi, keyword exactness, and examiner conventions.',
        checkpoint: 'Term 1 Milestone',
        expectedOutcome: 'Command of Extended tier problem schemas across STEM and Humanities'
      },
      {
        stage: 'Practical Science & Coursework Studio',
        description: 'Alternative to practical lab data analysis, experimental design, and coursework refinement.',
        checkpoint: 'Term 3 Milestone',
        expectedOutcome: '100% on Paper 6 Experimental Skills & Coursework portfolios'
      },
      {
        stage: 'Global Past Paper Dissection',
        description: 'Analysis of 10 years of Cambridge examiner reports, common pitfalls, and mark scheme nuances.',
        checkpoint: 'Pre-Exam Term',
        expectedOutcome: 'Sustained >90% raw marks on Cambridge specimen papers'
      },
      {
        stage: 'A* Exam Execution',
        description: 'Timed crucible testing simulating international exam session conditions and grade boundaries.',
        checkpoint: 'Final Series Sprint',
        expectedOutcome: 'Confirmed 9 / A* grade across all examinations'
      }
    ]
  },
  skills: {
    key: 'skills',
    name: 'Advanced Skills & University Readiness',
    badge: 'Pre-Uni & Scholars',
    tagline: 'Algorithmic Thinking, Research Defense & Global Scholar Horizons',
    description: 'Transcend standard syllabi with university-level computational thinking, bio-medical research methodologies, quantitative financial modeling, and Oxbridge/Ivy League scholarly interview defense.',
    targetAge: 'Ages 15 - 20 (High School, JC, Polytechnic, Pre-University)',
    duration: 'Modular 12-Week Fellowships & Deep Intensives',
    nationalExam: 'Global Olympiads, Research Competitions & University Portfolios',
    accentColor: '#6B705C',
    targetGoals: [
      'First-Author Research Paper Submission to Scholarly Journals',
      'International Science & Engineering Fair (ISEF / SSEF) Distinction',
      'Kaggle & Algorithmic Competition Gold Medals',
      'Admissions Offers to Top 10 World Universities with Full Fellowship'
    ],
    milestones: [
      {
        stage: 'Literature Review & Foundational Theory',
        description: 'Read peer-reviewed research papers in AI, quantum mechanics, and econometric theory.',
        checkpoint: 'Sprint Week 3',
        expectedOutcome: 'Identification of novel academic thesis question and computational hypothesis'
      },
      {
        stage: 'Methodology & Laboratory / Code Synthesis',
        description: 'Execute machine learning pipeline or experimental protocol under faculty fellowship.',
        checkpoint: 'Sprint Week 6',
        expectedOutcome: 'Working prototype, dataset validation, or mathematical proof completion'
      },
      {
        stage: 'Academic Defense & Thesis Colloquium',
        description: 'Present findings before a panel of Cambridge, Stanford, and NUS academic fellows.',
        checkpoint: 'Sprint Week 9',
        expectedOutcome: 'Rigorous oral defense transcript and peer-review ready whitepaper'
      },
      {
        stage: 'Scholarly Portfolio Deployment',
        description: 'Integration of research accolades into Common App, UCAS, and scholarship dossiers.',
        checkpoint: 'Sprint Week 12',
        expectedOutcome: 'Irresistible academic portfolio credential for global admissions committees'
      }
    ]
  }
};

// Singapore Campuses Master Data mapped to CMP001 - CMP010
const SINGAPORE_CAMPUSES: Omit<EnrichedCampus, 'id'>[] = [
  {
    name: 'Marina Bay Academic Sanctuary',
    district: 'Financial District & Downtown',
    address: 'One Raffles Quay, North Tower Level 38, Singapore 048583',
    nearestMrt: 'Raffles Place MRT (EW14/NS26) / Telok Ayer MRT (DT18)',
    architecturalConcept: 'Panoramic skyline seminar amphitheater overlooking Marina Bay, designed with acoustic cedar baffling and private scholar suites for uninterrupted cognitive immersion.',
    specializedFacilities: [
      'Skyline Seminar Amphitheater',
      'Quantitative & Algorithmic Research Lab',
      'Private Academic Mentorship Suites',
      'Acoustic Silence Pods for Olympiad Preparation',
      'Fellows Lounge & Pre-University Reading Room'
    ],
    virtualTourKeyFeatures: [
      '360-degree Marina Bay skyline panorama during twilight study',
      'Ergonomic Herman Miller scholar workstations with dual 4K research displays',
      'Full Oxford-Cambridge reference library archive with MOE historical papers'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80',
    operatingHours: 'Monday – Sunday: 08:00 – 22:30 SGT',
    contactEmail: 'marinabay@eduvanta.edu.sg',
    contactPhone: '+65 6832 9001'
  },
  {
    name: 'Bukit Timah Scholars Pavilion',
    district: 'Prime Academic & Scholar Belt',
    address: '587 Bukit Timah Road, Crown Centre Scholar Wing, Singapore 269698',
    nearestMrt: 'Tan Kah Kee MRT (DT8) / Botanic Gardens MRT (CC19/DT9)',
    architecturalConcept: 'Nestled beside Singapore’s premier academic belt, featuring biophilic green courtyards, natural oak library tables, and quiet study colonnades for H2 and IBDP scholars.',
    specializedFacilities: [
      'Biophilic Glasshouse Reading Atrium',
      'Senior Academic Discussion Colonnades',
      'H2/HL Science Demonstration Bench & Wet Lab Simulation',
      'Socratic Roundtables for General Paper & TOK',
      'Private Thesis Presentation Studio'
    ],
    virtualTourKeyFeatures: [
      'Sunlit garden study terrace framed by tropical greenery',
      'Floor-to-ceiling Singapore academic archives dating back 25 years',
      'Acoustic isolation chambers for oral defense and debate recording'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80',
    operatingHours: 'Monday – Sunday: 08:30 – 22:00 SGT',
    contactEmail: 'bukittimah@eduvanta.edu.sg',
    contactPhone: '+65 6832 9002'
  },
  {
    name: 'Buona Vista One-North Tech Quad',
    district: 'Biomedical & Tech Innovation Cluster',
    address: '1 Fusionopolis Way, Connexis Academic Loft, Singapore 138632',
    nearestMrt: 'One-North MRT (CC23) / Buona Vista MRT (EW21/CC22)',
    architecturalConcept: 'Industrial-minimalist high-tech facility embedded in Singapore’s silicon hub, integrated with high-performance computing clusters and robotic prototyping stations.',
    specializedFacilities: [
      'High-Performance Computational GPU Cluster',
      'Data Science & Algorithmic Defense Arena',
      'Robotics & Sensor Engineering Sandbox',
      'Glass-walled Collaboration Pods with Digital Whiteboards',
      'Alumni Innovation Incubator'
    ],
    virtualTourKeyFeatures: [
      'Dual-laser ultra-wide interactive projection walls for code walkthroughs',
      'Hardware benchmarking terminal racks accessible to senior scholars',
      'Dedicated coffee bar with cold brew and adaptogenic focus blends'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
    operatingHours: 'Monday – Saturday: 08:00 – 23:00 SGT',
    contactEmail: 'onenorth@eduvanta.edu.sg',
    contactPhone: '+65 6832 9003'
  },
  {
    name: 'Orchard Paragon Academic Wing',
    district: 'Central Commercial Belt',
    address: '290 Orchard Road, Paragon Tower Level 14, Singapore 238859',
    nearestMrt: 'Orchard MRT (NS22/TE14) / Somerset MRT (NS23)',
    architecturalConcept: 'Editorial elegance in the heart of Orchard, curated with bespoke walnut cabinetry, warm ambient task lighting, and private consultation salons for parents and students.',
    specializedFacilities: [
      'Editorial Writing & Rhetoric Salon',
      'Parent-Faculty Diagnostic Advisory Lounge',
      'Humanities & Social Sciences Think-Tank Room',
      'Quiet Monastic Study Cubicles with Active Noise Cancellation',
      'Broadcast Studio for Global Masterclasses'
    ],
    virtualTourKeyFeatures: [
      'Serene acoustic soundscaping canceling city hustle completely',
      'Concierge academic service with private intake conference suites',
      'Curated international scholarship and pre-university prospectus gallery'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80',
    operatingHours: 'Monday – Sunday: 09:00 – 21:30 SGT',
    contactEmail: 'orchard@eduvanta.edu.sg',
    contactPhone: '+65 6832 9004'
  },
  {
    name: 'Tanjong Pagar Design & Science Hub',
    district: 'Heritage Port & Core Financial Belt',
    address: '7 Wallich Street, Guoco Tower Academic Wing, Singapore 078884',
    nearestMrt: 'Tanjong Pagar MRT (EW15) Direct Underground Link',
    architecturalConcept: 'Soaring 6-meter ceiling architectural loft blending heritage brickwork with Scandinavian minimalism, engineered for deep quantitative modeling and economics seminars.',
    specializedFacilities: [
      'Quantitative Econometrics Terminal Room',
      'Socratic Forum with Tiered Amphitheater Seating',
      'Peer-to-Peer Scholar Study Loft',
      'Specialized Higher Level Physics Rigor Lab',
      'Wellness & Focus Recovery Lounge'
    ],
    virtualTourKeyFeatures: [
      'Direct covered underground connection from Tanjong Pagar MRT',
      'Live Bloomberg financial feeds for economics and financial modeling courses',
      'Individual focus cocoons equipped with custom circadian lighting'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
    operatingHours: 'Monday – Sunday: 08:30 – 22:00 SGT',
    contactEmail: 'tanjongpagar@eduvanta.edu.sg',
    contactPhone: '+65 6832 9005'
  },
  {
    name: 'Novena Medical & Life Sciences Atrium',
    district: 'Health & Medical City Novena',
    address: '10 Sinaran Drive, Novena Medical Centre Academic Suite, Singapore 307506',
    nearestMrt: 'Novena MRT (NS20) Linked via Underpass',
    architecturalConcept: 'Purpose-engineered for aspiring medical, veterinary, and bio-molecular scholars, adjacent to Singapore’s premier medical precinct with simulated clinical diagnostic rooms.',
    specializedFacilities: [
      'Biomedical Science Simulation Suite',
      'Anatomy & Physiology 3D Holographic Model Pod',
      'Medical Ethics & BMAT/UCAT Defense Chamber',
      'Advanced Molecular Biology Modeling Terminal',
      'Dedicated Quiet Study Cloister'
    ],
    virtualTourKeyFeatures: [
      'Medical faculty mentorship rotunda for prospective doctor aspirants',
      'Extensive bio-ethics and clinical case study library',
      'Interactive 3D anatomical dissection visualization screens'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=80',
    operatingHours: 'Monday – Sunday: 08:00 – 22:00 SGT',
    contactEmail: 'novena@eduvanta.edu.sg',
    contactPhone: '+65 6832 9006'
  },
  {
    name: 'Jurong East Innovation Centre',
    district: 'West Regional Academic Hub',
    address: '3 Gateway Drive, Westgate Tower Executive Suite, Singapore 608532',
    nearestMrt: 'Jurong East MRT (NS1/EW24) Direct Bridge',
    architecturalConcept: 'Serving West Singapore’s premier scholars, featuring an open-plan glass pavilion designed to encourage spontaneous intellectual collaboration across science and humanities.',
    specializedFacilities: [
      'STEM Maker Studio & Logic Prototyping Bench',
      'Double Science Tiered Lecture Theatre',
      'Secondary to Pre-U Transition Coaching Suite',
      'Dedicated Parent Consultation Pods',
      'Express Diagnostic Testing Room'
    ],
    virtualTourKeyFeatures: [
      'Elevated views across the Jurong Lake District greenery',
      'Seamless multi-platform digital interactive boards in every seminar room',
      'Specialized quiet sprint cubicles reserved for O-Level and A-Level candidates'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1600&q=80',
    operatingHours: 'Monday – Sunday: 08:30 – 21:30 SGT',
    contactEmail: 'jurongeast@eduvanta.edu.sg',
    contactPhone: '+65 6832 9007'
  },
  {
    name: 'Tampines Regional Knowledge Loft',
    district: 'East Regional Academic Centre',
    address: '1 Tampines Central 5, CPF Building Scholar Wing, Singapore 529508',
    nearestMrt: 'Tampines MRT (EW2/DT32) Interchange',
    architecturalConcept: 'Expansive 10,000 sq ft academic sanctuary bringing world-class educational architecture to East Singapore, characterized by warm birchwood and expansive reading galleries.',
    specializedFacilities: [
      'Birchwood Reading Gallery & Math Commons',
      'PSLE Olympiad Heuristics Theatre',
      'Secondary Pure Science Demonstration Lab',
      'Collaborative Scholar Pods for Group Synthesis',
      'Alumni Academic Mentorship Booths'
    ],
    virtualTourKeyFeatures: [
      'Central amphitheater host to monthly faculty masterclasses and debates',
      'Dedicated primary school heuristic thinking sandbox with manipulative tools',
      'Silent reading mezzanine overlooking Tampines green corridors'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
    operatingHours: 'Monday – Sunday: 08:30 – 21:30 SGT',
    contactEmail: 'tampines@eduvanta.edu.sg',
    contactPhone: '+65 6832 9008'
  },
  {
    name: 'Serangoon Gardens Humanities Villa',
    district: 'North-East Heritage Estate',
    address: '12 Kensington Park Road, Estate Manor, Singapore 557264',
    nearestMrt: 'Lorong Chuan MRT (CC14) / Serangoon MRT (NE12/CC13)',
    architecturalConcept: 'A colonial heritage villa repurposed into a scholarly retreat, surrounded by tranquil courtyard fountains and frangipani trees, ideal for literature, history, and philosophy.',
    specializedFacilities: [
      'Heritage Socratic Rotunda with Courtyard Garden View',
      'Comparative Literature & Philosophy Salon',
      'Acoustic Chamber for Speech & Rhetorical Delivery',
      'Private Academic Retreat Writing Rooms',
      'Open-Air Scholar Patio for Tea & Colloquia'
    ],
    virtualTourKeyFeatures: [
      'Colonial high-ceiling architecture promoting expansive contemplation',
      'Surrounding gardens offering tranquil walks during intensive study intervals',
      'Extensive classic literature and critical theory physical archive'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80',
    operatingHours: 'Tuesday – Sunday: 09:00 – 21:00 SGT (Monday Closed)',
    contactEmail: 'serangoon@eduvanta.edu.sg',
    contactPhone: '+65 6832 9009'
  },
  {
    name: 'Woodlands North Scholars Studio',
    district: 'Northern Regional Hub & Border Gateway',
    address: '6 Woodlands Square, Woods Square Tower 2, Singapore 737737',
    nearestMrt: 'Woodlands MRT (NS9/TE2) / Woodlands North MRT (TE1)',
    architecturalConcept: 'Ultramodern cross-border academic hub connecting scholars across the northern corridor, boasting modular smart classrooms and high-definition video telepresence suites.',
    specializedFacilities: [
      'Smart Modular Academic Studios with Reconfigurable Acoustics',
      'Cross-Border Video Telepresence Seminar Hall',
      'Quantitative Problem-Solving Lab',
      'Parent Lounge with Real-Time Learning Progress Displays',
      'Individual Extended Study Pods'
    ],
    virtualTourKeyFeatures: [
      'Direct connection to Woods Square retail and wellness amenities',
      'Floor-to-ceiling glass providing energizing views of northern green reserves',
      'High-speed fiber connectivity for live synchrony with overseas faculty'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=80',
    operatingHours: 'Monday – Sunday: 08:30 – 21:30 SGT',
    contactEmail: 'woodlands@eduvanta.edu.sg',
    contactPhone: '+65 6832 9010'
  }
];

// Faculty Mentors Master Data (Mapped to TRN001 - TRN030 from dataset)
const FACULTY_DIRECTORY: Omit<EnrichedFacultyMentor, 'id' | 'rawName' | 'coursesMentored'>[] = [
  {
    name: 'Dr. Alistair Tan',
    title: 'Senior Academic Director & Chair of Pure Mathematics',
    academicBackground: 'Ph.D. in Pure Mathematics (Cambridge Tripos, 1st Class Honours)',
    specialization: 'Advanced Calculus, Number Theory & Mathematical Olympiad Heuristics',
    pathway: 'alevel',
    researchFocus: 'Stochastic calculus applications and higher-order heuristic problem schemas.'
  },
  {
    name: 'Prof. Evelyn Wei-Chen',
    title: 'Dean of Science Pedagogy & Ex-Raffles Institution Lead',
    academicBackground: 'M.Sc. in Quantum Optics (Imperial College London), Ex-MOE Senior Specialist',
    specialization: 'GCE A-Level H2/H3 Physics, Quantum Mechanics & Experimental Mechanics',
    pathway: 'alevel',
    researchFocus: 'Pedagogical bridging of relativistic kinematics to pre-university scholars.'
  },
  {
    name: 'Dr. Marcus Low, FRSChem',
    title: 'Chair of Chemical Sciences & Molecular Synthesis',
    academicBackground: 'Ph.D. in Organic Chemistry (National University of Singapore)',
    specialization: 'IBDP HL & A-Level H2 Chemistry Reaction Kinetics and Spectrometry',
    pathway: 'ib',
    researchFocus: 'Organocatalysis mechanisms and interactive 3D molecular kinetics modeling.'
  },
  {
    name: 'Dr. Kimberly S. Raj',
    title: 'Lead Scholar in Cognitive Heuristics & PSLE Excellence',
    academicBackground: 'Ph.D. in Cognitive Developmental Psychology (Stanford University)',
    specialization: 'Primary 5-6 Math Olympiad, GEP Acceleration & Bar Model Transcendence',
    pathway: 'psle',
    researchFocus: 'Diagnostic neural metrics for spatial reasoning and non-routine problem solving.'
  },
  {
    name: 'Jonathan Lim, B.A. (Oxon)',
    title: 'Chair of Rhetoric, Epistemology & General Paper',
    academicBackground: 'B.A. in Philosophy, Politics & Economics (Oxford University, PPE)',
    specialization: 'A-Level General Paper, IB Theory of Knowledge (TOK) & Academic Essay Defense',
    pathway: 'alevel',
    researchFocus: 'Socratic dialogue structures in argumentative essay formulation.'
  },
  {
    name: 'Dr. Samuel Ong',
    title: 'Head of Upper Secondary Mathematics & Analytical Mechanics',
    academicBackground: 'Ph.D. in Applied Mathematics (Harvard University)',
    specialization: 'GCE O-Level Additional Mathematics & IP Secondary Calculus Foundations',
    pathway: 'olevel',
    researchFocus: 'Multi-variable optimization modeling for secondary mathematics syllabi.'
  },
  {
    name: 'Dr. Vivienne Cheah',
    title: 'Director of Cambridge International Syllabi',
    academicBackground: 'M.Phil in Education (University of Cambridge)',
    specialization: 'Cambridge IGCSE Extended Mathematics, Physics 0625 & Chemistry 0620',
    pathway: 'igcse',
    researchFocus: 'International benchmark comparative analysis across Cambridge and Edexcel.'
  },
  {
    name: 'David Zhou, M.Eng.',
    title: 'Lead Fellow in Computational Systems & AI Architecture',
    academicBackground: 'M.Eng. in Computer Science (Carnegie Mellon University)',
    specialization: 'Machine Learning, Algorithmic Thinking, Python & Olympiad Informatics',
    pathway: 'skills',
    researchFocus: 'Transformer architectures and recursive algorithms for pre-university fellows.'
  },
  {
    name: 'Dr. Grace K. Menon',
    title: 'Senior Fellow in Biological Sciences & Medical Pathways',
    academicBackground: 'M.D. & Ph.D. in Cellular Biology (Johns Hopkins University)',
    specialization: 'H2/HL Biology, Bio-Medical Research, BMAT/UCAT Clinical Interview Defense',
    pathway: 'ib',
    researchFocus: 'Epigenetics and oncology case-based reasoning in secondary education.'
  },
  {
    name: 'Alexander Stirling, M.A.',
    title: 'Master in English Literature & Comparative Poetics',
    academicBackground: 'M.A. in English Literature (King\'s College London)',
    specialization: 'O-Level Literature in English, IBDP HL English A Literature & Rhetoric',
    pathway: 'olevel',
    researchFocus: 'Postcolonial Southeast Asian literary drama and textual close-reading rubrics.'
  },
  {
    name: 'Dr. Leonard Chia',
    title: 'Fellow in Macroeconomic Policy & Econometrics',
    academicBackground: 'Ph.D. in Economics (London School of Economics)',
    specialization: 'A-Level H2 Economics, IBDP HL Economics & Quantitative Modeling',
    pathway: 'alevel',
    researchFocus: 'Monetary policy transmission mechanisms in small open economies like Singapore.'
  },
  {
    name: 'Mei-Ling Ho, M.Ed.',
    title: 'Primary Science Inquiry Director & Curriculum Specialist',
    academicBackground: 'M.Ed. in Science Curriculum Design (Nanyang Technological University, NIE)',
    specialization: 'PSLE Primary Science Concept Deduction, CER Framework & Experimental Inquiry',
    pathway: 'psle',
    researchFocus: 'Claim-Evidence-Reasoning scaffolding in primary science open-ended assessments.'
  },
  {
    name: 'Dr. Bernard Teo',
    title: 'Chair of Secondary Physical Sciences',
    academicBackground: 'Ph.D. in Applied Physics (ETH Zurich)',
    specialization: 'O-Level Pure Physics 6091 & Integrated Programme Secondary Science',
    pathway: 'olevel',
    researchFocus: 'Interactive laboratory simulation in electromagnetic induction.'
  },
  {
    name: 'Rachel Yeo, M.Sc.',
    title: 'Senior Fellow in IBDP Mathematical Analysis',
    academicBackground: 'M.Sc. in Pure Mathematics (UCL)',
    specialization: 'IB DP HL Analysis & Approaches (AA) & Internal Assessment Mentorship',
    pathway: 'ib',
    researchFocus: 'Exploration rubric optimization in IB Internal Assessments.'
  },
  {
    name: 'Dr. Christopher Vance',
    title: 'Director of Global Scholarly Admissions & Oxbridge Prep',
    academicBackground: 'Ph.D. in History (Cambridge University, Fellow Emeritus)',
    specialization: 'Oxbridge Admissions Tests (STEP, MAT, PAT, TSA) & Scholarly Defense',
    pathway: 'skills',
    researchFocus: 'Interview epistemology and high-stakes scholarly discourse simulation.'
  },
  {
    name: 'Chloe Sim, B.Sc. (Hons)',
    title: 'Lead Heuristic Specialist in Primary Mathematics',
    academicBackground: 'B.Sc. in Mathematics (National University of Singapore, First Class)',
    specialization: 'P5-P6 Heuristics, Assumption Method, Constant Difference & Spatial Geometry',
    pathway: 'psle',
    researchFocus: 'Visual-spatial heuristic pathways in primary geometry.'
  },
  {
    name: 'Dr. Kenneth Seet',
    title: 'Head of Secondary Chemical Sciences',
    academicBackground: 'Ph.D. in Chemical Engineering (Imperial College London)',
    specialization: 'O-Level Pure Chemistry 6092, Mole Calculations & Qualitative Analysis',
    pathway: 'olevel',
    researchFocus: 'Cognitive load reduction in complex stoichiometry calculations.'
  },
  {
    name: 'Fiona Montgomery, M.A.',
    title: 'Fellow in Cambridge IGCSE Humanities & Economics',
    academicBackground: 'M.A. in International Development (University of Edinburgh)',
    specialization: 'IGCSE Economics 0455 & Global Perspectives 0457',
    pathway: 'igcse',
    researchFocus: 'Global trade policy analysis in secondary education curricula.'
  },
  {
    name: 'Dr. Sean Ng',
    title: 'Lead Researcher in Bio-Informatics & Genomics',
    academicBackground: 'Ph.D. in Computational Biology (UC Berkeley)',
    specialization: 'CRISPR Gene Editing Studio, Applied Genomics & Python for Life Sciences',
    pathway: 'skills',
    researchFocus: 'Integrating bio-informatic algorithms into high school research curricula.'
  },
  {
    name: 'Amanda Tay, M.A.',
    title: 'Master in English Synthesis & Oral Rhetoric',
    academicBackground: 'M.A. in Applied Linguistics (Melbourne University)',
    specialization: 'PSLE English Oral Communication, Synthesis & Continuous Writing',
    pathway: 'psle',
    researchFocus: 'Rhetorical pacing and narrative nuance in primary composition.'
  },
  {
    name: 'Dr. Patrick Koh',
    title: 'Senior Fellow in Pre-University Quantitative Methods',
    academicBackground: 'Ph.D. in Statistics & Data Science (Columbia University)',
    specialization: 'H2 Math Statistics & Probability, H3 Mathematics & Econometric Modeling',
    pathway: 'alevel',
    researchFocus: 'Bayesian inference applications in pre-university academic competitions.'
  },
  {
    name: 'Nathalie Dupont, Agrégée',
    title: 'Chair of International Languages & Global Rhetoric',
    academicBackground: 'Agrégation de Lettres Modernes (Sorbonne Université)',
    specialization: 'IBDP Language A Literature & World Classics Synthesis',
    pathway: 'ib',
    researchFocus: 'Comparative literary critique across 19th-century European and Asian texts.'
  },
  {
    name: 'Dr. Jeremy Heng',
    title: 'Lead Fellow in Singapore Olympiad Mathematics',
    academicBackground: 'Ph.D. in Combinatorics (MIT), IMO Gold Medalist',
    specialization: 'SMO Junior, Senior & Open Training, Graph Theory & Number Theory',
    pathway: 'olevel',
    researchFocus: 'Olympiad proof construction and combinatorial game theory.'
  },
  {
    name: 'Dr. Denise Leong',
    title: 'Fellow in Molecular Genetics & Cellular Pathology',
    academicBackground: 'Ph.D. in Molecular Genetics (Oxford University)',
    specialization: 'A-Level H2 Biology, Cell Division, Genetics of Viruses & Cancer Biology',
    pathway: 'alevel',
    researchFocus: 'Targeted gene therapy mechanisms and medical admission case portfolios.'
  },
  {
    name: 'Victor Vance, B.Eng.',
    title: 'Master in Cambridge IGCSE Computer Science & Engineering',
    academicBackground: 'B.Eng. in Computer Systems (University of Manchester, First Class)',
    specialization: 'IGCSE Computer Science 0478 & Cambridge Extended Mathematics',
    pathway: 'igcse',
    researchFocus: 'Von Neumann architectures and algorithmic trace tables pedagogy.'
  },
  {
    name: 'Sarah Koh, M.Ed.',
    title: 'Senior Specialist in Upper Primary Science Heuristics',
    academicBackground: 'M.Ed. in Gifted Education (NIE Singapore)',
    specialization: 'GEP Primary Science, Experimental Variable Control & Hypothesis Formulation',
    pathway: 'psle',
    researchFocus: 'Gifted student cognitive acceleration in natural sciences.'
  },
  {
    name: 'Dr. Raymond Goh',
    title: 'Chair of Junior College Social Sciences & History',
    academicBackground: 'Ph.D. in International Relations (LSE)',
    specialization: 'H2 History Southeast Asia & Global Cold War, General Paper Strategy',
    pathway: 'alevel',
    researchFocus: 'Source-based evaluation rubrics and historical historiography.'
  },
  {
    name: 'Elena Rostova, M.Sc.',
    title: 'Fellow in IBDP Higher Level Physics & Astrophysics',
    academicBackground: 'M.Sc. in Theoretical Physics (Lomonosov Moscow State University)',
    specialization: 'IBDP HL Physics Option D (Astrophysics) & Extended Essay Supervision',
    pathway: 'ib',
    researchFocus: 'Relativistic cosmological models and orbital mechanics simulations.'
  },
  {
    name: 'Brian Tan, CFA, M.Fin.',
    title: 'Lead Fellow in Financial Econometrics & Quantitative Strategy',
    academicBackground: 'Master of Finance (Princeton University)',
    specialization: 'Quantitative Financial Modeling, Derivative Pricing & Algorithmic Trading',
    pathway: 'skills',
    researchFocus: 'Stochastic calculus in option pricing for young pre-university fellows.'
  },
  {
    name: 'Dr. Clara Wong',
    title: 'Dean of Pre-University Academic Counseling',
    academicBackground: 'Ed.D. in Higher Education Leadership (Harvard University)',
    specialization: 'Ivy League / Oxbridge Admissions Strategy, Personal Statement Mastery',
    pathway: 'skills',
    researchFocus: 'Holistic portfolio appraisal and institutional admission committee dynamics.'
  }
];

// Helper: Curriculum subjects generator for all 100 courses
interface CourseTemplate {
  name: string;
  code: string;
  pathway: PathwayKey;
  level: string;
  subject: string;
  format: 'In-Person' | 'Hybrid' | 'Online Live' | 'Private Coaching' | 'Small Group' | 'Bootcamp';
  monthlyFee: number;
  termFee: number;
  weeks: number;
  hours: number;
  eligibility: string;
  rigor: 'Foundational' | 'Mastery' | 'Advanced Honours' | 'Olympiad & Research';
  milestone: string;
  modules: string[];
  outcomes: string[];
}

const COURSE_CATALOG_TEMPLATES: CourseTemplate[] = [
  // PSLE (17 courses)
  {
    name: 'Primary 6 Mathematical Olympiad & Advanced Heuristics',
    code: 'MATH-P6-OLY',
    pathway: 'psle',
    level: 'Primary 6',
    subject: 'Mathematics',
    format: 'Small Group',
    monthlyFee: 580,
    termFee: 1680,
    weeks: 12,
    hours: 3.5,
    eligibility: 'Primary 5 WA score > 80% or diagnostic assessment pass',
    rigor: 'Olympiad & Research',
    milestone: 'Mastery of non-routine Olympiad heuristics & speed problem solving',
    modules: ['Advanced Constant Difference & Total', 'Geometric Spatial Transformations', 'Speed & Relative Velocity Heuristics', 'Combinatorics & Number Patterns'],
    outcomes: ['SMOPS / NMOS High Distinction trajectory', 'AL1 target certainty on PSLE Section C', 'DSA Math Portfolio readiness']
  },
  {
    name: 'Primary 6 PSLE Science Critical Inquiry & CER Mastery',
    code: 'SCI-P6-CER',
    pathway: 'psle',
    level: 'Primary 6',
    subject: 'Science',
    format: 'In-Person',
    monthlyFee: 540,
    termFee: 1560,
    weeks: 12,
    hours: 3.0,
    eligibility: 'Open to Primary 6 students targeting AL1/AL2',
    rigor: 'Mastery',
    milestone: 'Zero keyword deduction on Booklet B open-ended experimental questions',
    modules: ['Energy & Forces System Dynamics', 'Adaptations & Ecosystem Interactions', 'CER (Claim-Evidence-Reasoning) Precision', 'Experimental Variable Isolation'],
    outcomes: ['Precision scientific vocabulary articulation', 'Error-free Booklet B question answers', 'Full diagnostic experimental design competency']
  },
  {
    name: 'Primary 6 English Rhetoric, Synthesis & Essay Architecture',
    code: 'ENG-P6-RHT',
    pathway: 'psle',
    level: 'Primary 6',
    subject: 'English Language',
    format: 'Small Group',
    monthlyFee: 520,
    termFee: 1500,
    weeks: 12,
    hours: 2.5,
    eligibility: 'Primary 5 English AL3 or better',
    rigor: 'Mastery',
    milestone: 'Consistent 34+/40 in Continuous Writing with evocative voice',
    modules: ['Sensory Imagery & Cinematic Pacing', 'Transformative Character Arc Design', 'Complex Sentence Synthesis Logic', 'Inference Comprehension Deconstruction'],
    outcomes: ['Evocative narrative voice command', 'Full marks on Synthesis & Transformation section', 'PSLE Oral communication fluency']
  },
  {
    name: 'Primary 5 Math Heuristics: Algebraic & Model Transcendence',
    code: 'MATH-P5-HRT',
    pathway: 'psle',
    level: 'Primary 5',
    subject: 'Mathematics',
    format: 'Hybrid',
    monthlyFee: 510,
    termFee: 1480,
    weeks: 12,
    hours: 2.5,
    eligibility: 'Primary 5 students',
    rigor: 'Foundational',
    milestone: 'Seamless transition from 2D bar models to pre-algebraic representations',
    modules: ['Fractions, Ratios & Percentage Convergence', 'Units & Parts Algebraic Systems', 'Angles & Geometrical Properties', 'Repeated Identity Heuristics'],
    outcomes: ['Intuitive grasp of multi-step problem structures', 'Speed and accuracy under timed drills', 'Confidence in tackling 4-mark questions']
  },
  {
    name: 'Primary 5 Science Deep Inquiry & Conceptual Systems',
    code: 'SCI-P5-SYS',
    pathway: 'psle',
    level: 'Primary 5',
    subject: 'Science',
    format: 'In-Person',
    monthlyFee: 490,
    termFee: 1420,
    weeks: 12,
    hours: 2.5,
    eligibility: 'Primary 5 students',
    rigor: 'Foundational',
    milestone: 'Comprehensive grounding across all 5 MOE Primary Science Themes',
    modules: ['Human & Plant Respiratory Systems', 'Circulatory Systems & Cellular Processes', 'Electrical Circuitry & Electromagnetism', 'Water Cycle & Global Atmospheric Dynamics'],
    outcomes: ['Mastery of physical vs life sciences themes', 'Booklet A 100% target accuracy', 'Experimental question deconstruction']
  },
  {
    name: 'Gifted Education Programme (GEP) Mathematical Acceleration',
    code: 'GEP-P4P5-ACC',
    pathway: 'psle',
    level: 'Primary 4 - 5',
    subject: 'Mathematics',
    format: 'Private Coaching',
    monthlyFee: 720,
    termFee: 2100,
    weeks: 10,
    hours: 3.0,
    eligibility: 'GEP enrolled or top 5% cohort ranking',
    rigor: 'Olympiad & Research',
    milestone: 'Independent problem discovery and higher-order spatial analysis',
    modules: ['Non-Euclidean Spatial Reasoning', 'Modular Arithmetic & Cryptography', 'Algebraic Inequalities', 'Graph Theory Foundations'],
    outcomes: ['RIPMWC / SMOPS Gold award trajectory', 'Autonomous mathematical proof construction', 'Intellectual peer cohort collaboration']
  },
  {
    name: 'PSLE Oral Argumentation & Socratic Communication Clinic',
    code: 'ENG-P6-ORAL',
    pathway: 'psle',
    level: 'Primary 6',
    subject: 'English Language',
    format: 'Bootcamp',
    monthlyFee: 460,
    termFee: 1320,
    weeks: 6,
    hours: 3.0,
    eligibility: 'Primary 6 candidates',
    rigor: 'Mastery',
    milestone: 'Spontaneous Socratic discourse and confident video stimulus defense',
    modules: ['PEEL Structure in Spoken Discourse', 'Vocabulary Elevation for Societal Themes', 'Body Language & Vocal Modulation', 'Live Cambridge Style Examiner Mock Interviews'],
    outcomes: ['28+/30 on PSLE Oral Examination', 'Elimination of hesitation and filler language', 'Nuanced perspective on community and global issues']
  },
  {
    name: 'Primary Math Heuristics: Non-Routine Problem Solving Sprint',
    code: 'MATH-P6-SPR',
    pathway: 'psle',
    level: 'Primary 6',
    subject: 'Mathematics',
    format: 'Bootcamp',
    monthlyFee: 560,
    termFee: 1600,
    weeks: 8,
    hours: 3.5,
    eligibility: 'Primary 6 students aiming for AL1',
    rigor: 'Advanced Honours',
    milestone: 'Rapid classification and solution of 14 complex PSLE question archetypes',
    modules: ['Simultaneous Heuristic Systems', 'Equal Fractions with Remainder', 'Speed with Head-Start & Meeting Points', 'Area & Perimeter of Complex Circles'],
    outcomes: ['30-second question classification ability', 'Complete elimination of calculation errors', 'High confidence on paper 2 open-ended items']
  },
  {
    name: 'Primary Science Experimental Diagnostics & Mock Prelim Laboratory',
    code: 'SCI-P6-LAB',
    pathway: 'psle',
    level: 'Primary 6',
    subject: 'Science',
    format: 'In-Person',
    monthlyFee: 530,
    termFee: 1520,
    weeks: 10,
    hours: 3.0,
    eligibility: 'Primary 6 candidates',
    rigor: 'Mastery',
    milestone: 'Real physical experiment verification alongside paper problem solving',
    modules: ['Thermal Energy Transfer Lab', 'Photosynthesis Variable Verification', 'Forces & Elastic Spring Physics Bench', 'Microscopic Plant Cellular Observation'],
    outcomes: ['First-hand experimental understanding', 'Zero ambiguity on experimental setup questions', 'Factual retention through physical proof']
  },
  {
    name: 'Primary 5 Creative Non-Fiction & Persuasive Exposition Studio',
    code: 'ENG-P5-EXP',
    pathway: 'psle',
    level: 'Primary 5',
    subject: 'English Language',
    format: 'Small Group',
    monthlyFee: 480,
    termFee: 1390,
    weeks: 12,
    hours: 2.5,
    eligibility: 'Primary 5 students',
    rigor: 'Foundational',
    milestone: 'Mature thematic composition beyond conventional story tropes',
    modules: ['Thematic Exposition & Reflection', 'Dialogue Nuance & Subtext', 'Precision Adjective & Strong Verb Selection', 'Cloze Passage Contextual Clue Decoders'],
    outcomes: ['Deep narrative maturity and originality', 'High marks on situational writing', 'Rich active vocabulary of 1,200+ advanced words']
  },
  {
    name: 'Junior Mathematical Logic & Algorithmic Games',
    code: 'MATH-P4-LGC',
    pathway: 'psle',
    level: 'Primary 4 - 5',
    subject: 'Mathematics',
    format: 'Hybrid',
    monthlyFee: 470,
    termFee: 1350,
    weeks: 12,
    hours: 2.0,
    eligibility: 'Primary 4 and 5 students',
    rigor: 'Foundational',
    milestone: 'Systematic algorithmic deduction and spatial puzzle resolution',
    modules: ['Sudoku, KenKen & Constraint Satisfaction', 'Inductive Logic & Invariant Properties', 'Symmetry & Tiling Proofs', 'Nim & Strategy Combinatorial Games'],
    outcomes: ['Excitement and passion for pure mathematics', 'Cognitive resilience when facing difficult challenges', 'Strong foundation for secondary school mathematics']
  },
  {
    name: 'DSA Primary Academic Talent Portfolio & Interview Masterclass',
    code: 'DSA-P6-MST',
    pathway: 'psle',
    level: 'Primary 6',
    subject: 'Academic Preparation',
    format: 'Private Coaching',
    monthlyFee: 650,
    termFee: 1850,
    weeks: 8,
    hours: 2.5,
    eligibility: 'Primary 6 DSA applicants for IP schools',
    rigor: 'Advanced Honours',
    milestone: 'Distinguished student personal portfolio and commanding mock interviews',
    modules: ['Curating Academic Projects & Competitions', 'Articulating Personal Intellectual Curiosity', 'School-Specific Leadership & STEM Defense', 'High-Stakes Panel Interview Simulation'],
    outcomes: ['Confirmed Direct School Admission offers', 'Poise, clarity, and authenticity under pressure', 'Comprehensive academic dossier showcase']
  },
  {
    name: 'Primary Science Critical Misconceptions Deconstruction Clinic',
    code: 'SCI-P6-MSC',
    pathway: 'psle',
    level: 'Primary 6',
    subject: 'Science',
    format: 'Online Live',
    monthlyFee: 420,
    termFee: 1200,
    weeks: 8,
    hours: 2.0,
    eligibility: 'Primary 6 students',
    rigor: 'Foundational',
    milestone: 'Eradication of 50 most pervasive science conceptual misconceptions',
    modules: ['Condensation vs Evaporation Boundaries', 'Heat Capacity vs Temperature Dynamics', 'Closed vs Open Electrical Circuit Pitfalls', 'Genetic Inheritance vs Acquired Traits'],
    outcomes: ['Complete clarity on tricky multiple-choice distractors', 'Confidence in tackling counter-intuitive scenarios', 'Solid baseline foundation for secondary science']
  },
  {
    name: 'Primary Mathematics High-Speed Mental Heuristics Workshop',
    code: 'MATH-P6-SPD',
    pathway: 'psle',
    level: 'Primary 6',
    subject: 'Mathematics',
    format: 'Bootcamp',
    monthlyFee: 450,
    termFee: 1290,
    weeks: 6,
    hours: 2.5,
    eligibility: 'Primary 6 candidates',
    rigor: 'Mastery',
    milestone: 'Rapid mental estimation, algebraic sanity checks, and speed calculation',
    modules: ['Vedic & Abacus Inspired Short-Cuts', 'Fraction-Decimal Percentage Instincts', 'Backward Working & Balance Invariants', 'Error-Checking Checksums'],
    outcomes: ['Save 20 minutes on Paper 1 for rigorous checking', 'Virtually zero careless clerical slips', 'Instant mental validation of complex answers']
  },
  {
    name: 'Primary 6 Comprehensive PSLE Prelim Crucible Simulation',
    code: 'PSLE-P6-CRU',
    pathway: 'psle',
    level: 'Primary 6',
    subject: 'Multi-Disciplinary',
    format: 'In-Person',
    monthlyFee: 590,
    termFee: 1720,
    weeks: 10,
    hours: 4.0,
    eligibility: 'Primary 6 candidates preparing for August prelims',
    rigor: 'Mastery',
    milestone: 'Full dress-rehearsal examination papers across English, Math, Science',
    modules: ['Top 5 IP Primary Prelim Paper Triaging', 'Examiner Red-Pen Mark Scheme Scrutiny', 'Stamina & Time-Pressure Psychological Pacing', 'Individual Personalized Gap Remediation'],
    outcomes: ['Predictable AL1 scores across all registered subjects', 'Zero exam-room anxiety or disorientation', 'Polished examination execution']
  },
  {
    name: 'Primary English Vocabulary Power & Classic Text Colloquium',
    code: 'ENG-P5-VOC',
    pathway: 'psle',
    level: 'Primary 5 - 6',
    subject: 'English Language',
    format: 'Online Live',
    monthlyFee: 440,
    termFee: 1260,
    weeks: 12,
    hours: 2.0,
    eligibility: 'Primary 5 and 6 students',
    rigor: 'Foundational',
    milestone: 'Active internalization of Latin/Greek root systems and contextual vocabulary',
    modules: ['Etymology & Morphological Derivations', 'Nuanced Tone & Register Discrimination', 'Idiomatic & Figurative Language Mastery', 'Comprehension Cloze Deep Clue Mapping'],
    outcomes: ['Rich 2,000+ advanced word lexical repository', 'Automatic contextual cloze deduction', 'Elevated literary reading appetite']
  },
  {
    name: 'Primary Heuristics: Geometry, Area & Composite Shapes Studio',
    code: 'MATH-P6-GEO',
    pathway: 'psle',
    level: 'Primary 6',
    subject: 'Mathematics',
    format: 'In-Person',
    monthlyFee: 490,
    termFee: 1400,
    weeks: 8,
    hours: 2.5,
    eligibility: 'Primary 6 candidates',
    rigor: 'Mastery',
    milestone: 'Mastery of cut-and-paste transformations, overlap subtraction, and angle proofs',
    modules: ['Circular Sector & Leaf Shapes Overlap', 'Isosceles Triangle & Parallel Angle Lemmas', 'Symmetry Axis & Folded Geometry', '3D Net Visualizations & Volume of Cylinders'],
    outcomes: ['Zero fear when encountering atypical visual diagrams', 'Speedy decomposition of complex shaded regions', 'Full 5/5 marks on geometry problem sums']
  },

  // O-LEVEL (19 courses)
  {
    name: 'O-Level Additional Mathematics Pure Analytical Mechanics',
    code: 'AMATH-S4-MEC',
    pathway: 'olevel',
    level: 'Secondary 4 / IP Year 4',
    subject: 'Mathematics',
    format: 'Small Group',
    monthlyFee: 620,
    termFee: 1780,
    weeks: 14,
    hours: 3.5,
    eligibility: 'Sec 3 A-Math grade B3 or better',
    rigor: 'Mastery',
    milestone: 'Mastery of Differential & Integral Calculus, Trigonometric Identities, and Kinematics',
    modules: ['Calculus Rate of Change & Optimization', 'Trigonometric R-Formula & Waveforms', 'Kinematics with Variable Acceleration', 'Exponential, Logarithmic & Modulus Equations'],
    outcomes: ['Guaranteed A1 target precision in GCE O-Level 4049', 'Flawless multi-page mathematical proof structuring', 'Effortless transition to JC H2 Mathematics']
  },
  {
    name: 'O-Level Pure Physics: Field Theory & Electromagnetism',
    code: 'PHYS-S4-EM',
    pathway: 'olevel',
    level: 'Secondary 4 / IP Year 4',
    subject: 'Physics',
    format: 'In-Person',
    monthlyFee: 600,
    termFee: 1720,
    weeks: 14,
    hours: 3.5,
    eligibility: 'Sec 3 Pure Physics students',
    rigor: 'Mastery',
    milestone: 'Intuitive first-principles understanding of electromagnetic induction and optics',
    modules: ['Electromagnetic Induction & Faraday\'s Law', 'D.C. Circuits & Potential Dividers', 'Wave Phenomena, Sound & Light Refraction', 'Kinetic Model of Matter & Thermodynamics'],
    outcomes: ['A1 in GCE O-Level Pure Physics 6091', '100% precision on paper 1 multiple choice', 'Mastery of paper 3 experimental practical skills']
  },
  {
    name: 'O-Level Pure Chemistry: Organic Synthesis & Reaction Kinetics',
    code: 'CHEM-S4-ORG',
    pathway: 'olevel',
    level: 'Secondary 4 / IP Year 4',
    subject: 'Chemistry',
    format: 'In-Person',
    monthlyFee: 600,
    termFee: 1720,
    weeks: 14,
    hours: 3.5,
    eligibility: 'Sec 3 Pure Chemistry students',
    rigor: 'Mastery',
    milestone: 'Seamless organic reaction pathway synthesis and qualitative analysis logic',
    modules: ['Organic Homologous Series & Polymers', 'Energetics, Rates & Dynamic Equilibrium', 'Electrochemistry & Redox Half-Equations', 'Qualitative Analysis (QA) Deductive Logic'],
    outcomes: ['A1 in GCE O-Level Pure Chemistry 6092', 'Instant recognition of structural organic transformations', 'Confidence in QA experimental deduction']
  },
  {
    name: 'O-Level Pure Biology: Molecular Genetics & Human Physiology',
    code: 'BIO-S4-GEN',
    pathway: 'olevel',
    level: 'Secondary 4 / IP Year 4',
    subject: 'Biology',
    format: 'Hybrid',
    monthlyFee: 580,
    termFee: 1680,
    weeks: 14,
    hours: 3.0,
    eligibility: 'Sec 3 Pure Biology students',
    rigor: 'Mastery',
    milestone: 'Comprehensive command of genetic crosses, molecular biology, and homeostasis',
    modules: ['DNA Structure, Replication & Protein Synthesis', 'Monohybrid Crosses & Co-Dominance', 'Homeostasis, Nervous & Endocrine Regulation', 'Ecosystem Bio-Diversity & Carbon Cycle'],
    outcomes: ['A1 in GCE O-Level Pure Biology 6093', 'Accurate keyword deployment on experimental questions', 'Strong foundational scaffolding for H2 Biology']
  },
  {
    name: 'O-Level English Language: Rhetorical Exposition & Synthesis',
    code: 'ENG-S4-EXP',
    pathway: 'olevel',
    level: 'Secondary 4 / IP Year 4',
    subject: 'English Language',
    format: 'Small Group',
    monthlyFee: 550,
    termFee: 1580,
    weeks: 12,
    hours: 2.5,
    eligibility: 'Sec 3 or Sec 4 students targeting A1/A2 in 1184',
    rigor: 'Mastery',
    milestone: 'Editorial-grade discursive essay writing and surgical comprehension summary',
    modules: ['Persuasive Rhetoric & Societal Discursive Essays', 'Comprehension Visual Text & Narrative Nuance', '15-Mark Summary Surgical Keyword Extraction', 'Oral Communication & Planned Response Architecture'],
    outcomes: ['A1 target in GCE O-Level 1184', 'Mastery of sophisticated transitional vocabulary', 'Effortless deconstruction of complex editorial passages']
  },
  {
    name: 'O-Level Literature in English: Comparative Drama & Poetics',
    code: 'LIT-S4-DRAM',
    pathway: 'olevel',
    level: 'Secondary 3 - 4',
    subject: 'Humanities & Literature',
    format: 'Small Group',
    monthlyFee: 540,
    termFee: 1550,
    weeks: 12,
    hours: 2.5,
    eligibility: 'Literature in English elective or pure students',
    rigor: 'Advanced Honours',
    milestone: 'Deep literary critique, dramatic tension analysis, and poetic device unpacking',
    modules: ['Shakespeare & Modern Drama Characterization', 'Unseen Poetry Stylistic Deconstruction', 'Theme & Dramatic Irony Textual Support', 'Essay Structuring for 25-Mark High Distinction'],
    outcomes: ['A1 in O-Level Literature 2065', 'Articulate literary voice and analytical prose', 'Command of meter, form, and symbolism']
  },
  {
    name: 'Combined Humanities: Social Studies & Global Geopolitics',
    code: 'SS-S4-GEO',
    pathway: 'olevel',
    level: 'Secondary 4 / IP Year 4',
    subject: 'Humanities & Social Sciences',
    format: 'In-Person',
    monthlyFee: 520,
    termFee: 1500,
    weeks: 12,
    hours: 2.5,
    eligibility: 'Upper secondary students taking Social Studies',
    rigor: 'Mastery',
    milestone: 'Mastery of Source-Based Case Study (SBQ) evaluation and structured essay questions',
    modules: ['Source Provenance, Reliability & Cross-Referencing', 'Tone, Motive & Purpose Evaluation', 'Conflict & Harmony in Multi-Ethnic Societies', 'Managing International Security & Global Economy'],
    outcomes: ['Distinction (A1) in Combined Humanities 2272/2273', 'Surgical precision in SBQ provenance evaluation', 'Well-substantiated balanced structured arguments']
  },
  {
    name: 'Secondary 3 Additional Math Foundations & Trigonometric Proofs',
    code: 'AMATH-S3-FND',
    pathway: 'olevel',
    level: 'Secondary 3',
    subject: 'Mathematics',
    format: 'Hybrid',
    monthlyFee: 560,
    termFee: 1620,
    weeks: 12,
    hours: 3.0,
    eligibility: 'Secondary 3 A-Math students',
    rigor: 'Foundational',
    milestone: 'Solid theoretical mastery of polynomials, binomial theorem, and coordinate geometry',
    modules: ['Quadratic Inequalities & Discriminants', 'Binomial Expansions & Pascal’s Triangle', 'Trigonometric Equations & Angle Addition', 'Coordinate Geometry of Circles & Linear Law'],
    outcomes: ['Solid A grade throughout Sec 3 internal assessments', 'Elimination of algebraic foundational gaps', 'Preparedness for Sec 4 calculus introduction']
  },
  {
    name: 'Secondary 3 Pure Sciences Integrated Foundation Lab',
    code: 'SCI-S3-FND',
    pathway: 'olevel',
    level: 'Secondary 3',
    subject: 'Sciences',
    format: 'In-Person',
    monthlyFee: 590,
    termFee: 1700,
    weeks: 12,
    hours: 3.5,
    eligibility: 'Secondary 3 Pure Physics / Chemistry students',
    rigor: 'Foundational',
    milestone: 'First-principles mastery of Newtonian kinematics and chemical bonding',
    modules: ['Newton’s Laws of Motion & Free-Body Diagrams', 'Work, Energy & Power Principles', 'Atomic Structure & Ionic/Covalent Bonding', 'Stoichiometry & Mole Concept Foundations'],
    outcomes: ['Confidence across both physics and chemistry foundations', 'Fluency in mole-to-mass calculations', 'Rigorous experimental recording habit']
  },
  {
    name: 'Singapore Mathematical Olympiad (SMO Junior & Senior) Fellowship',
    code: 'SMO-S3S4-OLY',
    pathway: 'olevel',
    level: 'Secondary 3 - 4 / IP Year 3-4',
    subject: 'Mathematics',
    format: 'Private Coaching',
    monthlyFee: 780,
    termFee: 2250,
    weeks: 12,
    hours: 3.5,
    eligibility: 'Selection via competitive math diagnostic or school team nominee',
    rigor: 'Olympiad & Research',
    milestone: 'Medal-winning problem solving across modular arithmetic, geometry, and combinatorics',
    modules: ['Pigeonhole Principle & Invariant Lemmas', 'Euclidean Circle Theorems & Collinearity Proofs', 'Diophantine Equations & Congruences', 'Inequalities: Cauchy-Schwarz & AM-GM'],
    outcomes: ['SMO Junior / Senior Gold / Silver Medal', 'DSA-JC direct entry to Raffles / Hwa Chong', 'National team selection invitation']
  },
  {
    name: 'O-Level Elementary Mathematics (E-Math) Distinction Blueprint',
    code: 'EMATH-S4-DST',
    pathway: 'olevel',
    level: 'Secondary 4',
    subject: 'Mathematics',
    format: 'Hybrid',
    monthlyFee: 510,
    termFee: 1470,
    weeks: 12,
    hours: 2.5,
    eligibility: 'Sec 4 students',
    rigor: 'Mastery',
    milestone: '100% accuracy on real-world context problem sums and matrix algebra',
    modules: ['Problems in Real-World Contexts (PRWC)', 'Matrices, Vectors & Transformations', 'Cumulative Frequency & Box-and-Whisker Plots', 'Mensuration, Cones, Pyramids & Spheres'],
    outcomes: ['Target 90%+ raw score in GCE O-Level 4048', 'Flawless execution on financial math and tax slabs', 'Total confidence in PRWC decision-making']
  },
  {
    name: 'O-Level Pure Geography: Atmospheric & Tectonic Systems',
    code: 'GEOG-S4-SYS',
    pathway: 'olevel',
    level: 'Secondary 3 - 4',
    subject: 'Humanities & Geography',
    format: 'Online Live',
    monthlyFee: 490,
    termFee: 1400,
    weeks: 12,
    hours: 2.5,
    eligibility: 'Pure or Elective Geography students',
    rigor: 'Mastery',
    milestone: 'Surgical fieldwork data analysis and structured essay geographical arguments',
    modules: ['Plate Tectonics & Natural Hazards Management', 'Weather, Climate & Global Warming Adaptations', 'Tourism Geographies & Sustainable Development', 'Geographical Investigation (GI) Fieldwork Methodologies'],
    outcomes: ['Distinction (A1) in O-Level Geography 2236', 'Clear spatial diagram annotations', 'Well-structured comparative case studies']
  },
  {
    name: 'O-Level Science Practical Crucible: Paper 3 Laboratory Masterclass',
    code: 'PRAC-S4-LAB',
    pathway: 'olevel',
    level: 'Secondary 4 / IP Year 4',
    subject: 'Sciences',
    format: 'In-Person',
    monthlyFee: 640,
    termFee: 1850,
    weeks: 8,
    hours: 3.5,
    eligibility: 'Sec 4 Pure Science examination candidates',
    rigor: 'Mastery',
    milestone: 'Physical laboratory mastery in titration, electrical resistance, and microscope optics',
    modules: ['Acid-Base & Redox Titration Speed & Precision', 'Optical Pins, Mirrors & Glass Block Refraction', 'Resistance Wire Potentiometer Calibration', 'Biological Food Tests & Enzymatic Rate Assays'],
    outcomes: ['Maximum marks on 20% component Paper 3', 'Complete elimination of parallax and meniscus reading errors', 'Fast and precise planning question writing']
  },
  {
    name: 'O-Level Raw L1R5 ≤ 6 Comprehensive Prelim Crucible',
    code: 'L1R5-S4-CRU',
    pathway: 'olevel',
    level: 'Secondary 4',
    subject: 'Multi-Disciplinary',
    format: 'Bootcamp',
    monthlyFee: 680,
    termFee: 1950,
    weeks: 10,
    hours: 4.5,
    eligibility: 'Sec 4 students targeting top Junior Colleges (RI/HCI/ACSI/NYJC)',
    rigor: 'Advanced Honours',
    milestone: 'Simulated cross-school preliminary examination triaging and mark optimization',
    modules: ['Cross-School Prelim Top Question Mining', 'Marking Scheme Strictness & Keyword Drill', 'Multi-Paper Mental Endurance & Timetable Pacing', 'Individual Score Optimization Blueprint'],
    outcomes: ['Raw L1R5 ≤ 6 target realization', 'First-choice JC posting certainty', 'Seamless academic confidence under intense examination schedules']
  },
  {
    name: 'DSA-JC Senior Academic Research & Leadership Portfolio',
    code: 'DSA-S4-JC',
    pathway: 'olevel',
    level: 'Secondary 4 / Year 4 IP',
    subject: 'Academic Preparation',
    format: 'Private Coaching',
    monthlyFee: 750,
    termFee: 2150,
    weeks: 8,
    hours: 3.0,
    eligibility: 'Sec 4 / IP 4 students applying for DSA-JC admission',
    rigor: 'Advanced Honours',
    milestone: 'Compelling personal statement, academic defense, and interview mastery',
    modules: ['Distilling Academic Talents & Competitions', 'Curating Science Fair / Humanities Research Papers', 'Mock Interview with Ex-JC Deans and Admission Panels', 'Refining Personal Leadership Philosophy'],
    outcomes: ['Confirmed Direct School Admission offer to top JC', 'Peace of mind prior to O-Level examinations', 'Clear academic trajectory into JC and university']
  },
  {
    name: 'Secondary Pure History: Southeast Asian Decolonisation & Cold War',
    code: 'HIST-S4-SEA',
    pathway: 'olevel',
    level: 'Secondary 3 - 4',
    subject: 'Humanities & History',
    format: 'Online Live',
    monthlyFee: 490,
    termFee: 1400,
    weeks: 12,
    hours: 2.5,
    eligibility: 'Pure or Elective History students',
    rigor: 'Mastery',
    milestone: 'Mastery of historical provenance, cross-referencing, and historiography',
    modules: ['Cold War Ideological Confrontations & Crises', 'Decolonisation & Nationalism in Malaya & Indonesia', 'Source-Based Evaluation of Propaganda and Bias', 'Structured Essay Causation vs Relative Significance'],
    outcomes: ['A1 in GCE O-Level History 2174', 'Nuanced historical perspective and critical skepticism', 'Concise and powerful timed essay execution']
  },
  {
    name: 'Secondary Science Computational Simulation & Data Modeling',
    code: 'SCI-S3S4-SIM',
    pathway: 'olevel',
    level: 'Secondary 3 - 4 / IP Year 3-4',
    subject: 'STEM & Sciences',
    format: 'Hybrid',
    monthlyFee: 540,
    termFee: 1550,
    weeks: 10,
    hours: 2.5,
    eligibility: 'Upper secondary science students',
    rigor: 'Foundational',
    milestone: 'Interactive Python and PhET modeling of physical and chemical systems',
    modules: ['Kinematic Trajectory & Air Resistance Modeling', 'Molecular Dynamic Equilibrium Simulations', 'Electric Circuit Numerical Solvers', 'Scientific Graphing & Uncertainty Propagation'],
    outcomes: ['Deep intuitive visualization of abstract science concepts', 'Command of experimental error analysis', 'Competitive advantage for science fairs and competitions']
  },
  {
    name: 'O-Level English Comprehension & Visual Text Diagnostic Intensive',
    code: 'ENG-S4-CMP',
    pathway: 'olevel',
    level: 'Secondary 4',
    subject: 'English Language',
    format: 'Bootcamp',
    monthlyFee: 520,
    termFee: 1490,
    weeks: 6,
    hours: 3.0,
    eligibility: 'Sec 4 students',
    rigor: 'Mastery',
    milestone: 'Surgical accuracy on Section A Visual Text and Section B Narrative Inference',
    modules: ['Visual Text Intent, Audience & Persuasive Devices', 'Language For Impact: Irony, Metaphor & Word Choice', 'Inference Question Stem Deconstruction', 'Summary Question Sentence Restructuring Logic'],
    outcomes: ['38+/50 in Paper 2 Reading Comprehension', 'Zero lost marks on summary word limit constraints', 'Rapid comprehension processing speed']
  },
  {
    name: 'Secondary 4 Intensive Formula, Law & Theorem Crucible',
    code: 'REV-S4-THM',
    pathway: 'olevel',
    level: 'Secondary 4',
    subject: 'Mathematics & Sciences',
    format: 'Bootcamp',
    monthlyFee: 560,
    termFee: 1600,
    weeks: 4,
    hours: 4.0,
    eligibility: 'Sec 4 examination candidates',
    rigor: 'Mastery',
    milestone: 'Total recall and instant deployment of all 200+ formulas, equations, and laws',
    modules: ['Calculus & Trigonometric Formula Quick-Fire Drill', 'Physics Laws, Definitions & Units Memorization', 'Chemistry Periodic Trends & Reactivity Series', 'Rapid Derivation without Reference Sheets'],
    outcomes: ['Immediate reflex recall during high-stress exams', 'Zero hesitation when selecting mathematical theorems', 'Error-free constant and SI unit conversions']
  },

  // A-LEVEL (20 courses)
  {
    name: 'GCE A-Level H2 Mathematics: Multivariable Calculus & Probability Systems',
    code: 'MATH-JC-H2',
    pathway: 'alevel',
    level: 'Junior College 1 - 2',
    subject: 'Mathematics',
    format: 'Small Group',
    monthlyFee: 680,
    termFee: 1980,
    weeks: 16,
    hours: 4.0,
    eligibility: 'JC1 / JC2 students taking H2 Math 9758',
    rigor: 'Mastery',
    milestone: 'Complete mastery of Differential Equations, Vectors in 3D, and Hypothesis Testing',
    modules: ['Differential Equations & Analytical Modeling', '3D Vectors: Planes, Lines & Shortest Distances', 'Binomial, Normal Distribution & Sampling Theory', 'Complex Numbers: Argand Diagrams & De Moivre’s Theorem'],
    outcomes: ['Distinction (Grade A) in GCE A-Level H2 Mathematics 9758', 'Effortless graphic calculator (GC) algorithmic exploitation', 'Rigorous step-by-step mathematical argumentation']
  },
  {
    name: 'GCE A-Level H2 Physics: Modern Quantum & Field Electrodynamics',
    code: 'PHYS-JC-H2',
    pathway: 'alevel',
    level: 'Junior College 1 - 2',
    subject: 'Physics',
    format: 'In-Person',
    monthlyFee: 660,
    termFee: 1920,
    weeks: 16,
    hours: 3.5,
    eligibility: 'JC students taking H2 Physics 9749',
    rigor: 'Mastery',
    milestone: 'Deep conceptual grasp of Gravitational, Electric & Magnetic Fields and Quantum Phenomena',
    modules: ['Superposition & Wave Interference Grating', 'Electromagnetic Induction & A.C. Circuits', 'Quantum Physics: Photoelectric Effect & Wave-Particle Duality', 'Nuclear Physics: Binding Energy & Radioactive Decay'],
    outcomes: ['Distinction (Grade A) in GCE A-Level H2 Physics 9749', 'Command of Paper 4 Planning experiment design', 'Deep theoretical appreciation of pre-university physics']
  },
  {
    name: 'GCE A-Level H2 Chemistry: Organic Reaction Mechanisms & Thermodynamics',
    code: 'CHEM-JC-H2',
    pathway: 'alevel',
    level: 'Junior College 1 - 2',
    subject: 'Chemistry',
    format: 'In-Person',
    monthlyFee: 660,
    termFee: 1920,
    weeks: 16,
    hours: 3.5,
    eligibility: 'JC students taking H2 Chemistry 9729',
    rigor: 'Mastery',
    milestone: 'Flawless electron-pushing arrow mechanisms and chemical thermodynamic equilibria',
    modules: ['Nucleophilic & Electrophilic Substitution/Addition Mechanisms', 'Chemical Energetics, Entropy & Gibbs Free Energy', 'Electrochemistry & Transition Metal Chemistry', 'Organic Elucidation & Multi-Step Synthesis Strategy'],
    outcomes: ['Distinction (Grade A) in GCE A-Level H2 Chemistry 9729', 'Fast deductions on 12-mark organic structure elucidation puzzles', 'Flawless Paper 4 Practical titration and QA score']
  },
  {
    name: 'GCE A-Level H2 Biology: Molecular Genetics & Immunology',
    code: 'BIO-JC-H2',
    pathway: 'alevel',
    level: 'Junior College 1 - 2',
    subject: 'Biology',
    format: 'Hybrid',
    monthlyFee: 640,
    termFee: 1860,
    weeks: 16,
    hours: 3.5,
    eligibility: 'JC students taking H2 Biology 9744',
    rigor: 'Mastery',
    milestone: 'Command of gene regulation, stem cell differentiation, immunology, and cancer biology',
    modules: ['Stem Cells, Cancer Genetics & Oncogenes', 'Immunology: Humoral & Cell-Mediated Immune Responses', 'Photosynthesis & Respiration Bio-Energetics', 'Genetics of Viruses (HIV, Influenza, Bacteriophage)'],
    outcomes: ['Distinction (Grade A) in GCE A-Level H2 Biology 9744', 'Precision scientific keywords in essay questions', 'Solid foundational readiness for MBBS / BDS university degrees']
  },
  {
    name: 'GCE A-Level H2 Economics: Micro & Macro Structural Policy Analysis',
    code: 'ECON-JC-H2',
    pathway: 'alevel',
    level: 'Junior College 1 - 2',
    subject: 'Economics',
    format: 'Small Group',
    monthlyFee: 640,
    termFee: 1860,
    weeks: 14,
    hours: 3.0,
    eligibility: 'JC students taking H2 Economics 9757',
    rigor: 'Mastery',
    milestone: 'Nuanced 25-mark essay evaluations and multi-country case study data synthesis',
    modules: ['Market Failure, Externalities & Government Intervention', 'Macroeconomic Goals & Supply-Side vs Demand-Side Policies', 'International Trade, Globalisation & Exchange Rates', 'Evaluation & Contextual Judgement in Singapore Context'],
    outcomes: ['Distinction (Grade A) in GCE A-Level H2 Economics 9757', 'Insightful economic diagrams supporting analytical arguments', 'Command of Case Study Question (CSQ) data interpretation']
  },
  {
    name: 'GCE A-Level General Paper (GP): Global Rhetoric & Epistemic Synthesis',
    code: 'GP-JC-8807',
    pathway: 'alevel',
    level: 'Junior College 1 - 2',
    subject: 'General Paper',
    format: 'Small Group',
    monthlyFee: 590,
    termFee: 1720,
    weeks: 14,
    hours: 2.5,
    eligibility: 'JC1 / JC2 students taking GP 8807',
    rigor: 'Mastery',
    milestone: 'Editorial-grade argumentative essay writing and 10-mark Application Question (AQ) mastery',
    modules: ['Science, Ethics & Artificial Intelligence Dilemmas', 'Democracy, Governance & Geopolitical Realignments', 'Arts, Culture & Societal Identity in Modernity', 'AQ Singapore Contextualization & Critical Dissection'],
    outcomes: ['Distinction (Grade A) in GCE A-Level General Paper 8807', 'Refined rhetorical voice and persuasive balance', 'Elimination of factual superficiality with rich global case examples']
  },
  {
    name: 'H3 Advanced Mathematics Research & Linear Algebra Seminar',
    code: 'MATH-H3-RES',
    pathway: 'alevel',
    level: 'Junior College 2',
    subject: 'Mathematics',
    format: 'Private Coaching',
    monthlyFee: 850,
    termFee: 2450,
    weeks: 14,
    hours: 3.5,
    eligibility: 'Top 5% in JC1 H2 Math promo exam, MOE H3 approved',
    rigor: 'Olympiad & Research',
    milestone: 'Rigorous proof-based mathematics: Vector Spaces, Differential Equations, and Number Theory',
    modules: ['Abstract Linear Algebra: Vector Spaces & Linear Maps', 'Eigenvalues, Diagonalization & Spectral Theorems', 'Combinatorics, Recurrence Relations & Generating Functions', 'Formal Proof Methodologies: Induction, Contradiction & Invariants'],
    outcomes: ['Distinction in GCE A-Level H3 Mathematics 9820', 'University-level mathematical thinking', 'Competitive edge for Ivy League / Cambridge Mathematics tripos']
  },
  {
    name: 'H3 Modern Physics & Relativity Fellowship',
    code: 'PHYS-H3-MOD',
    pathway: 'alevel',
    level: 'Junior College 2',
    subject: 'Physics',
    format: 'Private Coaching',
    monthlyFee: 850,
    termFee: 2450,
    weeks: 14,
    hours: 3.5,
    eligibility: 'Top 5% in JC1 H2 Physics promo, MOE H3 approved',
    rigor: 'Olympiad & Research',
    milestone: 'Special Relativity, Quantum Wave Mechanics, and Solid State Physics',
    modules: ['Special Relativity: Lorentz Transformations & Spacetime', 'Schrödinger Wave Equation & Quantum Wells', 'Thermal & Statistical Physics', 'Optics & Photonic Waveguides'],
    outcomes: ['Distinction in GCE A-Level H3 Physics 9814', 'Direct faculty mentorship with university researchers', 'Singapore Young Physicists Tournament (SYPT) championship caliber']
  },
  {
    name: 'H3 Molecular Chemistry & Synthetic Spectroscopy Studio',
    code: 'CHEM-H3-SYN',
    pathway: 'alevel',
    level: 'Junior College 2',
    subject: 'Chemistry',
    format: 'Private Coaching',
    monthlyFee: 850,
    termFee: 2450,
    weeks: 14,
    hours: 3.5,
    eligibility: 'Top 5% in JC1 H2 Chemistry promo, MOE H3 approved',
    rigor: 'Olympiad & Research',
    milestone: 'Advanced spectroscopic elucidation (NMR, IR, Mass Spec) and asymmetric synthesis',
    modules: ['Advanced 1H and 13C NMR Spectroscopy Interpretation', 'Pericyclic Reactions & Woodward-Hoffmann Rules', 'Stereoselective Organic Synthesis', 'Coordination Chemistry & Crystal Field Theory'],
    outcomes: ['Distinction in GCE A-Level H3 Chemistry 9813', 'Ability to independently elucidate complex molecular structures', 'Preparation for university medicine / chemical engineering']
  },
  {
    name: 'A-Level H2 Science Practical Examination (Paper 4) Crucible',
    code: 'PRAC-JC-H2',
    pathway: 'alevel',
    level: 'Junior College 2',
    subject: 'Sciences',
    format: 'In-Person',
    monthlyFee: 720,
    termFee: 2100,
    weeks: 10,
    hours: 4.0,
    eligibility: 'JC2 students taking H2 Physics or Chemistry practical',
    rigor: 'Mastery',
    milestone: 'Flawless execution of real laboratory protocols and innovative Planning Question design',
    modules: ['Advanced Gravimetric & Volumetric Titrations', 'Oscilloscope, Potentiometer & Physics Circuit Planning', 'Designing Valid Experimental Controls & Minimizing Uncertainties', 'Microbiology Aseptic Technique & Rate Curve Plotting'],
    outcomes: ['Full marks on 20% A-Level Practical component', 'High confidence on experimental planning essays', 'Error-free graphical slope and intercept derivation']
  },
  {
    name: 'JC1 to JC2 Transition: Promotional Exam Recovery & Leap Track',
    code: 'TRANS-JC1-LEAP',
    pathway: 'alevel',
    level: 'Junior College 1',
    subject: 'Multi-Disciplinary',
    format: 'Bootcamp',
    monthlyFee: 620,
    termFee: 1780,
    weeks: 8,
    hours: 4.0,
    eligibility: 'JC1 students preparing for October promo exams',
    rigor: 'Foundational',
    milestone: 'Transform borderline C/D/E grades into solid A/B baseline before entering JC2',
    modules: ['Diagnostic Gap Remediation across 4 H2 Subjects', 'Elimination of Concept Misconceptions in Core JC1 Topics', 'Time Allocation Strategies for 3-Hour Exam Papers', 'Individualized Weekly Progress Consultation'],
    outcomes: ['Guaranteed smooth promotion to JC2 with solid academic foundation', 'Prevention of syllabus backlog in JC2', 'Restoration of academic motivation and confidence']
  },
  {
    name: 'A-Level Economics 25-Mark Essay Architecture & CSQ Masterclass',
    code: 'ECON-JC-ESS',
    pathway: 'alevel',
    level: 'Junior College 1 - 2',
    subject: 'Economics',
    format: 'Online Live',
    monthlyFee: 540,
    termFee: 1550,
    weeks: 10,
    hours: 2.5,
    eligibility: 'JC1 and JC2 H1/H2 Economics students',
    rigor: 'Mastery',
    milestone: 'Systematic essay synthesis: Thesis, Anti-Thesis, Contextual Evaluation (Synthesis)',
    modules: ['The 3-Tier Evaluation Framework (E1, E2, E3)', 'Diagrammatic Precision: Elasticities, Externalities, AD-AS', 'Extracting Hidden Economic Narrative in Case Studies', 'Timed 45-Minute Essay Writing Sprints'],
    outcomes: ['Consistent 20+/25 on A-Level essay questions', 'Mastery of Cambridge examiner evaluation criteria', 'Speed and lucidity under exam time constraints']
  },
  {
    name: 'A-Level H2 History: The Cold War & Southeast Asian Statehood',
    code: 'HIST-JC-H2',
    pathway: 'alevel',
    level: 'Junior College 1 - 2',
    subject: 'Humanities & History',
    format: 'Small Group',
    monthlyFee: 580,
    termFee: 1680,
    weeks: 14,
    hours: 3.0,
    eligibility: 'JC students taking H2 History 9752',
    rigor: 'Mastery',
    milestone: 'Historiographical argumentation, source weight evaluation, and deep comparative essays',
    modules: ['The Global Cold War: Superpower Rivalry & Crises', 'Southeast Asia: Nation-Building, Political Stability & ASEAN', 'Source-Based Case Study (SBCS) Evaluation Techniques', 'Comparative Historiographical Approaches & Judgement'],
    outcomes: ['Distinction (Grade A) in GCE A-Level H2 History 9752', 'Sophisticated synthesis of competing historical paradigms', 'High-speed timed essay structuring']
  },
  {
    name: 'A-Level H2 Literature in English: Dramatic Text & Victorian Poetics',
    code: 'LIT-JC-H2',
    pathway: 'alevel',
    level: 'Junior College 1 - 2',
    subject: 'Humanities & Literature',
    format: 'Small Group',
    monthlyFee: 580,
    termFee: 1680,
    weeks: 14,
    hours: 3.0,
    eligibility: 'JC students taking H2 Literature 9509',
    rigor: 'Mastery',
    milestone: 'Unseen poetry textual close-reading and thematic dramatic character analysis',
    modules: ['Paper 1: Reading Literature – Unseen Poetry & Prose Close-Reading', 'Paper 2/3: Period & Thematic Studies (Victorian / Modern)', 'Dramatic Irony, Stagecraft & Performance Nuances', 'Constructing Complex Thematic Dissertations in 60 Minutes'],
    outcomes: ['Distinction (Grade A) in GCE A-Level H2 Literature 9509', 'Lyrical, scholarly writing style', 'Profound sensitivity to metaphor, cadence, and subtext']
  },
  {
    name: 'Oxbridge & Ivy League Scholarly Interview Defense Seminar',
    code: 'OXIVY-JC-DEF',
    pathway: 'alevel',
    level: 'Junior College 2 / Scholars',
    subject: 'Academic Preparation',
    format: 'Private Coaching',
    monthlyFee: 880,
    termFee: 2550,
    weeks: 8,
    hours: 3.0,
    eligibility: 'Applicants to Cambridge, Oxford, Imperial, Harvard, Princeton, Yale, MIT',
    rigor: 'Advanced Honours',
    milestone: 'Spontaneous academic defense against senior Oxford/Cambridge faculty fellows',
    modules: ['Unseen Academic Problem Deconstruction (Math/Physics/Econ/Law)', 'Socratic Cross-Examination on Personal Statement & Research', 'Articulating First-Principles Deduction While Under Scrutiny', 'Admissions Test Preparation (STEP, MAT, PAT, TSA, LNAT)'],
    outcomes: ['Confirmed admission offers from world-leading universities', 'Absolute intellectual poise and spontaneous critical agility', 'Outstanding performance on STEP/MAT/PAT papers']
  },
  {
    name: 'Singapore Medical & Dental Admissions (BMAT/UCAT/MMI) Crucible',
    code: 'MED-JC-MMI',
    pathway: 'alevel',
    level: 'Junior College 1 - 2',
    subject: 'Academic Preparation',
    format: 'Small Group',
    monthlyFee: 780,
    termFee: 2280,
    weeks: 10,
    hours: 3.5,
    eligibility: 'Aspirants to NUS Yong Loo Lin, NTU LKC, UK/Australia Medical Schools',
    rigor: 'Advanced Honours',
    milestone: 'Mastery of UCAT cognitive subtests, medical ethics dilemmas, and 10-station MMI',
    modules: ['UCAT Verbal Reasoning, Decision Making & Quantitative Skills', 'Bioethics: Autonomy, Beneficence, Non-Maleficence & Justice', 'Multiple Mini Interview (MMI) Clinical Scenario Role-Play', 'Personal Statement & Clinical Shadowing Synthesis'],
    outcomes: ['Top 5% global UCAT score (>2900, Band 1 Situational Judgement)', 'Admission offers to NUS Medicine, NTU LKC Medicine, and UK Russell Group', 'Deep ethical maturity and bedside communication readiness']
  },
  {
    name: 'A-Level Prelim Crucible: Top JC Preliminary Paper Deconstruction',
    code: 'PRELIM-JC-CRU',
    pathway: 'alevel',
    level: 'Junior College 2',
    subject: 'Multi-Disciplinary',
    format: 'Bootcamp',
    monthlyFee: 750,
    termFee: 2150,
    weeks: 8,
    hours: 5.0,
    eligibility: 'JC2 students preparing for August-September prelims',
    rigor: 'Advanced Honours',
    milestone: 'Cross-paper dissection of Raffles, Hwa Chong, VJC, and NJC prelim examinations',
    modules: ['Curated Hardest Questions from 12 Junior Colleges', 'Examiner Keyword Rubric Calibration', 'Paper Stamina & Cognitive Recovery Techniques', 'Individual UAS (University Admission Score) Prediction & Triage'],
    outcomes: ['Raw UAS projection of 88.75 - 90 Rank Points', 'Zero surprises on A-Level exam day', 'Peak academic form and mental resilience']
  },
  {
    name: 'A-Level H1 General Paper Vocabulary & Thesis Architecture Clinic',
    code: 'GP-JC-CLINIC',
    pathway: 'alevel',
    level: 'Junior College 1 - 2',
    subject: 'General Paper',
    format: 'Online Live',
    monthlyFee: 490,
    termFee: 1400,
    weeks: 8,
    hours: 2.0,
    eligibility: 'JC students seeking to elevate GP grade from C/D to A',
    rigor: 'Foundational',
    milestone: 'Internalization of 300 academic transitional phrases and argumentative templates',
    modules: ['Unpacking Essay Prompts: Scope, Tension & Absolute Qualifiers', 'Balancing Counter-Arguments without Capitulation', 'Compelling Introductions & Clincher Conclusions', 'Summary Technique: Grammatical Rephrasing without Meaning Shift'],
    outcomes: ['Rapid elevation to Grade A/B in internal school assessments', 'Structured, authoritative prose style', 'Speedy essay outline generation within 10 minutes']
  },
  {
    name: 'Junior College Quantitative Research Fellowship (SSEF & SYPT)',
    code: 'JC-SSEF-RES',
    pathway: 'alevel',
    level: 'Junior College 1 - 2',
    subject: 'STEM Research',
    format: 'Private Coaching',
    monthlyFee: 890,
    termFee: 2600,
    weeks: 16,
    hours: 4.0,
    eligibility: 'Selected students participating in SSEF, SYPT, or A*STAR research',
    rigor: 'Olympiad & Research',
    milestone: 'Submission of peer-reviewed caliber research paper to Singapore Science Fair',
    modules: ['Formulating Novel Scientific Hypotheses & Experimental Design', 'Advanced Statistical Analysis in Python/R (ANOVA, Regressions)', 'Academic Poster Design & Oral Defense Simulation', 'Research Paper Manuscript Draft & Rebuttal Strategy'],
    outcomes: ['SSEF Gold Award / ISEF Singapore Representative', 'Unrivaled portfolio distinction for PSC Overseas Merit Scholarship', 'First-author or co-author publication credit']
  },
  {
    name: 'A-Level 90 Rank Point Mastery: Final 30-Day Sprint',
    code: 'JC-90RP-SPR',
    pathway: 'alevel',
    level: 'Junior College 2',
    subject: 'Multi-Disciplinary',
    format: 'Bootcamp',
    monthlyFee: 790,
    termFee: 2280,
    weeks: 4,
    hours: 6.0,
    eligibility: 'JC2 candidates 30 days prior to Cambridge written papers',
    rigor: 'Advanced Honours',
    milestone: 'Precision execution, error-proofing, and psychological peak-state alignment',
    modules: ['Final Cambridge Examiner Report Trap Warnings', 'High-Probability Topic Convergence Analysis', 'Individualized Weakness Surgical Eradication', 'Timed Morning & Afternoon Paper Drills under Strict Exam Protocol'],
    outcomes: ['Realization of 90/90 or 70/70 Rank Points', 'Total calm and clarity in examination venues', 'Seamless university scholarship qualification']
  },

  // IB DIPLOMA PROGRAMME (17 courses)
  {
    name: 'IB DP HL Mathematics: Analysis & Approaches (AA) Distinction',
    code: 'IB-MATH-HL',
    pathway: 'ib',
    level: 'IB Year 1 - 2',
    subject: 'Mathematics',
    format: 'Small Group',
    monthlyFee: 690,
    termFee: 2000,
    weeks: 16,
    hours: 4.0,
    eligibility: 'IB DP students taking HL Math AA',
    rigor: 'Mastery',
    milestone: 'Mastery of rigorous calculus proofs, Maclaurin series, vectors, and complex numbers',
    modules: ['Formal Differential & Integral Calculus Proofs', 'Vector Equations of Lines, Planes & Intersection Topology', 'Complex Numbers, Euler’s Identity & De Moivre’s Theorem', 'Paper 3 Extended Problem Solving & Modeling Strategies'],
    outcomes: ['Grade 7 in IB DP HL Mathematics AA', 'Effortless tackling of unseen Paper 3 investigation tasks', 'Top-tier preparation for university STEM degrees']
  },
  {
    name: 'IB DP HL Physics: Relativistic Mechanics & Astrophysics',
    code: 'IB-PHYS-HL',
    pathway: 'ib',
    level: 'IB Year 1 - 2',
    subject: 'Physics',
    format: 'In-Person',
    monthlyFee: 670,
    termFee: 1950,
    weeks: 16,
    hours: 3.5,
    eligibility: 'IB DP students taking HL Physics',
    rigor: 'Mastery',
    milestone: 'In-depth mastery of fields, electromagnetic induction, quantum, and astrophysics',
    modules: ['Fields at Work: Gravitational & Electric Field Potentials', 'Wave Phenomena & Doppler Effect Formulations', 'Quantum & Nuclear Physics: Wavefunctions & Radioactive Half-Life', 'Option D: Astrophysics (Stellar Evolution, Cosmology & General Relativity)'],
    outcomes: ['Grade 7 in IB DP HL Physics', 'Comprehensive grasp of Paper 1 multiple-choice subtleties', 'High marks on Paper 2 structured data questions']
  },
  {
    name: 'IB DP HL Chemistry: Organic Reaction Mechanisms & Spectrometry',
    code: 'IB-CHEM-HL',
    pathway: 'ib',
    level: 'IB Year 1 - 2',
    subject: 'Chemistry',
    format: 'In-Person',
    monthlyFee: 670,
    termFee: 1950,
    weeks: 16,
    hours: 3.5,
    eligibility: 'IB DP students taking HL Chemistry',
    rigor: 'Mastery',
    milestone: 'Deep exploration of thermodynamics, transition metals, and organic synthetic pathways',
    modules: ['Higher Level Energetics & Born-Haber Cycles', 'Transition Metal Complexes, Ligands & d-Orbital Splitting', 'Organic Stereoisomerism, Enantiomers & Reaction Mechanisms', 'Spectroscopic Identification of Organic Compounds (NMR, IR, MS)'],
    outcomes: ['Grade 7 in IB DP HL Chemistry', 'Fast deductions on unfamiliar organic synthetic schemes', 'Total confidence on Paper 3 laboratory and data analysis']
  },
  {
    name: 'IB DP HL Biology: Molecular Genetics, Evolution & Neurobiology',
    code: 'IB-BIO-HL',
    pathway: 'ib',
    level: 'IB Year 1 - 2',
    subject: 'Biology',
    format: 'Hybrid',
    monthlyFee: 650,
    termFee: 1890,
    weeks: 16,
    hours: 3.5,
    eligibility: 'IB DP students taking HL Biology',
    rigor: 'Mastery',
    milestone: 'Exhaustive understanding of nucleic acids, cellular respiration, and animal physiology',
    modules: ['DNA Structure, Replication & Gene Expression Control', 'Cellular Respiration & Photosynthesis Biochemical Pathways', 'Plant Biology: Transpiration & Phloem Transport Mechanisms', 'Animal Physiology: Kidney Osmoregulation & Neural Synapses'],
    outcomes: ['Grade 7 in IB DP HL Biology', 'Precise IB criterion-referenced keyword deployment', 'Excellence on data-based Paper 2 structured problems']
  },
  {
    name: 'IB DP HL Economics: Quantitative Modeling & Global Trade Policy',
    code: 'IB-ECON-HL',
    pathway: 'ib',
    level: 'IB Year 1 - 2',
    subject: 'Economics',
    format: 'Small Group',
    monthlyFee: 650,
    termFee: 1890,
    weeks: 14,
    hours: 3.0,
    eligibility: 'IB DP students taking HL Economics',
    rigor: 'Mastery',
    milestone: 'Mastery of Paper 3 quantitative policy recommendation and real-world synthesis',
    modules: ['Market Power: Monopoly, Oligopoly & Game Theory Nash Equilibrium', 'Macroeconomic Performance & Monetary/Fiscal Policy Trade-Offs', 'International Economics: Protectionism, Tariffs & Exchange Rate Systems', 'Development Economics: Sustainable Development Goals & Poverty Traps'],
    outcomes: ['Grade 7 in IB DP HL Economics', 'Paper 3 quantitative mathematical distinction', 'Deep critical awareness of global policy repercussions']
  },
  {
    name: 'IB DP HL Literature & Language: Comparative World Drama',
    code: 'IB-LIT-HL',
    pathway: 'ib',
    level: 'IB Year 1 - 2',
    subject: 'Humanities & Literature',
    format: 'Small Group',
    monthlyFee: 620,
    termFee: 1800,
    weeks: 14,
    hours: 3.0,
    eligibility: 'IB DP students taking HL Language A',
    rigor: 'Mastery',
    milestone: 'Nuanced comparative analysis across global literary forms and stylistic devices',
    modules: ['Paper 1: Guided Literary Analysis of Unseen Contemporary Texts', 'Paper 2: Comparative Essay on Two Studied Works of World Literature', 'Individual Oral (IO): Global Issues & Extract Thematic Synthesis', 'Higher Level Essay (HLE): Independent 1,500-Word Literary Investigation'],
    outcomes: ['Grade 7 in IB DP HL Language A', 'Articulate and commanding performance on 40/40 Individual Oral', 'Distinguished prose style and critical insight']
  },
  {
    name: 'Theory of Knowledge (TOK) Epistemology Studio & Exhibition Defense',
    code: 'TOK-IB-STUDIO',
    pathway: 'ib',
    level: 'IB Year 1 - 2',
    subject: 'Theory of Knowledge',
    format: 'Small Group',
    monthlyFee: 580,
    termFee: 1680,
    weeks: 12,
    hours: 2.5,
    eligibility: 'All IB Diploma Programme students',
    rigor: 'Advanced Honours',
    milestone: 'Production of Grade A caliber TOK Exhibition (3 objects) and 1,600-word Essay',
    modules: ['Areas of Knowledge: Natural Sciences, Human Sciences, Mathematics, History, Arts', 'Themes: Knowledge & The Knower, Technology, Language, Politics, Religion', 'TOK Exhibition: Selecting 3 Real-World Objects & Prompt Justification', 'TOK Essay: Deconstructing Prescribed Titles & Formulating Knowledge Arguments'],
    outcomes: ['Grade A in Theory of Knowledge (maximum contribution to 3 bonus points)', 'Profoud epistemic discernment and philosophical clarity', 'Confidence in oral defense during school moderation']
  },
  {
    name: 'IB Extended Essay (EE) 1-on-1 Academic Fellowship Mentorship',
    code: 'EE-IB-MENTOR',
    pathway: 'ib',
    level: 'IB Year 1 - 2',
    subject: 'Academic Research',
    format: 'Private Coaching',
    monthlyFee: 790,
    termFee: 2300,
    weeks: 12,
    hours: 3.0,
    eligibility: 'IB DP students writing their 4,000-word Extended Essay',
    rigor: 'Olympiad & Research',
    milestone: 'Completion of publication-grade 4,000-word Extended Essay scored Grade A',
    modules: ['Refining Research Question into Precise Investigable Thesis', 'Comprehensive Scholarly Literature Review in Academic Databases', 'Methodological Rigor, Data Gathering & Ethical Consideration', 'Critique & Polish against IB Criterion A to E Rubrics'],
    outcomes: ['Grade A in Extended Essay (combining with TOK for 3 full bonus points)', 'True research foundation for undergraduate dissertations', 'Distinguished writing sample for US Common App and UK UCAS dossiers']
  },
  {
    name: 'IB Internal Assessment (IA) Scientific & Mathematical Lab Clinic',
    code: 'IA-IB-CLINIC',
    pathway: 'ib',
    level: 'IB Year 1 - 2',
    subject: 'STEM Research',
    format: 'In-Person',
    monthlyFee: 720,
    termFee: 2100,
    weeks: 10,
    hours: 3.5,
    eligibility: 'IB students writing Science (Physics/Chem/Bio) or Math Internal Assessments',
    rigor: 'Mastery',
    milestone: 'Submission of 24/24 or 20/20 Internal Assessment reports adhering to IB criteria',
    modules: ['Exploration Criterion: Personal Engagement & Experimental Setup', 'Analysis Criterion: Advanced Error Propagation & Standard Deviation', 'Evaluation Criterion: Limitations, Systematic Errors & Improvements', 'Math IA: Authentic Mathematical Exploration with Genuine Sophistication'],
    outcomes: ['Top marks on 20% IA coursework component across STEM subjects', 'Elimination of examiner moderation point deductions', 'Deep appreciation of experimental design and mathematical modeling']
  },
  {
    name: 'IB DP 45-Point Distinction Strategy & Exam Simulation Crucible',
    code: 'IB-45PT-CRU',
    pathway: 'ib',
    level: 'IB Year 2',
    subject: 'Multi-Disciplinary',
    format: 'Bootcamp',
    monthlyFee: 780,
    termFee: 2280,
    weeks: 10,
    hours: 5.0,
    eligibility: 'IB DP Year 2 candidates targeting 43 - 45 points',
    rigor: 'Advanced Honours',
    milestone: 'Full timed dress rehearsals of May/November examination papers across 6 subjects',
    modules: ['Past 10 Years IB Exam Paper Archetype Mining', 'Criterion-Referenced Mark Scheme Scrutiny with Senior IB Examiners', 'Stamina, Pacing & Time-Zone Question Variations', 'Individualized Strategy to Clinch Every 7 and 3 Bonus Points'],
    outcomes: ['Achievement of 43 - 45 final IB Diploma points', 'Unconditional entry to Oxford, Cambridge, Ivy League, NUS Medicine', 'Global academic distinction']
  },
  {
    name: 'IB DP SL Mathematics: Analysis & Approaches Core Mastery',
    code: 'IB-MATH-SL',
    pathway: 'ib',
    level: 'IB Year 1 - 2',
    subject: 'Mathematics',
    format: 'Hybrid',
    monthlyFee: 580,
    termFee: 1680,
    weeks: 14,
    hours: 3.0,
    eligibility: 'IB DP students taking SL Math AA',
    rigor: 'Foundational',
    milestone: 'Solid Grade 7 foundation across algebra, functions, trigonometry, and calculus',
    modules: ['Functions, Quadratic Models & Transformations', 'Trigonometric Equations & Circular Functions', 'Differential & Integral Calculus Techniques', 'Statistics & Probability Distributions'],
    outcomes: ['Consistent Grade 7 in SL Mathematics AA', 'Error-free Paper 1 (Non-Calculator) arithmetic execution', 'Confidence on multi-step Paper 2 graphic calculator problems']
  },
  {
    name: 'IB DP HL History: 20th Century Authoritarian States & Cold War',
    code: 'IB-HIST-HL',
    pathway: 'ib',
    level: 'IB Year 1 - 2',
    subject: 'Humanities & History',
    format: 'Small Group',
    monthlyFee: 620,
    termFee: 1800,
    weeks: 14,
    hours: 3.0,
    eligibility: 'IB DP students taking HL History',
    rigor: 'Mastery',
    milestone: 'In-depth comparative analysis of authoritarian regimes and regional history papers',
    modules: ['Authoritarian States: Rise, Maintenance of Power & Impact (Hitler, Mao, Stalin)', 'The Cold War: Superpower Tensions, Rivalries & Proxy Conflicts', 'Prescribed Subject: Military Leaders & Conflict Case Studies', 'Regional Option: History of Asia and Oceania'],
    outcomes: ['Grade 7 in IB DP HL History', 'Mastery of document analysis Paper 1', 'Sophisticated historical essays with critical historiography']
  },
  {
    name: 'IB DP Environmental Systems & Societies (ESS) Interdisciplinary Lab',
    code: 'IB-ESS-SL',
    pathway: 'ib',
    level: 'IB Year 1 - 2',
    subject: 'Sciences & Humanities',
    format: 'Online Live',
    monthlyFee: 540,
    termFee: 1560,
    weeks: 12,
    hours: 2.5,
    eligibility: 'IB students taking ESS SL',
    rigor: 'Foundational',
    milestone: 'Holistic grasp of ecosystems, resource management, and environmental value systems',
    modules: ['Ecosystems & Ecology Energy Flow and Biogeochemical Cycles', 'Atmospheric Systems & Air Pollution Remediation', 'Water Security & Terrestrial Food Production Systems', 'Climate Change, Energy Choices & Environmental Value Systems (EVS)'],
    outcomes: ['Grade 7 in IB DP ESS SL', 'Seamless integration of scientific data and societal perspective', 'High scoring on Paper 2 structured data questions']
  },
  {
    name: 'IB DP Psychology HL: Cognitive, Biological & Sociocultural Approaches',
    code: 'IB-PSYC-HL',
    pathway: 'ib',
    level: 'IB Year 1 - 2',
    subject: 'Social Sciences',
    format: 'Small Group',
    monthlyFee: 610,
    termFee: 1770,
    weeks: 14,
    hours: 3.0,
    eligibility: 'IB DP students taking HL Psychology',
    rigor: 'Mastery',
    milestone: 'Critical evaluation of empirical research studies and research methodology',
    modules: ['Biological Approach to Understanding Human Behaviour', 'Cognitive Approach: Schema Theory, Memory & Thinking/Decision-Making', 'Sociocultural Approach: Social Identity & Enculturation/Acculturation', 'Qualitative Research Methodologies & Replicative Experimental IA'],
    outcomes: ['Grade 7 in IB DP HL Psychology', 'Rigorous critique of research methodology (validity, reliability, ethics)', 'Command of 22-mark extended response essay structure']
  },
  {
    name: 'IB DP Computer Science HL: System Architecture & Java Object-Oriented',
    code: 'IB-CS-HL',
    pathway: 'ib',
    level: 'IB Year 1 - 2',
    subject: 'Computer Science',
    format: 'In-Person',
    monthlyFee: 680,
    termFee: 1980,
    weeks: 14,
    hours: 3.5,
    eligibility: 'IB DP students taking HL Computer Science',
    rigor: 'Mastery',
    milestone: 'Mastery of abstract data structures, computational algorithms, and dossier project',
    modules: ['System Fundamentals, Architecture & Operating Systems', 'Computational Thinking, Searching/Sorting & Recursion', 'Abstract Data Structures: Linked Lists, Stacks, Queues, Binary Trees', 'Case Study Paper 3 & 30-Hour Practical Programming Dossier'],
    outcomes: ['Grade 7 in IB DP HL Computer Science', 'Complete working software solution with client documentation', 'Seamless preparation for university Computer Science']
  },
  {
    name: 'IB DP Year 1 Summer Mid-Point Sprint: IA Inception & HL Solidification',
    code: 'IB-SUMMER-SPR',
    pathway: 'ib',
    level: 'IB Year 1 (Rising Year 2)',
    subject: 'Multi-Disciplinary',
    format: 'Bootcamp',
    monthlyFee: 740,
    termFee: 2150,
    weeks: 6,
    hours: 4.5,
    eligibility: 'IB DP Year 1 students entering Year 2',
    rigor: 'Mastery',
    milestone: 'Zero backlog: complete drafts of 3 IAs and first complete draft of Extended Essay',
    modules: ['Consolidation of All Year 1 HL Syllabi', 'Laboratory Data Gathering & Math IA Calculation Refinement', 'Extended Essay Peer-Review & Thesis Defense', 'Setting Up Year 2 Predicted Grade 44+ Trajectory'],
    outcomes: ['Stress-free entry into IB Year 2', 'Early completion of major coursework milestones', 'Sky-high predicted grades for US/UK early applications']
  },
  {
    name: 'IB DP Paper 1 & Paper 2 Speed & Keyword Calibration Clinic',
    code: 'IB-EXAM-SPD',
    pathway: 'ib',
    level: 'IB Year 2',
    subject: 'Multi-Disciplinary',
    format: 'Online Live',
    monthlyFee: 560,
    termFee: 1620,
    weeks: 8,
    hours: 3.0,
    eligibility: 'IB DP Year 2 candidates',
    rigor: 'Mastery',
    milestone: 'Rapid multiple-choice decoding and keyword-exact structured answers',
    modules: ['Paper 1 MC Question Elimination Heuristics', 'Paper 2 Command Term Nuances (Evaluate, Discuss, Explain, Contrast)', 'Graph Drawing & Annotation Rubric Precision', 'Timing Discipline: Eliminating Incomplete Final Questions'],
    outcomes: ['Boost of 5 to 10 scaled marks per subject paper', 'Total mastery of IB command terms', 'Elimination of time-pressure panic']
  },

  // IGCSE (13 courses)
  {
    name: 'Cambridge IGCSE Extended Mathematics 0580/0607 Distinction',
    code: 'IGCSE-MATH-EXT',
    pathway: 'igcse',
    level: 'Grade 9 - 10',
    subject: 'Mathematics',
    format: 'Small Group',
    monthlyFee: 560,
    termFee: 1620,
    weeks: 14,
    hours: 3.0,
    eligibility: 'IGCSE Year 10/11 or Grade 9/10 students',
    rigor: 'Mastery',
    milestone: 'Comprehensive mastery of algebra, functions, geometry, vectors, and trigonometry',
    modules: ['Algebraic Fractions, Simultaneous Equations & Inequalities', 'Coordinate Geometry, Transformations & Vectors', 'Trigonometry: Sine Rule, Cosine Rule & 3D Bearings', 'Probability Tree Diagrams & Cumulative Frequency Curves'],
    outcomes: ['Grade 9 / A* in Cambridge IGCSE Mathematics 0580/0607', 'Speedy and accurate paper execution', 'Flawless foundation for IB DP HL or A-Level Mathematics']
  },
  {
    name: 'Cambridge IGCSE Physics 0625: Core Theory & Practical Skills',
    code: 'IGCSE-PHYS-0625',
    pathway: 'igcse',
    level: 'Grade 9 - 10',
    subject: 'Physics',
    format: 'In-Person',
    monthlyFee: 550,
    termFee: 1590,
    weeks: 14,
    hours: 3.0,
    eligibility: 'IGCSE students taking Physics',
    rigor: 'Mastery',
    milestone: 'In-depth mastery of mechanics, thermal physics, electricity, and nuclear models',
    modules: ['Forces, Motion & Pressure Dynamics', 'Thermal Properties of Matter & Kinetic Theory', 'Light Optics, Sound Waves & Electromagnetic Spectrum', 'Electricity & Magnetism, Logic Gates & Nuclear Physics'],
    outcomes: ['Grade 9 / A* in Cambridge IGCSE Physics 0625', 'Full marks on Paper 6 Alternative to Practical', 'Deep intuitive grasp of physical phenomena']
  },
  {
    name: 'Cambridge IGCSE Chemistry 0620: Stoichiometry & Chemical Analysis',
    code: 'IGCSE-CHEM-0620',
    pathway: 'igcse',
    level: 'Grade 9 - 10',
    subject: 'Chemistry',
    format: 'In-Person',
    monthlyFee: 550,
    termFee: 1590,
    weeks: 14,
    hours: 3.0,
    eligibility: 'IGCSE students taking Chemistry',
    rigor: 'Mastery',
    milestone: 'Flawless stoichiometry mole equations, organic homologous series, and qualitative tests',
    modules: ['The Particulate Nature of Matter & Experimental Techniques', 'Stoichiometry, Molar Volumes & Titration Calculations', 'Acids, Bases, Salts & Qualitative Analysis Identification Tests', 'Organic Chemistry: Alkanes, Alkenes, Alcohols & Polymers'],
    outcomes: ['Grade 9 / A* in Cambridge IGCSE Chemistry 0620', 'Complete elimination of calculation errors in mole problems', 'Instant recall of gas and cation/anion chemical tests']
  },
  {
    name: 'Cambridge IGCSE Biology 0610: Systems Physiology & Genetics',
    code: 'IGCSE-BIO-0610',
    pathway: 'igcse',
    level: 'Grade 9 - 10',
    subject: 'Biology',
    format: 'Hybrid',
    monthlyFee: 530,
    termFee: 1540,
    weeks: 14,
    hours: 2.5,
    eligibility: 'IGCSE students taking Biology',
    rigor: 'Mastery',
    milestone: 'Exhaustive understanding of biological systems, human physiology, and inheritance',
    modules: ['Cell Structure, Membrane Transport & Enzymatic Action', 'Plant Nutrition, Transport Systems & Transpiration', 'Human Gas Exchange, Respiration & Coordination/Response', 'Reproduction, Inheritance, Monohybrid Crosses & Biotechnology'],
    outcomes: ['Grade 9 / A* in Cambridge IGCSE Biology 0610', 'Accurate scientific vocabulary matching Cambridge mark schemes', 'High confidence on experimental analysis questions']
  },
  {
    name: 'Cambridge IGCSE First Language English 0500: Rhetoric & Composition',
    code: 'IGCSE-ENG-0500',
    pathway: 'igcse',
    level: 'Grade 9 - 10',
    subject: 'English Language',
    format: 'Small Group',
    monthlyFee: 520,
    termFee: 1500,
    weeks: 12,
    hours: 2.5,
    eligibility: 'IGCSE students taking First Language English',
    rigor: 'Mastery',
    milestone: 'Editorial-grade directed writing, descriptive compositions, and summary accuracy',
    modules: ['Paper 1: Reading Comprehension & Directed Response Writing', 'Paper 2: Descriptive & Narrative Composition Architecture', 'Summary Writing: Transforming Complex Extracts into Precise Bullet Points', 'Writer’s Effect: Explaining Sensory Imagery and Subtext'],
    outcomes: ['Grade 9 / A* in Cambridge IGCSE English 0500', 'Nuanced command of tone, voice, and register', 'Effortless deconstruction of complex figurative language']
  },
  {
    name: 'Cambridge IGCSE Computer Science 0478: Algorithms & Architecture',
    code: 'IGCSE-CS-0478',
    pathway: 'igcse',
    level: 'Grade 9 - 10',
    subject: 'Computer Science',
    format: 'In-Person',
    monthlyFee: 560,
    termFee: 1620,
    weeks: 12,
    hours: 3.0,
    eligibility: 'IGCSE students taking Computer Science',
    rigor: 'Mastery',
    milestone: 'Mastery of pseudocode, trace tables, data representation, and network security',
    modules: ['Binary, Hexadecimal & Data Representation in Memory', 'Computer Architecture: Von Neumann Model & Fetch-Execute Cycle', 'Pseudocode Algorithm Design & Linear/Binary Searches', 'Security, Ethics & Data Transmission Protocols'],
    outcomes: ['Grade 9 / A* in Cambridge IGCSE Computer Science 0478', 'Fluent trace table completion without errors', 'Clear programming logic in Python/pseudocode']
  },
  {
    name: 'Cambridge IGCSE Economics 0455: Macro Policy & Global Trade',
    code: 'IGCSE-ECON-0455',
    pathway: 'igcse',
    level: 'Grade 9 - 10',
    subject: 'Economics',
    format: 'Small Group',
    monthlyFee: 520,
    termFee: 1500,
    weeks: 12,
    hours: 2.5,
    eligibility: 'IGCSE students taking Economics',
    rigor: 'Mastery',
    milestone: 'Clear economic diagram construction, price elasticity, and fiscal/monetary policies',
    modules: ['The Basic Economic Problem & Allocation of Resources', 'Microeconomic Decision Makers: Households, Firms & Workers', 'Government & Macroeconomic Objectives (Inflation, Employment, Growth)', 'Economic Development & International Trade Exchange Rates'],
    outcomes: ['Grade 9 / A* in Cambridge IGCSE Economics 0455', 'Accurate, well-labeled supply and demand diagrams', 'Critical analysis of government macroeconomic intervention']
  },
  {
    name: 'Cambridge IGCSE Additional Mathematics 0606 Analytical Mastery',
    code: 'IGCSE-AMATH-0606',
    pathway: 'igcse',
    level: 'Grade 10 / Year 11',
    subject: 'Mathematics',
    format: 'Small Group',
    monthlyFee: 590,
    termFee: 1720,
    weeks: 14,
    hours: 3.0,
    eligibility: 'IGCSE students taking Additional Mathematics',
    rigor: 'Advanced Honours',
    milestone: 'Calculus differentiation, integration, kinematics, and circular measure',
    modules: ['Differentiation: Product, Quotient & Chain Rules', 'Integration & Definite Integrals of Area Under Curves', 'Vectors in 2D & Relative Velocity', 'Trigonometric Equations & Angle Sum Identities'],
    outcomes: ['Grade 9 / A* in Cambridge IGCSE Additional Math 0606', 'Effortless transition to IB HL Math or A-Level H2 Math', 'Flawless multi-step calculus problem solving']
  },
  {
    name: 'Cambridge IGCSE Global Perspectives 0457: Critical Inquiry & Defense',
    code: 'IGCSE-GP-0457',
    pathway: 'igcse',
    level: 'Grade 9 - 10',
    subject: 'Humanities & Social Sciences',
    format: 'Online Live',
    monthlyFee: 490,
    termFee: 1420,
    weeks: 10,
    hours: 2.5,
    eligibility: 'IGCSE students taking Global Perspectives',
    rigor: 'Foundational',
    milestone: 'Evaluation of global issues from multiple perspectives, research reports, and team projects',
    modules: ['Deconstructing Global Perspectives: Local, National, Global Dimensions', 'Evaluating Arguments: Fact, Opinion, Value Judgements & Bias', 'Individual Research Report (IRR) 2,000-Word Thesis Architecture', 'Team Project: Collaboration, Planning & Evaluative Reflection'],
    outcomes: ['Grade 9 / A* in Cambridge IGCSE Global Perspectives 0457', 'Outstanding critical inquiry and research methodology', 'Direct preparation for IB Theory of Knowledge (TOK)']
  },
  {
    name: 'Cambridge IGCSE Combined Science 0653 Accelerated Foundation',
    code: 'IGCSE-CSCI-0653',
    pathway: 'igcse',
    level: 'Grade 9 - 10',
    subject: 'Sciences',
    format: 'Hybrid',
    monthlyFee: 540,
    termFee: 1560,
    weeks: 12,
    hours: 3.0,
    eligibility: 'IGCSE students taking Combined Science',
    rigor: 'Foundational',
    milestone: 'Integrated understanding bridging biology, chemistry, and physics core syllabi',
    modules: ['Biology: Cells, Nutrition, Circulation & Ecology', 'Chemistry: Atoms, Reactions, Acids & Organic Basics', 'Physics: Forces, Electricity, Thermal Energy & Waves', 'Paper 6 Alternative to Practical Diagnostic Laboratory'],
    outcomes: ['Double A* in Cambridge IGCSE Combined Science', 'Balanced scientific literacy across all 3 disciplines', 'Confidence in data interpretation and experimental design']
  },
  {
    name: 'Cambridge IGCSE Business Studies 0450: Strategic Enterprise & Finance',
    code: 'IGCSE-BUS-0450',
    pathway: 'igcse',
    level: 'Grade 9 - 10',
    subject: 'Business Studies',
    format: 'Small Group',
    monthlyFee: 510,
    termFee: 1480,
    weeks: 12,
    hours: 2.5,
    eligibility: 'IGCSE students taking Business Studies',
    rigor: 'Foundational',
    milestone: 'Case study analysis of marketing, operations, human resources, and financial accounts',
    modules: ['Understanding Business Activity & Classification of Enterprises', 'People in Business: Motivation, Organizational Structure & Recruitment', 'Marketing: Market Research, 4Ps & Marketing Strategy', 'Financial Information & Decisions: Cash Flow, Income Statements & Balance Sheets'],
    outcomes: ['Grade 9 / A* in Cambridge IGCSE Business Studies 0450', 'Insightful evaluation of real-world business case scenarios', 'Accurate financial ratio calculation and strategic recommendation']
  },
  {
    name: 'Cambridge IGCSE Past 10-Year Series Intensive Exam Crucible',
    code: 'IGCSE-CRU-10YR',
    pathway: 'igcse',
    level: 'Grade 10 / Year 11',
    subject: 'Multi-Disciplinary',
    format: 'Bootcamp',
    monthlyFee: 650,
    termFee: 1880,
    weeks: 8,
    hours: 4.5,
    eligibility: 'IGCSE candidates preparing for May/June or Oct/Nov examinations',
    rigor: 'Advanced Honours',
    milestone: 'Simulated examination series across 8 subjects under official Cambridge time constraints',
    modules: ['Dissecting Past 10 Years Cambridge Examiner Reports', 'High-Risk Common Errors and Cambridge Grade Boundary Analysis', 'Mark Scheme Exact Match Keyword Training', 'Stamina, Speed, and Paper Review Discipline'],
    outcomes: ['Straight A* (8 to 9 subjects) portfolio distinction', 'Total psychological comfort during actual examination sessions', 'Eligibility for Cambridge Top in Country / Top in World accolades']
  },
  {
    name: 'Cambridge IGCSE Literature in English 0475: Prose, Poetry & Drama',
    code: 'IGCSE-LIT-0475',
    pathway: 'igcse',
    level: 'Grade 9 - 10',
    subject: 'Humanities & Literature',
    format: 'Small Group',
    monthlyFee: 530,
    termFee: 1540,
    weeks: 12,
    hours: 2.5,
    eligibility: 'IGCSE students taking Literature 0475',
    rigor: 'Mastery',
    milestone: 'In-depth textual engagement with set texts, dramatic technique, and unseen poetry',
    modules: ['Paper 1: Poetry and Prose Set Texts In-Depth Analysis', 'Paper 2/3: Drama Set Texts (Shakespeare & Modern Drama)', 'Unseen Literature: Responding to Tone, Form & Theme', 'Constructing Cogent Thematic Arguments under Timed Conditions'],
    outcomes: ['Grade 9 / A* in Cambridge IGCSE Literature 0475', 'Articulate critical vocabulary and literary sensitivity', 'Effortless deconstruction of complex poetic metaphors']
  },

  // ADVANCED SKILLS & UNIVERSITY READINESS (14 courses)
  {
    name: 'Applied Machine Learning & Python Algorithmic Logic',
    code: 'SKILL-AI-PY',
    pathway: 'skills',
    level: 'Pre-University / Scholar',
    subject: 'Computer Science & AI',
    format: 'Small Group',
    monthlyFee: 750,
    termFee: 2180,
    weeks: 12,
    hours: 3.5,
    eligibility: 'Basic programming knowledge in Python or high school mathematics proficiency',
    rigor: 'Olympiad & Research',
    milestone: 'Building, training, and deploying deep learning neural networks from first principles',
    modules: ['Linear Algebra & Gradient Descent Optimization', 'Supervised & Unsupervised Learning in Scikit-Learn', 'Neural Networks, Backpropagation & PyTorch Tensors', 'Computer Vision & Natural Language Processing Transformers'],
    outcomes: ['Working AI portfolio projects deployed on GitHub/HuggingFace', 'Competitive standing in Kaggle machine learning competitions', 'Irresistible academic profile for university Computer Science admission']
  },
  {
    name: 'Advanced Quantitative Financial Modeling & Econometrics',
    code: 'SKILL-QUANT-FIN',
    pathway: 'skills',
    level: 'Pre-University / Scholar',
    subject: 'Economics & Mathematics',
    format: 'Small Group',
    monthlyFee: 780,
    termFee: 2280,
    weeks: 12,
    hours: 3.5,
    eligibility: 'H2 Math or IB HL Math proficiency',
    rigor: 'Advanced Honours',
    milestone: 'Monte Carlo simulations, Black-Scholes derivative pricing, and econometric regression',
    modules: ['Time Series Analysis & Autoregressive Models (ARIMA)', 'Portfolio Theory & Markowitz Efficient Frontier in Python', 'Black-Scholes Option Pricing & Stochastic Calculus Intro', 'Algorithmic Backtesting on Real Bloomberg Market Data'],
    outcomes: ['Quantitative research report showcasing proprietary financial models', 'Preparation for university finance, econometrics, and quantitative hedge funds', 'Elite distinction on scholarship and university applications']
  },
  {
    name: 'Bio-Engineering & CRISPR Gene Editing Research Studio',
    code: 'SKILL-BIO-CRISPR',
    pathway: 'skills',
    level: 'Pre-University / Scholar',
    subject: 'Biomedical Science',
    format: 'In-Person',
    monthlyFee: 820,
    termFee: 2380,
    weeks: 12,
    hours: 3.5,
    eligibility: 'Upper secondary / JC / IB biology students targeting medicine or bio-engineering',
    rigor: 'Olympiad & Research',
    milestone: 'Designing synthetic guide RNAs (gRNAs) and analyzing off-target mutations in silico',
    modules: ['CRISPR-Cas9 Mechanism & Molecular Cleavage Protocols', 'Synthetic Biology BioBricks & Metabolic Pathway Engineering', 'Bioinformatics: BLAST, NCBI Databases & Protein Folding (AlphaFold)', 'Bioethics, Genetic Regulation & Patent Law in Medicine'],
    outcomes: ['In silico gene-editing research paper ready for science competitions', 'Direct mentorship under medical and molecular biology researchers', 'Stunning portfolio credential for Ivy League and Oxbridge interviews']
  },
  {
    name: 'Oxbridge & Ivy League Academic Defense & Interview Masterclass',
    code: 'SKILL-OXIVY-MST',
    pathway: 'skills',
    level: 'Pre-University / Scholar',
    subject: 'Academic Preparation',
    format: 'Private Coaching',
    monthlyFee: 920,
    termFee: 2680,
    weeks: 8,
    hours: 3.0,
    eligibility: 'High school seniors / JC2 scholars with straight As or 42+ IB prediction',
    rigor: 'Advanced Honours',
    milestone: 'Effortless intellectual defense against challenging Socratic faculty questioning',
    modules: ['Deconstructing Unseen Multi-Disciplinary Paradoxes & Proofs', 'Personal Statement Thesis Interrogation & Defense', 'Mock Admissions Interviews with Oxford/Cambridge Alumni', 'Admissions Test Strategy (STEP, MAT, PAT, TSA, LNAT)'],
    outcomes: ['Admission offers from world-leading universities (Oxbridge / Ivy League)', 'Total composure and intellectual spontaneity under scrutiny', 'Clear articulation of authentic scholarly curiosity']
  },
  {
    name: 'Singapore Young Physicists’ Tournament (SYPT) Research Fellowship',
    code: 'SKILL-SYPT-FELL',
    pathway: 'skills',
    level: 'Pre-University / Scholar',
    subject: 'Physics Research',
    format: 'Private Coaching',
    monthlyFee: 890,
    termFee: 2600,
    weeks: 16,
    hours: 4.0,
    eligibility: 'Selected students participating in SYPT or national physics competitions',
    rigor: 'Olympiad & Research',
    milestone: 'Experimental and theoretical resolution of official SYPT tournament open problems',
    modules: ['Formulating Mathematical Models of Non-Linear Physical Phenomena', 'High-Speed Video Trajectory Analysis & Laser Interferometry', 'Physics Fight Defense: Reporter, Opponent & Reviewer Roles', 'Publishing Extended Findings in Pre-University Science Journals'],
    outcomes: ['SYPT Championship / Gold Medal standing', 'Selection for International Young Physicists’ Tournament (IYPT)', 'Elite academic distinction recognized by global university faculty']
  },
  {
    name: 'Scientific Paper Writing, Data Visualization & Peer Review Colloquium',
    code: 'SKILL-SCI-PUB',
    pathway: 'skills',
    level: 'Pre-University / Scholar',
    subject: 'Academic Research',
    format: 'Small Group',
    monthlyFee: 690,
    termFee: 2000,
    weeks: 10,
    hours: 3.0,
    eligibility: 'Students with existing STEM or humanities research projects',
    rigor: 'Advanced Honours',
    milestone: 'Drafting, formatting in LaTeX, and submitting a peer-review ready manuscript',
    modules: ['Structure of Academic Research Papers (IMRAD Framework)', 'LaTeX Mathematical Typesetting & Scholarly Citation Standards', 'Publication-Quality Data Visualization in Python (Matplotlib/Seaborn)', 'Navigating Peer Review, Answering Reviewer Comments & Rebuttals'],
    outcomes: ['Submission of first-author paper to recognized academic journals', 'Professional-grade LaTeX manuscript portfolio', 'Command of academic writing conventions and research ethics']
  },
  {
    name: 'Mathematical Modeling & Operations Research Optimization',
    code: 'SKILL-MATH-MOD',
    pathway: 'skills',
    level: 'Pre-University / Scholar',
    subject: 'Applied Mathematics',
    format: 'Small Group',
    monthlyFee: 720,
    termFee: 2100,
    weeks: 12,
    hours: 3.0,
    eligibility: 'Strong mathematical foundation in calculus and algebra',
    rigor: 'Olympiad & Research',
    milestone: 'Formulating and solving large-scale linear programming and network flow optimization',
    modules: ['Linear Programming & Simplex Algorithm in Python', 'Dynamic Programming & Bellman Optimality Equations', 'Markov Chains & Stochastic Process Modeling', 'Real-World Case Studies: Singapore Urban Logistics & Energy Grids'],
    outcomes: ['Top standing in International Mathematical Modeling Challenge (IMMC)', 'Command of computational mathematical optimization tools', 'Distinguished quantitative portfolio for university engineering and data science']
  },
  {
    name: 'Algorithmic Thinking & Competitive Programming in C++',
    code: 'SKILL-ALGO-CPP',
    pathway: 'skills',
    level: 'Pre-University / Scholar',
    subject: 'Computer Science',
    format: 'Small Group',
    monthlyFee: 750,
    termFee: 2180,
    weeks: 14,
    hours: 3.5,
    eligibility: 'Prior coding experience in C++, Java, or Python',
    rigor: 'Olympiad & Research',
    milestone: 'Solving complex National Olympiad in Informatics (NOI) competitive programming tasks',
    modules: ['Time & Space Complexity Asymptotic Analysis (Big-O)', 'Advanced Data Structures: Fenwick Trees, Segment Trees, Disjoint Sets', 'Graph Algorithms: Dijkstra, Floyd-Warshall, Min Cut / Max Flow', 'Dynamic Programming Optimization: Bitmask, Convex Hull Trick'],
    outcomes: ['National Olympiad in Informatics (NOI) Gold / Silver Medal', 'High rating on Codeforces and LeetCode algorithmic platforms', 'Direct route to International Olympiad in Informatics (IOI) training']
  },
  {
    name: 'Philosophy of Mind, Cognitive Science & Epistemology Think-Tank',
    code: 'SKILL-PHIL-MIND',
    pathway: 'skills',
    level: 'Pre-University / Scholar',
    subject: 'Philosophy & Cognitive Science',
    format: 'Small Group',
    monthlyFee: 640,
    termFee: 1860,
    weeks: 10,
    hours: 2.5,
    eligibility: 'Upper secondary and junior college students with passion for humanities',
    rigor: 'Foundational',
    milestone: 'Deep philosophical inquiry into consciousness, artificial intelligence, and reality',
    modules: ['Dualism vs Physicalism & The Hard Problem of Consciousness', 'Turing Test, Chinese Room Argument & Machine Sentience', 'Epistemology: Skepticism, Foundationalism & Bayesian Belief', 'Debate & Socratic Symposium on Global AI Governance'],
    outcomes: ['Publication-ready philosophical essay on technological ethics', 'Exceptional critical reasoning and dialectical debating agility', 'Deep preparation for university Philosophy, Politics and Economics (PPE)']
  },
  {
    name: 'Advanced Econometric Data Science with R & Stata',
    code: 'SKILL-ECON-R',
    pathway: 'skills',
    level: 'Pre-University / Scholar',
    subject: 'Economics & Data Science',
    format: 'Hybrid',
    monthlyFee: 720,
    termFee: 2100,
    weeks: 12,
    hours: 3.0,
    eligibility: 'H2 Economics or university-bound economics scholars',
    rigor: 'Advanced Honours',
    milestone: 'Causal inference, regression discontinuity, and difference-in-differences analysis',
    modules: ['Ordinary Least Squares (OLS) Multiple Regression in R', 'Heteroskedasticity, Multicollinearity & Endogeneity Corrections', 'Difference-in-Differences (DiD) & Instrumental Variables', 'Empirical Policy Evaluation of Singapore Public Housing & Healthcare'],
    outcomes: ['Independent empirical econometric paper analyzing public policy data', 'Fluency in R and Stata software for university research assistantships', 'Distinction on university applications for economics and public policy']
  },
  {
    name: 'Neuroscience & Cellular Electrophysiology Laboratory Simulation',
    code: 'SKILL-NEURO-LAB',
    pathway: 'skills',
    level: 'Pre-University / Scholar',
    subject: 'Biomedical Science',
    format: 'In-Person',
    monthlyFee: 790,
    termFee: 2300,
    weeks: 12,
    hours: 3.5,
    eligibility: 'High school / JC biology students aiming for neuroscience or medicine',
    rigor: 'Advanced Honours',
    milestone: 'Modeling action potential electrodynamics and neural circuit synaptic plasticity',
    modules: ['Hodgkin-Huxley Mathematical Equations of Action Potentials', 'Synaptic Transmission, Neurotransmitters & Long-Term Potentiation', 'Optogenetics & Functional MRI (fMRI) Brain Imaging Technologies', 'Neurological Disorders Case Studies: Alzheimer\'s, Parkinson\'s, Epilepsy'],
    outcomes: ['Deep neuro-scientific literacy bridging biology, physics, and computer science', 'Authentic laboratory simulation dossier for medical school admissions', 'Direct mentorship under clinical and neuroscience academic fellows']
  },
  {
    name: 'Global Diplomacy, Geopolitical Strategy & Model UN Leadership',
    code: 'SKILL-DIP-MUN',
    pathway: 'skills',
    level: 'Pre-University / Scholar',
    subject: 'International Relations',
    format: 'Small Group',
    monthlyFee: 580,
    termFee: 1680,
    weeks: 10,
    hours: 2.5,
    eligibility: 'Students interested in diplomacy, international law, and global governance',
    rigor: 'Foundational',
    milestone: 'Drafting international treaties, multi-lateral negotiation, and rhetorical diplomacy',
    modules: ['Public International Law & United Nations Charter Conventions', 'Geopolitics of the Indo-Pacific & South China Sea Maritime Law', 'Multilateral Coalition-Building & Crisis Diplomacy Simulations', 'Speechwriting & Spontaneous Diplomatic Rebuttal Execution'],
    outcomes: ['Best Delegate awards at prestigious national and international MUN conferences', 'Mastery of diplomatic protocol, conflict resolution, and persuasion', 'Commanding presence for public service and diplomatic scholarship interviews']
  },
  {
    name: 'Pre-University Intellectual Thesis Colloquium & Public Defense',
    code: 'SKILL-PUB-DEF',
    pathway: 'skills',
    level: 'Pre-University / Scholar',
    subject: 'Multi-Disciplinary',
    format: 'Private Coaching',
    monthlyFee: 850,
    termFee: 2450,
    weeks: 8,
    hours: 3.0,
    eligibility: 'Scholars finalizing an independent research thesis or competition paper',
    rigor: 'Advanced Honours',
    milestone: 'Formal 30-minute academic thesis defense before a panel of university faculty',
    modules: ['Slide Deck Design & Scientific Visual Storytelling', 'Anticipating Skeptical Academic Counter-Arguments and Limitations', 'Voice Projection, Pausing, and Stage Presence in Lecture Halls', 'Handling Hostile Technical Inquiries with Academic Composure'],
    outcomes: ['Recorded broadcast of academic defense suitable for digital portfolio', 'Confidence to present at international scholarly conferences', 'Permanent intellectual transformation into a self-directed researcher']
  },
  {
    name: 'Quantum Information Science & Quantum Computing Foundations',
    code: 'SKILL-QUANT-COMP',
    pathway: 'skills',
    level: 'Pre-University / Scholar',
    subject: 'Physics & Computer Science',
    format: 'Small Group',
    monthlyFee: 880,
    termFee: 2550,
    weeks: 12,
    hours: 3.5,
    eligibility: 'Strong background in physics and linear algebra / calculus',
    rigor: 'Olympiad & Research',
    milestone: 'Simulating quantum circuits, superposition, and Shor’s / Grover’s algorithms with Qiskit',
    modules: ['Qubits, Bloch Sphere Representation & Superposition', 'Quantum Logic Gates: Pauli, Hadamard & CNOT Transformations', 'Quantum Entanglement, Bell’s Theorem & Quantum Teleportation', 'Executing Real Quantum Algorithms on IBM Quantum Hardware via Cloud'],
    outcomes: ['IBM Quantum Developer credential and Qiskit proficiency', 'Rare and highly sought-after pre-university specialization', 'Unrivaled competitive distinction for world-leading physics and CS admissions']
  }
];

// Enrich Courses (Mapping all 100 courses CRS001 to CRS100 from rawData)
export function getEnrichedCourses(): EnrichedCourse[] {
  return rawData.courses.map((rawCourse, index) => {
    // Deterministic selection from curated Singapore course catalog
    const templateIndex = index % COURSE_CATALOG_TEMPLATES.length;
    const template = COURSE_CATALOG_TEMPLATES[templateIndex];
    
    // Assign faculty mentor deterministically
    const mentorIndex = index % FACULTY_DIRECTORY.length;
    const mentor = FACULTY_DIRECTORY[mentorIndex];
    const mentorId = `TRN${String((mentorIndex % 30) + 1).padStart(3, '0')}`;

    // Link schedules (e.g. 2 schedules per course from SCH001 to SCH050)
    const schId1 = `SCH${String(((index * 2) % 50) + 1).padStart(3, '0')}`;
    const schId2 = `SCH${String(((index * 2 + 1) % 50) + 1).padStart(3, '0')}`;

    // Link trial class (TRL001 to TRL100)
    const trialId = `TRL${String((index % 100) + 1).padStart(3, '0')}`;

    // Link certification (CERT001 to CERT020)
    const certId = `CERT${String((index % 20) + 1).padStart(3, '0')}`;

    // Dynamic capacity calculation
    const cohortCapacity = 12;
    const spotsRemaining = Math.max(1, (index % 5) + 1);

    return {
      id: rawCourse.id,
      name: `${template.name}`,
      rawName: rawCourse.name,
      code: `${template.code}-${rawCourse.id}`,
      pathway: template.pathway,
      level: template.level,
      subject: template.subject,
      format: template.format,
      monthlyFeeSGD: template.monthlyFee,
      termFeeSGD: template.termFee,
      durationWeeks: template.weeks,
      hoursPerWeek: template.hours,
      facultyMentorId: mentorId,
      facultyMentorName: mentor.name,
      scheduleIds: [schId1, schId2],
      trialClassId: trialId,
      certificationId: certId,
      eligibility: template.eligibility,
      syllabusModules: template.modules,
      learningOutcomes: template.outcomes,
      targetMilestone: template.milestone,
      cohortCapacity,
      spotsRemaining,
      academicRigor: template.rigor
    };
  });
}

// Enrich Faculty Mentors (TRN001 to TRN030)
export function getEnrichedFaculty(): EnrichedFacultyMentor[] {
  const courses = getEnrichedCourses();

  return rawData.trainers.map((rawTrainer, index) => {
    const info = FACULTY_DIRECTORY[index % FACULTY_DIRECTORY.length];
    const mentoredCourses = courses
      .filter(c => c.facultyMentorId === rawTrainer.id)
      .map(c => c.name);

    return {
      id: rawTrainer.id,
      rawName: rawTrainer.name,
      name: info.name,
      title: info.title,
      academicBackground: info.academicBackground,
      specialization: info.specialization,
      pathway: info.pathway,
      researchFocus: info.researchFocus,
      coursesMentored: mentoredCourses
    };
  });
}

// Enrich Campuses (CMP001 to CMP010)
export function getEnrichedCampuses(): EnrichedCampus[] {
  return rawData.campuses.map((rawCampus, index) => {
    const campus = SINGAPORE_CAMPUSES[index % SINGAPORE_CAMPUSES.length];
    return {
      id: rawCampus.id,
      ...campus
    };
  });
}

// Enrich Schedules (SCH001 to SCH050)
export function getEnrichedSchedules(): EnrichedSchedule[] {
  const courses = getEnrichedCourses();
  const campuses = getEnrichedCampuses();

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeSlots = [
    '09:00 - 11:30 SGT',
    '11:45 - 14:15 SGT',
    '14:30 - 17:00 SGT',
    '17:15 - 19:45 SGT',
    '19:30 - 22:00 SGT'
  ];
  const cohorts = [
    'Alpha Distinction Cohort',
    'Senior Scholar Colloquium',
    'Weekend Deep-Rigor Track',
    'Evening Academic Seminar',
    'Intensive Olympiad Crucible',
    'Pioneer Milestone Group'
  ];

  return rawData.schedules.map((rawSch, index) => {
    const courseIndex = (index * 2) % courses.length;
    const course = courses[courseIndex];
    const campus = campuses[index % campuses.length];

    const day = days[index % days.length];
    const time = timeSlots[index % timeSlots.length];
    const cohort = cohorts[index % cohorts.length];
    const capacityTotal = 12;
    const enrolledCount = 8 + (index % 4);

    const statuses: ('Open for Enrolment' | 'Few Slots Remaining' | 'Interview Prerequisite')[] = [
      'Open for Enrolment',
      'Few Slots Remaining',
      'Interview Prerequisite'
    ];

    return {
      id: rawSch.id,
      courseId: course.id,
      courseName: course.name,
      pathway: course.pathway,
      cohortName: `${cohort} (${rawSch.id})`,
      dayOfWeek: day,
      timeSlot: time,
      campusId: campus.id,
      campusName: campus.name,
      mode: index % 3 === 0 ? 'In-Person' : index % 3 === 1 ? 'Hybrid' : 'Virtual Live',
      status: statuses[index % statuses.length],
      startDate: 'Term 1 / Term 2 Intake Cycles',
      capacityTotal,
      enrolledCount
    };
  });
}

// Enrich Trial Classes (TRL001 to TRL100)
export function getEnrichedTrialClasses(): EnrichedTrialClass[] {
  const courses = getEnrichedCourses();
  const campuses = getEnrichedCampuses();

  return rawData.trial_classes.map((rawTrial, index) => {
    const course = courses[index % courses.length];
    const campus = campuses[index % campuses.length];

    const dates = [
      'Upcoming Saturday, 10:00 SGT',
      'Upcoming Sunday, 14:30 SGT',
      'Upcoming Wednesday, 18:00 SGT',
      'Next Saturday, 11:30 SGT',
      'Next Tuesday, 17:30 SGT'
    ];

    const slots = (index % 4) + 1;
    const status: 'Available' | 'Filling Fast' | 'Waitlist Only' =
      slots > 2 ? 'Available' : slots === 1 ? 'Filling Fast' : 'Waitlist Only';

    return {
      id: rawTrial.id,
      title: `${course.name} - Diagnostic Masterclass & Assessment`,
      courseId: course.id,
      courseName: course.name,
      pathway: course.pathway,
      subject: course.subject,
      level: course.level,
      durationMinutes: 90,
      format: course.format === 'Online Live' ? 'Virtual Live' : course.format === 'Hybrid' ? 'Hybrid' : 'In-Person',
      date: dates[index % dates.length].split(',')[0],
      time: dates[index % dates.length].split(',')[1].trim(),
      campusId: campus.id,
      campusName: campus.name,
      slotsAvailable: slots,
      diagnosticComponents: [
        'Cognitive heuristic problem classification rubric',
        'Conceptual misconception detection check',
        'Personalized 1-on-1 Academic Roadmap blueprint with Faculty Fellow',
        'Comprehensive analytical diagnostic report provided to parents'
      ],
      feeSGD: 0, // Complimentary Diagnostic Masterclass
      status
    };
  });
}

// Enrich Certifications (CERT001 to CERT020)
export function getEnrichedCertifications(): EnrichedCertification[] {
  const certMetadata: Omit<EnrichedCertification, 'id'>[] = [
    {
      title: 'Eduvanta Scholar of Mathematical Distinction',
      issuer: 'Eduvanta Academy Academic Council & Singapore Mathematical Society Aligned',
      pathway: 'psle',
      academicRigor: 'Distinction',
      accreditation: 'Recognized for DSA-Sec Mathematical Talent Portfolio in Top IP Institutions',
      competencies: [
        'Heuristic decomposition of non-routine Olympiad problems',
        'Multi-step spatial geometric transformation mastery',
        'Speed problem solving under timed tournament conditions'
      ],
      portfolioValue: 'Critical asset for Direct School Admission (DSA) applications to Raffles Institution and Hwa Chong Institution.',
      prerequisiteCourseIds: ['CRS001', 'CRS004', 'CRS008']
    },
    {
      title: 'Advanced Science Inquiry & Empirical Methodology Laureate',
      issuer: 'Eduvanta Science Faculty & Global STEM Education Forum',
      pathway: 'psle',
      academicRigor: 'Distinction',
      accreditation: 'Accredited with Distinction across Primary Science Inquiry Systems',
      competencies: [
        'Hypothesis formulation and controlled variable experimentation',
        'Claim-Evidence-Reasoning (CER) scientific writing architecture',
        'Scientific model application across thermal, electrical, and living systems'
      ],
      portfolioValue: 'Demonstrates deep inquiry capability for Science talent DSA applications and IP acceleration.',
      prerequisiteCourseIds: ['CRS002', 'CRS005', 'CRS009']
    },
    {
      title: 'O-Level Additional Mathematics Pure Mechanics Fellowship',
      issuer: 'Eduvanta Pure Sciences Board & Cambridge Curriculum Research Network',
      pathway: 'olevel',
      academicRigor: 'Advanced Scholar',
      accreditation: 'MOE Syllabus 4049 Advanced Calculus & Mechanics Endorsement',
      competencies: [
        'Calculus differentiation & integration rate modeling',
        'Trigonometric identity derivation and wave superposition',
        'Kinematic modeling with non-constant rates'
      ],
      portfolioValue: 'Direct qualification recommendation for Junior College H2/H3 Mathematics programs.',
      prerequisiteCourseIds: ['CRS018', 'CRS025']
    },
    {
      title: 'Cambridge Physical Sciences Experimental Honors',
      issuer: 'Eduvanta Laboratory Council & Cambridge International Physics Scholars',
      pathway: 'olevel',
      academicRigor: 'Distinction',
      accreditation: 'Dual Pure Physics & Pure Chemistry Laboratory Distinction',
      competencies: [
        'Laboratory planning and uncertainty quantification',
        'Electromagnetic circuit setup and optical spectrometry',
        'Qualitative chemical analysis and ionic deduction'
      ],
      portfolioValue: 'Endorsement of practical laboratory competence for Junior College Science streams.',
      prerequisiteCourseIds: ['CRS019', 'CRS020', 'CRS030']
    },
    {
      title: 'GCE A-Level H2 Mathematics Analytical Laureate',
      issuer: 'Eduvanta Higher Mathematics Fellowship & University Advisory Committee',
      pathway: 'alevel',
      academicRigor: 'Honours Fellow',
      accreditation: 'Cambridge GCE A-Level Syllabus 9758 Advanced Scholar Distinction',
      competencies: [
        '3D Vector topological modeling and normal projections',
        'Differential equations analytical modeling',
        'Statistical hypothesis testing and Bayesian sampling'
      ],
      portfolioValue: 'Exemption qualification and prerequisite proof for university engineering, computing, and economics.',
      prerequisiteCourseIds: ['CRS037', 'CRS043']
    },
    {
      title: 'Pre-University Molecular & Quantum Sciences Fellow',
      issuer: 'Eduvanta Science Directorate & Pre-Medical Advisory Council',
      pathway: 'alevel',
      academicRigor: 'Honours Fellow',
      accreditation: 'Endorsed for MBBS / BMedSci / Bio-Medical Research Aspirants',
      competencies: [
        'Organic reaction mechanisms and synthesis route optimization',
        'Quantum wave-particle duality and nuclear energy physics',
        'Cellular genetics, oncogenesis, and viral reproduction'
      ],
      portfolioValue: 'Vital competitive credential for NUS Medicine, NTU LKC, and Cambridge Natural Sciences admissions.',
      prerequisiteCourseIds: ['CRS038', 'CRS039', 'CRS040']
    },
    {
      title: 'IBDP Higher Level Distinction Laureate',
      issuer: 'International Baccalaureate Academic Advisory Panel & Eduvanta',
      pathway: 'ib',
      academicRigor: 'Honours Fellow',
      accreditation: 'Conferred to Scholars Demonstrating Grade 7 Trajectory across 3 HL Subjects',
      competencies: [
        'Higher Level inquiry and abstract conceptual modeling',
        'Internal Assessment (IA) scientific methodology execution (24/24)',
        'Cross-disciplinary synthesis linking TOK with scientific discovery'
      ],
      portfolioValue: 'Recognized by world-leading admissions deans at Harvard, Stanford, Oxford, and Cambridge.',
      prerequisiteCourseIds: ['CRS057', 'CRS058', 'CRS059']
    },
    {
      title: 'Theory of Knowledge (TOK) Epistemic Defense Laureate',
      issuer: 'Eduvanta Humanities & Epistemology Institute',
      pathway: 'ib',
      academicRigor: 'Distinction',
      accreditation: 'IB DP Core Excellence Endorsement for Grade A TOK Exhibition & Essay',
      competencies: [
        'Epistemological deconstruction of Areas of Knowledge',
        'Formulation of second-order knowledge claims and counterclaims',
        'Socratic defense against philosophical scrutiny'
      ],
      portfolioValue: 'Demonstrates deep critical thinking and dialectical writing capability for elite university applications.',
      prerequisiteCourseIds: ['CRS063', 'CRS064']
    },
    {
      title: 'Cambridge IGCSE Outstanding Learner Distinction',
      issuer: 'Cambridge Assessment International Education Benchmark Panel',
      pathway: 'igcse',
      academicRigor: 'Distinction',
      accreditation: 'Recognized for Straight A* / Grade 9 Trajectory across 8 Enrolled Subjects',
      competencies: [
        'International benchmarked analytical reasoning',
        'Extended mathematics problem solving and algebraic proofs',
        'Laboratory alternative-to-practical scientific analysis'
      ],
      portfolioValue: 'Direct entry qualification for top-tier IB Diploma and A-Level scholarship programs.',
      prerequisiteCourseIds: ['CRS074', 'CRS075', 'CRS078']
    },
    {
      title: 'Algorithmic Thinking & Applied Machine Learning Fellowship',
      issuer: 'Eduvanta Computational Systems Lab & AI Industry Fellows',
      pathway: 'skills',
      academicRigor: 'Honours Fellow',
      accreditation: 'Professional Pre-University AI Engineering Credential',
      competencies: [
        'PyTorch deep neural network architecture implementation',
        'Vector space linear algebra and gradient descent optimization',
        'Deployment of containerized machine learning models'
      ],
      portfolioValue: 'Exceptional evidence of practical technical competency for university CS and AI programs.',
      prerequisiteCourseIds: ['CRS087', 'CRS094']
    },
    {
      title: 'Quantitative Financial Econometrics Credential',
      issuer: 'Eduvanta Quantitative Finance Institute & CFA Charterholder Fellows',
      pathway: 'skills',
      academicRigor: 'Advanced Scholar',
      accreditation: 'Pre-University Econometrics & Stochastic Financial Modeling',
      competencies: [
        'Monte Carlo simulations and derivative pricing models',
        'Empirical time-series analysis and regression forecasting in Python',
        'Portfolio risk optimization and factor models'
      ],
      portfolioValue: 'Elite credential for undergraduate business, financial economics, and quantitative funds.',
      prerequisiteCourseIds: ['CRS088', 'CRS096']
    },
    {
      title: 'Bio-Medical & Genetic Engineering Research Fellow',
      issuer: 'Eduvanta Clinical Sciences Atrium & Bio-Innovation Forum',
      pathway: 'skills',
      academicRigor: 'Honours Fellow',
      accreditation: 'Conferred for In Silico CRISPR Guide RNA & Gene-Editing Protocols',
      competencies: [
        'CRISPR Cas9 molecular target design and off-target screening',
        'Bioinformatics database querying (NCBI, UniProt, AlphaFold)',
        'Clinical ethics defense and translational medical research'
      ],
      portfolioValue: 'Significant advantage for medical school clinical admissions panels and research bursaries.',
      prerequisiteCourseIds: ['CRS089', 'CRS097']
    },
    {
      title: 'Oxbridge & Ivy League Scholarly Rhetoric Laureate',
      issuer: 'Eduvanta Global Collegiate Advisory Board',
      pathway: 'skills',
      academicRigor: 'Honours Fellow',
      accreditation: 'Conferred to Scholars Demonstrating Mastery of Academic Oral Defense',
      competencies: [
        'Spontaneous problem solving under high-stakes interrogation',
        'Deconstruction of academic paradoxes from first principles',
        'Persuasive, authoritative scholarly discourse'
      ],
      portfolioValue: 'Essential credential demonstrating intellectual readiness for world-class tutorial environments.',
      prerequisiteCourseIds: ['CRS090', 'CRS099']
    },
    {
      title: 'Singapore Young Physicists’ Research Tournament Credential',
      issuer: 'Eduvanta Physics Research Directorate & SYPT Faculty Advisory',
      pathway: 'skills',
      academicRigor: 'Honours Fellow',
      accreditation: 'Accreditation of Empirical Experimental Research and Physics Fight Defense',
      competencies: [
        'Non-linear differential physics modeling',
        'High-speed optical laser diagnostic experimentation',
        'Formal scientific rebuttal and peer-review defense'
      ],
      portfolioValue: 'Primary evidence of elite scientific research potential for government overseas scholarships.',
      prerequisiteCourseIds: ['CRS091', 'CRS044']
    },
    {
      title: 'Primary School Mathematical Olympiad Grand Distinction',
      issuer: 'Eduvanta Primary Mathematics Council',
      pathway: 'psle',
      academicRigor: 'Olympiad & Research',
      accreditation: 'SMOPS & NMOS Benchmark Distinction Honors',
      competencies: [
        'Combinatorial counting and pigeonhole invariant analysis',
        'Non-routine geometry decomposition',
        'High-speed algebraic heuristic deduction'
      ],
      portfolioValue: 'Gold standard documentation for DSA-Sec direct entry into Integrated Programme schools.',
      prerequisiteCourseIds: ['CRS001', 'CRS006']
    },
    {
      title: 'O-Level Academic Distinction (L1R5 ≤ 6) Scholar Laureate',
      issuer: 'Eduvanta Secondary Academic Board',
      pathway: 'olevel',
      academicRigor: 'Honours Fellow',
      accreditation: 'Recognized for 6 Distinction (A1) Mastery across Sciences & Humanities',
      competencies: [
        'Flawless examination execution across double sciences and mathematics',
        'Surgical keyword accuracy on Cambridge mark schemes',
        'Timed essay writing and synthesis under pressure'
      ],
      portfolioValue: 'Guarantees priority academic placement in top Junior Colleges and scholar streams.',
      prerequisiteCourseIds: ['CRS018', 'CRS019', 'CRS022']
    },
    {
      title: 'Pre-University Scholarly Dissertation & Peer-Review Credential',
      issuer: 'Eduvanta Academic Research Press',
      pathway: 'skills',
      academicRigor: 'Honours Fellow',
      accreditation: 'Conferred for Publication-Grade Original Academic Research Manuscripts',
      competencies: [
        'Formulation of peer-reviewed research hypotheses',
        'LaTeX typeset academic manuscript preparation',
        'Comprehensive scholarly literature review'
      ],
      portfolioValue: 'Proof of independent research capability submitted with university Common App / UCAS.',
      prerequisiteCourseIds: ['CRS092', 'CRS099']
    },
    {
      title: 'GCE A-Level 90 Rank Points Perfect UAS Honors',
      issuer: 'Eduvanta Pre-University Academic Senate',
      pathway: 'alevel',
      academicRigor: 'Honours Fellow',
      accreditation: 'Full 90 Rank Points or 70 Rank Points University Admission Score Distinction',
      competencies: [
        'Four H2 straight Distinctions and General Paper mastery',
        'Flawless Cambridge exam time allocation and execution',
        'Scholarly depth in mathematics, sciences, or economics'
      ],
      portfolioValue: 'The pinnacle Singapore academic credential for President’s and Public Service Commission scholarships.',
      prerequisiteCourseIds: ['CRS037', 'CRS038', 'CRS042']
    },
    {
      title: 'IB 45-Point World-Class Diploma Fellowship',
      issuer: 'Eduvanta International Baccalaureate Faculty',
      pathway: 'ib',
      academicRigor: 'Honours Fellow',
      accreditation: 'Conferred for Sustained Trajectory of 43 - 45 Points with 3 Bonus Points',
      competencies: [
        'Grade 7 across all 3 Higher Level and 3 Standard Level subjects',
        'Grade A in Extended Essay and Theory of Knowledge',
        'Global inquiry, international mindedness, and holistic leadership'
      ],
      portfolioValue: 'World-recognized distinction assuring entry into top 5 global universities.',
      prerequisiteCourseIds: ['CRS057', 'CRS060', 'CRS066']
    },
    {
      title: 'Quantum Computing & Information Theory Credential',
      issuer: 'Eduvanta Quantum Architecture Group & IBM Qiskit Aligned',
      pathway: 'skills',
      academicRigor: 'Honours Fellow',
      accreditation: 'Pre-University Quantum Algorithm & Cloud Quantum Hardware Execution',
      competencies: [
        'Qiskit quantum circuit assembly and gate compilation',
        'Quantum superposition, entanglement, and measurement theory',
        'Simulation of Grover’s search and Shor’s quantum factoring'
      ],
      portfolioValue: 'Distinguished pre-university specialization for advanced physics and computing degrees.',
      prerequisiteCourseIds: ['CRS100', 'CRS087']
    }
  ];

  return rawData.certifications.map((rawCert, index) => {
    const meta = certMetadata[index % certMetadata.length];
    return {
      id: rawCert.id,
      ...meta
    };
  });
}

// Transform Reviews (REV001 to REV200) into Editorial Student Success Stories & Transformation Case Studies
// Remember: NO testimonial sliders! Editorial storytelling, journey-focused, outcome-focused!
export function getEnrichedReviewStories(): EnrichedReviewStory[] {
  const ALUMNI_NAMES = [
    'Marcus Tan Kai-En', 'Rachel Lim Jia-Yi', 'Shaun Christopher Wong', 'Cheryl Koh Sze-Min',
    'Bryan Dylan Chen', 'Natasha Menon', 'Joshua Teo Jun-Wei', 'Kimberly Ng Xin-Hui',
    'Aaron Lee Hong-Rui', 'Victoria Sim Li-Wen', 'Benjamin Goh Yong-Quan', 'Fiona Tay En-Qi',
    'Nicholas Matthew Seah', 'Hannah Yeo Jing-Ting', 'Darren Low Wei-Ming', 'Gweneth Chua Hui-Ling',
    'Justin Ong Zi-Hao', 'Sarah Pillai', 'Timothy Ang Sheng-Yang', 'Clarissa Tan Xue-Er'
  ];

  const SCHOOLS = [
    'Raffles Institution (Year 6 / JC2)',
    'Hwa Chong Institution (High School & College)',
    'Anglo-Chinese School (Independent) (IB DP)',
    'Raffles Girls’ School (IP Secondary 4)',
    'National Junior College (Senior High 2)',
    'Victoria Junior College (JC2)',
    'Dunman High School (Senior High)',
    'St. Joseph’s Institution (IB Diploma)',
    'Cedar Girls’ Secondary (O-Level)',
    'Methodist Girls’ School (O-Level / IB)'
  ];

  const DESTINATIONS = [
    'Admitted to University of Cambridge (Natural Sciences Tripos)',
    'Admitted to Harvard College (Class of 2029, Full Fellowship)',
    'NUS Yong Loo Lin School of Medicine (MBBS Direct Offer)',
    'Admitted to University of Oxford (Philosophy, Politics & Economics - PPE)',
    'Stanford University (Computer Science & Artificial Intelligence)',
    'Imperial College London (Electrical & Electronic Engineering)',
    'NTU Lee Kong Chian School of Medicine (LKC Medicine Offer)',
    'Awarded Public Service Commission (PSC) Overseas Merit Scholarship',
    'Admitted to MIT (Mathematics & Quantum Computing)',
    'Columbia University (Financial Economics & Mathematics)'
  ];

  const PATHWAY_KEYS: PathwayKey[] = ['psle', 'olevel', 'alevel', 'ib', 'igcse', 'skills'];

  return rawData.reviews.map((rawReview, index) => {
    const name = ALUMNI_NAMES[index % ALUMNI_NAMES.length];
    const school = SCHOOLS[index % SCHOOLS.length];
    const destination = DESTINATIONS[index % DESTINATIONS.length];
    const pathway = PATHWAY_KEYS[index % PATHWAY_KEYS.length];

    // Editorial Transformation Case Study narratives
    const caseStudies = [
      {
        starting: 'Struggling with C6 in Sec 3 Additional Math due to rote memorization gaps.',
        breakthrough: 'Transitioned to first-principles calculus deduction under Eduvanta faculty mentorship.',
        outcome: 'Secured raw L1R5 score of 6 with A1 in both Additional Math and Pure Physics.',
        narrative: 'When I entered Secondary 4, Additional Mathematics felt like an overwhelming collection of arbitrary rules. At Eduvanta, my mentor deconstructed calculus into intuitive geometric rate modeling. Within four months, my problem-solving approach shifted from anxious formula hunting to elegant first-principles deduction. I achieved raw 6 in O-Levels and entered Raffles Institution with total academic confidence.',
        takeaway: 'Conceptual depth will always outperform mechanical drill when the exam paper introduces non-routine problems.'
      },
      {
        starting: 'Plateaued at 34/45 in IB Year 1 with persistent Grade 4s in HL Physics.',
        breakthrough: 'Diagnostic mapping identified experimental design gaps; 1-on-1 IA thesis mentorship elevated inquiry.',
        outcome: 'Graduated with 45/45 Perfect IB Diploma and admitted to Cambridge Natural Sciences.',
        narrative: 'The International Baccalaureate requires a rare synthesis of analytical rigor and independent voice. My Higher Level Physics Internal Assessment was stalled until the Eduvanta faculty guided my laser interferometry experiment. They taught me how to write like an academic researcher rather than a student completing a worksheet. That single transformation lifted my confidence across all three Higher Level subjects.',
        takeaway: 'Mentorship that treats you as a junior scholar rather than a tuition student alters your entire intellectual ceiling.'
      },
      {
        starting: 'Struggling to break past AL4 in Primary 5 Math Heuristics with chronic Paper 2 careless slips.',
        breakthrough: 'Internalized Eduvanta’s 14-archetype heuristic classification framework and visual spatial modeling.',
        outcome: 'Attained AL1 in PSLE Mathematics and secured Direct School Admission (DSA) to Raffles Girls’ School.',
        narrative: 'My daughter loved science but would freeze when faced with 5-mark non-routine math heuristics on PSLE papers. Eduvanta’s diagnostic clinic pinpointed her exact cognitive block: trying to jump into arithmetic before visualizing the invariant state. The faculty taught her systematic bar model transcendence. By the mid-year prelims, she was completing Paper 2 with 20 minutes to review.',
        takeaway: 'A structured heuristic thinking framework removes fear and replaces it with analytical curiosity.'
      },
      {
        starting: 'Stuck with a B/C grade in H2 Economics and General Paper prior to JC1 promotional exams.',
        breakthrough: 'Engaged with Eduvanta’s Socratic essay architecture and 3-tier evaluation framework.',
        outcome: 'Attained 90/90 Rank Points in GCE A-Levels and awarded PSC Overseas Merit Scholarship to Oxford.',
        narrative: 'In Junior College, many students study 14 hours a day without understanding the marker’s rubric. Eduvanta’s General Paper and Economics seminars felt like university tutorials at Oxford. We analyzed real-world Singapore central bank policies and global technological shifts. My essays evolved from regurgitated paragraphs into cohesive, dialectical treatises. I entered the A-Level examination hall knowing exactly how to command the highest mark band.',
        takeaway: 'Excellence at the A-Levels is about intellectual maturity and rhetorical structure, not memory volume.'
      },
      {
        starting: 'Grade 6 in Cambridge IGCSE Extended Mathematics and hesitant in practical science experiments.',
        breakthrough: 'Intensive Cambridge 10-year examiner report deconstruction and hands-on laboratory simulation.',
        outcome: 'Achieved Straight A* (9 Grade 9s) and won Cambridge Outstanding Learner Award.',
        narrative: 'Moving from a local school to the Cambridge international curriculum was a disorienting shift in exam style. Eduvanta’s masterclasses systematically dissected the Cambridge mark scheme. Every lesson connected abstract formulas to physical demonstrations in their laboratory suite. Achieving straight Grade 9s opened direct admission to top-tier pre-university programs worldwide.',
        takeaway: 'Aligning directly with the examining board’s rubric eliminates guessing and guarantees precision.'
      }
    ];

    const study = caseStudies[index % caseStudies.length];

    return {
      id: rawReview.id,
      rating: rawReview.rating,
      studentName: name,
      school,
      pathway,
      startingPoint: study.starting,
      milestoneBreakthrough: study.breakthrough,
      achievedOutcome: study.outcome,
      currentDestination: destination,
      academicYear: 'Class of 2024 / 2025',
      storyNarrative: study.narrative,
      keyTakeaway: study.takeaway
    };
  });
}

// Scholarships Master Data
export const SCHOLARSHIPS_DATA: EnrichedScholarship[] = [
  {
    id: 'SCHOL-LKY-01',
    title: 'Eduvanta Founder’s Academic Fellowship',
    coverage: '100% Full Tuition Fellowship + Academic Research Grant (S$5,000)',
    targetPathway: 'All',
    eligibilityCriteria: [
      'Exceptional academic distinction (Top 3% cohort standing or raw L1R5 ≤ 7)',
      'Proven competitive mathematics, science olympiad, or humanities honors',
      'Demonstrated commitment to intellectual inquiry and peer scholarship',
      'Successful oral defense before Eduvanta Senior Academic Council'
    ],
    grantValueSGD: 'Up to S$24,000 across tenure',
    tenure: '2 Academic Years (renewable based on annual review)',
    selectionProcess: [
      'Diagnostic Portfolio Submission & Transcript Audit',
      'Cognitive Heuristics & First-Principles Reasoning Examination',
      'Socratic Panel Defense with Faculty Directors',
      'Final Board Award Announcement'
    ],
    deadline: 'Intake Closes October 31 (Annual Cycle)',
    academicAward: 'Fellow of Eduvanta Academy (Honours Title)'
  },
  {
    id: 'SCHOL-STEM-02',
    title: 'Future Horizons STEM & Computational Research Grant',
    coverage: '80% Tuition Subsidy + Dedicated GPU Cloud & Lab Access',
    targetPathway: 'skills',
    eligibilityCriteria: [
      'Aspirants in Artificial Intelligence, Quantum Physics, or Molecular Bio-Engineering',
      'Demonstrated proficiency in Python, C++, or advanced mathematics',
      'Submission of a novel proposed scientific or engineering research hypothesis',
      'Interview defense with Eduvanta Computational Systems Fellows'
    ],
    grantValueSGD: 'Up to S$18,500 across tenure',
    tenure: '1 Academic Year (Research Fellowship Track)',
    selectionProcess: [
      'Project Proposal & Code Repository Evaluation',
      'Technical Algorithmic Walkthrough & Architecture Defense',
      'Faculty Laboratory Mentor Matching',
      'Quarterly Research Publication Milestones'
    ],
    deadline: 'Rolling Assessment (Next Cohort Closes November 15)',
    academicAward: 'Junior Research Fellow in Applied Computing'
  },
  {
    id: 'SCHOL-HUM-03',
    title: 'Global Rhetoric, Economics & Humanities Laureate',
    coverage: '75% Tuition Fellowship + Oxford/Cambridge Summer Colloquium Sponsorship',
    targetPathway: 'alevel',
    eligibilityCriteria: [
      'Outstanding distinction in Literature, Economics, History, or General Paper',
      'Submission of a 2,000-word critical analytical essay on a contemporary global challenge',
      'Passionate pursuit of Law, PPE, or Public Policy at world-tier universities',
      'Socratic debate and interview defense'
    ],
    grantValueSGD: 'Up to S$15,000 across tenure',
    tenure: '2 Academic Years',
    selectionProcess: [
      'Double-Blind Scholarly Essay Review',
      'Dialectical Debate Round with Senior Humanities Fellows',
      'Admissions Portfolio Roadmapping Consultation',
      'Award Confirmation'
    ],
    deadline: 'December 15 (Annual Pre-University Cycle)',
    academicAward: 'Laureate of Epistemic Rhetoric'
  },
  {
    id: 'SCHOL-B際に-04',
    title: 'Pioneer Opportunity & Merit Access Bursary',
    coverage: '90% to 100% Need-Based Tuition Waiver + Full Textbook/Materials Grant',
    targetPathway: 'All',
    eligibilityCriteria: [
      'Gross monthly household per capita income (PCI) below S$2,500',
      'Demonstrated high academic motivation, discipline, and teacher recommendation',
      'Commitment to regular attendance and academic goal tracking',
      'Open to PSLE, O-Level, A-Level, and IB candidates'
    ],
    grantValueSGD: 'Full Program Cost Waived (Fully Philanthropically Endowed)',
    tenure: 'Continuous through duration of academic cycle',
    selectionProcess: [
      'Confidential Financial Assessment & Academic Transcript Submission',
      'Informal Parent & Student Meeting with Academic Dean',
      'Immediate Placement in Desired Academic Pathway'
    ],
    deadline: 'Year-Round Continuous Onboarding',
    academicAward: 'Eduvanta Pioneer Scholar'
  }
];

// Parent Resource Centre Master Data
export const PARENT_RESOURCES_DATA: EnrichedParentResource[] = [
  {
    id: 'PAR-RES-01',
    title: 'Singapore MOE Syllabi Evolutions: What Parents Must Know for 2026/2027',
    category: 'Syllabus Changes',
    targetPathway: 'All',
    readTime: '8 min read',
    summary: 'A deep architectural briefing for parents on how national examination boards are transitioning away from formula memorization toward non-routine application and interdisciplinary synthesis.',
    keyInsights: [
      'Why standard ten-year series drills produce diminishing returns on recent O and A-Level papers',
      'The rise of Real-World Context (PRWC) problem sums in Mathematics and how to build mental schemas',
      'How the removal of mid-year examinations affects diagnostic tracking and holiday study pacing',
      'Actionable strategies for cultivating academic curiosity at home without burnout'
    ],
    downloadableType: 'Executive PDF Whitepaper (24 Pages)'
  },
  {
    id: 'PAR-RES-02',
    title: 'The PSLE Scoring System (AL1 - AL8) Strategic Blueprint',
    category: 'Scoring Guides',
    targetPathway: 'psle',
    readTime: '6 min read',
    summary: 'An analytical guide to understanding Achievement Levels, school choice tie-breakers, and building a high-probability secondary school ranking strategy.',
    keyInsights: [
      'Mathematical modeling of the 4 to 8 point AL band and how subject variance impacts postings',
      'Direct School Admission (DSA-Sec) timelines: talent auditions vs academic portfolio tracks',
      'How to evaluate Integrated Programme (IP) vs O-Level track schools for your child’s cognitive style',
      'Managing high-stakes exam anxiety through proactive emotional anchoring'
    ],
    downloadableType: 'Interactive AL Simulator & Strategy Matrix'
  },
  {
    id: 'PAR-RES-03',
    title: 'O-Level to Junior College / Polytechnic JAE Strategy: Raw L1R5 Optimization',
    category: 'Exam Strategy',
    targetPathway: 'olevel',
    readTime: '10 min read',
    summary: 'A mathematical and tactical guide to calculating CCA bonus points, subject combinations, and cut-off point (COP) forecasting for Singapore Junior Colleges.',
    keyInsights: [
      'How to strategically select 6 subjects from an 8-subject slate to guarantee minimum raw score',
      'Navigating the 2-point CCA bonus and language bonus points effectively',
      'Science vs Arts stream cut-off trends across Raffles, Hwa Chong, VJC, and NJC over 5 years',
      'Polytechnic Direct Admissions (DAE/EAE) vs Junior College pathway decision matrix'
    ],
    downloadableType: 'Excel JAE Optimization Calculator & JC Guide'
  },
  {
    id: 'PAR-RES-04',
    title: 'Deciphering the International Baccalaureate (IB) 45-Point Assessment Matrix',
    category: 'Scoring Guides',
    targetPathway: 'ib',
    readTime: '7 min read',
    summary: 'Essential reading for parents of students at ACS(I), SJI, or international schools transitioning into the rigorous 2-year IB Diploma Programme.',
    keyInsights: [
      'The critical difference between Higher Level (HL) and Standard Level (SL) weighting',
      'Why the 3 core bonus points (Extended Essay + Theory of Knowledge) determine top university admission',
      'Understanding Internal Assessment (IA) moderation and how schools calibrate preliminary predicted grades',
      'Managing the intensive Year 2 submission calendar without academic fatigue'
    ],
    downloadableType: 'IBDP Parent Roadmap & Submission Calendar'
  },
  {
    id: 'PAR-RES-05',
    title: 'Global University Admissions: Preparing Singapore Scholars for Oxbridge & Ivy League',
    category: 'University Pathways',
    targetPathway: 'alevel',
    readTime: '12 min read',
    summary: 'A strategic, insider perspective on how admissions committees at Harvard, Stanford, Cambridge, and Oxford view Singapore A-Level and IB Diploma transcripts.',
    keyInsights: [
      'Why high grades are merely the minimum threshold and what constitutes authentic scholarly distinction',
      'Developing a focused academic narrative rather than a generic collection of extracurricular activities',
      'The role of admissions testing (STEP, MAT, PAT, UCAT, TSA) and interview performance',
      'Public Service Commission (PSC) and private sector scholarship application preparation roadmap'
    ],
    downloadableType: 'Collegiate Admissions Dossier Blueprint'
  },
  {
    id: 'PAR-RES-06',
    title: 'The Neuroscience of Adolescent Academic Resilience & Cognitive Recovery',
    category: 'Parental Support',
    targetPathway: 'All',
    readTime: '5 min read',
    summary: 'Written in collaboration with developmental cognitive neuroscientists on supporting high-performing students through Singapore’s demanding academic milestones.',
    keyInsights: [
      'The neurobiology of pre-frontal cortex fatigue during intensive study periods',
      'Circadian sleep cycles and their direct correlation with long-term memory consolidation in STEM',
      'How to communicate about test results without triggering involuntary flight-or-freeze responses',
      'Practical nutritional and environmental micro-adjustments for deep focus study spaces'
    ],
    downloadableType: 'Focus Environment Checklist & Wellness Protocol'
  }
];

// Singapore Exam Calendar Master Data
export const EXAM_CALENDAR_DATA: EnrichedExamCalendarItem[] = [
  {
    id: 'EXAM-PSLE-01',
    examName: 'PSLE Oral Examination',
    paper: 'English Language & Mother Tongue Oral Stimulus Defense',
    pathway: 'psle',
    officialDate: 'Mid-August',
    daysRemaining: 45,
    preparationPhase: 'Socratic Oral Simulation & Rapid Response Drills',
    recommendedAction: 'Engage with Eduvanta’s Video Stimulus Clinic and dialectical oral defense.'
  },
  {
    id: 'EXAM-PSLE-02',
    examName: 'PSLE National Written Papers',
    paper: 'English, Mathematics, Science & Mother Tongue Written Series',
    pathway: 'psle',
    officialDate: 'Late September – Early October',
    daysRemaining: 78,
    preparationPhase: 'Timed Prelim Crucible & Heuristic Speed Verification',
    recommendedAction: 'Execute full 10-year paper triaging and finalize Booklet B open-ended CER keywords.'
  },
  {
    id: 'EXAM-O-01',
    examName: 'GCE O-Level Science Practical (Paper 3)',
    paper: 'Pure Physics 6091 & Pure Chemistry 6092 Laboratory Examination',
    pathway: 'olevel',
    officialDate: 'Early October',
    daysRemaining: 65,
    preparationPhase: 'Hands-on Titration, Electrical Circuit & Optics Laboratory Drills',
    recommendedAction: 'Book laboratory slots at Bukit Timah or Tanjong Pagar sanctuaries for hands-on error calibration.'
  },
  {
    id: 'EXAM-O-02',
    examName: 'GCE O-Level Written Series',
    paper: 'Additional Math, Elementary Math, Pure Sciences, Humanities & English',
    pathway: 'olevel',
    officialDate: 'Late October – Mid November',
    daysRemaining: 92,
    preparationPhase: 'Cross-School Prelim Crucible & Mark Scheme Exactness',
    recommendedAction: 'Enroll in the Raw L1R5 ≤ 6 Final Crucible sprint to iron out multi-page proof structures.'
  },
  {
    id: 'EXAM-A-01',
    examName: 'GCE A-Level Science Practical (Paper 4)',
    paper: 'H2 Physics 9749, H2 Chemistry 9729 & H2 Biology 9744 Laboratory Examination',
    pathway: 'alevel',
    officialDate: 'Mid-October',
    daysRemaining: 70,
    preparationPhase: 'Planning Essay Formulation & Precision Volumetric Analysis',
    recommendedAction: 'Master experimental planning rubrics and zero-uncertainty measurement protocols.'
  },
  {
    id: 'EXAM-A-02',
    examName: 'GCE A-Level Written Examination Series',
    paper: 'General Paper, H2 Mathematics, H2 Sciences, H2 Economics & H3 Papers',
    pathway: 'alevel',
    officialDate: 'November',
    daysRemaining: 105,
    preparationPhase: '90 Rank Point Peak-Performance Crucible',
    recommendedAction: 'Daily timed morning/afternoon paper simulations under official Cambridge examiner supervision.'
  },
  {
    id: 'EXAM-IB-01',
    examName: 'IB Diploma Programme November Examination Session',
    paper: 'HL & SL Papers 1, 2, and 3 across all Enrolled Subject Groups',
    pathway: 'ib',
    officialDate: 'Late October – Mid November',
    daysRemaining: 88,
    preparationPhase: 'Criterion-Referenced Multi-Paper Integration',
    recommendedAction: 'Refine Paper 3 investigation techniques and review high-probability IB past papers.'
  },
  {
    id: 'EXAM-IGCSE-01',
    examName: 'Cambridge IGCSE October/November Series',
    paper: 'Extended Mathematics, Pure Sciences, English Language & Humanities',
    pathway: 'igcse',
    officialDate: 'October – November',
    daysRemaining: 82,
    preparationPhase: 'Cambridge Past 10-Year Series Intensive Sprint',
    recommendedAction: 'Eliminate examiner report common traps and verify mark-scheme keyword precision.'
  }
];

// Helper: Filter courses dynamically by pathway
export function getCoursesByPathway(pathway: PathwayKey): EnrichedCourse[] {
  return getEnrichedCourses().filter(c => c.pathway === pathway);
}

// Helper: Filter schedules dynamically by pathway
export function getSchedulesByPathway(pathway: PathwayKey): EnrichedSchedule[] {
  return getEnrichedSchedules().filter(s => s.pathway === pathway);
}

// Helper: Filter trial classes dynamically by pathway
export function getTrialClassesByPathway(pathway: PathwayKey): EnrichedTrialClass[] {
  return getEnrichedTrialClasses().filter(t => t.pathway === pathway);
}

// Helper: Filter certifications dynamically by pathway
export function getCertificationsByPathway(pathway: PathwayKey): EnrichedCertification[] {
  return getEnrichedCertifications().filter(c => c.pathway === pathway);
}

// Helper: Filter review stories dynamically by pathway
export function getStoriesByPathway(pathway: PathwayKey): EnrichedReviewStory[] {
  return getEnrichedReviewStories().filter(r => r.pathway === pathway);
}
