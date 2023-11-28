import '../../styles/Login.scss';
import logo from '../../assets/images/logo.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FieldValues, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { LoginData, loginUser } from '../../features/auth/auth_action';
import { AuthState } from '../../features/auth/auth_slice';

const Login = () => {
  const { user, loginLoading, loginError } = useSelector((state: any) => state.auth as AuthState);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { register, handleSubmit } = useForm();
  
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const submitForm = (data: FieldValues) => {
    const loginData: LoginData = {
      email: data.email.toLowerCase(),
      password: data.password,
      remember: data.remember
    }
    dispatch(loginUser(loginData));
  }

  useEffect(() => {
    // Redirect user to hospitals page if registration was successful
    if (user) navigate('/hospitals');
  }, [user])

  return (
    <div id="login" className="d-flex flex-column justify-content-center align-items-center">
      <img src={logo} alt="Logo" />
      <form onSubmit={handleSubmit(submitForm)} className="bg-white mt-4">
        <h3 className="text-center">Log In</h3>
        <p className="text-center">Enter your credentials to access your account</p>
        {loginError && <div className="error-message w-100 mb-3">{loginError}</div>}
        <div className="form-group">
          <label htmlFor="email">EMAIL ADDRESS</label>
          <div className="form-input pt-1">
            <input 
              id="email" 
              type="text" 
              placeholder="Enter your email address" 
              required
              {...register('email')}
            />
            <i className="ri-mail-line"></i>
          </div>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">PASSWORD</label>
          <div className="form-input pt-1">
            <input 
              id="password" 
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password" 
              required
              {...register('password')}
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
              type="checkbox" 
              {...register('remember')}
            />
            <span>Remember me<span> for 30 days</span></span>
          </div>
          <a href="#" className="forgot">Forgot Password?</a>
        </div>
        <button className={loginLoading ? "loading" : ""} type="submit">Log into Account</button>
        <div className="new d-flex justify-content-center mt-4">
          <span>Are you new here?</span>
          <Link to='/register'>Create Account</Link>
        </div>
      </form>
    </div>
  )
}

export default Login