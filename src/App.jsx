import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
        className="h-screen bg-gradient-to-b from-indigo-100 to-white flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl font-bold text-indigo-700">Hi, I’m Gideon Ndoro</h1>
        <p className="mt-4 text-lg text-gray-700">
          A passionate Frontend Developer building modern web experiences.
        </p>
        <a
          href="#projects"
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen bg-white flex items-center justify-center px-6"
      >
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="mt-4 text-gray-600">
            I’m a frontend developer with a passion for creating clean, user-friendly
            interfaces. Skilled in React, Tailwind CSS, and modern web tools.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-20"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {/* Project Card */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600">Project One</h3>
            <p className="mt-2 text-gray-600">
              A description of your project goes here.
            </p>
            <a href="#" className="text-indigo-500 mt-2 inline-block hover:underline">
              View Project →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600">Project Two</h3>
            <p className="mt-2 text-gray-600">
              Another project description goes here.
            </p>
            <a href="#" className="text-indigo-500 mt-2 inline-block hover:underline">
              View Project →
            </a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-indigo-600">Project Three</h3>
            <p className="mt-2 text-gray-600">
              Another project description goes here.
            </p>
            <a href="#" className="text-indigo-500 mt-2 inline-block hover:underline">
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="h-screen bg-white flex flex-col items-center justify-center px-6"
      >
        <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
        <p className="mt-4 text-gray-600 text-center max-w-xl">
          Have a question or want to work together? Reach out!
        </p>
        <a
          href="ndorogideon23@gmail.com"
          className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Email Me
        </a>
      </section>
    </div>
  );
};

export default App;
