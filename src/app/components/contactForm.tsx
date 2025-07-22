"use client"; // Keep this directive at the very top

import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null); // To show feedback

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setStatus(null); // Clear status when user starts typing again
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null); // Clear previous status

    // === START: Replace this with your actual backend submission logic ===
    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate 1.5 second delay

      // Example of sending data (e.g., to a Next.js API route or external service)
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (!response.ok) {
      //   throw new Error('Failed to send message.');
      // }

      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ // Clear form after successful submission
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
    // === END: Backend submission logic ===
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6"> {/* Increased max-width and space-y */}
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isLoading} // Disable while loading
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 text-gray-900 placeholder-gray-400"
          placeholder="John Doe"
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isLoading} // Disable while loading
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 text-gray-900 placeholder-gray-400"
          placeholder="john.doe@example.com"
        />
      </div>

      {/* Subject Input */}
      <div>
        <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-1">
          Subject (Optional)
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          disabled={isLoading} // Disable while loading
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 text-gray-900 placeholder-gray-400"
          placeholder="Regarding a corporate compliance query"
        />
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isLoading} // Disable while loading
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 text-gray-900 resize-y placeholder-gray-400"
          placeholder="Type your detailed message here..."
        ></textarea>
      </div>

      {/* Submission Feedback */}
      {status === 'success' && (
        <p className="text-center text-green-600 font-medium bg-green-50 p-3 rounded-md">
          🎉 Your message has been sent successfully! We'll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-600 font-medium bg-red-50 p-3 rounded-md">
          Oops! There was an error sending your message. Please try again later.
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading} // Disable button when loading
        className={`w-full py-3 px-6 rounded-md font-semibold flex items-center justify-center transition duration-200
          ${isLoading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'}
          text-white`}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m0 0l-3 3m3-3l-3-3m0 0l3 3m0-3h-5" // Arrow for sending
              ></path>
            </svg>
          </>
        )}
      </button>
    </form>
  );
}