import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Solutions from './components/Solutions';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero3D />
        <Solutions />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
