import React, { useState } from 'react';
import CarInsuranceForm from '../components/CarInsuranceForm';
import InsurancePlans from './InsurancePlans';
import { Container } from 'react-bootstrap';

const CarInsurancePage = () => {
  const [userData, setUserData] = useState(null);

  const handleFormSubmit = (formData) => {
    console.log("User submitted:", formData);
    setUserData(formData); // In real app, use this to fetch from backend
  };

  return (
    <Container className="my-5">
      <CarInsuranceForm onSubmit={handleFormSubmit} />
      {userData && <InsurancePlans data={userData} />}
    </Container>
  );
};

export default CarInsurancePage;
