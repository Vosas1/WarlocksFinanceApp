import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddCreditPage from './pages/AddCreditPage';
import AddLoanPage from './pages/AddLoanPage';
import AddExpensePage from './pages/AddExpensePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import OverviewPage from './pages/OverviewPage';
import AuthProvider from './context/AuthProvider';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <AuthProvider>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-credit" element={<AddCreditPage />} />
                <Route path="/add-loan" element={<AddLoanPage />} />
                <Route path="/add-expense" element={<AddExpensePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/overview" element={<OverviewPage />} />
            </Routes>
        </AuthProvider>
    );
};

export default App;
