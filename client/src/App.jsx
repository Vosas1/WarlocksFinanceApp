import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import Overview from './pages/overview';
import Credit from './pages/credit';
import Loans from './pages/loans';
import Expenses from './pages/expenses';
import Register from './pages/register';
import Login from './pages/login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    return token && username ? { username } : null;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token && username) {
      setUser({ username });
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUser(null);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/overview">Overview</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/credit">Credit</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/loans">Loans</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/expenses">Expenses</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              {user ? (
                <>
                  <li className="nav-item">
                    <span className="navbar-text mr-3">Welcome, {user.username}</span>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-outline-secondary" onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
        <div className="container mt-4 text-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
          </Routes>
        </div>
        <nav className="navbar fixed-bottom navbar-light bg-light">
          <div className="container">
            <span className="navbar-text mx-auto">
              &copy; 2024 ExpenseTracker. All rights reserved.
            </span>
          </div>
        </nav>
      </div>
    </Router>
  );
}

export default App;
