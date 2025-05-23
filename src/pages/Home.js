import React from 'react';
import './Home.css'; // Optional: Add custom styles
import InsuranceList from './InsuranceList'; // Import Insurance Component
import Footer from '../components/Footer'; // Import Footer Component
import Banner from '../components/banner';
import BenefitsSection from '../components/BenefitsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import InsurancePartners from '../components/InsurancePartners';
const Home = () => {
  return (
    <div>

      {/* Insurance Components */}
      <div className="container mt-5">
        <Banner/>
        {/* Insurance List */}  
        <InsuranceList />
      <BenefitsSection />
      <HowItWorksSection />
      <InsurancePartners />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;