"use client";

import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-600 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Eventra
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Discover, book and manage events seamlessly. Eventra helps you
            connect with experiences that matter.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li>Event Booking</li>
            <li>Event Promotion</li>
            <li>Ticket Management</li>
            <li>Organizer Dashboard</li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Connect With Us
          </h3>

          <div className="mt-4 flex items-center gap-4 text-xl">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              <FaLinkedin />
            </a>
            <a href="mailto:hello@eventra.com" className="hover:text-green-600 transition">
              <FaEnvelope />
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            hello@eventra.com
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Eventra. All rights reserved.
      </div>
    </footer>
  );
}
