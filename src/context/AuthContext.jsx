import { useEffect, createContext, useState } from 'react';
import { toast } from 'react-toastify';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const userLS = localStorage.getItem('user');
    const tokenLS = localStorage.getItem('token');
    if (userLS && tokenLS) {
      setUser(JSON.parse(userLS));
      setToken(JSON.parse(tokenLS));
    }
  }, []);

  const login = (email, password) => {
    const user = { email, name: 'Diego' };
    // 1) FETCH / AXIOS
    // 2) CHEQUEAR SI ES EXISTOSA LA PETICION
    // 3) RESPUESTA DLE BACKEND
    // 4) BACKEND TOKEN => JWT  DKHFDSKJFHDSKJFDHKJFDHKJFDHJKFHDKJFDHSKFJ
    const token = 'dsffdsfdsfdsfdsfdsfsdfdsfdsfdsfds';
    setToken(token);
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', JSON.stringify(token));

    toast.success('Bienvenido ' + user.name, {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    toast.success('Hasta luego');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
