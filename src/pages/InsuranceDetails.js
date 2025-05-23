// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Container, Card, Form, Button, Alert } from "react-bootstrap";

// // Dummy insurance details data by type
// const insuranceData = {
//   car: {
//     title: "Car Insurance",
//     description:
//       "Protect your vehicle against accidents, theft, and damages. Get the best policies at affordable rates.",
//     basePrice: 5000,
//     benefits: [
//       "Comprehensive coverage",
//       "24/7 roadside assistance",
//       "Cashless claim settlement",
//     ],
//   },
//   bike: {
//     title: "Bike Insurance",
//     description:
//       "Keep your bike protected with theft and accident cover. Choose plans that suit your needs.",
//     basePrice: 2000,
//     benefits: [
//       "Third-party liability",
//       "Personal accident cover",
//       "Easy renewal process",
//     ],
//   },
//   health: {
//     title: "Health Insurance",
//     description:
//       "Secure your family's health with plans offering cashless treatment and critical illness coverage.",
//     basePrice: 10000,
//     benefits: [
//       "Cashless hospitalization",
//       "Pre and post-hospitalization cover",
//       "Tax benefits under Section 80D",
//     ],
//   },
//   term: {
//     title: "Term Insurance",
//     description:
//       "Affordable life cover ensuring your family’s financial security in your absence.",
//     basePrice: 8000,
//     benefits: [
//       "High sum assured",
//       "Flexible policy terms",
//       "Tax savings",
//     ],
//   },
//   investment: {
//     title: "Investment Plans",
//     description:
//       "Grow your wealth with secure and profitable investment-linked insurance plans.",
//     basePrice: 12000,
//     benefits: [
//       "Market-linked returns",
//       "Flexible premiums",
//       "Loan against policy",
//     ],
//   },
//   business: {
//     title: "Business Insurance",
//     description:
//       "Protect your business from risks and liabilities with customized insurance plans.",
//     basePrice: 15000,
//     benefits: [
//       "Property protection",
//       "Liability coverage",
//       "Employee benefits",
//     ],
//   },
//   "family-health": {
//     title: "Family Health Insurance",
//     description:
//       "Comprehensive health plans covering your entire family with easy claim services.",
//     basePrice: 18000,
//     benefits: [
//       "Cashless hospitalization",
//       "Annual health check-ups",
//       "No claim bonus",
//     ],
//   },
//   "guaranteed-return": {
//     title: "Guaranteed Return Plans",
//     description:
//       "Secure your future with plans that guarantee fixed returns on investment.",
//     basePrice: 14000,
//     benefits: [
//       "Guaranteed maturity amount",
//       "Flexible payout options",
//       "Tax benefits",
//     ],
//   },
// };

// const InsuranceDetails = () => {
//   const { type } = useParams();
//   const navigate = useNavigate();

//   // Get the insurance data or fallback
//   const insurance = insuranceData[type] || {
//     title: "Unknown Insurance",
//     description: "Details coming soon.",
//     basePrice: 0,
//     benefits: [],
//   };

//   // Form state
//   const [phone, setPhone] = useState("");
//   const [city, setCity] = useState("");
//   const [year, setYear] = useState("");
//   const [price, setPrice] = useState(null);
//   const [error, setError] = useState("");

//   // Dummy price calculation
//   const calculatePrice = () => {
//     if (!phone || !city || !year) {
//       setError("Please fill all fields to calculate price.");
//       setPrice(null);
//       return;
//     }

//     setError("");
//     // Price logic: basePrice + year-based increment + city factor
//     let yearDiff = new Date().getFullYear() - parseInt(year);
//     if (yearDiff < 0) yearDiff = 0;

//     const cityFactor = city === "Delhi" ? 1.1 : city === "Mumbai" ? 1.2 : 1;

//     const calculatedPrice = Math.round(
//       insurance.basePrice * cityFactor + yearDiff * 100
//     );

//     setPrice(calculatedPrice);
//   };

//   return (
//     <Container className="my-5">
//       <Button variant="link" onClick={() => navigate(-1)} className="mb-3">
//         &lt; Back
//       </Button>
//       <h1 className="mb-3">{insurance.title}</h1>
//       <p>{insurance.description}</p>

//       <Card className="p-4 mb-4 shadow-sm">
//         <h4>Calculate Your Insurance Price</h4>
//         <Form>
//           <Form.Group className="mb-3" controlId="phone">
//             <Form.Label>Your Phone Number</Form.Label>
//             <Form.Control
//               type="tel"
//               placeholder="Enter your phone number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="city">
//             <Form.Label>City</Form.Label>
//             <Form.Select value={city} onChange={(e) => setCity(e.target.value)}>
//               <option value="">Select city</option>
//               <option value="Delhi">Delhi</option>
//               <option value="Mumbai">Mumbai</option>
//               <option value="Chennai">Chennai</option>
//               <option value="Kolkata">Kolkata</option>
//             </Form.Select>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="year">
//             <Form.Label>Vehicle / Plan Year</Form.Label>
//             <Form.Select value={year} onChange={(e) => setYear(e.target.value)}>
//               <option value="">Select year</option>
//               {[...Array(5)].map((_, i) => {
//                 const y = new Date().getFullYear() - i;
//                 return (
//                   <option key={y} value={y}>
//                     {y}
//                   </option>
//                 );
//               })}
//             </Form.Select>
//           </Form.Group>

//           <Button variant="primary" onClick={calculatePrice}>
//             Calculate Price
//           </Button>
//         </Form>

//         {error && (
//           <Alert variant="danger" className="mt-3">
//             {error}
//           </Alert>
//         )}

//         {price !== null && (
//           <Alert variant="success" className="mt-3">
//             Estimated Price: <strong>₹ {price}</strong>
//           </Alert>
//         )}
//       </Card>

//       {insurance.benefits.length > 0 && (
//         <Card className="p-4 shadow-sm">
//           <h4>Benefits</h4>
//           <ul>
//             {insurance.benefits.map((b, i) => (
//               <li key={i}>{b}</li>
//             ))}
//           </ul>
//         </Card>
//       )}
//     </Container>
//   );
// };

// export default InsuranceDetails;
