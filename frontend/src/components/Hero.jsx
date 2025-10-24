import React, { useState, useEffect } from 'react';
import { Clock, Users, Star, Award } from 'lucide-react';
import { Button } from './ui/button';
import { courseData } from '../mock';

export const Hero = ({ onEnrollClick }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(courseData.enrollmentDeadline) - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }) => (
    <div className="bg-white/10 backdrop-blur-sm border border-blue-500/30 rounded-lg p-4 min-w-[80px]">
      <div className="text-3xl md:text-4xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-300 mt-1">{label}</div>
    </div>
  );

  return (
    <section className="relative pt-24 pb-16 bg-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Limited Time Offer - 50% Off</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {courseData.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {courseData.subtitle}
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            {courseData.description}
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="text-white">{courseData.students} Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-blue-400 fill-blue-400" />
              <span className="text-white">{courseData.rating} ({courseData.reviews} reviews)</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="text-white">{courseData.duration}</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-500/30 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-2">Enrollment Closes In:</h3>
            <p className="text-gray-400 mb-6">Don't miss this exclusive opportunity</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <TimeBox value={timeLeft.days} label="Days" />
              <TimeBox value={timeLeft.hours} label="Hours" />
              <TimeBox value={timeLeft.minutes} label="Minutes" />
              <TimeBox value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={onEnrollClick}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 transition-all duration-200 hover:scale-105"
            >
              Enroll Now - {courseData.price}
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('preview');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-600/10 text-lg px-8 py-6 transition-all duration-200"
            >
              Watch Preview
            </Button>
          </div>

          {/* Price */}
          <div className="mt-6 text-gray-400">
            <span className="line-through">{courseData.originalPrice}</span>
            <span className="text-2xl font-bold text-blue-400 ml-3">{courseData.price}</span>
            <span className="text-green-400 ml-3">Save 50%</span>
          </div>
        </div>
      </div>
    </section>
  );
};