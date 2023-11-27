import '../../styles/Register.scss';
import logo from '../../assets/images/logo.png';
import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setErrorMessage('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status == 200) {
        setSuccess(true);
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
    <div id="register" className="d-flex flex-column justify-content-center align-items-center">
      <img src={logo} alt="Logo" />
      <form onSubmit={handleSubmit} className="bg-white mt-4">
        <h3 className="text-center">Sign Up</h3>
        <p className="text-center">Enter your credentials to create your account</p>
        {success && <div className="success-message w-100 p-3 mb-3">
          Registration successful. <Link to='/login'>Go to login</Link>
        </div>}
        {errorMessage !== "" && <div className="error-message w-100 p-3 mb-3">{errorMessage}</div>}
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
        <button>Create Account</button>
        <div className="returning d-flex justify-content-center mt-4">
          <span>Already have an account?</span>
          <Link to='/login'>Login</Link>
        </div>
      </form>
    </div>
  )
}

export default Register