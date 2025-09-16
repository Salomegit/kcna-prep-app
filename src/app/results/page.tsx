// src/app/results/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, RotateCcw, Home, Trophy, Clock, Target, CheckCircle, XCircle } from 'lucide-react';
import QuestionCard from '@/app/components/QuestionCard';
import { Question, TOPIC_LABELS } from '@/app/types';

interface QuizResults {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  timeSpent: number;
  questions: Question[];
  answers: (number | null)[];
  completedAt: string;
}

const Results = () => {
  const router = useRouter();
  const [results, setResults] = useState<QuizResults | null>(null);
  const [reviewMode, setReviewMode] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [showOnlyIncorrect, setShowOnlyIncorrect] = useState(false);

  useEffect(() => {
    const storedResults = localStorage.getItem('kcna-quiz-results');
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    } else {
      router.push('/quiz');
    }
  }, [router]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 75) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = (score: number) => {
    if (score >= 75) return 'Excellent! You passed the KCNA exam threshold!';
    if (score >= 60) return 'Good job! You\'re close to passing. Keep practicing!';
    return 'Keep studying! You\'ll get there with more practice.';
  };

  const getTopicBreakdown = () => {
    if (!results) return {};
    
    const breakdown: Record<string, { correct: number; total: number }> = {};
    
    results.questions.forEach((question, index) => {
      const topic = question.topic;
      if (!breakdown[topic]) {
        breakdown[topic] = { correct: 0, total: 0 };
      }
      breakdown[topic].total++;
      if (results.answers[index] === question.correctAnswer) {
        breakdown[topic].correct++;
      }
    });
    
    return breakdown;
  };

  const getIncorrectQuestions = () => {
    if (!results) return [];
    return results.questions.filter((_, index) => results.answers[index] !== results.questions[index].correctAnswer);
  };

  const incorrectQuestions = getIncorrectQuestions();
  const reviewQuestions = showOnlyIncorrect ? incorrectQuestions : results?.questions || [];

  if (!results) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading results...</p>
        </div>
      </div>
    );
  }

  if (reviewMode && reviewQuestions.length > 0) {
    const currentQuestion = reviewQuestions[currentReviewIndex];
    const originalIndex = results.questions.findIndex(q => q.id === currentQuestion.id);
    const userAnswer = results.answers[originalIndex];

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setReviewMode(false)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Results
          </button>
          
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={showOnlyIncorrect}
                onChange={(e) => {
                  setShowOnlyIncorrect(e.target.checked);
                  setCurrentReviewIndex(0);
                }}
                className="rounded"
              />
              Show only incorrect answers
            </label>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">
              Reviewing question {currentReviewIndex + 1} of {reviewQuestions.length}
              {showOnlyIncorrect && ` (${incorrectQuestions.length} incorrect)`}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentReviewIndex(Math.max(0, currentReviewIndex - 1))}
                disabled={currentReviewIndex === 0}
                className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentReviewIndex(Math.min(reviewQuestions.length - 1, currentReviewIndex + 1))}
                disabled={currentReviewIndex === reviewQuestions.length - 1}
                className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <QuestionCard
          question={currentQuestion}
          selectedAnswer={userAnswer}
          onAnswerSelect={() => {}}
          showExplanation={true}
          showCorrectAnswer={true}
        />
      </div>
    );
  }

  const topicBreakdown = getTopicBreakdown();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
        </div>
        
        <div className="mb-6">
          <Trophy className={`w-16 h-16 mx-auto mb-4 ${getScoreColor(results.score)}`} />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h1>
          <p className="text-gray-600">{getScoreMessage(results.score)}</p>
        </div>
      </div>

      {/* Score Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <div className={`text-3xl font-bold ${getScoreColor(results.score)} mb-2`}>
            {results.score}%
          </div>
          <div className="text-sm text-gray-600">Final Score</div>
          <div className="text-xs text-gray-500 mt-1">
            (Pass: 75%)
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {results.correctAnswers}
          </div>
          <div className="text-sm text-gray-600">Correct Answers</div>
          <div className="text-xs text-gray-500 mt-1">
            out of {results.totalQuestions}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {formatTime(results.timeSpent)}
          </div>
          <div className="text-sm text-gray-600">Time Spent</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2">
            {Math.round((results.correctAnswers / results.totalQuestions) * 100)}%
          </div>
          <div className="text-sm text-gray-600">Accuracy</div>
        </div>
      </div>

      {/* Topic Breakdown */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Performance by Topic</h2>
        <div className="space-y-4">
          {Object.entries(topicBreakdown).map(([topic, stats]) => {
            const percentage = Math.round((stats.correct / stats.total) * 100);
            return (
              <div key={topic} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-900">{TOPIC_LABELS[topic as keyof typeof TOPIC_LABELS]}</h3>
                  <p className="text-sm text-gray-600">
                    {stats.correct} of {stats.total} correct
                  </p>
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${getScoreColor(percentage)}`}>
                    {percentage}%
                  </div>
                  <div className="w-24 bg-gray-200 rounded-full h-2 mt-1">
                    <div
                      className={`h-2 rounded-full ${
                        percentage >= 75 ? 'bg-green-500' : 
                        percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">What&apos;s Next?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => setReviewMode(true)}
            className="flex items-center justify-center gap-3 p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
          >
            <Target className="w-5 h-5 text-blue-600" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Review Answers</div>
              <div className="text-sm text-gray-600">Go through all questions</div>
            </div>
          </button>
          
          <button
            onClick={() => router.push('/quiz')}
            className="flex items-center justify-center gap-3 p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors"
          >
            <RotateCcw className="w-5 h-5 text-green-600" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Take Another Quiz</div>
              <div className="text-sm text-gray-600">Try again with new questions</div>
            </div>
          </button>
          
          <button
            onClick={() => router.push('/practice')}
            className="flex items-center justify-center gap-3 p-4 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
          >
            <CheckCircle className="w-5 h-5 text-purple-600" />
            <div className="text-left">
              <div className="font-medium text-gray-900">Practice More</div>
              <div className="text-sm text-gray-600">Focus on weak topics</div>
            </div>
          </button>
        </div>
      </div>

      {/* Incorrect Questions Summary */}
      {incorrectQuestions.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <XCircle className="w-5 h-5 text-red-600" />
            <h2 className="text-lg font-bold text-red-900">
              Questions to Review ({incorrectQuestions.length})
            </h2>
          </div>
          <p className="text-red-800 mb-4">
            Focus on these topics for improvement. Click &quot;Review Answers&quot; to see explanations.
          </p>
          <button
            onClick={() => {
              setShowOnlyIncorrect(true);
              setReviewMode(true);
            }}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Review Incorrect Questions
          </button>
        </div>
      )}
    </div>
  );
};

export default Results;