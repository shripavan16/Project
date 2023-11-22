import React, { useState } from 'react';
import Navbar from './Navbar';

const Register= () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Check password constraints
    if (name === 'password') {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(value)) {
        setPasswordError('Password must be at least 8 characters long and contain at least one letter and one number.');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Add your registration logic here! e.g:send data to the server
    console.log('Form submitted with data:', formData);
  };

  return (
    <>
    <Navbar/>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', fontFamily: 'Arial, sans-serif', backgroundColor: '940B92' }}>
      <header style={{ marginBottom: '20px', textAlign: 'center', color: '#333', backgroundColor: '#E95793', padding: '10px', borderRadius: '4px', width: '100%' }}>
        <h1 style={{ margin: 0 }}>Registration App</h1>
      </header>

      <form onSubmit={handleSubmit} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
        <label style={{ marginBottom: '10px', display: 'block' }}>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>

        <label style={{ marginBottom: '10px', display: 'block' }}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>

        <label style={{ marginBottom: '10px', display: 'block' }}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          {passwordError && <p style={{ color: 'red', fontSize: '12px', marginBottom: '10px' }}>{passwordError}</p>}
        </label>

        <label style={{ marginBottom: '10px', display: 'block' }}>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </label>

        <button type="submit" disabled={passwordError} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer', width: '100%' }}>
          Register
        </button>
      </form>

      <footer style={{ marginTop: '20px', textAlign: 'center', color: '#777', width: '100%' }}>
        <p>&copy; 2023 Registration App</p>
      </footer>
    </div>
</>
  );
};


export default Register;