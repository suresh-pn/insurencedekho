import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import InsurancePlans from './pages/InsurancePlans';
import BuyNowPage from './pages/BuyNowPage';
import InsuranceList from './pages/InsuranceList';
import Payment from './pages/Payment';
import InsuranceDetails from './pages/InsuranceDetails';
import RenewalPage from './pages/RenewalPage';
import Contact from './pages/Contact';
import News from './pages/News';
import Advisers from "./pages/Advisers";
import BecomeAdviser from './pages/BecomeAdviser';
import CarInsurancePage from './pages/CarInsurancePage';
import BikeInsurancePage from './pages/BikeInsurancePage';
import HealthInsuranceForm from './components/HealthInsuranceForm';
import TermInsurancePage from './components/TermInsurancePage';
import InvestmentPlan from './components/InvestmentPlan';
import BusinessInsurance from './components/BusinessInsurance';
import HealthInsurancePlan from './components/HealthInsurancePlans';
import GuaranteedInvestmentPlan from './components/GuaranteedInvestmentPage';
import MoreInsuranceOptions from './components/MoreInsuranceOptions';
import HomeVisitPage from './pages/HomeVisitPage';
import Plans from './components/Plans';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import ForgotPasswordForm from './components/ForgotPasswordForm';







const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      
        
        <Route path="/register" element={<RegisterForm />} />
        <Route path='/login' element={<LoginForm/>}/>
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/insurance" element={<InsuranceList />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/insurance/:type" element={<InsuranceDetails />} /> {/* Dynamic route */}
        <Route path="/renew" element={<RenewalPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        

          



        <Route path="/buy" element={<BuyNowPage />} />
        <Route path='/homevisitpage' element={<HomeVisitPage/>}/>
        <Route path="/news" element={<News />} />
        <Route path="/advisers" element={<Advisers />} />
        <Route path="/adviser" element={<BecomeAdviser />} />

          
         <Route path="/insurance-plans/:company" element={<InsurancePlans />} />

        
        


        <Route path="/insurance/car" element={<CarInsurancePage />} />
        <Route path="/insurance/bike" element={<BikeInsurancePage />} />
        <Route path="/insurance/health" element={<HealthInsuranceForm />} />
        <Route path="/insurance/term" element={<TermInsurancePage />} />
        <Route path="/insurance/investment" element={<InvestmentPlan />} />
        <Route path="/insurance/business" element={<BusinessInsurance />} />
        <Route path="/insurance/healthinsuranceplan" element={<HealthInsurancePlan />} />
        <Route path="/insurance/guaranteed-return" element={<GuaranteedInvestmentPlan />} />
        <Route path="/insurance/more-insurance-options" element={<MoreInsuranceOptions />} />
        <Route path="/plans" element={<Plans />} />

        <Route path="/payment" element={<Payment />} />
        
      


      </Routes>
    </Router>
  );
};

export default App;
