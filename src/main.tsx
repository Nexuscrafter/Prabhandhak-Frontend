// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './components/About';
import ChoosePath from './components/ChoosePath';
import Founders from './components/Founders';
import RegistrationForm from './components/RegistrationForm';
import './index.css';
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Toaster position="top-center" />
      <Routes>
        {/* Wrap your layout in App */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="choose-path" element={<ChoosePath />} />
          <Route path="founders" element={<Founders />} />
          <Route path="register" element={<RegistrationForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
