"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Star,
  Clock,
  Users,
  BookOpen,
  ChevronDown,
  Sparkles,
  TrendingUp,
  Award,
  Play,
  GraduationCap,
  Target,
  Trophy,
} from "lucide-react";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  level: string;
  description: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Complete Python Bootcamp From Zero to Hero",
    instructor: "Jose Portilla",
    rating: 4.6,
    students: 1500000,
    duration: "22h 13m",
    price: 84.99,
    originalPrice: 199.99,
    image: "https://img-c.udemycdn.com/course/480x270/1075642_b6d2_10.jpg",
    category: "Programming",
    level: "Beginner",
    description:
      "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games",
  },
  {
    id: 2,
    title: "The Complete JavaScript Course 2024",
    instructor: "Jonas Schmedtmann",
    rating: 4.7,
    students: 850000,
    duration: "69h 32m",
    price: 94.99,
    originalPrice: 199.99,
    image: "https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg",
    category: "Web Development",
    level: "All Levels",
    description:
      "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory",
  },
  {
    id: 3,
    title: "Machine Learning A-Z™: Hands-On Python",
    instructor: "Kirill Eremenko",
    rating: 4.5,
    students: 750000,
    duration: "44h 0m",
    price: 89.99,
    originalPrice: 199.99,
    image: "https://img-c.udemycdn.com/course/480x270/24823_963e_14.jpg",
    category: "Data Science",
    level: "Intermediate",
    description:
      "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts",
  },
  {
    id: 4,
    title: "AWS Certified Solutions Architect",
    instructor: "Stephane Maarek",
    rating: 4.6,
    students: 650000,
    duration: "27h 0m",
    price: 94.99,
    originalPrice: 199.99,
    image: "https://img-c.udemycdn.com/course/480x270/4471614_361e_8.jpg",
    category: "Cloud Computing",
    level: "Intermediate",
    description:
      "Full Practice Exam with Explanations included! PASS the Amazon Web Services Solutions Architect Associate Exam",
  },
  {
    id: 5,
    title: "Complete React Developer Course",
    instructor: "Andrew Mead",
    rating: 4.5,
    students: 420000,
    duration: "39h 0m",
    price: 84.99,
    originalPrice: 199.99,
    image: "https://img-c.udemycdn.com/course/480x270/6035102_7d1a.jpg",
    category: "Web Development",
    level: "Intermediate",
    description:
      "Learn how to build and launch React web applications using React, Redux, Webpack, React-Router, and more!",
  },
  {
    id: 6,
    title: "The Complete Digital Marketing Course",
    instructor: "Rob Percival",
    rating: 4.4,
    students: 380000,
    duration: "23h 30m",
    price: 79.99,
    originalPrice: 199.99,
    image: "https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg",
    category: "Marketing",
    level: "Beginner",
    description:
      "Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!",
  },
];

const categories = [
  "All",
  "Programming",
  "Web Development",
  "Data Science",
  "Cloud Computing",
  "Marketing",
];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");

  useEffect(() => {
    // Detect system theme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All Levels" || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  const formatStudents = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(0)}K`;
    return count.toString();
  };

  const stacks = [
    { value: "500+", label: "Active Students" },
    { value: "100+", label: "Expert Instructors" },
    { value: "10+", label: "Courses Available" },
    { value: "98%", label: "Success Rate" },
  ];
  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        isDarkMode
          ? "bg-gradient-to-br bg-[#161931]"
          : "bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      }`}
    >
      {/* Animated Background Elements */}

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-8 leading-tight ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Learning Journey
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Experience the future of education with Nexdu - a modern Learning
            Management System designed for both educators and learners
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>Start Learning Today</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button
              className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                isDarkMode
                  ? "border-gray-600 text-gray-300 hover:bg-gray-800"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stacks.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}
                >
                  {stat.value}
                </div>
                <div
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Search */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative">
                <Search
                  className={`absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                />
                <input
                  type="text"
                  placeholder="What do you want to learn today?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-16 pr-6 py-6 text-lg rounded-2xl backdrop-blur-md border-2 transition-all duration-300 focus:scale-105 focus:border-blue-500 ${
                    isDarkMode
                      ? "bg-white/10 border-white/20 text-white placeholder-gray-300 focus:bg-white/20"
                      : "bg-white/80 border-white/30 text-gray-900 placeholder-gray-500 focus:bg-white/90"
                  }`}
                />
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 transform ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105"
                      : isDarkMode
                      ? "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/10"
                      : "bg-white/60 text-gray-700 hover:bg-white/80 backdrop-blur-sm border border-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`inline-flex items-center space-x-3 px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                  : "bg-white/60 border border-white/30 text-gray-700 hover:bg-white/80"
              } backdrop-blur-md`}
            >
              <Filter size={20} />
              <span className="font-medium">Advanced Filters</span>
              <ChevronDown
                className={`transform transition-transform ${
                  showFilters ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>

            {/* Advanced Filters Panel */}
            {showFilters && (
              <div
                className={`p-8 rounded-2xl backdrop-blur-md border transition-all duration-500 animate-slide-down ${
                  isDarkMode
                    ? "bg-white/10 border-white/20"
                    : "bg-white/60 border-white/30"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      label: "Level",
                      value: selectedLevel,
                      setter: setSelectedLevel,
                      options: levels,
                    },
                    {
                      label: "Sort By",
                      value: sortBy,
                      setter: setSortBy,
                      options: [
                        "popularity",
                        "rating",
                        "price-low",
                        "price-high",
                      ],
                    },
                    {
                      label: "Duration",
                      value: "any",
                      setter: () => {},
                      options: [
                        "Any Duration",
                        "0-2 hours",
                        "3-6 hours",
                        "7-17 hours",
                        "17+ hours",
                      ],
                    },
                  ].map((filter, index) => (
                    <div key={index}>
                      <label
                        className={`block text-sm font-semibold mb-3 ${
                          isDarkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        {filter.label}
                      </label>
                      <select
                        value={filter.value}
                        onChange={(e) => filter.setter(e.target.value)}
                        className={`w-full p-4 rounded-xl border transition-all duration-300 focus:scale-105 ${
                          isDarkMode
                            ? "bg-white/10 border-white/20 text-white backdrop-blur-sm"
                            : "bg-white/70 border-white/30 text-gray-900 backdrop-blur-sm"
                        }`}
                      >
                        {filter.options.map((option) => (
                          <option key={option} value={option}>
                            {option.charAt(0).toUpperCase() +
                              option.slice(1).replace("-", " ")}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results Header */}
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2
                className={`text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {filteredCourses.length} Premium Courses
              </h2>
              <p
                className={`mt-2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Handpicked by industry experts
              </p>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in backdrop-blur-sm border ${
                  isDarkMode
                    ? "bg-white/5 border-white/10 hover:bg-white/10"
                    : "bg-white/80 border-white/40 hover:bg-white/90"
                } shadow-lg hover:shadow-2xl`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Course Image */}
                <div className="relative overflow-hidden">
                  <Image
                  width={480}
                  height={270}
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                      <Play className="w-6 h-6 text-gray-800 ml-1" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                      {course.category}
                    </span>
                  </div>

                  {/* Level Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm text-white ${
                        course.level === "Beginner"
                          ? "bg-green-500/90"
                          : course.level === "Intermediate"
                          ? "bg-yellow-500/90"
                          : "bg-red-500/90"
                      }`}
                    >
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3
                    className={`font-bold text-lg mb-3 line-clamp-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {course.title}
                  </h3>

                  <p
                    className={`text-sm mb-3 font-medium ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    By {course.instructor}
                  </p>

                  <p
                    className={`text-sm mb-6 line-clamp-2 leading-relaxed ${
                      isDarkMode ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    {course.description}
                  </p>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between mb-6 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span
                        className={`font-semibold ${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {course.rating}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users
                        className={`w-4 h-4 ${
                          isDarkMode ? "text-gray-500" : "text-gray-500"
                        }`}
                      />
                      <span
                        className={`${
                          isDarkMode ? "text-gray-500" : "text-gray-600"
                        }`}
                      >
                        {formatStudents(course.students)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock
                        className={`w-4 h-4 ${
                          isDarkMode ? "text-gray-500" : "text-gray-500"
                        }`}
                      />
                      <span
                        className={`${
                          isDarkMode ? "text-gray-500" : "text-gray-600"
                        }`}
                      >
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-2xl font-bold ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        ${course.price}
                      </span>
                      {course.originalPrice && (
                        <span
                          className={`text-sm line-through ${
                            isDarkMode ? "text-gray-600" : "text-gray-400"
                          }`}
                        >
                          ${course.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-purple-700">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results State */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <div
                className={`w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center ${
                  isDarkMode ? "bg-white/10" : "bg-white/60"
                } backdrop-blur-sm`}
              >
                <BookOpen
                  className={`w-12 h-12 ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                />
              </div>
              <h3
                className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
                }`}
              >
                No courses found
              </h3>
              <p
                className={`text-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Try adjusting your search criteria or explore different
                categories
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-down {
          animation: slide-down 0.4s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .backdrop-blur-md {
          backdrop-filter: blur(12px);
        }

        .backdrop-blur-sm {
          backdrop-filter: blur(6px);
        }
      `}</style>
    </div>
  );
}
