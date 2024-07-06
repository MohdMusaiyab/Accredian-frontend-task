import React, { useState } from "react";

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0);

  const faqData = [
    {
      question: "Eligibility",
      answer:
        "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
    },
    {
      question: "How to Use?",
      answer:
        "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
    },
    {
      question: "Terms & Conditions",
      answer: "What is the minimum system configuration required?",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {/* Left side buttons */}
          <div className="md:w-1/3 space-y-4">
            {faqData.map((item, index) => (
              <button
                key={index}
                className={`w-full text-left p-4 rounded-lg transition-colors duration-300 ${
                  activeTab === index
                    ? "bg-blue-500 text-white"
                    : "bg-white hover:bg-blue-100"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {item.question}
              </button>
            ))}
          </div>

          {/* Right side accordions */}
          <div className="md:w-2/3">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                  activeTab === index ? "mb-4" : "h-0"
                }`}
              >
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New section */}
        <div className="mt-12 bg-blue-500 p-6 rounded-lg shadow-lg">
          <div className="flex items-center">
            <span className="text-3xl mr-2">🎧</span>
            <h3 className="text-xl font-semibold text-white">
              Want to delve deeper into the program?
            </h3>
          </div>
          <p className="mt-4 text-white">
            Share your details to receive expert insights from our program team!
          </p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;