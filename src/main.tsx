import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './assets/scss/style.scss'

import Home from './pages/Home'
import Error from './pages/Error'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    errorElement: <Error />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
