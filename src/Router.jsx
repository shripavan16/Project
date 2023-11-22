import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Router } from 'react-router-dom';
    const router = createBrowserRouter([

            
                {path: '/', element: <Navbar/>},
                {path: '/Login', element:<Login/> },
                {path: '/Register', element:<Register/>}
                
           
       
        
        
    ]);


export default router;