import React from 'react';
import BikeInsuranceForm from '../components/BikeInsuranceForm'; // adjust path if needed

const BikeInsurancePage = () => {
  const handleFormSubmit = (data) => {
    console.log("Bike Insurance Submitted:", data);
    // Do something with the data, like show plans or send to backend
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">Bike Insurance</h2>
      <BikeInsuranceForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default BikeInsurancePage;
