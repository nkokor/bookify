import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AuthForm from './components/auth-components/AuthForm';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute'; 
import { UserProvider } from './context/UserContext'; // Bez potrebe za `useUser` ovdje
import './style/auth.css';
import './style/navigation.css';

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<AuthForm />} /> 
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <Dashboard /> {/* Sada direktno koristiš Dashboard */}
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
