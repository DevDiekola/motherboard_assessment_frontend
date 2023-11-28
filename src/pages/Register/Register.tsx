import '../../styles/Register.scss';
import logo from '../../assets/images/logo.png';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FieldValues, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RegisterData, registerUser } from '../../features/auth/auth_action';
import { useAppDispatch } from '../../store/store';
import { AuthState } from '../../features/auth/auth_slice';

const Register = () => {
  const { registerSuccess, registerError, registerLoading } = useSelector((state: any) => state.auth as AuthState);
  const dispatch = useAppDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const submitForm = (data: FieldValues) => {
    const registerData: RegisterData = {
      email: data.email.toLowerCase(),
      password: data.password
    }
    dispatch(registerUser(registerData));
  }

  useEffect(() => {
    // Redirect user to login page if registration was successful
    if (registerSuccess) navigate('/login')
  }, [registerSuccess])

  return (
    <div id="register" className="d-flex flex-column justify-content-center align-items-center">
      <img src={logo} alt="Logo" />
      <form onSubmit={handleSubmit(submitForm)} className="bg-white mt-4">
        <h3 className="text-center">Sign Up</h3>
        <p className="text-center">Enter your credentials to create your account</p>
        {registerSuccess && <div className="success-message w-100 mb-3">
          Registration successful. <Link to='/login'>Go to login</Link>
        </div>}
        {registerError && <div className="error-message w-100 mb-3">{registerError}</div>}
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
              minLength={8}
              {...register('password')}
            />
            <i 
              className={passwordVisible ? "ri-eye-line" : "ri-eye-off-line"} 
              onClick={() => setPasswordVisible(!passwordVisible)}
              role="button"
            ></i>
          </div>
        </div>
        <button className={registerLoading ? "loading" : ""} type="submit">Create Account</button>
        <div className="returning d-flex justify-content-center mt-4">
          <span>Already have an account?</span>
          <Link to='/login'>Login</Link>
        </div>
      </form>
    </div>
  )
}

export default Register