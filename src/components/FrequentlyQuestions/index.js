import React from 'react';
import DuvidaItem from './props';
import { frequentlyQuestions } from '@/helpers/frequentlyQuestions';

const DuvidasFrequentes = () => {
  return (
    <div className="w-[80vw] mt-8">
      {frequentlyQuestions.map((duvida) => (
        <DuvidaItem
          key={duvida.id}
          pergunta={duvida.pergunta}
          resposta={duvida.resposta}
          className="mb-4"
        />
      ))}
    </div>
  );
};

export default DuvidasFrequentes;
