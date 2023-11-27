import '../../styles/Login.scss';
import logo from '../../assets/images/logo.png';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setErrorMessage('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, remember }),
      });

      const data = await res.json();

      if (res.status == 200) {
        navigate("/hospitals");
      }
      else {
        setErrorMessage(data.message);
      }

      setEmail('');
      setPassword('');

    } catch (error) {
      setErrorMessage("Error sending API request");
      console.log(e);
    }
  }

  return (
    <div id="login" className="d-flex flex-column justify-content-center align-items-center">
      <img src={logo} alt="Logo" />
      <form onSubmit={handleSubmit} className="bg-white mt-4">
        <h3 className="text-center">Log In</h3>
        <p className="text-center">Enter your credentials to access your account</p>
        {errorMessage !== "" && <div className="error-message w-100 mb-3">{errorMessage}</div>}
        <div className="form-group">
          <label htmlFor="email">EMAIL ADDRESS</label>
          <div className="form-input pt-1">
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              id="email" 
              type="text" 
              placeholder="Enter your email address" 
            />
            <i className="ri-mail-line"></i>
          </div>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">PASSWORD</label>
          <div className="form-input pt-1">
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              id="password" 
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password" 
            />
            <i 
              className={passwordVisible ? "ri-eye-line" : "ri-eye-off-line"} 
              onClick={() => setPasswordVisible(!passwordVisible)}
              role="button"
            ></i>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <div className="remember d-flex align-items-center">
            <input 
              onChange={(e) => setRemember(e.target.checked)} 
              type="checkbox" 
            />
            <span>Remember me for 30 days</span>
          </div>
          <a href="#" className="forgot">Forgot Password?</a>
        </div>
        <button>Log into Account</button>
        <div className="new d-flex justify-content-center mt-4">
          <span>Are you new here?</span>
          <Link to='/register'>Create Account</Link>
        </div>
      </form>
    </div>
  )
}

export default Login