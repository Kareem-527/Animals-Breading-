import React, { useEffect } from 'react';
import { Question } from '../types';
import { Button } from './Button';

interface QuizProps {
  question: Question;
  totalQuestions: number;
  currentQuestionIndex: number;
  selectedAnswer?: string;
  timeRemaining: number;
  onAnswer: (answer: string) => void;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

export const Quiz: React.FC<QuizProps> = ({
  question,
  totalQuestions,
  currentQuestionIndex,
  selectedAnswer,
  timeRemaining,
  onAnswer,
  onNext,
  onPrev,
  onSubmit
}) => {
  
  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="max-w-3xl mx-auto p-4 h-full flex flex-col">
      {/* Header with Timer and Progress */}
      <div className="bg-white rounded-2xl shadow-sm p-4 mb-6 sticky top-2 z-10 border border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Question {currentQuestionIndex + 1} / {totalQuestions}
          </span>
          <div className={`flex items-center gap-2 font-mono text-lg font-bold ${timeRemaining < 300 ? 'text-red-600' : 'text-indigo-600'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {formatTime(timeRemaining)}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div 
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-grow flex flex-col">
        <div className="p-6 md:p-8 flex-grow">
          <div className="mb-2">
             <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
               Chapter {question.chapter}
             </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
            {question.text}
          </h2>

          <div className="space-y-3">
            {Object.entries(question.options).map(([key, value]) => (
              <label 
                key={key}
                className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 group
                  ${selectedAnswer === key 
                    ? 'border-indigo-600 bg-indigo-50 shadow-md' 
                    : 'border-gray-200 hover:border-indigo-200 hover:bg-gray-50'
                  }`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={key}
                  checked={selectedAnswer === key}
                  onChange={() => onAnswer(key)}
                  className="w-5 h-5 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                />
                <span className="ml-4 flex-grow">
                  <span className={`font-bold mr-2 ${selectedAnswer === key ? 'text-indigo-700' : 'text-gray-500'}`}>
                    {key}.
                  </span>
                  <span className={`${selectedAnswer === key ? 'text-indigo-900 font-medium' : 'text-gray-700'}`}>
                    {value}
                  </span>
                </span>
                <div className={`w-4 h-4 rounded-full border border-indigo-600 ml-2 flex items-center justify-center opacity-0 transition-opacity ${selectedAnswer === key ? 'opacity-100' : ''}`}>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="bg-gray-50 p-6 border-t border-gray-100 flex justify-between items-center">
          <Button 
            variant="secondary" 
            onClick={onPrev}
            disabled={currentQuestionIndex === 0}
            className="flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Previous
          </Button>

          {currentQuestionIndex === totalQuestions - 1 ? (
             <Button variant="danger" onClick={onSubmit} className="flex items-center">
               Finish Exam
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
               </svg>
             </Button>
          ) : (
            <Button variant="primary" onClick={onNext} className="flex items-center">
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};