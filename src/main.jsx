import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//stranice
import Pocetna from './pages/Pocetna.jsx'
import Omeni from './pages/Omeni.jsx'
import Katalog from './pages/Katalog.jsx'
import Galerija from './pages/Galerija.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Korpa from './pages/Korpa.jsx'
import OrderInformation from './services/OrderInformation.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Pocetna />
      },
      {
        path: 'oMeni',
        element: <Omeni />
      },
      {
        path: 'katalog',
        element: <Katalog />
      },

      {
        path: 'galerija',
        element: <Galerija />
      },
      {
        path: '*',
        element: <PageNotFound />
      },
      {
        path: 'korpa',
        element: <Korpa />
      },
      {
        path: 'order',
        element: <OrderInformation />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)