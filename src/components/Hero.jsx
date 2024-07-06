  import React, { useState } from 'react';
  import Anniversary from '/Anniversary.svg';
  import ReferModal from './ReferModal'; // Adjust path as per your project structure

  const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
      <div className="flex items-center justify-center h-screen bg-blue-200">
        {/* Content */}
        <div className="max-w-screen-xl flex flex-col lg:flex-row items-center justify-center mx-auto p-8">
          {/* Text or other content */}
          <div className="text-center lg:text-left lg:mr-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">Let's Earn & Earn</h1>
            <p className="mt-4 text-lg lg:text-xl text-gray-700">Get a chance to win up to Rs. 15,000</p>
            <button onClick={openModal} className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600">Refer Now</button>
          </div>
          
          {/* Anniversary Image */}
          <div className="lg:ml-12 mt-8 lg:mt-0">
            <img src={Anniversary} alt="Anniversary" className="max-w-full h-auto" />
          </div>
        </div>

        {/* Refer Modal */}
        <ReferModal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    );
  };

  export default Hero;
