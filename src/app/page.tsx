// src/app/page.tsx
import Link from 'next/link';
import { TOPIC_LABELS, TOPIC_COLORS } from './types';

export default function HomePage() {
  const topics = Object.entries(TOPIC_LABELS);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          KCNA Exam Preparation
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Master the Kubernetes and Cloud Native Associate certification with our comprehensive practice questions and quizzes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/practice"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Start Practice
          </Link>
          <Link
            href="/quiz"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium border border-blue-600 hover:bg-blue-50 transition-colors"
          >
            Take Quiz
          </Link>
        </div>
      </div>

      {/* KCNA Topics */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">KCNA Exam Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map(([key, label]) => (
            <div
              key={key}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className={`w-4 h-4 rounded-full ${TOPIC_COLORS[key as keyof typeof TOPIC_COLORS]} mb-3`}></div>
              <h3 className="font-semibold text-gray-900 mb-2">{label}</h3>
              <p className="text-sm text-gray-600">
                Practice questions focused on {label.toLowerCase()} concepts and best practices.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Practice Mode</h3>
            <p className="text-sm text-gray-600">
              Practice with instant feedback and detailed explanations for each question.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Timed Quizzes</h3>
            <p className="text-sm text-gray-600">
              Simulate real exam conditions with timed practice sessions.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Progress Tracking</h3>
            <p className="text-sm text-gray-600">
              Track your progress across different topics and difficulty levels.
            </p>
          </div>
        </div>
      </div>

      {/* About KCNA */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About KCNA Certification</h2>
        <p className="text-gray-700 mb-4">
          The Kubernetes and Cloud Native Associate (KCNA) exam demonstrates a user&apos;s foundational knowledge and skills in Kubernetes and the wider cloud native ecosystem.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
          <div>
            <div className="font-semibold text-gray-900">Duration</div>
            <div className="text-gray-600">90 minutes</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Questions</div>
            <div className="text-gray-600">60 questions</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Passing Score</div>
            <div className="text-gray-600">75%</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Format</div>
            <div className="text-gray-600">Multiple Choice</div>
          </div>
          <div>
            <div className="font-semibold text-gray-900">Valid For</div>
            <div className="text-gray-600">3 years</div>
          </div>
        </div>
      </div>
    </div>
  );
}