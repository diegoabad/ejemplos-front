import { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ email: '', password: '' });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setEmail('');
    setPassword('');
    navigate('/perfil');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const validate = (name, value) => {
    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(value)) {
        setError({ ...error, email: 'Invalid email format' });
      } else {
        setError({ ...error, email: '' });
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          onBlur={() => {
            validate('email', email);
          }}
        />
        {error.email && <p>{error.email}</p>}
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {error.password && <p>{error.password}</p>}
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
