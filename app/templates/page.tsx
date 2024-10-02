"use client"
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search,  Star,  } from 'lucide-react'

const templates = [
  {
    id: 1,
    name: "E-commerce Starter",
    category: "E-commerce",
    description: "A fully responsive e-commerce template with product listings, cart functionality, and checkout process.",
    price: 49,
    rating: 4.5,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Responsive design", "Product catalog", "Shopping cart", "Checkout process", "Customer reviews"],
    demo: "https://example.com/demo/ecommerce-starter",
  },
  {
    id: 2,
    name: "SaaS Dashboard",
    category: "SaaS",
    description: "A modern dashboard template for SaaS applications with data visualization and user management.",
    price: 79,
    rating: 4.8,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Responsive layout", "Data visualization", "User management", "Settings panel", "Activity logs"],
    demo: "https://example.com/demo/saas-dashboard",
  },
  {
    id: 3,
    name: "Portfolio Pro",
    category: "Portfolio",
    description: "A sleek and professional portfolio template for showcasing your work and skills.",
    price: 39,
    rating: 4.6,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Customizable sections", "Project showcase", "Contact form", "Blog integration", "Social media links"],
    demo: "https://example.com/demo/portfolio-pro",
  },
  {
    id: 4,
    name: "Learning Management System",
    category: "Education",
    description: "A comprehensive LMS template with course management, student progress tracking, and online assessments.",
    price: 99,
    rating: 4.7,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Course creation", "Student management", "Progress tracking", "Online quizzes", "Discussion forums"],
    demo: "https://example.com/demo/lms-template",
  },
  {
    id: 5,
    name: "Restaurant Reservation",
    category: "Hospitality",
    description: "A template for restaurants with online menu, reservation system, and customer reviews.",
    price: 59,
    rating: 4.4,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Online menu", "Reservation system", "Customer reviews", "Photo gallery", "Contact information"],
    demo: "https://example.com/demo/restaurant-reservation",
  },
  {
    id: 6,
    name: "Fitness Tracker",
    category: "Health & Fitness",
    description: "A template for fitness applications with workout planning, progress tracking, and nutrition logs.",
    price: 69,
    rating: 4.5,
    image: "/placeholder.svg?height=400&width=600",
    features: ["Workout planner", "Progress charts", "Nutrition log", "Goal setting", "Community features"],
    demo: "https://example.com/demo/fitness-tracker",
  },
]

export default function TemplateListingPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("featured")

  const filteredTemplates = templates.filter(template => 
    (selectedCategory === "All" || template.category === selectedCategory) &&
    (template.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
     template.description.toLowerCase().includes(searchTerm.toLowerCase()))
  ).sort((a, b) => {
    if (sortBy === "priceAsc") return a.price - b.price
    if (sortBy === "priceDesc") return b.price - a.price
    if (sortBy === "rating") return b.rating - a.rating
    return 0 // Default to featured (original order)
  })

  const categories = ["All", ...Array.from(new Set(templates.map(t => t.category)))]

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">Our Templates</h1>
        
        <div className="flex flex-col space-y-4 mb-6 sm:mb-8">
          <div className="w-full relative">
            <Input
              type="text"
              placeholder="Search templates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-black"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-black space-y-4 sm:space-y-0 sm:space-x-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTemplates.map(template => (
            <Card key={template.id} className="flex flex-col">
              <div className="relative h-48 sm:h-56 md:h-64">
                <Image 
                  src={template.image} 
                  alt={template.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <CardContent className="flex-grow p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">{template.name}</h2>
                <Badge className="mb-2">{template.category}</Badge>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{template.description}</p>
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 mr-1" size={18} />
                  <span className="text-sm sm:text-base">{template.rating.toFixed(1)}</span>
                </div>
                <ul className="list-disc list-inside mb-4">
                  {template.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="text-xs sm:text-sm text-gray-600">{feature}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 bg-gray-50 space-y-4 sm:space-y-0">
                <span className="text-xl sm:text-2xl font-bold text-[#954DEA]">${template.price}</span>
                <div className="flex space-x-2">
                  <Button asChild variant="outline" size="sm" className="text-xs sm:text-sm">
                    <Link href={template.demo}>Live Demo</Link>
                  </Button>
                  <Button className="bg-[#954DEA] hover:bg-[#8A45D8] text-white text-xs sm:text-sm" size="sm">
                    Buy Now
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredTemplates.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No templates found. Try adjusting your search or filters.</p>
        )}
      </div>
    </div>
  )
}