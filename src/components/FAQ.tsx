import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How long does a project take?",
    answer:
      "Project timelines vary based on scope and complexity. A typical MVP takes 4-8 weeks, while enterprise solutions can range from 3-6 months. We provide detailed timelines during our initial consultation and maintain transparent communication throughout the development process. We'll work with you to establish realistic milestones and keep you updated at every stage.",
  },
  {
    id: 2,
    question: "Do you provide post-launch support?",
    answer:
      "Yes, absolutely! We offer comprehensive post-launch support packages including bug fixes, performance monitoring, security updates, and feature enhancements. Our support plans are flexible and can be tailored to your needs—from basic maintenance to 24/7 monitoring and rapid response. We're committed to ensuring your platform continues to perform optimally long after launch.",
  },
  {
    id: 3,
    question: "How can I get started?",
    answer:
      "Getting started is simple! Reach out to us through our contact form or email us directly. We'll schedule a free consultation to discuss your project requirements, goals, and timeline. During this call, we'll provide initial recommendations and a transparent quote. Once you're ready, we'll create a detailed project blueprint and kick off development. No commitment required for the initial consultation.",
  },
  {
    id: 4,
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern, secure technologies including TypeScript/React for frontend development, Node.js and Go for backend services, AWS and GCP for cloud infrastructure, and Next.js for serverless applications. Our team is also expert in Tailwind CSS for responsive design and DevSecOps practices for security-first development. We stay current with industry best practices and emerging technologies to deliver cutting-edge solutions.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-xs md:text-sm font-semibold text-black/60 uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-2xl md:text-5xl font-extrabold mb-6 text-black">
            Got Questions? We Got Answers.
          </h2>
          <p className="text-base md:text-lg text-black/70 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services, process, and
            support.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto items-center justify-center">
          <div className="space-y-4">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.id}
                  className="border-2 border-gray-300 rounded-2xl overflow-hidden transition-all duration-300 hover:border-gray-400 hover:shadow-lg"
                  style={{ backgroundColor: "#f9fafb !important" }}
                >
                  {/* Question */}
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 md:px-8 py-5 md:py-6 flex justify-between items-center text-left group focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0"
                    style={{
                      outline: "none",
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                  >
                    <h3 className="text-base md:text-lg font-bold text-black pr-4 group-hover:text-black/80 transition-colors">
                      {item.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <FaChevronDown className="text-black/60 group-hover:text-black transition-colors" />
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-5 md:pb-6 pt-0">
                          <div className="w-12 h-[2px] bg-black/20 mb-4"></div>
                          <p className="text-sm md:text-base text-black/70 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm md:text-base text-black/70 mb-4">
            Still have questions?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-full text-white bg-black hover:bg-[#1a1a1a] transition-all duration-500 ease-out transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Remove all blue borders and ensure light gray background */}
      <style>{`
        #faq button:focus,
        #faq button:focus-visible,
        #faq button:active {
          outline: none !important;
          border: none !important;
          box-shadow: none !important;
        }
        #faq button:hover {
          outline: none !important;
          border: none !important;
        }
        #faq > div > div > div {
          background-color: #f9fafb !important;
        }
        #faq button {
          background-color: transparent !important;
        }
      `}</style>
    </section>
  );
};

export default FAQ;
