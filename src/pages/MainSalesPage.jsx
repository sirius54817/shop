import React from 'react';
import { motion } from 'framer-motion';
import './MainSalesPage.css';

const products = [
  {
    name: 'Fresh Milk',
    image: 'https://images.unsplash.com/photo-1600788886242-5c96d5ba5bb2?auto=format&fit=crop&w=400&q=80',
    price: '$2.99/L',
    desc: 'Farm-fresh, creamy milk delivered daily.',
    category: 'Milk',
    rating: 4.8
  },
  {
    name: 'Artisan Cheese',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    price: '$6.99/250g',
    desc: 'Handcrafted cheese with rich flavor.',
    category: 'Cheese',
    rating: 4.9
  },
  {
    name: 'Organic Yogurt',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80',
    price: '$3.49/500g',
    desc: 'Smooth, probiotic-rich yogurt.',
    category: 'Yogurt',
    rating: 4.7
  },
  {
    name: 'Butter',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    price: '$4.99/200g',
    desc: 'Golden, creamy butter for baking and cooking.',
    category: 'Butter',
    rating: 4.6
  },
  {
    name: 'Greek Yogurt',
    image: 'https://images.unsplash.com/photo-1571212235554-a8672b6e9065?auto=format&fit=crop&w=400&q=80',
    price: '$4.29/500g',
    desc: 'Thick, protein-rich Greek yogurt with natural cultures.',
    category: 'Yogurt',
    rating: 4.8
  },
  {
    name: 'Aged Cheddar',
    image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?auto=format&fit=crop&w=400&q=80',
    price: '$8.99/300g',
    desc: 'Premium aged cheddar with sharp, distinctive taste.',
    category: 'Cheese',
    rating: 4.9
  },
  {
    name: 'Cream Cheese',
    image: 'https://images.unsplash.com/photo-1583548248062-5d7a48e0de7e?auto=format&fit=crop&w=400&q=80',
    price: '$3.79/200g',
    desc: 'Soft, spreadable cream cheese perfect for bagels.',
    category: 'Cheese',
    rating: 4.5
  },
  {
    name: 'Ice Cream',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=400&q=80',
    price: '$5.99/500ml',
    desc: 'Creamy vanilla ice cream made with real dairy.',
    category: 'Dessert',
    rating: 4.7
  },
  {
    name: 'Cottage Cheese',
    image: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=400&q=80',
    price: '$3.99/400g',
    desc: 'Low-fat cottage cheese rich in protein.',
    category: 'Cheese',
    rating: 4.4
  },
  {
    name: 'Mozzarella',
    image: 'https://images.unsplash.com/photo-1571197811374-d3c0d1c7e8a4?auto=format&fit=crop&w=400&q=80',
    price: '$7.49/300g',
    desc: 'Fresh mozzarella perfect for pizza and caprese.',
    category: 'Cheese',
    rating: 4.8
  },
  {
    name: 'Heavy Cream',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80',
    price: '$3.99/500ml',
    desc: 'Rich heavy cream for cooking and desserts.',
    category: 'Cream',
    rating: 4.6
  },
  {
    name: 'Parmesan',
    image: 'https://images.unsplash.com/photo-1609501676725-7186f734b2a6?auto=format&fit=crop&w=400&q=80',
    price: '$12.99/250g',
    desc: 'Aged Parmesan with intense, nutty flavor.',
    category: 'Cheese',
    rating: 4.9
  },
  {
    name: 'Sour Cream',
    image: 'https://images.unsplash.com/photo-1574112184176-5a3b1bbb0e4b?auto=format&fit=crop&w=400&q=80',
    price: '$2.79/250g',
    desc: 'Tangy sour cream for dips and cooking.',
    category: 'Cream',
    rating: 4.5
  },
  {
    name: 'Whipped Cream',
    image: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?auto=format&fit=crop&w=400&q=80',
    price: '$4.49/300ml',
    desc: 'Light and fluffy whipped cream for desserts.',
    category: 'Cream',
    rating: 4.7
  },
  {
    name: 'Goat Cheese',
    image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?auto=format&fit=crop&w=400&q=80',
    price: '$9.99/200g',
    desc: 'Creamy goat cheese with tangy flavor.',
    category: 'Cheese',
    rating: 4.6
  },
  {
    name: 'Chocolate Milk',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80',
    price: '$3.49/L',
    desc: 'Rich chocolate milk loved by kids and adults.',
    category: 'Milk',
    rating: 4.8
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
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <div className="product-category">{prod.category}</div>
          <img src={prod.image} alt={prod.name} className="sales-img" />
          <h2>{prod.name}</h2>
          <p className="sales-desc">{prod.desc}</p>
          <div className="product-rating">
            {'★'.repeat(Math.floor(prod.rating))} {prod.rating}
          </div>
          <div className="sales-price">{prod.price}</div>
          <button className="sales-buy">Add to Cart</button>
        </motion.div>
      ))}
    </motion.div>
  </div>
);

export default MainSalesPage;
