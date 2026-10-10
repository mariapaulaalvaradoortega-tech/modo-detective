export type Difficulty = 'easy' | 'medium' | 'hard';

export interface PatientCase {
  id: string;
  name: string;
  symptoms: string[];
  diagnosis: string;
  difficulty: Difficulty;
  budget: number;
  timeLimit: number;
}

export interface DetectiveState {
  currentCase: PatientCase;
  budgetRemaining: number;
  timeRemaining: number;
  patientHealth: number;
  isGameOver: boolean;
}
