import { createContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component: Provides authentication state and functions to the application
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    // Function to log in a user and save their data
    const login = (userData) => {
        setAuth(userData);
        localStorage.setItem('authToken', userData.token);
    };

    // Function to log out a user and clear their data
    const logout = () => {
        setAuth(null);
        localStorage.removeItem('authToken');
    };

    return (
        <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
