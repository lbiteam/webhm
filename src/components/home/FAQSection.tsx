import { useState } from "react";

const faqs = [
  {
    id: "faq1",
    question: "What is the minimum area required?",
    answer:
      "For a cart, we need just 30 sq. ft. For a Parlour, 200 sq. ft is ideal. A Cafe requires 500+ sq. ft.",
  },
  {
    id: "faq2",
    question: "Do I need prior business experience?",
    answer:
      "No! We provide a comprehensive 15-day training program for you and your staff covering operations, sales, and hygiene.",
  },
  {
    id: "faq3",
    question: "What is the ROI period?",
    answer:
      "Most of our partners break even within 10-14 months, depending on the location and model chosen.",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl shadow-sm border border-amber-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full px-8 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-amber-50/50 transition"
                >
                  <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                  <i
                    className={`fas fa-${isOpen ? "minus" : "plus"} text-amber-500 bg-amber-100 p-2 rounded-full text-sm`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    isOpen ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <div className="px-8 py-6 bg-amber-50/30 border-t border-amber-100 text-gray-600 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
