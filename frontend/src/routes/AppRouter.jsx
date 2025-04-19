import React from 'react';
import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const AppRouter = () => {
    return (
        <BrowserRouter>
            
                <Routes>
                    <Route path="/" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            
        </BrowserRouter>
    );
};

export default AppRouter;
