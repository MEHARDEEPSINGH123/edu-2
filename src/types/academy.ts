export type PathwayKey = 'psle' | 'olevel' | 'alevel' | 'ib' | 'igcse' | 'skills';

export interface PathwayInfo {
  key: PathwayKey;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  targetAge: string;
  targetGoals: string[];
  duration: string;
  nationalExam: string;
  accentColor: string;
  milestones: {
    stage: string;
    description: string;
    checkpoint: string;
    expectedOutcome: string;
  }[];
}

export interface RawCourse {
  id: string;
  name: string;
}

export interface RawTrainer {
  id: string;
  name: string;
}

export interface RawSchedule {
  id: string;
}

export interface RawTrialClass {
  id: string;
}

export interface RawCertification {
  id: string;
}

export interface RawReview {
  id: string;
  rating: number;
}

export interface RawCampus {
  id: string;
}

export interface RawDataset {
  academy: string;
  country: string;
  courses: RawCourse[];
  trainers: RawTrainer[];
  schedules: RawSchedule[];
  trial_classes: RawTrialClass[];
  certifications: RawCertification[];
  reviews: RawReview[];
  campuses: RawCampus[];
}

export interface EnrichedCourse {
  id: string;
  name: string;
  rawName: string;
  code: string;
  pathway: PathwayKey;
  level: string;
  subject: string;
  format: 'In-Person' | 'Hybrid' | 'Online Live' | 'Private Coaching' | 'Small Group' | 'Bootcamp';
  monthlyFeeSGD: number;
  termFeeSGD: number;
  durationWeeks: number;
  hoursPerWeek: number;
  facultyMentorId: string;
  facultyMentorName: string;
  scheduleIds: string[];
  trialClassId: string;
  certificationId: string;
  eligibility: string;
  syllabusModules: string[];
  learningOutcomes: string[];
  targetMilestone: string;
  cohortCapacity: number;
  spotsRemaining: number;
  academicRigor: 'Foundational' | 'Mastery' | 'Advanced Honours' | 'Olympiad & Research';
}

export interface EnrichedFacultyMentor {
  id: string;
  rawName: string;
  name: string;
  title: string;
  academicBackground: string;
  specialization: string;
  pathway: PathwayKey;
  researchFocus: string;
  coursesMentored: string[];
}

export interface EnrichedSchedule {
  id: string;
  courseId: string;
  courseName: string;
  pathway: PathwayKey;
  cohortName: string;
  dayOfWeek: string;
  timeSlot: string;
  campusId: string;
  campusName: string;
  mode: 'In-Person' | 'Hybrid' | 'Virtual Live';
  status: 'Open for Enrolment' | 'Few Slots Remaining' | 'Interview Prerequisite';
  startDate: string;
  capacityTotal: number;
  enrolledCount: number;
}

export interface EnrichedTrialClass {
  id: string;
  title: string;
  courseId: string;
  courseName: string;
  pathway: PathwayKey;
  subject: string;
  level: string;
  durationMinutes: number;
  format: 'In-Person' | 'Hybrid' | 'Virtual Live';
  date: string;
  time: string;
  campusId: string;
  campusName: string;
  slotsAvailable: number;
  diagnosticComponents: string[];
  feeSGD: number;
  status: 'Available' | 'Filling Fast' | 'Waitlist Only';
}

export interface EnrichedCertification {
  id: string;
  title: string;
  issuer: string;
  pathway: PathwayKey;
  academicRigor: 'Foundation' | 'Distinction' | 'Advanced Scholar' | 'Honours Fellow' | 'Olympiad & Research';
  accreditation: string;
  competencies: string[];
  portfolioValue: string;
  prerequisiteCourseIds: string[];
}

export interface EnrichedReviewStory {
  id: string;
  rating: number;
  studentName: string;
  school: string;
  pathway: PathwayKey;
  startingPoint: string;
  milestoneBreakthrough: string;
  achievedOutcome: string;
  currentDestination: string;
  academicYear: string;
  storyNarrative: string;
  keyTakeaway: string;
}

export interface EnrichedCampus {
  id: string;
  name: string;
  district: string;
  address: string;
  nearestMrt: string;
  architecturalConcept: string;
  specializedFacilities: string[];
  virtualTourKeyFeatures: string[];
  imageUrl: string;
  operatingHours: string;
  contactEmail: string;
  contactPhone: string;
}

export interface EnrichedScholarship {
  id: string;
  title: string;
  coverage: string;
  targetPathway: PathwayKey | 'All';
  eligibilityCriteria: string[];
  grantValueSGD: string;
  tenure: string;
  selectionProcess: string[];
  deadline: string;
  academicAward: string;
}

export interface EnrichedParentResource {
  id: string;
  title: string;
  category: 'Syllabus Changes' | 'Scoring Guides' | 'Exam Strategy' | 'University Pathways' | 'Parental Support';
  targetPathway: PathwayKey | 'All';
  readTime: string;
  summary: string;
  keyInsights: string[];
  downloadableType: string;
}

export interface EnrichedExamCalendarItem {
  id: string;
  examName: string;
  paper: string;
  pathway: PathwayKey;
  officialDate: string;
  daysRemaining: number;
  preparationPhase: string;
  recommendedAction: string;
}
