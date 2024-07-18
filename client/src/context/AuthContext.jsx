import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    const login = (userData) => {
        setAuth(userData);
        localStorage.setItem('authToken', userData.token);  
    };

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
