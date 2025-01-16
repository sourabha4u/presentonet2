import React from 'react';
import { CloudLightning, Users, MessageSquareShare, BarChart3, ArrowRight, BookOpen, Building2, Zap, Gift, Clock, CheckCircle2, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CloudLightning className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">presento.ca</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#product" className="text-gray-600 hover:text-gray-900">Product</a>
            <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#resources" className="text-gray-600 hover:text-gray-900">Resources</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-gray-900 font-medium">Log In</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
              Sign Up Free
            </button>
          </div>
        </div>
      </nav>

      {/* Participant Join Section */}
      <div className="bg-gray-50 py-4 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <span className="text-gray-600 font-medium">Joining as a participant?</span>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center gap-2">
              Join Session <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            The easiest way to engage your audience in real-time
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create interactive word clouds, polls, and Q&As that make your presentations memorable — whether you're meeting in person, online, or hybrid.
          </p>
          <div className="flex justify-center">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-lg">
              Get Started Free
            </button>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div id="product" className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Interactive Presentation Tools</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <BarChart3 className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Word Clouds</h3>
              <p className="text-gray-600">Transform audience responses into beautiful, real-time word clouds that capture collective thoughts and ideas.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <MessageSquareShare className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Live Q&A</h3>
              <p className="text-gray-600">Enable participants to ask questions and vote on the most important ones to address.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Users className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Instant Polls</h3>
              <p className="text-gray-600">Get immediate feedback and insights from your audience with live polling.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div id="solutions" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-16">Solutions for Every Need</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6">
            <Building2 className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Corporate Events</h3>
            <p className="text-gray-600">Perfect for all-hands meetings, team building, and corporate training sessions.</p>
          </div>
          <div className="p-6">
            <GraduationCap className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <p className="text-gray-600">Engage students in classrooms, lectures, and virtual learning environments.</p>
          </div>
          <div className="p-6">
            <Zap className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Conferences</h3>
            <p className="text-gray-600">Create interactive sessions at conferences, workshops, and seminars.</p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 mb-8">Start for free, upgrade when you need more</p>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Gift className="h-6 w-6 text-indigo-600" />
                <span className="text-lg font-semibold text-indigo-600">Limited Time Offer</span>
              </div>
              <div className="text-4xl font-bold mb-2">$10<span className="text-xl text-gray-500">/month</span></div>
              <p className="text-gray-600 mb-6">All features included</p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Unlimited participants</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>All interactive features</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Advanced analytics</span>
                </li>
              </ul>
              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div id="resources" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-16">Resources</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6">
            <BookOpen className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Getting Started Guide</h3>
            <p className="text-gray-600">Learn how to create your first interactive presentation in minutes.</p>
          </div>
          <div className="p-6">
            <Clock className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
            <p className="text-gray-600">Tips and tricks for engaging your audience effectively.</p>
          </div>
          <div className="p-6">
            <Users className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Case Studies</h3>
            <p className="text-gray-600">See how others are using our platform for success.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex items-center gap-2 mb-4">
              <CloudLightning className="h-6 w-6 text-indigo-600" />
              <span className="text-lg font-bold text-gray-900">presento.ca</span>
            </div>
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Mapleverse Labs Canada. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;