import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-6 text-white">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/react-testing-libray-quizzes">React Testing Library Quizzes</Link></li>
        <li><Link to="/react-quizzes">React Quizzes</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
