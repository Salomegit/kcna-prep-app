// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KCNA Exam Prep',
  description: 'Kubernetes and Cloud Native Associate (KCNA) exam preparation app',
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
                  <a href="/home" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                    Home
                  </a>
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
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}