import { useState } from "react";

const faqs = [
  {
    id: "faq1",
    question: "What franchise models do you offer?",
    answer:
      "We offer multiple models such as Cart, Kiosk, Café and trailer formats. Each model has different space, investment, and revenue requirements.",
  },
  {
    id: "faq2",
    question: "What is the minimum investment required?",
    answer:
      "Investment depends on the model you choose. It includes setup cost, franchise fee, equipment, and initial stock. A detailed cost sheet will be shared during the discussion.",
  },
  {
    id: "faq3",
    question: "What the difference between you and other ice cream brand franchise.",
    answer:
      "We are completely honey-based ice product brand with nearby 45 years of experience, which creates a unique and untapped market with 20-25% of the market share.",
  },
  {
    id: "faq4",
    question: "What type of location do you need to start the franchise?",
    answer:
      "The location depends upon the model you are selecting, but any high street market or area located near school, college or any educational institute is best suitable for the business. ",
  },
  {
    id: "faq5",
    question: "What’s the Profit margin in this business?",
    answer:
      "As per market standard the profit in any F&B product is 30 to 35% after excluding all the operational cost and raw material. ",
  },
  {
    id: "faq6",
    question: "What all you offer in menu?",
    answer:
      "We have extended menu in café having different food and beverage options and the parlour and cart have ice cream and other options. You can also customize the menu according to the requirement. And item which don’t need to be cooked can be added in menu.  ",
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-5xl">Frequently Asked Questions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
