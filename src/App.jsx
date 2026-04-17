import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RoadmapSection from './components/RoadmapSection';
import SolutionSection from './components/SolutionSection';
import PhasesSection from './components/PhasesSection';
import TrainingSection from './components/TrainingSection';
import CaptureSection from './components/CaptureSection';
import RegistradoraSection from './components/RegistradoraSection';
import RegulatorySection from './components/RegulatorySection';
import SLCSection from './components/SLCSection';
import CredentialsSection from './components/CredentialsSection';
import FinalSection from './components/FinalSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <RoadmapSection />
        <SolutionSection />
        <PhasesSection />
        <TrainingSection />
        <CaptureSection />
        <RegistradoraSection />
        <RegulatorySection />
        <SLCSection />
        <CredentialsSection />
        <FinalSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
