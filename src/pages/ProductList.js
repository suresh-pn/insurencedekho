// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, Button, Container, Row, Col } from 'react-bootstrap';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/products')
//       .then(response => setProducts(response.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <Container className="mt-4">
//       <Row>
//         {products.map(product => (
//           <Col md={4} className="mb-4" key={product._id}>
//             <Card>
//               <Card.Img variant="top" src={product.image} />
//               <Card.Body>
//                 <Card.Title>{product.name}</Card.Title>
//                 <Card.Text>{product.description}</Card.Text>
//                 <Card.Text><strong>Premium:</strong> ₹{product.premium}</Card.Text>
//                 <Card.Text><strong>Coverage:</strong> {product.coverage}</Card.Text>
//                 <Button variant="success">Buy Now</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default ProductList;
