import React from "react";
import Notelogo from './note.png';
import { Link } from "react-router-dom";
import Newspaper from './newspaper.png'

export default function Home() {
  return (
    <>
      <div
        style={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black", // Solid dark background
          color: "#fff",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "2rem",
            borderRadius: "12px",
          }}
        >
          {/* Tagline */}
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              background: `linear-gradient(
                90deg,
                rgba(15, 209, 139, 1) 0%,
                rgba(48, 219, 201, 1) 63%,
                rgba(69, 249, 252, 1) 100%
              )`,
              WebkitBackgroundClip: "text",
              color: "transparent",
              marginBottom: "1rem",
            }}
          >
            Welcome to CloudNotes
          </h1>

          {/* Subtitle */}
          <p style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
            Write Anywhere, Access Everywhere. Organize your life effortlessly with CloudNotes.
          </p>

          {/* Get Started Button */}
          <Link to='/signup'>
            <button
              style={{
                padding: "0.8rem 2rem",
                fontSize: "1rem",
                color: "#fff",
                background: `linear-gradient(
                  90deg,
                  rgba(15, 209, 139, 1) 0%,
                  rgba(48, 219, 201, 1) 63%,
                  rgba(69, 249, 252, 1) 100%
                )`,
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>

      <div className="lg:ml-[550px]">
        <div className="mt-20 ml-24">
          <h1>Powered by</h1>
          <h1 className="font-semibold text-3xl">CLOUD NOTES</h1>
        </div>

        <div className="flex space-x-1 lg:space-x-20 mr-1">
          {/* Card Section */}
          
          {/* TextModifier Card */}
          <a
            href="https://mytextmodifier123.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-24 mb-24 w-48 h-64 bg-black flex items-center justify-center overflow-hidden rounded-2xl ml-2"
          >
            <img
              src={Notelogo}
              alt="Note Logo"
              style={{
                position: "absolute",
                zIndex: 10,
                width: "100px",
                height: "80px",
                objectFit: "contain",
              }}
            />
            <h2 className="z-10 text-white text-2xl mt-44">TextModifier</h2>
            <div className="absolute w-24 h-[130%] bg-gradient-to-b from-cyan-500 to-green-500 animate-rotate bg-clip-padding"></div>
            <div className="absolute inset-1 bg-black rounded-xl"></div>
          </a>

          {/* NewsWave Card */}
          <a
            href="https://newswaveindia.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-24 mb-24 w-48 h-64 bg-black flex items-center justify-center overflow-hidden rounded-2xl mr-2"
          >
            <img
              src={Newspaper}
              alt="News"
              style={{
                position: "absolute",
                zIndex: 10,
                width: "100px",
                height: "80px",
                objectFit: "contain",
              }}
            />
            <h2 className="z-10 text-white text-2xl mt-44">NewsWave</h2>
            <div className="absolute w-24 h-[130%] bg-gradient-to-b from-cyan-500 to-green-500 animate-rotate bg-clip-padding"></div>
            <div className="absolute inset-1 bg-black rounded-xl"></div>
          </a>
        </div>
      </div>
    </>
  );
}
