import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Backend API URL
});

// Add token to headers if available
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const registerUser = (userData) => API.post('/user/register', userData);
export const loginUser = (userData) => API.post('/user/login', userData);
export const getInsuranceProducts = () => API.get('/insurance');
export const createOrder = (orderData) => API.post('/payment/create-order', orderData);
export const submitClaim = (claimData) => API.post('/claims/submit', claimData);