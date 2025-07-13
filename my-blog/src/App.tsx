import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import WorkWithMe from './pages/WorkWithMe';
import Blog from './pages/Blog';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="w-full">
        <Header />
        <Navbar />
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-6xl mx-auto bg-white shadow-lg min-h-screen">
            <div className="p-12">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work-with-me" element={<WorkWithMe />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;