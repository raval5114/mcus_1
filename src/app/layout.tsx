"use client"; // Keep this directive at the very top

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./sections/FooterSection";

import React, { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const loginDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target as Node)) {
        setIsLoginDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        const target = event.target as HTMLElement;
        const isToggleBtn = target.closest('#mobile-menu-toggle');
        if (!isToggleBtn) {
          setIsMobileMenuOpen(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLoginDropdownOpen(false);
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsLoginDropdownOpen(false);
  };

  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {/* NAVBAR */}
        <header className="sticky top-0 z-50 w-full bg-blue-600 text-white shadow-md">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            {/* Brand */}
            <h1 className="text-2xl font-semibold tracking-wide">
              <Link href="/" onClick={closeMenus}>
                Madhav Upadhyay
              </Link>
            </h1>

            {/* Desktop Navigation links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link href="/#about" className="hover:text-gray-200 transition" onClick={closeMenus}>
                About Us
              </Link>
              <Link href="/#services" className="hover:text-gray-200 transition" onClick={closeMenus}>
                Services
              </Link>
              <Link href="/#clients" className="hover:text-gray-200 transition" onClick={closeMenus}>
                Clients
              </Link>
              <Link href="/#blogs" className="hover:text-gray-200 transition" onClick={closeMenus}>
                Blogs
              </Link>
              <Link href="/#contact" className="hover:text-gray-200 transition" onClick={closeMenus}>
                Contact Us
              </Link>

              {/* Login Dropdown */}
              <div className="relative" ref={loginDropdownRef}>
                <button
                  onClick={toggleLoginDropdown}
                  className="flex items-center hover:text-gray-200 transition focus:outline-none"
                >
                  Login
                  <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform duration-200 ${isLoginDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`absolute right-0 mt-2 w-44 bg-white text-gray-800 rounded-md shadow-lg transition-opacity duration-200 z-50
                    ${isLoginDropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                >
                  <Link
                    href="/login/client"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={closeMenus}
                  >
                    Client Login {/* CHANGED TEXT HERE */}
                  </Link>
                  <Link
                    href="/login/admin"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                    onClick={closeMenus}
                  >
                    Admin Login {/* CHANGED TEXT HERE */}
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                id="mobile-menu-toggle"
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-8 w-8" />
                ) : (
                  <Bars3Icon className="h-8 w-8" />
                )}
              </button>
            </div>
          </nav>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          ref={mobileMenuRef}
          className={`fixed inset-0 bg-blue-600 bg-opacity-95 z-40 transform transition-transform duration-300 ease-in-out md:hidden
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Close mobile menu"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>
          <nav className="flex flex-col items-center space-y-6 text-xl font-medium text-white pt-8">
            <Link href="/#about" className="hover:text-gray-200 transition-colors" onClick={closeMenus}>
              About Us
            </Link>
            <Link href="/#services" className="hover:text-gray-200 transition-colors" onClick={closeMenus}>
              Services
            </Link>
            <Link href="/#clients" className="hover:text-gray-200 transition-colors" onClick={closeMenus}>
              Clients
            </Link>
            <Link href="/#blogs" className="hover:text-gray-200 transition-colors" onClick={closeMenus}>
              Blogs
            </Link>
            <Link href="/#contact" className="hover:text-gray-200 transition-colors" onClick={closeMenus}>
              Contact Us
            </Link>

            {/* Mobile Login Dropdown (simplified for mobile) */}
            <div className="relative w-full text-center">
              <button
                onClick={toggleLoginDropdown}
                className="flex items-center justify-center w-full py-2 hover:text-gray-200 transition focus:outline-none"
              >
                Login
                <ChevronDownIcon className={`ml-1 h-5 w-5 transition-transform duration-200 ${isLoginDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`w-full bg-blue-700 text-white transition-all duration-200 overflow-hidden
                  ${isLoginDropdownOpen ? 'max-h-40 opacity-100 pt-2' : 'max-h-0 opacity-0'}`}
              >
                <Link
                  href="/login/client"
                  className="block px-4 py-2 hover:bg-blue-800 transition-colors"
                  onClick={closeMenus}
                >
                  Client Login {/* CHANGED TEXT HERE */}
                </Link>
                <Link
                  href="/login/admin"
                  className="block px-4 py-2 hover:bg-blue-800 transition-colors"
                  onClick={closeMenus}
                >
                  Admin Login {/* CHANGED TEXT HERE */}
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}