import React, { useState } from "react";

const Footer = () => {
  const [programsOpen, setProgramsOpen] = useState(false);

  const togglePrograms = () => {
    setProgramsOpen(!programsOpen);
  };

  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Programs Section */}
        <div>
          <h3
            className="font-semibold text-lg cursor-pointer flex items-center"
            onClick={togglePrograms}
          >
            Programs <span className="ml-2">{programsOpen ? "-" : "+"}</span>
          </h3>

          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                PRODUCT MANAGEMENT
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                STRATEGY AND LEADERSHIP
              </a>
            </li>{" "}
            <li>
              <a href="#" className="hover:underline">
                Business Management
              </a>
            </li>{" "}
            <li>
              <a href="#" className="hover:underline">
                Fintech
              </a>
            </li>{" "}
            <li>
              <a href="#" className="hover:underline">
                Senior Management
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Data Science
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Digital Transformation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Business
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p className="mt-4">
            Email us (For Data Science Queries): admissions@accredian.com Email
            us (For Product Management Queries):pm@accredian.com Data Science
            Admission Helpline:+91 9079653292 (9 AM - 7 PM) Product Management
            Admission Helpline:+91 9625811095 Enrolled Student Helpline: +91
            7969322507 Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
            Sector 18, Gurugram, Haryana 122015
          </p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="mailto:info@example.com" className="hover:underline">
                info@example.com
              </a>
            </li>
            <li>
              <a href="tel:+1234567890" className="hover:underline">
                +1 234 567 890
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              Twitter
            </a>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
          </div>
        </div>

        {/* About and Other Links */}
        <div>
          <h3 className="font-semibold text-lg">About</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
