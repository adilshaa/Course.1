import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserRoutes from './routes/UserRoutes'
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
  <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
    </BrowserRouter>
  )
}