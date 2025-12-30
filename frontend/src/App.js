import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdatePassword from "./pages/UpdatePassword";
import GenerateID from "./pages/GenerateID";
import Dashboard from "./pages/Dashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import '@fortawesome/fontawesome-free/css/all.min.css';

/* Protected Route Wrapper */
function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" replace />;
}

/* Public Only Route (no access when logged in) */
function PublicRoute({ children }) {
  const user = localStorage.getItem("user");
  return !user ? children : <Navigate to="/" replace />; // Changed from /dashboard to /
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />

        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />

        {/* LEGAL & INFO PAGES (Always Public) */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />

        {/* PROTECTED ROUTES */}
        <Route path="/generate" element={
          <ProtectedRoute>
            <GenerateID />
          </ProtectedRoute>
        } />

        <Route path="/update-password" element={
          <ProtectedRoute>
            <UpdatePassword />
          </ProtectedRoute>
        } />

        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

        {/* Fallback route for 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}