import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError('');
    setPasswordError('');
    setServerError('');

    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      isValid = false;
    }

    if (!isValid) return;

    try {
      const res = await loginUser(email, password);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      setServerError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>
      <section className="d-flex align-items-center" style={{ minHeight: "100vh", backgroundColor: "hsl(0, 0%, 96%)" }}>
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                Welcome to  <br />
                <span className="text-primary">simple task app</span>
              </h1>
              <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                Manage your tasks efficiently and stay organized. Our tool helps you track your daily activities and achieve your goals with ease.

              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">

                <div className="card-body py-5 px-md-5">

                  <form onSubmit={handleLogin}>
                    {/* Email input */}
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="form3Example3"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                      {emailError && <small className="text-danger">{emailError}</small>}
                    </div>
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="form3Example4"
                        className="form-control"
                        placeholder="Enter Your Password"
                      />
                      {passwordError && <small className="text-danger">{passwordError}</small>}
                    </div>
                    {serverError && <p className="text-danger text-center">{serverError}</p>}
                    <button
                      type="submit"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-primary btn-block mb-4"
                    >
                      Log In
                    </button>
                    <p className="text-center">
                      don't have an account? <Link to="/signup">Register</Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
