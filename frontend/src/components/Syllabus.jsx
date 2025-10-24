import React from 'react';
import { BookOpen, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { syllabus } from '../mock';

export const Syllabus = () => {
  return (
    <section id="syllabus" className="py-20 bg-gradient-to-b from-black to-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-4">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Comprehensive Curriculum</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Course Syllabus
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Master Bubble.io through our structured 8-week program designed to take you from beginner to expert
            </p>
          </div>

          {/* Syllabus Cards */}
          <div className="space-y-6">
            {syllabus.map((module, index) => (
              <Card
                key={module.id}
                className="bg-gray-900/50 border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-12 h-12 bg-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                          <span className="text-xl font-bold text-blue-400">{index + 1}</span>
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-white">{module.title}</CardTitle>
                          <CardDescription className="text-blue-400 font-medium mt-1">
                            {module.module}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-3 py-1">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-blue-300">{module.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-start space-x-3 group">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0 group-hover:text-blue-400 transition-colors" />
                        <span className="text-gray-300 group-hover:text-white transition-colors">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Ready to start your journey?</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};