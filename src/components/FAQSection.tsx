'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { FAQSchema } from './StructuredData'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  items: FAQItem[]
  className?: string
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  items,
  className = ""
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <FAQSchema items={items} />
      <section className={`py-16 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600">
                {subtitle}
              </p>
            )}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <span className="flex-shrink-0 ml-2">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </span>
                </button>
                
                <div
                  id={`faq-answer-${index}`}
                  className={`transition-all duration-200 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-4 text-gray-600">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// Common FAQ sets for different pages
export const AI_CONSULTING_FAQS: FAQItem[] = [
  {
    question: "What is AI consulting and how can it benefit my business?",
    answer: "AI consulting involves strategic advisory services to help businesses implement artificial intelligence and machine learning solutions. Benefits include improved efficiency, better decision-making through data insights, automated processes, and competitive advantages in your market."
  },
  {
    question: "How long does AI implementation typically take?",
    answer: "AI implementation timelines vary based on project scope and complexity. Simple AI solutions can be deployed in 2-3 months, while enterprise-wide AI transformations typically take 6-18 months. We provide detailed project timelines during our initial consultation."
  },
  {
    question: "What industries does DataTranquil serve?",
    answer: "We serve various industries including finance, healthcare, retail, manufacturing, technology, and professional services. Our AI solutions are tailored to each industry's specific needs and regulatory requirements."
  },
  {
    question: "What is the ROI of AI implementation?",
    answer: "ROI varies by use case, but our clients typically see 20-40% efficiency improvements, 30-50% cost reductions in automated processes, and 2-5x revenue growth from AI-driven insights. We provide detailed ROI calculations using our AI ROI Calculator."
  },
  {
    question: "Do you provide ongoing support after implementation?",
    answer: "Yes, we offer comprehensive post-implementation support including model monitoring, performance optimization, team training, and continuous improvement services to ensure long-term success of your AI initiatives."
  }
]

export const AGENTIC_AI_FAQS: FAQItem[] = [
  {
    question: "What are agentic AI systems?",
    answer: "Agentic AI systems are autonomous AI agents that can perceive their environment, make decisions, and take actions to achieve specific goals without constant human supervision. They combine large language models with reasoning capabilities and tool use."
  },
  {
    question: "How do agentic AI agents differ from traditional AI?",
    answer: "Unlike traditional AI that responds to specific prompts, agentic AI can plan multi-step tasks, use tools, learn from feedback, and operate autonomously. They can handle complex workflows and adapt to changing conditions."
  },
  {
    question: "What are the security considerations for agentic AI?",
    answer: "Security is paramount for agentic AI. We implement robust access controls, audit logging, sandboxed environments, and human oversight mechanisms. All agent actions are monitored and can be rolled back if needed."
  },
  {
    question: "Can agentic AI integrate with existing systems?",
    answer: "Yes, our agentic AI platform is designed for seamless integration with existing enterprise systems through APIs, webhooks, and standard protocols. We support integration with CRM, ERP, data warehouses, and cloud platforms."
  },
  {
    question: "What's the learning curve for implementing agentic AI?",
    answer: "We provide comprehensive training and support. Most teams can deploy their first agents within 2-4 weeks. Our low-code platform makes it easy for non-technical users to create and manage agents."
  }
]

export const DATA_QUALITY_FAQS: FAQItem[] = [
  {
    question: "Why is data quality important for AI success?",
    answer: "Data quality directly impacts AI model accuracy and reliability. Poor data quality can lead to biased predictions, incorrect insights, and failed AI initiatives. Studies show that 80% of AI project time is spent on data preparation."
  },
  {
    question: "What are common data quality issues?",
    answer: "Common issues include missing values, duplicates, inconsistent formats, outdated information, incorrect labels, and biased datasets. Our solutions address all these issues through automated detection and remediation."
  },
  {
    question: "How do you assess data quality?",
    answer: "We use a comprehensive framework evaluating completeness, accuracy, consistency, timeliness, validity, and uniqueness. Our automated tools provide detailed quality scores and improvement recommendations."
  },
  {
    question: "Can you help with real-time data quality?",
    answer: "Yes, we implement real-time data quality monitoring and validation pipelines that catch issues as data enters your system, preventing downstream problems before they occur."
  },
  {
    question: "What's the cost of poor data quality?",
    answer: "Poor data quality costs enterprises an average of $12.9 million annually (Gartner). This includes lost revenue, compliance issues, poor decisions, and wasted resources on fixing data problems."
  }
]

export const MLOPS_FAQS: FAQItem[] = [
  {
    question: "What is MLOps and why is it important?",
    answer: "MLOps (Machine Learning Operations) is a set of practices that combines ML, DevOps, and data engineering to deploy and maintain ML models in production reliably and efficiently. It's crucial for scaling AI initiatives and ensuring model performance."
  },
  {
    question: "How does MLOps differ from DevOps?",
    answer: "While DevOps focuses on code deployment, MLOps handles the unique challenges of ML systems including data versioning, model versioning, experiment tracking, model monitoring, and retraining pipelines."
  },
  {
    question: "What tools do you use for MLOps?",
    answer: "We work with industry-leading tools including MLflow, Kubeflow, AWS SageMaker, Azure ML, Google Vertex AI, and open-source solutions. We help you choose the right stack for your needs."
  },
  {
    question: "How do you handle model drift?",
    answer: "We implement continuous monitoring systems that detect data drift and model performance degradation. Automated retraining pipelines ensure your models stay accurate as conditions change."
  },
  {
    question: "What's the typical timeline for MLOps implementation?",
    answer: "Basic MLOps setup takes 4-8 weeks. Full enterprise MLOps maturity, including automated pipelines, monitoring, and governance, typically takes 3-6 months depending on complexity."
  }
]