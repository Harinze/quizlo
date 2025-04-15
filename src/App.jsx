import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import QuizSelector from './components/QuizSelector';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import QuizComponent from './components/QuizTwo';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz-selector" element={<QuizSelector />} />
        <Route path="/quiz/:category" element={<Quiz />} />
        <Route path="/quiz" element={<QuizComponent />} />
        {/* <Route path="/quiz/:category" element={<QuizComponent />} /> */}

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
