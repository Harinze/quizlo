import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const categories = [
    { 
      name: 'JavaScript', 
      description: 'Enhance your JavaScript skills with interactive quizzes that cover fundamental to advanced concepts, improving your problem-solving ability and coding efficiency.'
    },
    { 
      name: 'React', 
      description: 'Master React with quizzes focused on hooks, components, state management, and more, ensuring you stay up to date with the latest practices in web development.'
    },
    { 
      name: 'React Testing Library', 
      description: 'Learn how to effectively write tests for your React applications, covering best practices for unit testing, integration testing, and test-driven development.'
    },
    { 
      name: 'Computer Science', 
      description: 'Broaden your knowledge of core computer science concepts, including algorithms, data structures, and software engineering principles to boost your coding expertise.'
    },
    { 
      name: 'Mathematics', 
      description: 'Sharpen your math skills with quizzes that cover topics ranging from basic arithmetic to advanced topics, boosting your analytical and logical thinking skills.'
    },
    { 
      name: 'English', 
      description: 'Improve your English language proficiency, including grammar, vocabulary, and reading comprehension, through engaging and challenging quizzes.'
    }
  ];

  return (
    <div className="home-page bg-gray-100 min-h-screen py-10 px-5">
      <div className="container max-w-4xl mx-auto text-center">
       
        <motion.h1 
          className="text-5xl font-bold text-black mb-6" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Welcome to Quizlo
        </motion.h1>
        
        <p className="text-lg text-black mb-8">
          Test your skills with our fun and challenging quizzes across various topics. Choose a category to get started and level up your knowledge!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category, index) => (
            <motion.div 
              key={index} 
              className="category-card bg-white p-6 rounded-full shadow-md hover:scale-105 transition duration-300 ease-in-out cursor-pointer" 
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5 }}
        >
          <Link 
            to="/quiz-selector" 
            className="bg-blue-600 text-white py-4 px-8 rounded-full text-2xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Start Your Quiz Journey
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
