import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

/** import react router */
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/** import components */
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

/** create react router with nested */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
