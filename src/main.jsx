import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Roots from './Layout/Roots/Roots.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import AuthProvider from './Contexts/AuthProvider.jsx'
import Orders from './Components/Orders/Orders.jsx'
import PrivateRouter from './Components/PrivateRouter/PrivateRouter.jsx'
import Profile from './Components/Profile/Profile.jsx'
import Dashboard from './Components/Dashboard/Dashboard.jsx'
const router=createBrowserRouter([
 {
    path:'/',
    Component:Roots,
    children:[
      {index:true,Component:Home},
      {path:'login',Component:Login},
      {path:'register',Component:Register},
      {path:'orders',
        element:<PrivateRouter>
          <Orders></Orders>
        </PrivateRouter>
      },
      {
        path:'profile',
        element:<PrivateRouter>
          <Profile></Profile>
        </PrivateRouter>
      },
      {
        path:'dashboard',
        element:<PrivateRouter>
          <Dashboard></Dashboard>
        </PrivateRouter>
      }
    ]
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
