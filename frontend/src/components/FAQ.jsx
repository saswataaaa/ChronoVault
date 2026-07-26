import { useState } from "react";
import { ChevronDown } from "lucide-react";
<section
id="faq"
className="..."
></section>
function FAQ() {
  const faqs = [
    {
      question: "What is ChronoVault?",
      answer:
        "ChronoVault is a digital time capsule platform that lets you securely store memories, photos, videos, and letters to be unlocked in the future.",
    },
    {
      question: "Is my data encrypted?",
      answer:
        "Yes. Every capsule is protected using AES-256 encryption before being securely stored.",
    },
    {
      question: "Can I edit my capsule after creating it?",
      answer:
        "Yes. You can edit your capsule until it is locked or reaches its scheduled unlock date.",
    },
    {
      question: "Can I share a capsule with someone?",
      answer:
        "Absolutely. You can create shared capsules for friends and family to open together in the future.",
    },
    {
      question: "What happens when the unlock date arrives?",
      answer:
        "You'll receive a notification and your encrypted capsule will become available for viewing.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-32 px-8">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-6xl font-black text-center bg-gradient-to-r from-white via-purple-300 to-pink-500 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-400 text-xl mt-6">
          Everything you need to know about ChronoVault.
        </p>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >

              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="text-xl font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {activeIndex === index && (

                <div className="px-6 pb-6 text-gray-400 leading-8">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;