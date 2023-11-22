import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Image from "./crm-for-event-management.jpg"
import Navbar from './Navbar';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    setError('');

    console.log('Username:', username);
    console.log('Password:', password);
  };

  const containerStyle = {
    backgroundImage:`url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <>
    <Navbar/>
    <ThemeProvider theme={theme}>
      <div style={containerStyle}>

        {/* Header */}
        <header style={{ background: '#303030', padding: '2px', textAlign: 'center', marginBottom: '10px', opacity: '95%' }}>
          <Typography variant="h4" component="div" color="textPrimary">
            Event Management Organization
          </Typography>
        </header>

        {/* Main Content */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '98%' }}>
          <Paper elevation={3} style={{ padding: '20px', width: '300px', transition: 'transform 3s, box-shadow 3s',background: '#303030' }}>
            <Typography variant="h5" component="div" align="center" gutterBottom>
              Login/Sign Up
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ transition: 'box-shadow 0.3s' }}
                inputProps={{ style: { backgroundColor: 'rgba(255,255,255,0.1)' } }}
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ transition: 'box-shadow 0.3s' }}
                inputProps={{ style: { backgroundColor: 'rgba(255,255,255,0.1)' } }}
              />
              {error && <Typography variant="body2" color="error" align="center" gutterBottom>{error}</Typography>}
            <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '10px' }}>
              <Link href="#" color="inherit">
                Forgot Password?
              </Link>
            </Typography>
              <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '10px', transition: 'background-color 0.3s' }}>
              <Link to='/'>
                Login
              </Link>
              </Button>
            </form>
          </Paper>
        </div>

        {/* Footer */}
        <footer style={{ background: '#303030', padding: '10px', textAlign: 'center', opacity: '90%' }}>
          <Typography variant="body2" component="div" color="textPrimary">
            
            <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '10px' }}>
              Don't have an account?{' '}
              <Link to='/Register'>
                Register
              </Link>
            </Typography>
          </Typography>
        </footer>
      </div>
    </ThemeProvider>
    </>

  );
};

export default Login;