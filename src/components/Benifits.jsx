import React from "react";

const Benefits = ({ openModal }) => {
  const leftTableData = [
    "PRODUCT MANAGEMENT",
    "STRATEGY AND LEADERSHIP",
    "Business Management",
    "Fintech",
    "Senior Management",
    "Data Science",
    "Digital Transformation",
    "Business",
  ];

  const rightTableData = [
    {
      referrals: "Professional Certificate Program in Product Management",
      cashReward: "₹ 7,000",
      additionalBenefits: "₹ 9,000",
    },
    {
      referrals: "Executive Program in Data Driven Product Management",
      cashReward: "₹ 9,000",
      additionalBenefits: "₹ 11,000",
    },
    {
      referrals:
        "Executive Program in Product Management and Digital Transformation",
      cashReward: "₹ 10,000",
      additionalBenefits: "₹ 10,000",
    },
    {
      referrals: "Executive Program in Product Management",
      cashReward: "₹ 10,000",
      additionalBenefits: "₹ 10,000",
    },
    {
      referrals: "Advanced Certification in Product Management",
      cashReward: "₹15,000",
      additionalBenefits: "₹ 10,000",
    },
    {
      referrals:
        "Executive Program in Product Management and Project Management",
      cashReward: "₹10,000",
      additionalBenefits: "₹ 10,000",
    },
  ];

  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          What are the <span className="text-blue-600">Referral Benefits</span>?
        </h2>

        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Table */}
          <div className="md:w-1/3 bg-white rounded-lg shadow-md overflow-hidden">
            <h3 className="text-xl font-semibold bg-blue-500 text-white py-3 px-4 flex justify-between items-center">
              All Programs
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </h3>
            <ul className="p-4">
              {leftTableData.map((benefit, index) => (
                <li key={index} className="py-2 border-b last:border-b-0">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Table */}
          <div className="md:w-2/3 bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Programs</th>
                  <th className="py-3 px-4 text-left">Referrer Bonus</th>
                  <th className="py-3 px-4 text-left">Refree Bonus</th>
                </tr>
              </thead>
              <tbody>
                {rightTableData.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-3 px-4">{row.referrals}</td>
                    <td className="py-3 px-4">{row.cashReward}</td>
                    <td className="py-3 px-4">{row.additionalBenefits}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          {/* Add this line */}
          <button
            onClick={openModal}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mt-4"
          >
            Refer Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
