import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="bg-blue-600 shadow-md px-4 py-3 sm:px-8">
      <div className="container mx-auto flex items-center justify-between">
        
        <Link to="/" className="flex items-center space-x-2">
          <img
            src='/quizlo-logo.png'
            alt="Quizlo Logo"
            className="h-10 w-auto object-contain"
          />
         
        </Link>

        <ul className="flex space-x-4 sm:space-x-6 text-black font-medium text-sm sm:text-base">
          <li>
            <Link to="/" className="hover:text-gray-100 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/quiz-selector" className="hover:text-gray-100 transition-colors duration-200">
              Select a Quiz
            </Link>
          </li>

          <li>
            <Link to="/quiz" className="hover:text-gray-100 transition-colors duration-200">
              Quiz
            </Link>
          </li>


          {/* <li>
            <Link to="/quiz/rtl" className="hover:text-gray-100 transition-colors duration-200">
              RTL quiz
            </Link>
          </li>
          <li>
            <Link to="/quiz/react-quiz" className="hover:text-gray-100 transition-colors duration-200">
              React quiz
            </Link>
          </li>
          <li>
            <Link to="/quiz/javascript-quiz" className="hover:text-gray-100 transition-colors duration-200">
              Javascript quiz
            </Link>
          </li> */}


        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
