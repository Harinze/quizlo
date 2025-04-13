import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-page bg-blue-50 min-h-screen py-10 px-5">
      <div className="container max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Quizlo</h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to Quizlo, your ultimate platform to challenge your knowledge on a variety of topics, including JavaScript, React, React Testing Library, Computer Science, Mathematics, and English. 
          Choose a category below to start your quiz journey or select a category from the Quiz Selector.
        </p>
        <div className="flex justify-center mt-6">
         <Link to="/quiz-selector" className="bg-blue-600 text-white py-2 px-4 rounded-lg">
            Go to Quiz Selector
          </Link>       
         </div>
      </div>
    </div>
  );
}

export default Home;




