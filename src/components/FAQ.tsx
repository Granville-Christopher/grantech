import React, { useState } from "react";

const faqData = [
  {
    question: "How long does a project take?",
    answer:
      "A typical MVP takes 4–8 weeks. Enterprise work usually runs 3–6 months. You get a timeline in the first conversation, then updates at every milestone.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. Support can cover fixes, monitoring, security updates, and new features, from a light retainer to round-the-clock response.",
  },
  {
    question: "How can I get started?",
    answer:
      "Email us. The first conversation covers goals, scope, and a clear quote. Nothing is committed until you want to proceed.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "TypeScript and React, Node.js and Go, AWS and GCP, and Next.js when a serverless app is the right fit. Security is part of the build.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#f4f5f7] px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-semibold tracking-tight text-navy md:text-4xl">FAQs</h2>
          <a href="#contact" className="mt-6 inline-flex text-sm font-semibold text-electric">
            Ask something else
          </a>
        </div>
        <div className="lg:col-span-8">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="border-t border-navy/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between bg-transparent py-5 text-left text-base font-semibold text-navy"
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <span className="text-navy/40">{isOpen ? "–" : "+"}</span>
                </button>
                {isOpen && <p className="max-w-2xl pb-5 text-sm leading-relaxed text-navy/60">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
