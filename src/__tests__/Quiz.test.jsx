import { vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Quiz from '../components/Quiz';

// Full mock of all expected exports from data
vi.mock('../data/all-data', () => ({
  coreJavaScriptConcepts: [
    {
      id: 1,
      question: 'What is JavaScript?',
      options: ['A programming language', 'A style sheet language'],
      correctAnswer: 'A programming language',
      answerDescription: 'JavaScript is used to build web apps.'
    }
  ],
  functionsAndScope: [],
  asynchronousJavaScript: [],
  objectsAndArrays: [],
  es6PlusFeatures: [],
  domManipulation: [],
  algorithmsAndDataStructures: [],
  memoryManagementAndOptimization: [],
  reactClassInheritanceQuestions: [],
  reactMidLevelInterviewQuestions: [],
  reactPromisesAsyncAwaitQuestions: [],
  reactEventLoopThreadQuestions: [],
  reactMiddlewareOptimizationHooksQuestions: [],
  reactSessionAuthSocketQuestions: [],
  reactOptimizationQuestions: [],
  reactReduxTesting: [],
  javascriptDesignPatterns: [],
  functionalProgramming: [],
  testingPhilosophyWithRTL: [],
  writingTestsAndStateHandling: [],
  componentAndIntegrationTesting: [],
  mockingAndSpying: [],
  codeCoverageAndPerformance: [],
  errorHandlingAndEdgeCases: [],
  webAPIs: []
}));

const renderQuiz = (category = 'javascript') => {
  return render(
    <MemoryRouter initialEntries={[`/${category}`]}>
      <Routes>
        <Route path="/:category" element={<Quiz />} />
      </Routes>
    </MemoryRouter>
  );
};

test('renders question and handles correct answer', () => {
  renderQuiz();

  expect(screen.getByText(/What is JavaScript/i)).toBeInTheDocument();

  const correctBtn = screen.getByText('A programming language');
  fireEvent.click(correctBtn);

  expect(screen.getByText(/Your answer:/i)).toBeInTheDocument();
  expect(screen.getByText(/JavaScript is used to build web apps/i)).toBeInTheDocument();
});

