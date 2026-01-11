import React from 'react';
import { Question } from '../types';
import { Button } from './Button';
import { PASSING_SCORE_PERCENTAGE } from '../constants';

interface ResultsProps {
  questions: Question[];
  answers: Record<number, string>;
  score: number;
  onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({ questions, answers, score, onRestart }) => {
  const percentage = Math.round((score / questions.length) * 100);
  const isPassed = percentage >= PASSING_SCORE_PERCENTAGE;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 animate-fade-in">
      {/* Score Header */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-center border-t-4 border-indigo-600">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Exam Results</h2>
        <div className="flex justify-center items-center gap-4 my-6">
          <div className={`w-32 h-32 rounded-full flex items-center justify-center border-4 text-3xl font-bold
            ${isPassed ? 'border-green-500 text-green-600 bg-green-50' : 'border-red-500 text-red-600 bg-red-50'}`}>
            {percentage}%
          </div>
        </div>
        <p className="text-gray-600 mb-6 text-lg">
          You answered <span className="font-bold text-gray-900">{score}</span> out of <span className="font-bold text-gray-900">{questions.length}</span> questions correctly.
        </p>
        <div className="flex justify-center gap-4">
            <Button onClick={onRestart} variant="primary">
              Take Exam Again
            </Button>
        </div>
      </div>

      {/* Question Analysis */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-gray-800 px-2">Detailed Review</h3>
        {questions.map((q, index) => {
          const userAnswer = answers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;
          const isSkipped = !userAnswer;

          return (
            <div key={q.id} className={`bg-white rounded-xl shadow-md overflow-hidden border-l-4 ${
              isCorrect ? 'border-green-500' : isSkipped ? 'border-yellow-400' : 'border-red-500'
            }`}>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full font-bold text-gray-600 text-sm">
                    {index + 1}
                  </span>
                  <div className="flex-grow">
                    <p className="text-gray-800 font-medium mb-4">{q.text}</p>
                    
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(q.options).map(([key, value]) => {
                        const isSelected = userAnswer === key;
                        const isActuallyCorrect = q.correctAnswer === key;
                        
                        let optionClass = "border-gray-200 bg-gray-50 text-gray-600";
                        if (isActuallyCorrect) optionClass = "border-green-500 bg-green-50 text-green-700 font-medium";
                        else if (isSelected && !isCorrect) optionClass = "border-red-300 bg-red-50 text-red-700";

                        return (
                          <div key={key} className={`px-4 py-2 border rounded-lg text-sm flex justify-between items-center ${optionClass}`}>
                            <span><span className="font-bold mr-2">{key}.</span> {value}</span>
                            {isSelected && <span className="text-xs font-bold uppercase tracking-wider ml-2">(Your Answer)</span>}
                            {isActuallyCorrect && !isSelected && <span className="text-xs font-bold uppercase tracking-wider ml-2 text-green-600">(Correct)</span>}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};