// src/components/Footer.tsx
"use client";

import React from 'react';
import { MessageCircle, Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';

interface FooterProps {
  tallyFeedbackUrl?: string; 
  socialLinks?: {
    // github?: string;
    twitter?: string;
    linkedin?: string;
    // email?: string;
  };
}

const Footer: React.FC<FooterProps> = ({ 
  tallyFeedbackUrl = "https://tally.so/r/wvR5bX", // Replace with your Tally URL
  socialLinks = {
    // github: "https://github.com/yourusername",
    twitter: "https://x.com/Salllly90", 
    linkedin: "https://www.linkedin.com/in/sal-githinji-b79bb2224/",

  }
}) => {
  const openFeedbackForm = () => {
    window.open(tallyFeedbackUrl, '_blank', 'width=600,height=700');
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* App Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">KCNA Exam Prep</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Master the Kubernetes and Cloud Native Associate certification with 
              our comprehensive practice questions and quizzes. Built for aspiring 
              cloud native professionals.
            </p>
            <div className="text-xs text-gray-500">
              © {new Date().getFullYear()} KCNA Exam Prep. Made with ❤️ .
            </div>
          </div>

          {/* Feedback Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Feedback</h3>
           
            <button
              onClick={openFeedbackForm}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              Give Feedback
              <ExternalLink className="w-3 h-3" />
            </button>
            <p className="text-xs text-gray-500">
              Your feedback helps make this app better for everyone studying for KCNA!
            </p>
          </div>

          {/* Social Links & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Connect</h3>
           
            
            <div className="flex items-center gap-4">
  
              
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  title="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              

            </div>

            <div className="text-xs text-gray-500 space-y-1">
              <div>Built with Next.js & TypeScript</div>
              <div>Styled with Tailwind CSS</div>
            </div>
          </div>
        </div>

      
      </div>
    </footer>
  );
};

export default Footer;