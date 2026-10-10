import React from 'react';

interface Props {
  onSelect: (caseId: string) => void;
}

export const DetectiveCaseSelect: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-headline mb-4">Selecciona un caso</h2>
      <button onClick={() => onSelect('case1')} className="p-4 bg-surface rounded-lg">Caso 1: Dolor Torácico</button>
    </div>
  );
};
