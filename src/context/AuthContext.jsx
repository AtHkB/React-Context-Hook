import { useState, createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [isAuth, setIsAuth] = useState(false);

  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuth, toggleAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}
