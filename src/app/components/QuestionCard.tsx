// src/components/QuestionCard.tsx
import React from 'react';
import { Bookmark, BookmarkCheck, Clock } from 'lucide-react';
import { Question, TOPIC_LABELS, TOPIC_COLORS } from '../types/index';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  showExplanation?: boolean;
  isBookmarked?: boolean;
  onBookmarkToggle?: () => void;
  currentQuestionNumber?: number;
  totalQuestions?: number;
  timeRemaining?: number;
  showCorrectAnswer?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  showExplanation = false,
  isBookmarked = false,
  onBookmarkToggle,
  currentQuestionNumber,
  totalQuestions,
  timeRemaining,
  showCorrectAnswer = false,
}) => {
  const getOptionClassName = (index: number) => {
    const baseClasses = "w-full text-left  p-4 rounded-lg border-2 transition-all duration-200 hover:bg-gray-50";
    
    if (showExplanation || showCorrectAnswer) {
      if (index === question.correctAnswer) {
        return `${baseClasses} border-green-500 bg-green-50 text-green-800`;
      }
      if (selectedAnswer === index && index !== question.correctAnswer) {
        return `${baseClasses} border-red-500 bg-red-50 text-red-800`;
      }
      return `${baseClasses} border-gray-200 text-black`;
    }
    
    if (selectedAnswer === index) {
      return `${baseClasses} border-blue-500 bg-blue-50 text-blue-800`;
    }
    
    return `${baseClasses} text-black border-gray-200 hover:border-blue-300`;
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          {currentQuestionNumber && totalQuestions && (
            <span className="text-sm text-black">
              Question {currentQuestionNumber} of {totalQuestions}
            </span>
          )}
          <div className={`topic-badge ${TOPIC_COLORS[question.topic]} bg-opacity-10`}>
            <div className={`w-2 h-2 rounded-full ${TOPIC_COLORS[question.topic]} mr-2`}></div>
            <span className="text-xs font-medium">
              {TOPIC_LABELS[question.topic]}
            </span>
          </div>
          <span className={`px-2 py-1 text-xs rounded-full ${
            question.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
            question.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {question.difficulty}
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          {timeRemaining !== undefined && (
            <div className={`flex items-center gap-1 text-sm ${
              timeRemaining < 300 ? 'text-red-600' : 'text-black'
            }`}>
              <Clock className="w-4 h-4" />
              {formatTime(timeRemaining)}
            </div>
          )}
          
          {onBookmarkToggle && (
            <button
              onClick={onBookmarkToggle}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title={isBookmarked ? "Remove bookmark" : "Bookmark question"}
            >
              {isBookmarked ? (
                <BookmarkCheck className="w-5 h-5 text-blue-600" />
              ) : (
                <Bookmark className="w-5 h-5 text-black" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 leading-relaxed">
          {question.question}
        </h2>

        {/* Answer Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showExplanation && onAnswerSelect(index)}
              disabled={showExplanation || showCorrectAnswer}
              className={getOptionClassName(index)}
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-sm font-semibold">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1 text-left text-black">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explanation
            </h3>
            <p className="text-blue-800 leading-relaxed">{question.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;