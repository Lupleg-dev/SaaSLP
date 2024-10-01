"use client"
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What types of templates do you offer?",
    answer: "We offer a wide range of templates including e-commerce, SaaS, business websites, and educational platforms. Our templates are designed to cater to various industries and use cases."
  },
  {
    question: "Are your templates customizable?",
    answer: "Yes, all our templates are fully customizable. You can easily modify colors, fonts, layouts, and content to match your brand and specific needs. We provide comprehensive documentation to guide you through the customization process."
  },
  {
    question: "Do you offer support for your templates?",
    answer: "We provide dedicated support for all our templates. This includes documentation, video tutorials, and direct support from our team for any questions or issues you may encounter."
  },
  {
    question: "Can I use your templates for client projects?",
    answer: "Yes, you can use our templates for client projects. We offer different licensing options, including a developer license that allows you to use a template for multiple clients or projects."
  },
  {
    question: "How often are templates updated?",
    answer: "We regularly update our templates to ensure they remain compatible with the latest web standards and technologies. Major updates are typically released quarterly, with minor updates and bug fixes released more frequently."
  },
  {
    question: "What if I'm not satisfied with a template?",
    answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase for any reason, you can request a full refund within 30 days of your purchase."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-12 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <dl className="space-y-6 divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="pt-6">
              <dt className="text-lg">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="text-left w-full flex justify-between items-start text-gray-400"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="ml-6 h-7 flex items-center">
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <ChevronDown className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </button>
              </dt>
              {openIndex === index && (
                <dd className="mt-2 pr-12">
                  <p className="text-base text-gray-500">{faq.answer}</p>
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}