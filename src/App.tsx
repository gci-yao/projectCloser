import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Process />
      <WhyWorkWithMe />
      <Contact />
    </div>
  );
}

export default App;
