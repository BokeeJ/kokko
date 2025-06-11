import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//stranice
import Pocetna from './pages/Pocetna.jsx'
import IzaKamera from './pages/IzaKamera.jsx'
import Katalog from './pages/Katalog.jsx'
import Galerija from './pages/Galerija.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Korpa from './pages/Korpa.jsx'
import OrderInformation from './services/OrderInformation.jsx'
import ArtikalDetalj from './Components/ArtikalDetalj.jsx'
import Hvala from './pages/Hvala.jsx'
import Recenzije from './pages/Recenzije.jsx'
import DodajRecenziju from './pages/DodajRecenziju.jsx'
import Dostava from './pages/Dostava.jsx'
import Kontakt from './pages/Kontakt.jsx'
import Odustanak from './pages/Odustanak.jsx'
import Saradnja from './pages/Saradnja.jsx'

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
        path: 'izaKamera',
        element: <IzaKamera />
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
      },
      {
        path: 'katalog/:id',
        element: <ArtikalDetalj />
      },
      {
        path: 'hvala',
        element: <Hvala />
      },
      {
        path: 'recenzije',
        element: <Recenzije />
      },
      {
        path: 'dodajRecenziju',
        element: <DodajRecenziju />
      },
      {
        path: 'dostava',
        element: <Dostava />
      },
      {
        path: 'kontakt',
        element: <Kontakt />
      },
      {
        path: 'odustanak',
        element: <Odustanak />
      },
      {
        path: 'saradnja',
        element: <Saradnja />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)