import React, { useState, useRef } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ReferModal = ({ isOpen, closeModal, referrerId }) => {
  const [refereeName, setRefereeName] = useState('');
  const [refereeEmail, setRefereeEmail] = useState('');
  const [course, setCourse] = useState('');
  const [error, setError] = useState(null);
  const formRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'refereeName':
        setRefereeName(value);
        break;
      case 'refereeEmail':
        setRefereeEmail(value);
        break;
      case 'course':
        setCourse(value);
        break;
      default:
        break;
    }
  };

  const sendEmail = (templateParams) => {
    emailjs
      .send(import.meta.VITE_EMAIL_SERVICE_ID, import.meta.VITE_EMAIL_TEMPLATE_ID, templateParams, import.meta.VITE_EMAIL_USER_ID)
      .then((result) => {
        toast.success("Message sent successfully!");
        formRef.current.reset();
        closeModal();
      })
      .catch((err) => {
        toast.error("Error occurred while sending message.");
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/referral/create', {
        referrer_id: referrerId,
        referee_name: refereeName,
        referee_email: refereeEmail,
        course: course,
      });

      if (response.status === 201) {
        const templateParams = {
          referrer_id: referrerId,
          referee_name: refereeName,
          referee_email: refereeEmail,
          course: course,
        };
        sendEmail(templateParams);
        closeModal();
      } else {
        throw new Error('Failed to submit referral');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Refer a Friend</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="refereeName" className="block text-sm font-medium text-gray-700">Friend's Name</label>
            <input type="text" id="refereeName" name="refereeName" value={refereeName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required />
          </div>
          <div className="mb-4">
            <label htmlFor="refereeEmail" className="block text-sm font-medium text-gray-700">Friend's Email</label>
            <input type="email" id="refereeEmail" name="refereeEmail" value={refereeEmail} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required />
          </div>
          <div className="mb-4">
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course (optional)</label>
            <input type="text" id="course" name="course" value={course} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={closeModal} className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferModal;
