"use client";

import { motion } from "framer-motion";
import { Calendar, Ticket, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Calendar,
      title: "Discover Events Easily",
      text: "Find events happening around you with powerful search and filtering tools.",
    },
    {
      icon: Ticket,
      title: "Book Tickets Instantly",
      text: "Secure your spot at events with fast and seamless booking experience.",
    },
    {
      icon: Users,
      title: "Built for Organizers",
      text: "Manage events, track bookings, and grow your audience effortlessly.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-950"
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
          About Eventra
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-16"
        >
          Eventra is a modern event booking platform designed to simplify how people
          discover, book, and manage events. We help event organizers reach the
          right audience while making ticket booking fast, secure, and stress-free.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/40">
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
