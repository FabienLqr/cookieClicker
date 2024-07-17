import {
    createContext,
    useContext,
    useState,
    useMemo,
    useCallback,
  } from "react";
  import PropTypes from "prop-types";
  
  
  const AuthContext = createContext();
  
  export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [player, setPlayer] = useState({});
    
  
    const login = useCallback((someone) => {
      setPlayer(someone);
      setIsAuthenticated(true);
    }, []);
  
    const logout = useCallback(() => {
      setPlayer({});
      setIsAuthenticated(false);
    }, []);
  
    const value = useMemo(
      () => ({ isAuthenticated, player, login, logout }),
      [isAuthenticated, login, logout, player]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }
  
  export const useAuth = () => useContext(AuthContext);
  
  AuthProvider.propTypes = {
    children: PropTypes.element.isRequired,
  };