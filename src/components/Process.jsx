import React from 'react'
import addfriend from '/add_friend.svg'
import v1 from '/Vector.svg'
import v2 from '/Vector(2).svg'

const Process = ({ openModal }) => {
  const steps = [
    { image: addfriend, text: "Submit referrals easily via our website's referral section." },
    { image: v1, text: "Earn rewards once your referral joins an Accredian program." },
    { image: v2, text: "Both parties receive a bonus 30 days after program enrollment." },
  ]

  return (
    <div className="bg-blue-200 p-8 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-12">
        How Do I <span className="text-blue-800">Refer</span>?
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center max-w-xs">
            <div className="w-48 h-48 bg-white rounded-full flex flex-col items-center justify-center shadow-[4px_0_10px_rgba(0,0,0,0.1)] mb-4">
              <img src={step.image} alt={`Step ${index + 1}`} className="w-16 h-16 mb-2" />
            </div>
            <p className="text-center text-gray-600 font-medium">{step.text}</p>
          </div>
        ))}
      </div>
      <button 
        onClick={openModal} 
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
      >
        Refer Now
      </button>
    </div>
  )
}

export default Process