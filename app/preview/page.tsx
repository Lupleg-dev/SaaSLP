"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Eye } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "E-commerce Starter",
    category: "E-commerce",
    description:
      "A fully responsive e-commerce template with product listings, cart functionality, and checkout process.",
    price: 49,
    rating: 4.5,
    image: "/placeholder.svg?height=400&width=600",
    demo: "/preview/demos/ecommerce-starter",
  },
  {
    id: 2,
    name: "SaaS Dashboard",
    category: "SaaS",
    description:
      "A modern dashboard template for SaaS applications with data visualization and user management.",
    price: 79,
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=600",
    demo: "/preview/demos/saas-dashboard",
  },
  {
    id: 3,
    name: "Portfolio Pro",
    category: "Portfolio",
    description:
      "A sleek and professional portfolio template for showcasing your work and skills.",
    price: 39,
    rating: 4.6,
    image: "/placeholder.svg?height=400&width=600",
    demo: "/preview/demos/portfolio-pro",
  },
  {
    id: 4,
    name: "Learning Management System",
    category: "Education",
    description:
      "A comprehensive LMS template with course management, student progress tracking, and online assessments.",
    price: 99,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    demo: "/preview/demos/lms-template",
  },
  {
    id: 5,
    name: "Restaurant Reservation",
    category: "Hospitality",
    description:
      "A template for restaurants with online menu, reservation system, and customer reviews.",
    price: 59,
    rating: 4.4,
    image: "/placeholder.svg?height=400&width=600",
    demo: "/preview/demos/restaurant-reservation",
  },
  {
    id: 6,
    name: "Fitness Tracker",
    category: "Health & Fitness",
    description:
      "A template for fitness applications with workout planning, progress tracking, and nutrition logs.",
    price: 69,
    rating: 4.5,
    image: "/placeholder.svg?height=400&width=600",
    demo: "/preview/demos/fitness-tracker",
  },
  {
    id: 7,
    name: "Blog Master",
    category: "Blog",
    description:
      "A feature-rich blog template with customizable layouts and built-in SEO optimization.",
    price: 45,
    rating: 4.6,
    image: "/placeholder.svg?height=400&width=600",
    demo: "/preview/demos/blog-master",
  },
  {
    id: 8,
    name: "Real Estate Listings",
    category: "Real Estate",
    description:
      "A comprehensive template for real estate agencies with property listings and search functionality.",
    price: 89,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    demo: "/preview/demos/real-estate-listings",
  },

  {
    id: 9,
    name: "Product Showcase",
    category: "E-commerce",
    description:
      " With this landing page, you can easy showcase your products easy to use and free hustle.",
    price: 71,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    demo: "/preview/demos/real-estate-listings",
  },
];

export default function TemplatePreviewPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const filteredTemplates = templates
    .filter(
      (template) =>
        (selectedCategory === "All" ||
          template.category === selectedCategory) &&
        (template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          template.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === "priceAsc") return a.price - b.price;
      if (sortBy === "priceDesc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // Default to featured (original order)
    });

  const categories = [
    "All",
    ...Array.from(new Set(templates.map((t) => t.category))),
  ];

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Explore Our Templates
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/3 relative">
            <Input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-black"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>

          <div className="flex items-center space-x-4 text-black">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="priceAsc">Price: Low to High</SelectItem>
                <SelectItem value="priceDesc">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <Card
              key={template.id}
              className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 md:h-64">
                <Image
                  src={template.image}
                  alt={template.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button asChild variant="secondary">
                    <Link href={template.demo}>
                      <Eye className="mr-2 h-4 w-4" />
                      Live Preview
                    </Link>
                  </Button>
                </div>
              </div>
              <CardContent className="flex-grow p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-semibold">{template.name}</h2>
                  <Badge>{template.category}</Badge>
                </div>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 mr-1" size={20} />
                  <span>{template.rating.toFixed(1)}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-6 bg-gray-50">
                <span className="text-2xl font-bold text-[#954DEA]">
                  ${template.price}
                </span>
                <Button className="bg-[#954DEA] hover:bg-[#8A45D8] text-white">
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <p className="text-center text-gray-600 mt-8">
            No templates found. Try adjusting your search or filters.
          </p>
        )}
      </div>
    </div>
  );
}
