import './App.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Syllabus } from './components/Syllabus';
import { Preview } from './components/Preview';
import { FAQ } from './components/FAQ';
import { Chatbot } from './components/Chatbot';
import { Footer } from './components/Footer';

function App() {
  const handleEnrollClick = () => {
    alert('Enrollment system will be implemented in the backend phase!\n\nFor now, this is a frontend demo with mock data.');
  };

  return (
    <div className="App">
      <Header onEnrollClick={handleEnrollClick} />
      <Hero onEnrollClick={handleEnrollClick} />
      <Syllabus />
      <Preview />
      <FAQ />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;