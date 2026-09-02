import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./lib/AuthContext";
import AppLayout from "./components/AppLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <HashRouter>
          <ScrollToTop />
          <Routes>

            <Route path="/login" element={<Login/>}/>

            <Route 
              element={
                <ProtectedRoute 
                  unauthenticatedElement={<Navigate to="/login" replace />} 
                />
              }
            >
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
              </Route>
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </HashRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}