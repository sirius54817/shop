import React from 'react';
import { useNavigate } from 'react-router-dom';

const TestLandingPage = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      color: 'white',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🥛 DairyFresh</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
        Premium dairy products delivered fresh from local farms
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          onClick={() => navigate('/login')}
          style={{
            padding: '1rem 2rem',
            background: 'white',
            color: '#667eea',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          Login
        </button>
        <button 
          onClick={() => navigate('/register')}
          style={{
            padding: '1rem 2rem',
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: '1px solid white',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default TestLandingPage;
