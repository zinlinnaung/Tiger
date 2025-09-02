import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout.jsx/Layout";
import DashboardPage from "../pages/DashboardPage";
import SettingsPage from "../pages/SettingPage";
import Home from "../pages/Home";
import QrCodeGenerator from "../components/QrCodeGenerator";
import LoginPage from "../pages/LoginPage";
import ExcelUploadPage from "../components/upload/UploadPage";
import EnatDashboard from "../components/Enat/EnatDashboard";
import FerrovitDashboard from "../components/Ferrovit/FerrovitDashboard";
import GlucomealDashboard from "../components/Glucomeal/GlucomealDashboard";
import FormComponent from "../FormComponent";
import EditPage from "../components/EditPage";
import PrivateRoute from "../components/PrivateRoute"; // 👈 Import

export const RouterComponent = () => {
  return (
    <Routes>
      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="upload" element={<ExcelUploadPage />} />
        <Route path="enat" element={<EnatDashboard />} />
        <Route path="glucomeal" element={<GlucomealDashboard />} />
        <Route path="ferrovit" element={<FerrovitDashboard />} />
      </Route>

      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/form" replace />} />

      {/* Public routes */}
      <Route path="/form" element={<FormComponent />} />
      <Route path="/edit" element={<EditPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
