import React from 'react'
import ReactDOM from 'react-dom/client'
import './interceptors/axios.js';

import App from './App.jsx'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx';
import Signup from './pages/Signup.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/main.css"

const router = createBrowserRouter([
  {
 path: "/",
 element: <Home />
},
{
  path: "/login",
  element: <Login />
},
{
  path: "/logout",
  element: <Logout />
},
{
  path: "/signup",
  element: <Signup />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
