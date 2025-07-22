"use client"; // Add this directive at the very top

import React, { useState } from 'react';
// Assuming you have other imports like Link, ContactForm etc.
// import Link from "next/link"; // If Link is used directly in this component
// import ContactForm from "../components/contactForm"; // If ContactForm is directly in this component

// Define a type for social links (if used directly in this component)
interface SocialLink {
  name: string;
  icon: string;
  url: string;
  colorClass: string;
}

// Define your social media links data (if used directly in this component)
const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: '🔗',
    url: 'https://www.linkedin.com/in/madhav-upadhyay-cs-company-secretary-b8924b172/',
    colorClass: 'text-blue-700 hover:text-blue-900',
  },
  {
    name: 'Twitter (X)',
    icon: '🔗',
    url: 'https://twitter.com/YourCompanyCS',
    colorClass: 'text-gray-900 hover:text-gray-700',
  },
];


// This is likely the component that was previously named ContactSection
// but the error trace points to ContactUsSection.tsx
export default function ContactUsSection() { // Renamed from ContactSection based on error trace
  // If this component uses useState or useEffect, it needs "use client"
  // For example, if it had a form or interactive elements directly within it.

  // Assuming this component contains the structure you previously provided for ContactSection
  return (
    <section
      id="contact"
      className="min-h-screen px-4 sm:px-10 md:px-20 py-20 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 md:mb-10 text-gray-900">Get in Touch</h2>
      <p className="text-lg text-center leading-relaxed max-w-3xl mx-auto mb-12 text-gray-700">
        Have a query, need expert advice, or just want to say hello? Reach out to us through the details below or send us a message.
      </p>

      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 max-w-5xl w-full">
        {/* Left Column: Contact Information */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-6 text-lg">
          <h3 className="text-2xl font-bold text-indigo-700 mb-4">Contact Details</h3>
          <p className="flex items-center text-gray-800 font-medium">
            <span className="text-indigo-600 text-2xl mr-3 flex-shrink-0">📞</span> {/* Phone Emoji */}
            <strong>Phone:</strong>{" "}
            <a href="tel:+919876543210" className="ml-2 text-blue-600 hover:underline">
              +91 98765 43210
            </a>
          </p>
          <p className="flex items-center text-gray-800 font-medium">
            <span className="text-indigo-600 text-2xl mr-3 flex-shrink-0">📧</span> {/* Email Emoji */}
            <strong>Email:</strong>{" "}
            <a
              href="mailto:madhav.cs@example.com"
              className="ml-2 text-blue-600 hover:underline"
            >
              madhav.cs@example.com
            </a>
          </p>
          <p className="flex items-start text-gray-800 font-medium">
            <span className="text-indigo-600 text-2xl mr-3 flex-shrink-0 mt-1">🏢</span> {/* Office/Building Emoji */}
            <strong>Address:</strong>{" "}
            {/* Assuming Link is imported from "next/link" */}
            <a // Changed Link to 'a' tag to avoid Next.js Link import dependency if not needed
              href={`https://www.google.com/maps/search/401,+Legal+Heights,+Rajkot,+Gujarat,+India`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-600 hover:underline"
            >
              401, Legal Heights,
              <br />
              Rajkot, Gujarat, India
            </a>
          </p>
          
          {/* Enhanced Social Media Links without specific icons */}
          <div className="flex items-center space-x-6 mt-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link to our ${social.name} profile`}
                className={`flex items-center justify-center rounded-full p-2 text-2xl transition-colors duration-200 ${social.colorClass}`}
              >
                {social.icon} {/* Render the emoji */}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:w-1/2 bg-gray-50 p-6 sm:p-8 rounded-lg border border-gray-200 flex flex-col justify-center items-center text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
          <p className="text-gray-600 mb-6">
            We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you shortly.
          </p>
          {/* Assuming ContactForm is imported from "../components/contactForm" */}
          {/* <ContactForm /> */} {/* Uncomment if ContactForm is used here */}
        </div>
      </div>
    </section>
  );
}
