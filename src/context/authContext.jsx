import { createContext, useState, useContext } from 'react'

export const AuthContext = createContext(null);

export const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export const AuthProvider = (props) => {
    const [signupData, setSignupData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null);
    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null)

    return (
        <AuthContext.Provider value={{ signupData, setSignupData, loading, setLoading, token, setToken, user, setUser }}>{props.children}</AuthContext.Provider>
    );
};