import React, { useState } from 'react';
import './App.css'; // Import the CSS file


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowRegistration(false);
  };

  const toggleRegister = () => {
    setShowRegistration(!showRegistration);
    setShowLogin(false);
  };

  const handleLoginSubmit = () => {
    // Handle login logic here with email and password
    // You can access the email and password state variables here
  };

  const handleRegisterSubmit = () => {
    // Handle registration logic here with newEmail, newPhone, and newPassword
    // You can access the newEmail, newPhone, and newPassword state variables here
  };

  return (
    <div className="App">
      <h1>Auth App</h1>
      {showLogin ? (
        <div className="login-form">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login" onClick={handleLoginSubmit}>
            Submit Login
          </button>
        </div>
      ) : (

        <button className="login" onClick={toggleLogin}>
          Login
        </button>
      )}

      {showRegistration ? (
        <div className="registration-form">
          <input
            type="text"
            placeholder="Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button className="register" onClick={handleRegisterSubmit}>
            Submit Registration
          </button>
        </div>
      ) : (

        <button className="register" onClick={toggleRegister}>
          Register
        </button>
      )}
    </div>
  );
}

export default App;
