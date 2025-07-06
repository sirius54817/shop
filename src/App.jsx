import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ModernLandingPage from './pages/ModernLandingPage';
import ModernLoginPage from './pages/ModernLoginPage';
import ModernRegisterPage from './pages/ModernRegisterPage';
import PageTransition from './components/PageTransition';
import FloatingParticles from './components/FloatingParticles';
import './App.css';

function App() {
  return (
    <div className="app">
      <FloatingParticles />
      <AnimatePresence mode="wait" initial={false}>
        <Routes>
          <Route path="/" element={
            <PageTransition>
              <ModernLandingPage />
            </PageTransition>
          } />
          <Route path="/login" element={
            <PageTransition>
              <ModernLoginPage />
            </PageTransition>
          } />
          <Route path="/register" element={
            <PageTransition>
              <ModernRegisterPage />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
