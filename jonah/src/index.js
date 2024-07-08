// Import necessary functions and components
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

// Get the root element from the DOM
const root = document.getElementById('root');

// Create a root using the createRoot API and render the application
const rootElement = createRoot(root);

// Define your routing structure inside the createRoot function
rootElement.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  </Router>
);
