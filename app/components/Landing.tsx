"use client";
import { useState, useEffect } from "react";
import {
  BookOpen,
  Users,
  Award,
  Play,
  Star,
  Menu,
  X,

  Zap,
  Target,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Landing() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      content:
        "Nexdu transformed my learning experience. The progressive course structure helped me master complex topics step by step.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Data Scientist",
      content:
        "The admin dashboard is incredibly intuitive. I can easily manage my courses and track student progress.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "UX Designer",
      content:
        "Beautiful interface and smooth learning experience. The dark mode is perfect for late-night studying!",
      rating: 5,
    },
  ];

  return (
    <>
 

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Join thousands of learners and educators who trust Nexdu for their
              educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900
            bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join Nexdu today and experience the future of online education.
            Start your journey with our comprehensive LMS platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 dark:bg-gray-900 border-t dark:border-gray-800 bg-gray-50 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Nexdu
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
                Empowering educators and learners with cutting-edge technology
                for better educational outcomes.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform duration-200">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform duration-200">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform duration-200">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                  Features
                </li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                  Pricing
                </li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                  API
                </li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                  Documentation
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                  Help Center
                </li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                  Contact
                </li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                  Privacy
                </li>
                <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200">
                  Terms
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
            <p>
              &copy; 2025 Nexdu. All rights reserved. Built with ❤️ for better
              education.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
