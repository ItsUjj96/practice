import './App.css';
import AdditionalComponent from './components/AdditionalComponent';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import KeyFeaturesSection from './components/KeyFeaturesSection';
import PricingSection from './components/PricingSection';
import TestimonialSection from './components/TestimonialSection';
import WhyToChoose from './components/WhyToChoose';

function App() {
  return (
    <div className="App container">
      <div>
        <HomeSection />
        <KeyFeaturesSection />
        <AdditionalComponent />
        <WhyToChoose/>
        <PricingSection />
        <TestimonialSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
