import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Header = ({ onEnrollClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center font-bold text-white text-xl">
              B
            </div>
            <span className="text-xl font-bold text-white">Bubble Mastery</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('syllabus')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Syllabus
            </button>
            <button
              onClick={() => scrollToSection('preview')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Preview
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              FAQ
            </button>
            <Button
              onClick={onEnrollClick}
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:scale-105"
            >
              Enroll Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-900/20">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('syllabus')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Syllabus
              </button>
              <button
                onClick={() => scrollToSection('preview')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                Preview
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
              >
                FAQ
              </button>
              <Button
                onClick={onEnrollClick}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Enroll Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};