import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


// Login Component
const Login = () => {
  let navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://cloud-notes-backend-poou.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        localStorage.setItem('token',result.authtoken)
        navigate("/notes")
      }
      else{
        alert("invalid credentials")
      }

     
      if (response.ok) {
        console.log('Login successful:', result);
        // Redirect user or save token
      } else {
        console.error('Login failed:', result.message);
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-black h-[700px] pt-28">
       
      <StyledWrapper>
        <form className="form ml-4 lg:ml-[600px]" onSubmit={handleSubmit}>
          <div className="form-title">
            <span>Sign in to your</span>
          </div>
          <div className="title-2">
            <span>Notebook</span>
          </div>
          <div className="input-container ml-3">
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="input-mail"
              required
            />
          </div>
          <div className="input-container ml-3">
            <input
              name="password"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="input-pwd"
              required
            />
          </div>
          <button className="submit" type="submit">
            <span className="sign-text">Sign in</span>
          </button>
          <p className="signup-link">
            No account?{' '}
            <Link to="/signup">
              <span className="up">Sign up!</span>
            </Link>
          </p>
        </form>
        <Link to="/">
          <button className="text-black px-4 py-4 mt-10 ml-32 rounded-md font-medium transition">
            Home Page
          </button>
        </Link>
      </StyledWrapper>
    </div>
  );
};

const StyledWrapper = styled.div`
  .form {
    position: relative;
    display: block;
    padding: 2.2rem;
    max-width: 350px;
    background: linear-gradient(90deg, rgba(15,209,139,1) 0%, rgba(48,219,201,1) 63%, rgba(69,249,252,1) 100%);
    border: 2px solid #fff;
    -webkit-box-shadow: rgba(0, 212, 255) 0px 0px 50px -15px;
    box-shadow: rgba(0, 212, 255) 0px 0px 50px -15px;
    overflow: hidden;
    z-index: +1;
    border-radius: 8px;
  }

  /*------input and submit section-------*/

  .input-container {
    position: relative;
  }

  .input-container input,
  .form button {
    outline: none;
    border: 2px solid #ffffff;
    margin: 8px 0;
    font-family: monospace;
    border-radius: 4px;
  }

  .input-container input {
    background-color: #fff;
    padding: 6px;
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: 250px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  .input-mail:focus::placeholder {
    opacity: 0;
    transition: opacity 0.9s;
  }

  .input-pwd:focus::placeholder {
    opacity: 0;
    transition: opacity 0.9s;
  }

  .submit {
    position: relative;
    display: block;
    padding: 8px;
    
    color: white;
    background: black;
    
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 1000;
    width: 100%;
    text-transform: uppercase;
    overflow: hidden;
  }

  .submit:hover {
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    box-shadow: 4px 5px 17px -4px #ffffff;
    cursor: pointer;
  }

  .submit:hover::before {
    -webkit-animation: sh02 0.5s 0s linear;
    -moz-animation: sh02 0.5s 0s linear;
    animation: sh02 0.5s 0s linear;
  }

  .submit::before {
    content: "";
    display: block;
    width: 0px;
    height: 85%;
    position: absolute;
    top: 50%;
    left: 0%;
    opacity: 0;
    background: #fff;
    box-shadow: 0 0 50px 30px #fff;
    -webkit-transform: skewX(-20deg);
    -moz-transform: skewX(-20deg);
    -ms-transform: skewX(-20deg);
    -o-transform: skewX(-20deg);
    transform: skewX(-20deg);
  }

  @keyframes sh02 {
    from {
      opacity: 0;
      left: 0%;
    }

    50% {
      opacity: 1;
    }

    to {
      opacity: 0;
      left: 100%;
    }
  }

  /*--------signup section---------*/

  .signup-link {
    color: black;
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-align: center;
    font-family: monospace;
  }

  .signup-link a {
    color: black;
    text-decoration: none;
  }

  .up:hover {
    text-decoration: underline;
  }

  /*--------header section-----------*/

  .form-title {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-family: monospace;
    font-weight: 600;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
    animation-duration: 1.5s;
    overflow: hidden;
    transition: 0.12s;
  }

  .form-title span {
    animation: flickering 2s linear infinite both;
  }

  .title-2 {
    display: block;
    margin-top: -0.5rem;
    font-size: 2.1rem;
    font-weight: 800;
    font-family: Lobster, cursive;
    text-align: center;
    -webkit-text-stroke: #fff 0.1rem;
    letter-spacing: 0.2rem;
    
    position: relative;
    text-shadow: 0px 0px 16px #cecece;
  }

  .title-2 span::before,
  .title-2 span::after {
    content: "—";
  }

  @keyframes flickering {
    0%,
    100% {
      opacity: 1;
    }

    41.99% {
      opacity: 1;
    }

    42% {
      opacity: 0;
    }

    43% {
      opacity: 0;
    }

    43.01% {
      opacity: 1;
    }

    47.99% {
      opacity: 1;
    }

    48% {
      opacity: 0;
    }

    49% {
      opacity: 0;
    }

    49.01% {
      opacity: 1;
    }
  }

  /*---------shooting stars-----------*/

  .bg-stars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-size: cover;
    animation: animateBg 50s linear infinite;
  }

  @keyframes animateBg {
    0%,
    100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.2);
    }
  }

  .star {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 3px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
      0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.1);
    animation: animate 3s linear infinite;
  }

  .star::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
  }

  @keyframes animate {
    0% {
      transform: rotate(315deg) translateX(0);
      opacity: 1;
    }

    70% {
      opacity: 1;
    }

    100% {
      transform: rotate(315deg) translateX(-1000px);
      opacity: 0;
    }
  }

  .star:nth-child(1) {
    top: 0;
    right: 0;
    left: initial;
    animation-delay: 0s;
    animation-duration: 1s;
  }

  .star:nth-child(2) {
    top: 0;
    right: 100px;
    left: initial;
    animation-delay: 0.2s;
    animation-duration: 3s;
  }

  .star:nth-child(3) {
    top: 0;
    right: 220px;
    left: initial;
    animation-delay: 2.75s;
    animation-duration: 2.75s;
  }

  .star:nth-child(4) {
    top: 0;
    right: -220px;
    left: initial;
    animation-delay: 1.6s;
    animation-duration: 1.6s;
  }`;

export default Login;
