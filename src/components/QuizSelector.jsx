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
    <div className="quiz-selector min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 py-16 px-8">
      <h2 className="text-4xl font-extrabold text-blue-600 mb-10">
        Choose Your Quiz
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(categoryData).map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className="bg-blue-600 text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <h3 className="text-xl font-semibold text-center">{category.replace(/-/g, ' ').toUpperCase()}</h3>
            <p className="text-sm text-gray-100 mt-2 text-center">Click to start quiz</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default memo(QuizSelector);
