import React from 'react';
import { motion } from 'framer-motion';
import './MainSalesPage.css';

const products = [
  {
    name: 'Fresh Milk',
    image: 'https://images.unsplash.com/photo-1600788886242-5c96d5ba5bb2?auto=format&fit=crop&w=400&q=80',
    price: '$2.99/L',
    desc: 'Farm-fresh, creamy milk delivered daily.'
  },
  {
    name: 'Artisan Cheese',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    price: '$6.99/250g',
    desc: 'Handcrafted cheese with rich flavor.'
  },
  {
    name: 'Organic Yogurt',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    price: '$3.49/500g',
    desc: 'Smooth, probiotic-rich yogurt.'
  },
  {
    name: 'Butter',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    price: '$4.99/200g',
    desc: 'Golden, creamy butter for baking and cooking.'
  }
];

const MainSalesPage = () => (
  <div className="main-sales-page">
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="sales-header"
    >
      <h1>Shop DairyFresh Products</h1>
      <p>Premium dairy delivered fresh from local farms. Taste the difference!</p>
    </motion.header>
    <motion.div
      className="sales-products"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
      }}
    >
      {products.map((prod, idx) => (
        <motion.div
          className="sales-card"
          key={prod.name}
          whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(102,126,234,0.15)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
        >
          <img src={prod.image} alt={prod.name} className="sales-img" />
          <h2>{prod.name}</h2>
          <p className="sales-desc">{prod.desc}</p>
          <div className="sales-price">{prod.price}</div>
          <button className="sales-buy">Buy Now</button>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default MainSalesPage;
