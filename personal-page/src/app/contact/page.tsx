"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex flex-col gap-8 p-8 mx-auto max-w-3xl items-center sm:items-start">
        <p className="text-lg font-semibold">Interested? Don't waste your time.</p>
        <h1 className="text-4xl font-bold mb-8">Contact Hajdu Csaba!</h1>
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-semibold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-semibold mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit
          </button>
        </form>

        <p className="text-lg font-semibold mt-4">Waiting for the answer? Get over it, I will write back soon!</p>

        <Image
          className="dark:invert mt-8"
          src="/images/getoverit.png"
          alt="Get over it"
          width={400}
          height={400}
          priority
        />
      </main>
    </div>
  );
};

export default Contact;