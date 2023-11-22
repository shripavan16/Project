// Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate=useNavigate();
  const handleHome=()=>{
    navigate('/');
  }
  const handleabout=()=>{
    navigate('/about');
  }
  const handleContact=()=>{
    navigate('/contact');
  }
  const handlesignup=()=>{
    navigate('/Register');
  }
  const handleLogin=()=>{
    navigate('/Login');
  }

  return (
    <Container>
      <AppBar position="static" style={{ backgroundColor: '#333' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 3, textDecoration: 'none', color: '#DA0C81' }}>
           RPS Event Management :)
          </Typography>
          
          <Button color="inherit" href="#home" onClick={handleHome}>Home</Button>
          <Button color="inherit" href="#about" onClick={handleabout}>About</Button>
          <Button color="inherit" href="#contact" onClick={handleContact}>Contact</Button>
          <Button color="inherit" href="#login" onClick={handleLogin}>Login</Button>
          <Button color="inherit" href="#login" onClick={handlesignup}>Signup</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" color='#800080'>
          Welcome to Our Event Management Platform RPS!
        </Typography>
        <Typography variant="body1" paragraph>
        
        Recognizing the surge in popularity of hybrid and virtual events,RPS Event Management provides comprehensive event management tools for both online and in-person elements. This versatile feature is a game-changer for event managers.The platform is perfectly equipped to support online ticketing for both virtual and physical event attendees, giving creators the flexibility to cater to a wider audience. For virtual events, RPS integrates seamlessly with popular video conferencing tools like Zoom, ensuring a smooth viewing experience for attendees.
 a unified experience to all event attendees, regardless of their mode of participation.
        </Typography>
        <Typography variant="body1" paragraph>
        RPS's holistic approach toward hybrid and virtual events simplifies the event management process. It helps maximize your reach and offer.Explore our services and make your event unforgettable!
        </Typography>
      </Container>
      {/* <footer style={{ marginTop: '20px', padding: '10px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
        <p>&copy; 2023 Your Event Management. All rights reserved.</p>
      </footer> */}
    </Container>
  );
};

export default Navbar;