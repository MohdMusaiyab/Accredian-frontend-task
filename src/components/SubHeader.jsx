import React from "react";

const SubHeader = ({ scrollToSection, refs }) => {
  return (
    <div className="bg-blue-200 text-gray-500 rounded-full p-2 md:p-4 mx-auto max-w-3xl text-center mb-10">
      <ul className="text-gray-500 text-sm md:text-base flex justify-around">
        <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection(refs.processRef)}>Refer</li>
        <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection(refs.benefitsRef)}>Benefits</li>
        <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection(refs.faqRef)}>FAQs</li>
        <li className="hover:text-blue-600 cursor-pointer" onClick={() => scrollToSection(refs.faqRef)}>Support</li>
      </ul>
    </div>
  );
};

export default SubHeader;
