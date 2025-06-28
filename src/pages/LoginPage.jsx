import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ width: '100vw', minHeight: '100vh', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div style={{ width: '80vw', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
        <motion.form
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ background: 'white', padding: 32, borderRadius: 16, boxShadow: '0 2px 16px #e1705522', minWidth: 320, maxWidth: 400, width: '100%' }}
        >
          <h2 style={{ color: '#e17055', marginBottom: 24, textAlign: 'center' }}>Login to DairyFresh</h2>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 6, color: '#636e72' }}>Email</label>
            <input type="email" required style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #eee' }} />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', marginBottom: 6, color: '#636e72' }}>Password</label>
            <input type="password" required style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #eee' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: 12, borderRadius: 8, background: '#00b894', color: 'white', fontWeight: 600, border: 'none', fontSize: '1rem', marginBottom: 12 }}>Login</button>
          <div style={{ textAlign: 'center', color: '#636e72', fontSize: '0.95rem' }}>
            Don't have an account?{' '}
            <span style={{ color: '#e17055', cursor: 'pointer', fontWeight: 600 }} onClick={() => navigate('/register')}>Register</span>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
}
