import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ModernLandingPage from './pages/ModernLandingPage';
import ModernLoginPage from './pages/ModernLoginPage';
import ModernRegisterPage from './pages/ModernRegisterPage';
import MainSalesPage from './pages/MainSalesPage';
import AdminPage from './pages/AdminPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ModernLandingPage />} />
        <Route path="/login" element={<ModernLoginPage />} />
        <Route path="/register" element={<ModernRegisterPage />} />
        <Route path="/sales" element={<MainSalesPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
