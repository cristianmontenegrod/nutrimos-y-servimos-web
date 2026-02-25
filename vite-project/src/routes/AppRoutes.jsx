import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import PublicLayout from "../layouts/PublicLayout";

import PublicConsultation from "../pages/PublicConsultation"
import Login from "../pages/Login"
import AdminDashboard from "../pages/AdminDashboard"

export default function AppRoutes() {
  return (
    <Routes>

      <Route element={<PublicLayout />}>
        <Route path="/" element={<PublicConsultation />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

    </Routes>
  )
}