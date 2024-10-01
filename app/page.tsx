"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ShoppingBag,
  Monitor,
  Briefcase,
  GraduationCap,
  Menu,
} from "lucide-react";
import FAQ from "@/components/sections/faq";

const categories = [
  { name: "E-commerce", icon: ShoppingBag },
  { name: "SaaS", icon: Monitor },
  { name: "Business", icon: Briefcase },
  { name: "Education", icon: GraduationCap },
];

const templates = [
  { name: "E-commerce Starter", category: "E-commerce", price: 49 },
  { name: "SaaS Dashboard", category: "SaaS", price: 79 },
  { name: "Business Portfolio", category: "Business", price: 39 },
  { name: "Online Course Platform", category: "Education", price: 89 },
  { name: "Product Showcase", category: "E-commerce", price: 59 },
  { name: "Analytics Dashboard", category: "SaaS", price: 69 },
  { name: "Corporate Website", category: "Business", price: 49 },
  { name: "Learning Management System", category: "Education", price: 99 },
];

export default function Component() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredTemplates =
    selectedCategory === "All"
      ? templates
      : templates.filter((template) => template.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <header className="container mx-auto px-4 py-6 sm:py-8 md:py-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-purple-800 mb-4">
          Ship Faster with Premium Templates
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-600 mb-8">
          Choose from our curated collection of high-quality templates and
          launch your product in no time.
        </p>
      </header>

      <nav className="container mx-auto px-4 mb-8 sm:mb-12">
        <div className="md:hidden flex justify-center mb-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="px-4 py-2 bg-purple-600 text-white rounded-full flex items-center"
          >
            <Menu className="mr-2 h-5 w-5" />
            Categories
          </button>
        </div>
        <ul
          className={`flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 ${
            mobileMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <li>
            <button
              onClick={() => setSelectedCategory("All")}
              className={`w-full md:w-auto px-4 py-2 rounded-full ${
                selectedCategory === "All"
                  ? "bg-purple-600 text-white"
                  : "bg-white text-purple-600"
              } hover:bg-purple-700 hover:text-white transition-colors`}
            >
              All
            </button>
          </li>
          {categories.map((category) => (
            <li key={category.name}>
              <button
                onClick={() => setSelectedCategory(category.name)}
                className={`w-full md:w-auto px-4 py-2 rounded-full ${
                  selectedCategory === category.name
                    ? "bg-purple-600 text-white"
                    : "bg-white text-purple-600"
                } hover:bg-purple-700 hover:text-white transition-colors flex items-center justify-center`}
              >
                <category.icon className="inline-block mr-2 h-5 w-5" />
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredTemplates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-40 sm:h-48 bg-gradient-to-r from-purple-400 to-indigo-500" />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {template.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {template.category}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl sm:text-2xl font-bold text-purple-600">
                    ${template.price}
                  </span>
                  <button className="px-3 py-1 sm:px-4 sm:py-2 bg-purple-600 text-white text-sm sm:text-base rounded-full hover:bg-purple-700 transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <section className="bg-purple-800 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Ship Your Product?
          </h2>
          <p className="text-lg sm:text-xl mb-8">
            Get started with our premium templates today and launch faster than
            ever.
          </p>
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-purple-800 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
            Browse All Templates
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
      <FAQ />
    </div>
  );
}
