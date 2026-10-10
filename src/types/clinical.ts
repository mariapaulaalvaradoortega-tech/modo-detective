export interface ClinicalTest {
  id: string;
  name: string;
  description: string;
  cost: number;
  timeCost: number;
  results: string;
}

export interface Symptom {
  id: string;
  name: string;
  description: string;
}
