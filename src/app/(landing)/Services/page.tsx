"use client";

import { motion } from "framer-motion";
import { Search, CreditCard, BarChart3, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "Smart Event Discovery",
      text: "Search and filter events by category, date, location, and popularity.",
    },
    {
      icon: CreditCard,
      title: "Secure Ticket Booking",
      text: "Fast and secure checkout experience with reliable payment integration.",
    },
    {
      icon: BarChart3,
      title: "Organizer Analytics",
      text: "Track bookings, ticket sales, and event performance in real-time.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable & Safe Platform",
      text: "Built with modern security standards to protect users and organizers.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Platform Features
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-16"
        >
          Eventra provides powerful tools for both event attendees and organizers,
          making event discovery, booking, and management simple and seamless.
        </motion.p>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-xl transition group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/40 group-hover:scale-110 transition">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
