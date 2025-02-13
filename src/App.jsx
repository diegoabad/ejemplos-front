import { useContext } from 'react';
import './App.css';
import { AuthContext } from './context/AuthContext';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Perfil from './views/Perfil';
import ProtetedRoute from './components/ProtetedRoute';
import { ToastContainer } from 'react-toastify';
import Login from './Login';

function App() {
  const { login, logout, user, token } = useContext(AuthContext);

  return (
    <>
      <ToastContainer />
      <h1>Hola mundo</h1>
      {user && token && <h2>Bienvenido {user.name}</h2>}
      {user && token ? (
        <button
          onClick={() => {
            logout();
          }}>
          LOGOUT
        </button>
      ) : (
        <button
          onClick={() => {
            login('diego@diego.com', 123456);
          }}>
          LOGIN
        </button>
      )}

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          {user && token && (
            <li>
              <Link to="/perfil">Perfil</Link>
            </li>
          )}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/about"
          element={
            <ProtetedRoute>
              <About />
            </ProtetedRoute>
          }
        />

        <Route
          path="/perfil"
          element={
            <ProtetedRoute>
              <Perfil />
            </ProtetedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
