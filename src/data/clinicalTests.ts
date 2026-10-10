import { ClinicalTest } from '@/src/types/clinical';

export const clinicalTests: ClinicalTest[] = [
  { id: 't1', name: 'Electrocardiograma', description: 'ECG básico', cost: 50, timeCost: 10, results: 'Normal' },
  { id: 't2', name: 'Analítica', description: 'Hemograma completo', cost: 100, timeCost: 30, results: 'Leucocitosis' },
];
