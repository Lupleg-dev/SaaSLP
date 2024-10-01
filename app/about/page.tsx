"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";

const teamMembers = [
  {
    name: "Mark Sikaundi",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Mark is a seasoned developer with over 10 years of experience in web development. He founded Lupleg ShipNow with the goal of making web development more accessible to businesses and developers around the world.",
    social: {
      twitter: "https://twitter.com/alisikaundi",
      linkedin: "https://linkedin.com/in/marksikaundi",
      github: "https://github.com/marksikaundi",
    },
  },
];

export default function About() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/templates");
  };
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-6">
            About Lupleg
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re on a mission to empower developers and businesses with
            high-quality, customizable templates that accelerate the web
            development process.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Founded in 2023, Lupleg ShipNow was born out of a simple idea:
                to make web development faster and more accessible for everyone.
                Our team of experienced developers and designers came together
                with a shared vision of creating a marketplace where businesses
                of all sizes could find professional, ready-to-use web
                templates.
              </p>
              <p className="text-gray-600 mb-4">
                We understand the challenges of building websites from scratch,
                and we&apos;re here to provide solutions that save time, reduce
                costs, and deliver outstanding results. Our curated collection
                of templates spans various industries and use cases, ensuring
                that you&apos;ll find the perfect starting point for your
                project.
              </p>
              <Button
                onClick={handleBack}
                className="bg-[#954DEA] hover:bg-[#8A45D8] text-white"
              >
                Explore Our Templates
              </Button>
            </div>
            <div className="relative h-64 md:h-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Lupleg ShipNow office"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We're committed to delivering top-notch, professionally designed templates that meet the highest standards of web development.",
              },
              {
                title: "Innovation",
                description:
                  "We constantly push the boundaries of web design, incorporating the latest trends and technologies into our templates.",
              },
              {
                title: "Customer Success",
                description:
                  "Your success is our success. We provide extensive support and resources to ensure you get the most out of our templates.",
              },
              {
                title: "Accessibility",
                description:
                  "We believe in making web development accessible to everyone, regardless of their technical background.",
              },
              {
                title: "Community",
                description:
                  "We foster a vibrant community of developers and designers, encouraging knowledge sharing and collaboration.",
              },
              {
                title: "Continuous Improvement",
                description:
                  "We're always learning and evolving, constantly updating our templates based on user feedback and industry trends.",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={150}
                      height={150}
                      className="rounded-full mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{member.role}</p>
                    <p className="text-gray-600 text-center mb-4">
                      {member.bio}
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#954DEA]"
                      >
                        <Twitter size={20} />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#954DEA]"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#954DEA]"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
