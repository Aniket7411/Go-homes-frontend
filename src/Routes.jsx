import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./components/login/Login";
import Dashboard from "./components/Dashboard";
import PrivacyPolicy from "./components/dashboard/privacypolicy";
import TermsAndConditions from "./components/dashboard/termsandconditions";
import AdminDashboard from "./components/Dashboard";

const RoutesComponent = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route

          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
             </ProtectedRoute>
          }
        />

        <Route
          exact
          path="/privacy_policy"
          element={
            <PrivacyPolicy />
          }
        />
        <Route
          exact
          path="/terms_conditions"
          element={
            <PrivacyPolicy />
          }
        />

        <Route path="*" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default RoutesComponent;
