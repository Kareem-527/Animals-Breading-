import React, { useState, useEffect, useCallback } from 'react';
import { questions } from './data';
import { QuizState } from './types';
import { EXAM_DURATION_MINUTES } from './constants';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import { Button } from './components/Button';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<QuizState>({
    status: 'intro',
    currentQuestionIndex: 0,
    answers: {},
    score: 0,
    timeRemaining: EXAM_DURATION_MINUTES * 60,
  });

  const startExam = () => {
    setGameState(prev => ({
      ...prev,
      status: 'active',
      timeRemaining: EXAM_DURATION_MINUTES * 60,
      answers: {},
      score: 0,
      currentQuestionIndex: 0
    }));
  };

  const handleAnswer = (answer: string) => {
    setGameState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questions[prev.currentQuestionIndex].id]: answer
      }
    }));
  };

  const calculateScore = useCallback(() => {
    let score = 0;
    questions.forEach(q => {
      if (gameState.answers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    return score;
  }, [gameState.answers]);

  const finishExam = useCallback(() => {
    const finalScore = calculateScore();
    setGameState(prev => ({
      ...prev,
      status: 'finished',
      score: finalScore
    }));
  }, [calculateScore]);

  // Timer Logic
  useEffect(() => {
    let timer: number;
    if (gameState.status === 'active' && gameState.timeRemaining > 0) {
      timer = window.setInterval(() => {
        setGameState(prev => {
          if (prev.timeRemaining <= 1) {
            clearInterval(timer);
            finishExam();
            return { ...prev, timeRemaining: 0 };
          }
          return { ...prev, timeRemaining: prev.timeRemaining - 1 };
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState.status, finishExam]); // Removed gameState.timeRemaining from deps to avoid re-creating interval every second

  const nextQuestion = () => {
    if (gameState.currentQuestionIndex < questions.length - 1) {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
    }
  };

  const prevQuestion = () => {
    if (gameState.currentQuestionIndex > 0) {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex - 1
      }));
    }
  };

  // --- Render Views ---

  if (gameState.status === 'intro') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 to-blue-100">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-indigo-100 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Animal Breeding Exam</h1>
          <p className="text-gray-600 mb-8">
            Test your knowledge on Chapter 1-9. <br/>
            <span className="font-semibold text-indigo-600">{questions.length} Questions</span> • <span className="font-semibold text-indigo-600">{EXAM_DURATION_MINUTES} Minutes</span>
          </p>
          
          <div className="space-y-4 text-left bg-gray-50 p-4 rounded-lg mb-8 text-sm text-gray-700">
            <p className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Select the best answer for each question.
            </p>
            <p className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              You can navigate back and forth.
            </p>
            <p className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Results are shown immediately after submission.
            </p>
          </div>

          <Button onClick={startExam} className="w-full text-lg py-3 shadow-indigo-200">
            Start Examination
          </Button>
        </div>
      </div>
    );
  }

  if (gameState.status === 'finished') {
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <Results 
          questions={questions}
          answers={gameState.answers}
          score={gameState.score}
          onRestart={startExam}
        />
      </div>
    );
  }

  // Active Quiz View
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Quiz 
        question={questions[gameState.currentQuestionIndex]}
        totalQuestions={questions.length}
        currentQuestionIndex={gameState.currentQuestionIndex}
        selectedAnswer={gameState.answers[questions[gameState.currentQuestionIndex].id]}
        timeRemaining={gameState.timeRemaining}
        onAnswer={handleAnswer}
        onNext={nextQuestion}
        onPrev={prevQuestion}
        onSubmit={finishExam}
      />
    </div>
  );
};

export default App;