// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "KCNA Exam Preparation | Practice & Quiz",
  description:
    "Free KCNA exam practice and quizzes to help you pass the Kubernetes and Cloud Native Associate certification. Master Kubernetes concepts with ease.",
  keywords: [
    "KCNA exam prep",
    "Kubernetes exam practice",
    "Cloud Native Associate certification",
    "KCNA practice questions",
    "Kubernetes certification",
  ],
  verification: {
    google: 'googleb41adcbf7f2c71da'
  },
  openGraph: {
    title: "KCNA Exam Preparation | Practice & Quiz",
    description:
      "Free KCNA practice questions and quizzes for the Kubernetes and Cloud Native Associate exam.",
    url: "https://kcna-exam-practice.vercel.app/",
    siteName: "KCNA Exam Prep",
    images: [
      {
        url: "/kcna.png", // Note: removed '/public' - images in public folder are served from root
        width: 1200,
        height: 630,
        alt: "KCNA Exam Prep",
      },
    ],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <header className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <h1 className="text-xl font-bold text-gray-900">
                    KCNA Exam Prep
                  </h1>
                </div>
                <nav className="hidden md:flex space-x-6">
                  
                  <a href="/practice" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                    Practice
                  </a>
                  <a href="/quiz" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                    Quiz
                  </a>
                </nav>
              </div>
            </div>
          </header>
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
  <Footer 
            tallyFeedbackUrl="https://tally.so/r/wvR5bX" // Replace with your Tally form URL
            socialLinks={{
              // github: "https://github.com/yourusername", // Replace with your GitHub
              twitter: "https://twitter.com/yourusername", // Replace with your Twitter
              linkedin: "https://www.linkedin.com/in/sal-githinji-b79bb2224/", // Replace with your LinkedIn
              // email: "mailto:your@email.com" // Replace with your email
            }}
          />        </div>
      </body>
    </html>
  )
}