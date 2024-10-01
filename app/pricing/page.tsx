"use client"
import { Check, HelpCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const tiers = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for individuals and small projects',
    features: [
      'Access to 10 templates',
      '1 month of updates',
      'Basic support',
      'Personal use license',
    ],
  },
  {
    name: 'Pro',
    price: 79,
    description: 'Great for professionals and growing businesses',
    features: [
      'Access to all templates',
      '6 months of updates',
      'Priority support',
      'Commercial use license',
      'Access to premium templates',
    ],
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large teams and high-volume projects',
    features: [
      'Access to all templates',
      '12 months of updates',
      '24/7 Premium support',
      'Extended commercial license',
      'Custom template requests',
      'Dedicated account manager',
    ],
  },
]

export default function PricingPage() {
    const router = useRouter();

  const handleBack = () => {
    router.push("/#pricing");
  };
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Pricing Plans
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 text-gray-600">
            Choose the perfect plan for your needs. All plans include access to our curated collection of high-quality templates.
          </p>
        </div>
        <div className="mt-8 sm:mt-12 md:mt-16 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:max-w-none lg:mx-0">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.name}
              className={`flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-8 shadow-lg ring-1 ring-gray-200 ${
                tierIdx === 1 ? 'sm:scale-105 sm:shadow-xl' : ''
              }`}
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold leading-8 text-gray-900">{tier.name}</h2>
                <p className="mt-2 sm:mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-4 sm:mt-6 flex items-baseline gap-x-1">
                  <span className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">${tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-6 sm:mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-[#954DEA]" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button onClick={handleBack}
                className={`mt-6 sm:mt-8 block w-full ${
                  tierIdx === 1 
                    ? 'bg-[#954DEA] hover:bg-[#8A45D8] text-white' 
                    : 'bg-white text-[#954DEA] hover:bg-[#954DEA] hover:text-white'
                } border border-[#954DEA] transition-colors duration-200`}
              >
                Get started
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="link" className="text-[#954DEA] hover:text-[#8A45D8]">
                  Need help choosing? <HelpCircle className="ml-2 h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Contact our sales team for personalized assistance</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  )
}