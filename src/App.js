import './App.css';
import './MainGrid/MainGrid.css';
import Hero from './MainContent/Hero';
import FutureSection from './MainContent/FutureSection/FutureSection';
import Infrastructure from './MainContent/Infrastructure/Infrastructure';
import Features from './MainContent/Features/Features';
import Footer from './MainContent/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <FutureSection />
      <Infrastructure />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
