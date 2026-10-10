import React from 'react';

interface Props {
  onSelect: (difficulty: 'easy' | 'medium' | 'hard') => void;
}

export const DetectiveDifficulty: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-headline mb-4">Selecciona la dificultad</h2>
      <div className="grid gap-4">
        {(['easy', 'medium', 'hard'] as const).map((diff) => (
          <button 
            key={diff} 
            onClick={() => onSelect(diff)}
            className="p-4 bg-surface rounded-lg border border-primary capitalize"
          >
            {diff}
          </button>
        ))}
      </div>
    </div>
  );
};
