import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import BeforeLoginHome from "./pages/home/BeforeLoginHome";
import AfterLoginHome from "./pages/home/AfterLoginHome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyEmail from "./pages/other/VerifyEmail";
import UpdatePassword from "./pages/other/UpdatePassword";
import GenerateID from "./pages/GenerateID";
import Dashboard from "./pages/Dashboard";
import PrivacyPolicy from "./pages/other/PrivacyPolicy";
import TermsOfService from "./pages/other/TermsOfService";
import HelpSupport from "./pages/other/HelpSupport";
import ContactUs from "./pages/other/ContactUs";
import About from "./pages/other/About";
import NotFound404 from "./pages/other/NotFound404";

// For all Cliparts and Fonts
import "@fortawesome/fontawesome-free/css/all.min.css";


// AuthCheck
const isAuthenticated = () => {
  return Boolean(localStorage.getItem("user"));
};

// Only logged-in users allowed
function ProtectedRoute({ children }) {
  return isAuthenticated()
    ? children
    : <Navigate to="/login" replace />;
}

// Only guest users allowed
function PublicRoute({ children }) {
  return !isAuthenticated()
    ? children
    : <Navigate to="/home" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ROOT ROUTE (SMART) */}
        {/* If user is already login and verified then they will go to AfterLogin Home page */}
        <Route
          path="/"
          element={
            isAuthenticated()
              ? <AfterLoginHome />
              : <BeforeLoginHome />
          }
        />

        {/* -------- PUBLIC ONLY ROUTES -------- */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        {/* -------- ALWAYS PUBLIC (LEGAL / INFO) -------- */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/helpsupport" element={<HelpSupport />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />

        {/* -------- PROTECTED ROUTES -------- */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <AfterLoginHome />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/generate"
          element={
            <ProtectedRoute>
              <GenerateID />
            </ProtectedRoute>
          }
        />

        <Route
          path="/update-password"
          element={
            <ProtectedRoute>
              <UpdatePassword />
            </ProtectedRoute>
          }
        />

        {/* -------- 404 FALLBACK -------- */}
        <Route path="*" element={<NotFound404 />} />

      </Routes>
    </BrowserRouter>
  );
}
