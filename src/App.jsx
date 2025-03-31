import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import FeaturedStoriesSection from './sections/FeaturedStoriesSection';
import CaseMap from './components/CaseMap';
import EpisodesGrid from './components/EpisodesGrid';
import Footer from './components/Footer';
import { cases } from './data/cases';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <main>
        <section id="featured">
          <FeaturedStoriesSection cases={cases} />
        </section>
        <section id="map">
          <CaseMap cases={cases} />
        </section>
        <section id="episodes">
          <EpisodesGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
