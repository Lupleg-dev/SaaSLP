"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  Menu,
  User,
  ChevronDown,
  Calendar,
  Clock,
  MessageCircle,
  Share2,
  X,
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Writing Engaging Blog Content",
    excerpt:
      "Learn how to create content that captivates your audience and keeps them coming back for more.",
    author: "Jane Doe",
    date: "2023-05-15",
    readTime: "5 min read",
    category: "Content Strategy",
    image: "/placeholder.svg?height=400&width=600",
    comments: 12,
  },
  {
    id: 2,
    title: "The Future of AI in Content Creation",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way we create and consume content.",
    author: "John Smith",
    date: "2023-05-12",
    readTime: "8 min read",
    category: "Technology",
    image: "/placeholder.svg?height=400&width=600",
    comments: 24,
  },
  {
    id: 3,
    title: "Mastering SEO: A Beginner's Guide",
    excerpt:
      "Discover the fundamentals of Search Engine Optimization and how to improve your website's visibility.",
    author: "Sarah Johnson",
    date: "2023-05-10",
    readTime: "10 min read",
    category: "SEO",
    image: "/placeholder.svg?height=400&width=600",
    comments: 18,
  },
  {
    id: 4,
    title: "The Art of Storytelling in Marketing",
    excerpt:
      "Learn how to use storytelling techniques to create compelling marketing campaigns that resonate with your audience.",
    author: "Mike Brown",
    date: "2023-05-08",
    readTime: "7 min read",
    category: "Marketing",
    image: "/placeholder.svg?height=400&width=600",
    comments: 9,
  },
  {
    id: 5,
    title: "Building a Strong Personal Brand Online",
    excerpt:
      "Discover strategies to develop and maintain a powerful personal brand in the digital age.",
    author: "Emily Chen",
    date: "2023-05-05",
    readTime: "6 min read",
    category: "Personal Development",
    image: "/placeholder.svg?height=400&width=600",
    comments: 15,
  },
  {
    id: 6,
    title: "The Power of Visual Content in Blogging",
    excerpt:
      "Explore how images, infographics, and videos can enhance your blog posts and engage your readers.",
    author: "David Wilson",
    date: "2023-05-03",
    readTime: "8 min read",
    category: "Content Creation",
    image: "/placeholder.svg?height=400&width=600",
    comments: 21,
  },
];

const categories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];

export default function BlogMaster() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* To Make Header sticky, you can add "sticky, top-0" */}
      <header className="bg-white shadow-sm z-10"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link
                href="/"
                className="text-xl sm:text-2xl font-bold text-[#954DEA]"
              >
                BlogMaster
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Button variant="ghost" onClick={() => setMobileMenuOpen(true)}>
                <span className="sr-only">Open menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-500 group inline-flex items-center text-base font-medium hover:text-gray-900">
                  <span>Categories</span>
                  <ChevronDown
                    className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {categories.map((category) => (
                    <DropdownMenuItem
                      key={category}
                      onSelect={() => setSelectedCategory(category)}
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </Link>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Link href="/" className="text-xl font-bold text-[#954DEA]">
                      BlogMaster
                    </Link>
                  </div>
                  <div className="-mr-2">
                    <Button
                      variant="ghost"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Home
                      </span>
                    </Link>
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant="ghost"
                        className="text-base font-medium text-gray-900 hover:bg-gray-50"
                        onClick={() => {
                          setSelectedCategory(category);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {category}
                      </Button>
                    ))}
                    <Link
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        About
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Contact
                      </span>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Welcome to</span>{" "}
                  <span className="block text-[#954DEA] xl:inline">
                    BlogMaster
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover insightful articles, expert tips, and the latest
                  trends in blogging, content creation, and digital marketing.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#954DEA] hover:bg-[#8A45D8] md:py-4 md:text-lg md:px-10">
                      Start Reading
                    </Button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button
                      variant="outline"
                      className="w-full border border-[#954DEA] flex items-center justify-center px-8 py-3 text-[#954DEA] text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/placeholder.svg?height=600&width=800"
            alt="Blog hero image"
            width={800}
            height={600}
          />
        </div>
      </div>

      {/* Blog Posts */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Latest Articles
        </h2>

        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div className="relative w-full sm:w-64">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 text-black"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {selectedCategory} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onSelect={() => setSelectedCategory(category)}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="object-cover h-48 w-full"
              />
              <CardContent className="flex-grow p-6">
                <Badge className="mb-2">{post.category}</Badge>
                <h3 className="text-xl font-semibold mb-2">
                  <Link
                    href={`/post/${post.id}`}
                    className="text-gray-900 hover:text-[#954DEA]"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{post.date}</span>
                  <Clock className="ml-4 mr-2 h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 px-6 py-4">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt={post.author}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {post.author}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-[#954DEA] hover:bg-[#8A45D8] text-white">
            Load More Articles
          </Button>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-[#954DEA] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Subscribe to Our Newsletter
              </h2>
              <p className="mt-4 text-lg">
                Get the latest articles, tips, and insights delivered straight
                to your inbox.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <form className="sm:flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-3 border-white focus:ring-offset-[#954DEA]"
                />
                <Button className="mt-3 w-full px-6 py-3 bg-white text-[#954DEA] hover:bg-gray-100 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                  Subscribe
                </Button>
              </form>
              <p className="mt-3 text-sm text-[#E0D1FA]">
                We care about your data. Read our{" "}
                <Link href="#" className="font-medium underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2023 BlogMaster, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
