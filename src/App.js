// src/App.js
import React, {useState, useEffect, useRef} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Games from './components/Games';
import About from './components/About';
import Login from './components/Login';
import ForgotPassword from "./components/ForgotPassword";

import Snake from './components/games/Snake';

const Test = () => {

  const [state, setState] = useState('test')
  const [state2, setState2] = useRef('test')
}

const router = createBrowserRouter([
  {
    path: '/LOG/',
    element: <Layout />, // Use Layout as the root element
    children: [
      {
        index: true, // This route matches the root path '/'
        element: <Home />,
      },
      {
        path: 'LOG/games',
        element: <Games />,
      },
      {
        path: 'LOG/about',
        element: <About />,
      },
      {
        path: 'LOG/login',
        element: <Login />,
      },
      {
        path: 'LOG/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'LOG/games/snake',
        element: <Snake />,
      },
      // Add more child routes here
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
