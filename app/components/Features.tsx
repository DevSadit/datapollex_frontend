"use client";
import { Award, BookOpen, Target, Users } from "lucide-react";
import React from "react";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Interactive Courses",
      description:
        "Engaging video lectures with downloadable resources and progressive unlocking system.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Admin Dashboard",
      description:
        "Comprehensive course management with easy upload, editing, and organization tools.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Progress Tracking",
      description:
        "Visual progress indicators and completion tracking for better learning outcomes.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Modular Learning",
      description:
        "Structured modules with sequential lecture unlocking for optimal learning flow.",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Everything you need to create, manage, and deliver exceptional
            learning experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl 
  bg-white hover:bg-gray-50 border border-gray-200 shadow-sm 
  dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700`}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
