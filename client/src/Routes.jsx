import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LandingPage from './pages/Home/LandingPage';
import Home from './pages/Home/Homepage';
import Dashboard from './pages/Dashboard/Dashboard';
import Jobs from './pages/Jobs/Jobs';
import Profile from './pages/Profile/Profile';
import Login from './pages/Auth/Login';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/" />;
};

const AppRoutes = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <>
            <Routes>
                {!isAuthenticated && <Route path="/" element={<LandingPage />} />}
                {!isAuthenticated && <Route path="/login" element={<Login />} />}

                <Route path="/home" element={<Home />} />

                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/jobs"
                    element={
                        <PrivateRoute>
                            <Jobs />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />

                <Route path="*" element={<Navigate to={isAuthenticated ? "/dashboard" : "/"} />} />
            </Routes>
        </>
    );
};

export default AppRoutes;
