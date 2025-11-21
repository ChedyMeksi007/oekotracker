import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import { AuthContext, AuthProvider } from "./context/AuthContext";
import { authAPI } from "./services/api";

import HomePage from "./components/Home/HomePage";     // <-- NEW HOMEPAGE
import AuthPage from "./components/Auth/AuthPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Navbar from "./components/Layout/Navbar";       // optional but recommended

function AppContent() {
  const { token, user, setUser } = useContext(AuthContext);

  useEffect(() => {
    if (token && !user) {
      authAPI
        .getCurrentUser()
        .then((res) => setUser(res.data))
        .catch(() => {
          localStorage.removeItem("access_token");
          window.location.reload();
        });
    }
  }, [token, user, setUser]);

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* PUBLIC HOMEPAGE */}
        <Route path="/" element={<HomePage />} />

        {/* AUTH PAGE */}
        <Route
          path="/auth"
          element={token && user ? <Navigate to="/dashboard" /> : <AuthPage />}
        />

        {/* DASHBOARD (PROTECTED) */}
        <Route
          path="/dashboard"
          element={
            token && user ? <Dashboard /> : <Navigate to="/auth" replace />
          }
        />

        {/* ANY UNKNOWN ROUTE GOES TO HOMEPAGE */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

