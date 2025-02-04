"use client";
import { motion } from "framer-motion";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: ["About Us", "Careers"],
    },
    {
      title: "Support",
      links: ["Help Center", "Terms of Service", "Privacy Policy", "Contact Us"],
    },
    {
      title: "Explore",
      links: ["Services", "Pricing", "FAQs"],
    },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, href: "https://facebook.com" },
    { icon: <FiTwitter />, href: "https://twitter.com" },
    { icon: <FiInstagram />, href: "https://instagram.com" },
    { icon: <FiLinkedin />, href: "https://linkedin.com" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-charcoal text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-20 mt-3">
        {/* Brand Info */}
        <div>
          <a href="/" aria-label="Navigate to Home Page">
            <div className="relative w-48 mb-16 h-16 mx-auto mb-4">
              <img
                src="/assets/img/logo-uno.png"
                alt="Logo"
                className="object-contain"
              />
            </div>
          </a>
          {/* <p className="text-4xl leading-wide tracking-wide text-gray-300 max-w-3xl mx-auto">
            Bringing you the best solutions for all your needs. Our commitment
            to excellence drives everything we do.
          </p> */}
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-center gap-12">
          {footerLinks.map((section) => (
            <div key={section.title} className="text-center">
              <h3 className="text-2xl tracking-wider font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:underline text-gray-400 text-base tracking-wider text-lg"
                      aria-label={`Navigate to ${link}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl tracking-wider font-bold mb-4">Connect with Us</h3>
          <div className="flex justify-center space-x-4">
            {socialLinks.map(({ icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                aria-label="Visit our social media"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4">
        <p className="text-xl tracking-wider text-center text-gray-400">
          © {new Date().getFullYear()} Party Deal. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
