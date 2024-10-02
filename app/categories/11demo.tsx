import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 1,
    name: "E-commerce",
    description: "Online store templates for selling products and services.",
    image: "/placeholder.svg?height=400&width=600",
    templateCount: 15,
  },
  {
    id: 2,
    name: "SaaS",
    description: "Templates for software as a service applications and dashboards.",
    image: "/placeholder.svg?height=400&width=600",
    templateCount: 12,
  },
  {
    id: 3,
    name: "Portfolio",
    description: "Showcase your work with these professional portfolio templates.",
    image: "/placeholder.svg?height=400&width=600",
    templateCount: 8,
  },
  {
    id: 4,
    name: "Education",
    description: "Learning management systems and educational platform templates.",
    image: "/placeholder.svg?height=400&width=600",
    templateCount: 10,
  },
  {
    id: 5,
    name: "Hospitality",
    description: "Templates for restaurants, hotels, and hospitality businesses.",
    image: "/placeholder.svg?height=400&width=600",
    templateCount: 7,
  },
  {
    id: 6,
    name: "Health & Fitness",
    description: "Wellness and fitness tracking application templates.",
    image: "/placeholder.svg?height=400&width=600",
    templateCount: 9,
  },
  {
    id: 7,
    name: "Blog",
    description: "Elegant and responsive blog templates for content creators.",
    image: "/placeholder.svg?height=400&width=600",
    templateCount: 11,
  },
  {
    id: 8,
    name: "Business",
    description: "Professional templates for corporate and small business websites.",
    image: "/placeholder.svg?height=400&width=600",
    templateCount: 14,
  },
]

export default function CategoryListingPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6 sm:mb-8">Template Categories</h1>
        
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredCategories.map(category => (
            <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-40 sm:h-48">
                <Image 
                  src={category.image} 
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">{category.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{category.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">{category.templateCount} templates</span>
                  <Button asChild variant="ghost" size="sm" className="text-[#954DEA] hover:text-[#8A45D8]">
                    <Link href={`/templates?category=${category.name}`}>
                      View Templates
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredCategories.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No categories found. Try adjusting your search.</p>
        )}
      </div>
    </div>
  )
}