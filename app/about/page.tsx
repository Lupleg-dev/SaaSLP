import Image from "next/image";
// import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Alex has over 15 years of experience in web development and design. He founded Lupleg ShipNow with the vision of making high-quality web templates accessible to everyone.",
  },
  {
    name: "Sarah Lee",
    role: "Lead Designer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sarah brings her artistic flair and user-centric design philosophy to every template. Her work has been featured in numerous design publications.",
  },
  {
    name: "Marcus Chen",
    role: "Senior Developer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Marcus is a full-stack developer with a passion for creating efficient, scalable code. He ensures that our templates are not just beautiful, but also performant.",
  },
  {
    name: "Emily Patel",
    role: "Customer Success Manager",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Emily is dedicated to ensuring our customers have the best experience possible. She leads our support team and is always ready to lend a helping hand.",
  },
];

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            About Lupleg ShipNow
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering creators and businesses with beautiful, functional web
            templates.
          </p>
        </div>

        <Tabs defaultValue="story" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="story">Our Story</TabsTrigger>
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="values">Our Values</TabsTrigger>
          </TabsList>
          <TabsContent
            value="story"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-black">Our Journey</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2024, Lupleg ShipNow was born from a simple idea: to
              make professional web design accessible to everyone. What started
              as a small collection of templates has grown into a comprehensive
              marketplace, serving thousands of customers worldwide.
            </p>
            <p className="text-gray-600">
              Our team of passionate designers and developers work tirelessly to
              create templates that not only look great but also perform
              exceptionally. We&apos;ve come a long way, but our journey is far
              from over. We continue to innovate and expand our offerings to
              meet the ever-evolving needs of our customers.
            </p>
          </TabsContent>
          <TabsContent
            value="mission"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-black">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Lupleg ShipNow, our mission is to democratize web design by
              providing high-quality, affordable templates that empower
              individuals and businesses to establish a strong online presence.
              We believe that great design shouldn&apos;t be a luxury, but a
              tool for success available to all.
            </p>
            <p className="text-gray-600">
              We strive to bridge the gap between professional design and
              accessibility, enabling our customers to bring their visions to
              life without the need for extensive technical knowledge or
              substantial financial investment.
            </p>
          </TabsContent>
          <TabsContent
            value="values"
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4 text-black">Our Core Values</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Quality: We never compromise on the quality of our templates.
              </li>
              <li>
                Innovation: We constantly push the boundaries of web design.
              </li>
              <li>
                Customer-Centric: Our customers&apos; success is our success.
              </li>
              <li>
                Accessibility: We make professional design attainable for all.
              </li>
              <li>
                Integrity: We operate with transparency and honesty in all our
                dealings.
              </li>
            </ul>
          </TabsContent>
        </Tabs>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#954DEA] mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <Mail className="text-[#954DEA] mr-4" size={24} />
              <div>
                <h3 className="font-semibold text-black">Email</h3>
                <p className="text-gray-600">info@lupleg.website</p>
              </div>
            </div>
            <div className="flex items-center text-black">
              <Phone className="text-[#954DEA] mr-4" size={24} />
              <div>
                <h3 className="font-semibold text-black">Phone</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="text-[#954DEA] mr-4" size={24} />
              <div>
                <h3 className="font-semibold text-black">Address</h3>
                <p className="text-gray-600">
                  123 Template St, Web City, 12345
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Connect With Us
          </h2>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon">
              <Twitter className="h-5 w-5 text-[#954DEA]" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-5 w-5 text-[#954DEA]" />
            </Button>
            <Button variant="outline" size="icon">
              <Github className="h-5 w-5 text-[#954DEA]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
