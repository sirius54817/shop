import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
// import anime from 'animejs';
import './FloatingParticles.css';

const FloatingParticles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create animated particles
    const particleCount = 15;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 10 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
      
      // Different particle types with weights
      const types = [
        { emoji: '🥛', weight: 3 },
        { emoji: '🧀', weight: 2 },
        { emoji: '🧈', weight: 2 },
        { emoji: '🍦', weight: 1 },
        { emoji: '🥧', weight: 1 },
        { emoji: '✨', weight: 4 },
        { emoji: '🌟', weight: 2 },
        { emoji: '💫', weight: 1 }
      ];
      
      // Weighted random selection
      const totalWeight = types.reduce((sum, type) => sum + type.weight, 0);
      let random = Math.random() * totalWeight;
      let selectedType = types[0];
      
      for (const type of types) {
        if (random < type.weight) {
          selectedType = type;
          break;
        }
        random -= type.weight;
      }
      
      particle.textContent = selectedType.emoji;
      particles.push(particle);
      container.appendChild(particle);
    }

    // Temporarily disable anime.js animations for debugging
    console.log('FloatingParticles created without anime.js');

    return () => {
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div ref={containerRef} className="floating-particles-container">
      {/* Animated background gradients */}
      <motion.div
        className="background-gradient"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(255, 234, 167, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 80% 20%, rgba(250, 177, 160, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 40% 70%, rgba(225, 112, 85, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 60% 30%, rgba(52, 211, 153, 0.2) 0%, transparent 60%)',
            'radial-gradient(circle at 20% 50%, rgba(255, 234, 167, 0.2) 0%, transparent 60%)'
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Secondary animated layer */}
      <motion.div
        className="background-gradient"
        animate={{
          background: [
            'radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 60%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default FloatingParticles;
