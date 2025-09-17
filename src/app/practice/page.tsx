'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, RotateCcw, Filter } from 'lucide-react';
import QuestionCard from '@/app/components/QuestionCard';
import { questions } from '@/app/data/questions';
import { Question, KCNATopic, TOPIC_LABELS } from '@/app/types';
import { updateQuestionProgess, toggleBookmark, getBookmarkedQuestions } from '@/app/utils/localStorage';

const Practice = () => {
  const router = useRouter();
  const [Newquestions, setQuestions] = useState<Question[]>(questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState<KCNATopic[]>([]);
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const currentQuestion = Newquestions[currentIndex];

  useEffect(() => {
    setBookmarkedQuestions(getBookmarkedQuestions());
  }, []);

  useEffect(() => {
    if (selectedTopics.length > 0) {
      const filteredQuestions = questions.filter(q => selectedTopics.includes(q.topic));
      setQuestions(filteredQuestions);
      setCurrentIndex(0);
    } else {
      setQuestions(questions);
    }
  }, [selectedTopics]);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    // Update progress
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    updateQuestionProgess(currentQuestion.topic, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex < Newquestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleBookmarkToggle = () => {
    toggleBookmark(currentQuestion.id);
    setBookmarkedQuestions(getBookmarkedQuestions());
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleTopicFilter = (topic: KCNATopic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter(t => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const clearFilters = () => {
    setSelectedTopics([]);
  };

  if (Newquestions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-black mb-4">No questions found for the selected topics.</p>
        <button
          onClick={clearFilters}
          className="btn-primary text-black"
        >
          Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-black hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-black" />
            Back to Home
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Practice Mode</h1>
        </div>
        
        <div className="flex items-center gap-3">
          {/* <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-black border transition-colors ${
              selectedTopics.length > 0 
                ? 'border-blue-500 bg-blue-50 text-blue-700' 
                : 'border-gray-200 hover:bg-gray-50'
            }`}
          >
            <Filter className="w-4 h-4 text-black"  />
            Filter ({selectedTopics.length})
          </button> */}
          <button
            onClick={handleRestart}
            className="flex items-center text-black gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <RotateCcw className="w-4 h-4 text-black" />
            Restart
          </button>
        </div>
      </div>

      {/* Topic Filters */}
      {/* {showFilters && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex flex-wrap gap-2">
            {Object.entries(TOPIC_LABELS).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleTopicFilter(key as KCNATopic)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTopics.includes(key as KCNATopic)
                    ? 'bg-blue-100 text-blue-800 border-blue-200'
                    : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                } border`}
              >
                {label}
              </button>
            ))}
            {selectedTopics.length > 0 && (
              <button
                onClick={clearFilters}
                className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-200 hover:bg-red-200 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      )} */}

      {/* Progress Bar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-black">Progress</span>
          <span className="text-sm text-black">
            {currentIndex + 1} of {Newquestions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / Newquestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        showExplanation={showExplanation}
        isBookmarked={bookmarkedQuestions.includes(currentQuestion.id)}
        onBookmarkToggle={handleBookmarkToggle}
        currentQuestionNumber={currentIndex + 1}
        totalQuestions={Newquestions.length}
      />

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="flex items-center text-black gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-black" />
          Previous
        </button>

        <span className="text-sm text-gray-500">
          {selectedAnswer !== null && showExplanation && (
            selectedAnswer === currentQuestion.correctAnswer 
              ? "✅ Correct!" 
              : "❌ Incorrect"
          )}
        </span>

        <button
          onClick={handleNext}
          disabled={currentIndex === Newquestions.length - 1}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Practice;