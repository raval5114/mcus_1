import Link from "next/link";
// Assuming you have a Logo component or image you want to use
// import Image from "next/image"; // If you have a specific logo image

// Define common navigation links for the footer
const footerNavLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#about' },
  { name: 'Our Services', href: '/#services' },
  { name: 'Our Clients', href: '/#clients' },
  { name: 'Blogs', href: '/#blogs' },
  { name: 'Contact Us', href: '/#contact' },
];

// Define social media links (reusing structure from ContactSection, but without the colorClass)
interface SocialLink {
  name: string;
  icon: string; // Unicode emoji or character
  url: string;
}

const footerSocialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    icon: '🔗', // Unicode link emoji
    url: 'https://www.linkedin.com/in/madhav-upadhyay-cs-company-secretary-b8924b172/', // Replace with actual LinkedIn URL
  },
  {
    name: 'Twitter (X)',
    icon: '🔗', // Unicode link emoji
    url: 'https://twitter.com/YourCompanyCS', // Replace with actual X/Twitter URL
  },
  // Add more as needed
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-200 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Logo/Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Replace with your actual logo or brand name */}
            {/* <Image src="/logo.svg" alt="Madhav Upadhyay Logo" width={100} height={50} className="mb-4" /> */}
            <h3 className="text-3xl font-extrabold text-white mb-2">Madhav Upadhyay</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted partner for comprehensive corporate law, compliance, and governance solutions.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-indigo-400 text-lg mr-2">📞</span>
                <a href="tel:+919876543210" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-indigo-400 text-lg mr-2">📧</span>
                <a href="mailto:madhav.cs@example.com" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">
                  madhav.cs@example.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-400 text-lg mr-2 mt-1">🏢</span>
                <Link
                  href={`https://www.google.com/maps/search/401,+Legal+Heights,+Rajkot,+Gujarat,+India`} // Replace with actual Google Maps link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
                >
                  401, Legal Heights,
                  <br />
                  Rajkot, Gujarat, India
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {footerSocialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Link to our ${social.name} profile`}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white text-xl hover:bg-indigo-600 transition-colors duration-200"
                  title={social.name} // Tooltip on hover
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          © {currentYear} Madhav Upadhyay. All rights reserved.
        </div>
      </div>
    </footer>
  );
}