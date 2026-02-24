import { Routes, Route } from "react-router-dom"

import PublicConsultation from "../pages/PublicConsultation"
import Login from "../pages/Login"
import AdminDashboard from "../pages/AdminDashboard"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PublicConsultation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  )
}