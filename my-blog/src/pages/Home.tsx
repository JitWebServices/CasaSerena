import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to My Blog
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover interesting articles, useful calculators, and learn more about my journey in development and technology.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/blog"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Read Blog
          </Link>
          <Link
            to="/calculators"
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Try Calculators
          </Link>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="grid md:grid-cols-3 gap-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Latest Blog Posts</h3>
          <p className="text-gray-600 mb-4">
            Check out my recent thoughts on web development, technology, and programming.
          </p>
          <Link
            to="/blog"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Read More →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Useful Calculators</h3>
          <p className="text-gray-600 mb-4">
            Interactive tools and calculators built with React to solve everyday problems.
          </p>
          <Link
            to="/calculators"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Explore Tools →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">About Me</h3>
          <p className="text-gray-600 mb-4">
            Learn more about my background, skills, and what drives my passion for development.
          </p>
          <Link
            to="/about"
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Get to Know Me →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;