import React, { useState } from 'react';
import './AdminPage.css';

const initialProducts = [
  {
    name: 'Fresh Milk',
    image: 'https://images.unsplash.com/photo-1600788886242-5c96d5ba5bb2?auto=format&fit=crop&w=400&q=80',
    price: '$2.99/L',
    desc: 'Farm-fresh, creamy milk delivered daily.',
    category: 'Milk',
    rating: 4.8
  },
  // ... You can add more initial products or fetch from a backend
];

const AdminPage = () => {
  const [products, setProducts] = useState(initialProducts);
  const [form, setForm] = useState({
    name: '',
    image: '',
    price: '',
    desc: '',
    category: '',
    rating: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = e => {
    e.preventDefault();
    if (!form.name || !form.image || !form.price) return;
    setProducts([...products, { ...form, rating: parseFloat(form.rating) || 0 }]);
    setForm({ name: '', image: '', price: '', desc: '', category: '', rating: '' });
  };

  const handleRemove = idx => {
    setProducts(products.filter((_, i) => i !== idx));
  };

  return (
    <div className="admin-page">
      <h1>Admin: Manage Products</h1>
      <form className="admin-form" onSubmit={handleAdd}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" required />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
        <input name="desc" value={form.desc} onChange={handleChange} placeholder="Description" />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" />
        <input name="rating" value={form.rating} onChange={handleChange} placeholder="Rating (0-5)" type="number" step="0.1" min="0" max="5" />
        <button type="submit">Add Product</button>
      </form>
      <div className="admin-products">
        {products.map((prod, idx) => (
          <div className="admin-product-card" key={idx}>
            <img src={prod.image} alt={prod.name} />
            <div>
              <strong>{prod.name}</strong> <span>{prod.price}</span>
              <p>{prod.desc}</p>
              <small>{prod.category} | Rating: {prod.rating}</small>
            </div>
            <button onClick={() => handleRemove(idx)} className="remove-btn">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
