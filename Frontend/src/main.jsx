import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Login from './pages/login.jsx'
import PriceList from './pages/PriceList.jsx'
import ProtectedRoute from './components/ProtectedRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/pricelist' element={<ProtectedRoute><PriceList /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
