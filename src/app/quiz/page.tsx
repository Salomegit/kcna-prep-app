// src/app/quiz/page.tsx
'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, AlertTriangle } from 'lucide-react';
import QuestionCard from '@/app/components/QuestionCard';
import {getRandomQuestions } from '@/app/data/questions';
import { Question, QuizState } from '@/app/types';

const QUIZ_DURATION = 20 * 60; // 20 minutes for demo (real KCNA is 90 minutes)
const QUIZ_QUESTIONS_COUNT = 10; // 10 questions for demo (real KCNA is 60)

const Quiz = () => {
  const router = useRouter();
  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(QUIZ_DURATION);
  const [showWarning, setShowWarning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initializeQuiz = () => {
    const questions = getRandomQuestions(QUIZ_QUESTIONS_COUNT);
    const newQuizState: QuizState = {
      questions,
      currentQuestionIndex: 0,
      answers: new Array(questions.length).fill(null),
      score: 0,
      isCompleted: false,
      startTime: new Date(),
    };
    setQuizState(newQuizState);
    setTimeRemaining(QUIZ_DURATION);
  };

  const submitQuiz = useCallback(() => {
    if (!quizState || isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Calculate score
    let correctAnswers = 0;
    quizState.questions.forEach((question, index) => {
      if (quizState.answers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });

    const finalScore = Math.round((correctAnswers / quizState.questions.length) * 100);
    
    const completedQuiz = {
      ...quizState,
      score: finalScore,
      isCompleted: true,
      endTime: new Date(),
    };

    // Store quiz results in localStorage
    const results = {
      score: finalScore,
      correctAnswers,
      totalQuestions: quizState.questions.length,
      timeSpent: QUIZ_DURATION - timeRemaining,
      questions: quizState.questions,
      answers: quizState.answers,
      completedAt: new Date().toISOString(),
    };
    
    localStorage.setItem('kcna-quiz-results', JSON.stringify(results));
    
    // Navigate to results page
    router.push('/results');
  }, [quizState, timeRemaining, router, isSubmitting]);

  // Timer effect
  useEffect(() => {
    if (!quizState || quizState.isCompleted) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          submitQuiz();
          return 0;
        }
        if (prev === 300) { // 5 minutes warning
          setShowWarning(true);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState, submitQuiz]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (!quizState) return;
    
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestionIndex] = answerIndex;
    
    setQuizState({
      ...quizState,
      answers: newAnswers,
    });
  };

  const goToQuestion = (index: number) => {
    if (!quizState) return;
    
    setQuizState({
      ...quizState,
      currentQuestionIndex: index,
    });
  };

  const handleNext = () => {
    if (!quizState) return;
    
    if (quizState.currentQuestionIndex < quizState.questions.length - 1) {
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex + 1,
      });
    }
  };

  const handlePrevious = () => {
    if (!quizState) return;
    
    if (quizState.currentQuestionIndex > 0) {
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex - 1,
      });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getAnsweredCount = () => {
    if (!quizState) return 0;
    return quizState.answers.filter(answer => answer !== null).length;
  };

  if (!quizState) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="flex items-center gap-4 justify-center mb-8">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">KCNA Quiz</h1>
          <p className="text-gray-600 mb-6">
            Test your knowledge with a timed quiz simulation. This quiz contains {QUIZ_QUESTIONS_COUNT} questions 
            and you have {QUIZ_DURATION / 60} minutes to complete it.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">Quiz Details:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• {QUIZ_QUESTIONS_COUNT} multiple-choice questions</li>
              <li>• {QUIZ_DURATION / 60} minutes time limit</li>
              <li>• Questions from all KCNA topics</li>
              <li>• Review your answers at the end</li>
            </ul>
          </div>

          <button
            onClick={initializeQuiz}
            className="btn-primary text-lg px-8 py-3 text-black bg-blue-400 hover:bg-blue-500 transition-colors rounded-lg"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const answeredCount = getAnsweredCount();

  return (
    <div className="space-y-6">
      {/* Time Warning */}
      {showWarning && timeRemaining > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-yellow-800">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-medium">Warning: Only 5 minutes remaining!</span>
          </div>
        </div>
      )}

      {/* Quiz Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900">KCNA Quiz</h1>
            <span className="text-sm text-gray-600">
              {answeredCount} of {quizState.questions.length} answered
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 text-sm font-medium ${
              timeRemaining < 300 ? 'text-red-600' : 'text-gray-600'
            }`}>
              <Clock className="w-4 h-4" />
              {formatTime(timeRemaining)}
            </div>
            
            <button
              onClick={submitQuiz}
              disabled={isSubmitting}
              className="btn-primary px-4 py-2 text-black bg-blue-400 hover:bg-blue-500 transition-colors rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Quiz'}
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Question Navigation */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Navigation</h3>
        <div className="grid grid-cols-10 gap-2">
          {quizState.questions.map((_, index) => (
            <button
              key={index}
              onClick={() => goToQuestion(index)}
              className={`w-8 h-8 rounded text-xs font-medium transition-colors ${
                index === quizState.currentQuestionIndex
                  ? 'bg-blue-600 text-white'
                  : quizState.answers[index] !== null
                  ? 'bg-green-100 text-green-800 hover:bg-green-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Question Card */}
      <QuestionCard
        question={currentQuestion}
        selectedAnswer={quizState.answers[quizState.currentQuestionIndex]}
        onAnswerSelect={handleAnswerSelect}
        currentQuestionNumber={quizState.currentQuestionIndex + 1}
        totalQuestions={quizState.questions.length}
        timeRemaining={timeRemaining}
      />

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={quizState.currentQuestionIndex === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>

        <div className="text-center">
          <div className="text-sm text-gray-500">
            Question {quizState.currentQuestionIndex + 1} of {quizState.questions.length}
          </div>
          {quizState.answers[quizState.currentQuestionIndex] !== null && (
            <div className="text-sm text-green-600 font-medium">✓ Answered</div>
          )}
        </div>

        <button
          onClick={handleNext}
          disabled={quizState.currentQuestionIndex === quizState.questions.length - 1}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Quiz;