import React from 'react';



export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 h-[400px]">
      <div className="container mx-auto text-center px-5 mt-10">
        {/* Logo and Title */}
        <div className="flex justify-center items-center mb-5">
          
          <h1
            className="text-4xl font-bold"
            style={{
              background: "linear-gradient(90deg, rgba(15,209,139,1) 0%, rgba(48,219,201,1) 63%, rgba(69,249,252,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            CloudNotes
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-lg text-gray-300 mb-5">
          "Write Anywhere, Access Everywhere"
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mb-10">
          <button
            className="px-6 py-2 text-white font-medium rounded-lg"
            style={{
              background: `linear-gradient(90deg, rgba(15,209,139,1) 0%, rgba(48,219,201,1) 63%, rgba(69,249,252,1) 100%)`,
            }}
          >
            Get Started
          </button>
          <button
            className="px-6 py-2 text-white font-medium rounded-lg border border-white hover:bg-white hover:text-blue-900 transition"
          >
            Learn More
          </button>
        </div>

        {/* Footer Links */}
        <div className="text-sm text-gray-400">
          <p>
            Copyright &copy; 2024 CloudNotes. All Rights Reserved.
          </p>
          <p>
            Created and Designed by <span className="text-white font-semibold">Shubham Mamgain</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
