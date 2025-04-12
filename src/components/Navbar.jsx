import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-6 text-white">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quiz-selector">Quiz Selector</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
