import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProtetedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { user, token } = useContext(AuthContext);

  useEffect(() => {
    if (!user || !token) {
      navigate('/');
    }
  }, [token, user, navigate]);

  return children;
};

export default ProtetedRoute;
