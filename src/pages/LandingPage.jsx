import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const bgImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', // People
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80', // Cows
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80', // Ice cream
  'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80', // Dairy farm
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((i) => (i + 1) % bgImages.length);
    }, 3000); // Slightly slower for smoother feel
    return () => clearInterval(interval);
  }, []);

  const dairyProducts = [
    {
      name: 'Fresh Milk',
      image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
      desc: 'Pure, farm-fresh milk delivered to your door.'
    },
    {
      name: 'Cheese',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
      desc: 'Aged and fresh cheeses for every taste.'
    },
    {
      name: 'Yogurt',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
      desc: 'Creamy, probiotic-rich yogurt.'
    }
  ];

  return (
    <div style={{ position: 'relative', width: '100vw', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background slideshow with smooth crossfade */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={bgIndex}
            src={bgImages[bgIndex]}
            alt="Dairy background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              objectFit: 'cover',
              filter: 'brightness(0.85) blur(1px) saturate(1.1)',
            }}
          />
        </AnimatePresence>
        {/* Overlay for readability, more transparent */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          // background: 'linear-gradient(135deg, #fffbe6bb 0%, #ffeaa7bb 100%)',
        }} />
      </div>
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        style={{ position: 'relative', zIndex: 2, width: '100vw', minHeight: '100vh', padding: 0, boxSizing: 'border-box' }}
      >
        <div style={{ width: '80vw', margin: '0 auto' }}>
          <header style={{ padding: '2rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <h1 style={{ fontFamily: 'cursive', fontSize: '2.5rem', color: '#e17055', margin: 0 }}>🥛 DairyFresh</h1>
            <div>
              <button onClick={() => navigate('/login')} style={{ marginRight: 16, padding: '0.5rem 1.2rem', borderRadius: 20, border: 'none', background: '#00b894', color: 'white', fontWeight: 600, cursor: 'pointer' }}>Login</button>
              <button onClick={() => navigate('/register')} style={{ padding: '0.5rem 1.2rem', borderRadius: 20, border: 'none', background: '#e17055', color: 'white', fontWeight: 600, cursor: 'pointer' }}>Sign Up</button>
            </div>
          </header>
          <main style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem 0', boxSizing: 'border-box' }}>
            <motion.h2
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              style={{ fontSize: '2.2rem', fontWeight: 700, color: '#2d3436', marginBottom: 16, textAlign: 'center' }}
            >
              Welcome to DairyFresh!
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.4, 0, 0.2, 1] }}
              style={{ fontSize: '1.2rem', color: '#636e72', marginBottom: 32, textAlign: 'center', maxWidth: 700 }}
            >
              The best place to buy fresh dairy products online. Enjoy smooth browsing and discover our delicious range!
            </motion.p>
            <motion.div
              style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', width: '100%', maxWidth: 900 }}
            >
              {dairyProducts.map((prod, i) => (
                <motion.div
                  key={prod.name}
                  whileHover={{ scale: 1.02, boxShadow: '0 8px 32px #e1705555' }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.2, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  style={{ background: 'white', borderRadius: 18, boxShadow: '0 2px 16px #e1705522', padding: 20, width: 260, textAlign: 'center', cursor: 'pointer' }}
                >
                  <img src={prod.image} alt={prod.name} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 12, marginBottom: 16 }} />
                  <h3 style={{ color: '#e17055', fontWeight: 700, margin: '8px 0' }}>{prod.name}</h3>
                  <p style={{ color: '#636e72', fontSize: '1rem', margin: 0 }}>{prod.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </main>
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', padding: '2rem', color: '#636e72', width: '100%' }}
          >
            <p>&copy; 2025 DairyFresh. Fresh dairy products delivered with care ❤️ </p>
          </motion.footer>
        </div>
      </motion.div>
    </div>
  );
}
