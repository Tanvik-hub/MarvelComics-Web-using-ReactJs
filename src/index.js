import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'; // Uncomment this if you have global styles to apply
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals'; // Uncomment this if you are using web vitals

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// reportWebVitals(); // Uncomment this if you are using web vitals
