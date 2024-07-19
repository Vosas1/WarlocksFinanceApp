import React from 'react';
import { AuthProvider } from './AuthContext';

// AuthWrapper component: Wraps children components with AuthProvider
const AuthWrapper = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>;
};

export default AuthWrapper;
