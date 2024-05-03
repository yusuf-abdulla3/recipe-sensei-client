import React from 'react'
import ReactDOM from 'react-dom/client'
import './interceptors/axios.js';

import App from './App.jsx'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Logout from './pages/Logout.jsx';
import Signup from './pages/Signup.jsx';
import Ingredients from './pages/Ingredients.jsx';
import Recipes from './pages/Recipes.jsx';
import About from './pages/About.jsx';




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
},
{
  path: "/ingredients",
  element: <Ingredients />
},
{
  path: "/recipes",
  element: <Recipes />
},
{
  path: "/about",
  element: <About />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
