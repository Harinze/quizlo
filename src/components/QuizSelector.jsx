import React, {memo} from 'react';
import { useNavigate } from 'react-router-dom';
import * as data from '../data/all-data'; // Import all the quiz data

const QuizSelector = () => {
  const navigate = useNavigate();

  const categoryData = {
    javascript: data.coreJavaScriptConcepts,
    'functions-and-scope': data.functionsAndScope,
    'asynchronous-javascript': data.asynchronousJavaScript,
    'objects-and-arrays': data.objectsAndArrays,
    'es6-plus-features': data.es6PlusFeatures,
    dom: data.domManipulation,
    algorithms: data.algorithmsAndDataStructures,
    memory: data.memoryManagementAndOptimization,
    react: data.reactClassInheritanceQuestions,
    'react-mid-level': data.reactMidLevelInterviewQuestions,
    'react-promises-async-await': data.reactPromisesAsyncAwaitQuestions,
    'react-event-loop-thread': data.reactEventLoopThreadQuestions,
    'react-middleware-optimization-hooks': data.reactMiddlewareOptimizationHooksQuestions,
    'react-session-auth-socket': data.reactSessionAuthSocketQuestions,
    'react-optimization': data.reactOptimizationQuestions,
    'react-redux-testing': data.reactReduxTesting,
    'react-design-patterns': data.javascriptDesignPatterns,
    'react-functional-programming': data.functionalProgramming,
    'testing-philosophy-rtl': data.testingPhilosophyWithRTL,
    'writing-tests-state-handling': data.writingTestsAndStateHandling,
    'component-integration-testing': data.componentAndIntegrationTesting,
    'mocking-spying': data.mockingAndSpying,
    'code-coverage-performance': data.codeCoverageAndPerformance,
    'error-handling-edge-cases': data.errorHandlingAndEdgeCases,
    webapis: data.webAPIs,
  };

  const handleCategorySelect = (category) => {
    navigate(`/quiz/${category}`);
  };

  return (
    <div className="quiz-selector min-h-screen flex flex-col items-center justify-center bg-white py-20 px-4">
    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-400 mb-12 text-center drop-shadow-sm">
      Choose Your Quiz
    </h2>
  
    <div
      className={`w-full max-w-6xl grid gap-6 px-2 sm:px-4 md:px-6 place-items-center
        ${Object.keys(categoryData).length === 1
          ? 'grid-cols-1'
          : Object.keys(categoryData).length === 2
          ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'
          : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        }`}
    >
      {Object.keys(categoryData).map((category) => (
        <button
          key={category}
          onClick={() => handleCategorySelect(category)}
          className="cursor-pointer bg-blue-600 text-white p-6 h-40 sm:h-48 md:h-52 w-full max-w-sm rounded-2xl shadow-lg hover:shadow-2xl hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center tracking-wide">
            {category.replace(/-/g, ' ').toUpperCase()}
          </h3>
          <p className="text-sm sm:text-base text-black mt-3 text-center">Click to start quiz</p>
        </button>
      ))}
    </div>
  </div>
  
  );
};

export default memo(QuizSelector);
