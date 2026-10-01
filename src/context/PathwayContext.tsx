'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PathwayKey } from '@/types/academy';

interface PathwayContextType {
  currentPathway: PathwayKey;
  setPathway: (pathway: PathwayKey) => void;
  currentLevel: string;
  setCurrentLevel: (level: string) => void;
  targetGoal: string;
  setTargetGoal: (goal: string) => void;
  timeline: string;
  setTimeline: (timeline: string) => void;
  learningPreference: string;
  setLearningPreference: (pref: string) => void;
  activeModal: string | null;
  modalData: any;
  openModal: (modal: string, data?: any) => void;
  closeModal: () => void;
}

const PathwayContext = createContext<PathwayContextType | undefined>(undefined);

export function PathwayProvider({ children }: { children: ReactNode }) {
  const [currentPathway, setPathway] = useState<PathwayKey>('olevel');
  const [currentLevel, setCurrentLevel] = useState<string>('Secondary 3 / Year 3');
  const [targetGoal, setTargetGoal] = useState<string>('Raw L1R5 ≤ 6 & Top Junior College Entry');
  const [timeline, setTimeline] = useState<string>('24 Months (Full Milestone Track)');
  const [learningPreference, setLearningPreference] = useState<string>('In-Person Academic Sanctuary');
  
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalData, setModalData] = useState<any>(null);

  const openModal = (modal: string, data?: any) => {
    setActiveModal(modal);
    setModalData(data || null);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalData(null);
  };

  return (
    <PathwayContext.Provider
      value={{
        currentPathway,
        setPathway,
        currentLevel,
        setCurrentLevel,
        targetGoal,
        setTargetGoal,
        timeline,
        setTimeline,
        learningPreference,
        setLearningPreference,
        activeModal,
        modalData,
        openModal,
        closeModal
      }}
    >
      {children}
    </PathwayContext.Provider>
  );
}

export function usePathway() {
  const context = useContext(PathwayContext);
  if (!context) {
    throw new Error('usePathway must be used within a PathwayProvider');
  }
  return context;
}
