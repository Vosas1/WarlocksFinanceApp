import { createContext, useState } from 'react';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component: Provides authentication state and functions to the application
export const AuthProvider = ({ children }) => {
    // State to manage the authenticated user data
    const [auth, setAuth] = useState(null);

    // Function to log in a user and save their data
    const login = (userData) => {
        setAuth(userData);  // Set the auth state with the user data
        localStorage.setItem('authToken', userData.token);  // Save the token in local storage
    };

    // Function to log out a user and clear their data
    const logout = () => {
        setAuth(null);  // Clear the auth state
        localStorage.removeItem('authToken');  // Remove the token from local storage
    };

    return (
        // Provide the auth state and functions to children components
        <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
