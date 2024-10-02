"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "E-commerce",
    description:
      "Boost your online sales with our professional e-commerce templates. Perfect for businesses of all sizes.",
    image: "/placeholder.svg?height=400&width=600",
    templateCount: 15,
    popularTemplates: ["Shop Pro", "Digital Marketplace", "Fashion Store"],
    features: [
      "Responsive design",
      "Shopping cart integration",
      "Product catalog",
      "Secure checkout",
    ],
  },
  {
    id: 2,
    name: "SaaS",
    description:
      "Launch your SaaS product with our modern and functional templates designed for web applications.",
    image: "/placeholder.svg?height=400&width=600",
    templateCount: 12,
    popularTemplates: ["Dashboard X", "Analytics Pro", "SaaS Landing"],
    features: [
      "User authentication",
      "Dashboard layouts",
      "Data visualization",
      "Subscription management",
    ],
  },
  {
    id: 3,
    name: "Portfolio",
    description:
      "Showcase your work with our elegant and customizable portfolio templates. Ideal for creatives and professionals.",
    image: "/placeholder.svg?height=400&width=600",
    templateCount: 10,
    popularTemplates: [
      "Creative Showcase",
      "Minimal Portfolio",
      "Interactive Resume",
    ],
    features: [
      "Project galleries",
      "About me sections",
      "Contact forms",
      "Blog integration",
    ],
  },
  {
    id: 4,
    name: "Education",
    description:
      "Create engaging online learning experiences with our education-focused templates.",
    image: "/placeholder.svg?height=400&width=600",
    templateCount: 8,
    popularTemplates: ["LMS Pro", "Online Course", "Student Portal"],
    features: [
      "Course management",
      "Student progress tracking",
      "Quiz and assessment tools",
      "Discussion forums",
    ],
  },
  {
    id: 5,
    name: "Hospitality",
    description:
      "Attract more guests with our stunning templates for hotels, restaurants, and tourism businesses.",
    image: "/placeholder.svg?height=400&width=600",
    templateCount: 9,
    popularTemplates: ["Luxury Hotel", "Restaurant Booking", "Travel Agency"],
    features: [
      "Booking systems",
      "Menu displays",
      "Virtual tours",
      "Customer reviews",
    ],
  },
  {
    id: 6,
    name: "Health & Fitness",
    description:
      "Promote wellness and fitness with our specially designed templates for health-related businesses.",
    image: "/placeholder.svg?height=400&width=600",
    templateCount: 7,
    popularTemplates: ["Gym Website", "Nutrition Planner", "Wellness Coach"],
    features: [
      "Workout planners",
      "Nutrition trackers",
      "Appointment scheduling",
      "Member portals",
    ],
  },
];

export default function CategoryListingPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">Template Categories</h1> */}

        <div className="max-w-md mx-auto mt-10 mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-black"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCategories.map((category) => (
            <Card key={category.id} className="flex flex-col overflow-hidden">
              <div className="relative h-48 sm:h-56">
                <Image
                  src={category.image}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardContent className="flex-grow p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                  {category.name}
                </h2>
                <Badge className="mb-2">
                  {category.templateCount} Templates
                </Badge>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Popular Templates:</h3>
                  <ul className="list-disc list-inside">
                    {category.popularTemplates.map((template, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {template}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Key Features:</h3>
                  <ul className="list-disc list-inside">
                    {category.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-4 sm:p-6">
                <Button
                  asChild
                  className="w-full bg-[#954DEA] hover:bg-[#8A45D8] text-white"
                >
                  <Link href={`/templates?category=${category.name}`}>
                    View Templates <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <p className="text-center text-gray-600 mt-8">
            No categories found. Try adjusting your search.
          </p>
        )}
      </div>
    </div>
  );
}
