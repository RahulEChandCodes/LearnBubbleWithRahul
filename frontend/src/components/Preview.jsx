import React, { useState } from 'react';
import { Play, Monitor, Smartphone, Tablet } from 'lucide-react';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export const Preview = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      title: "Visual Programming",
      description: "Build applications using drag-and-drop elements without writing code"
    },
    {
      title: "Database Management",
      description: "Create and manage complex data structures with ease"
    },
    {
      title: "Workflow Automation",
      description: "Design powerful workflows to automate your application logic"
    },
    {
      title: "Responsive Design",
      description: "Build applications that look great on all devices"
    }
  ];

  return (
    <section id="preview" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 mb-4">
              <Play className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">Course Preview</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See What You'll Build
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get a sneak peek at the real-world projects you'll create throughout the course
            </p>
          </div>

          {/* Video Preview */}
          <div className="mb-12">
            <div className="relative bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-2 border-blue-500/30 rounded-2xl overflow-hidden aspect-video group">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent"></div>
                  <Button
                    size="lg"
                    onClick={() => setIsPlaying(true)}
                    className="relative z-10 bg-blue-600 hover:bg-blue-700 text-white w-20 h-20 rounded-full transition-all duration-300 hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/50"
                  >
                    <Play className="w-8 h-8" fill="currentColor" />
                  </Button>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white text-2xl font-bold mb-2 mt-32">Watch Course Introduction</p>
                      <p className="text-gray-400">3:45 minutes</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white">Video Player Loading...</p>
                    <p className="text-gray-400 text-sm mt-2">(Demo preview - actual video will be embedded here)</p>
                    <Button
                      onClick={() => setIsPlaying(false)}
                      className="mt-4 bg-blue-600 hover:bg-blue-700"
                    >
                      Close Preview
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Demo Tabs */}
          <Tabs defaultValue="desktop" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900/50 border border-blue-500/20 mb-8">
              <TabsTrigger value="desktop" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Monitor className="w-4 h-4 mr-2" />
                Desktop
              </TabsTrigger>
              <TabsTrigger value="tablet" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Tablet className="w-4 h-4 mr-2" />
                Tablet
              </TabsTrigger>
              <TabsTrigger value="mobile" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                <Smartphone className="w-4 h-4 mr-2" />
                Mobile
              </TabsTrigger>
            </TabsList>
            <TabsContent value="desktop" className="bg-gray-900/30 border border-blue-500/20 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Desktop Application Demo</h3>
                <p className="text-gray-400 mb-6">Experience the full power of Bubble.io on desktop browsers</p>
                <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-gray-900 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <div className="text-center">
                    <Monitor className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <p className="text-white font-semibold">Interactive Demo Preview</p>
                    <p className="text-gray-400 text-sm">Desktop responsive layout</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tablet" className="bg-gray-900/30 border border-blue-500/20 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Tablet View Demo</h3>
                <p className="text-gray-400 mb-6">Optimized experience for tablet devices</p>
                <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-gray-900 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <div className="text-center">
                    <Tablet className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <p className="text-white font-semibold">Interactive Demo Preview</p>
                    <p className="text-gray-400 text-sm">Tablet responsive layout</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="mobile" className="bg-gray-900/30 border border-blue-500/20 rounded-lg p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Mobile View Demo</h3>
                <p className="text-gray-400 mb-6">Perfect mobile experience on all screen sizes</p>
                <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-gray-900 rounded-lg flex items-center justify-center border border-blue-500/20">
                  <div className="text-center">
                    <Smartphone className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <p className="text-white font-semibold">Interactive Demo Preview</p>
                    <p className="text-gray-400 text-sm">Mobile responsive layout</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900/30 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};