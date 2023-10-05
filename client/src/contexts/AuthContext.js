import { createContext, useContext } from "react";
import { ADMIN_EMAIL } from "../constants";
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const initialAuthState = {
    _id: '',
    name: '',
    email: '',
    accessToken: ''
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

  const login = (authData) => {
    setUser(authData);
  };

  const logout = () => {
    setUser(initialAuthState);
  };
    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: user.email, isAdministrator: user.email === ADMIN_EMAIL }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}