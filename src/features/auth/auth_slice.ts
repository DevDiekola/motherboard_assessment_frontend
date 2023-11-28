import { createSlice } from '@reduxjs/toolkit'
import { loginUser, logoutUser, registerUser } from './auth_action'
import { User } from '../../interfaces/User';

export interface AuthState {
  loginLoading: boolean,
  registerLoading: boolean,
  loginSuccess: boolean,
  registerSuccess: boolean,
  loginError: string | null,
  registerError: string | null,
  user: User | null,
  userLoading: boolean
}

const initialState: AuthState = {
  loginLoading: false,
  registerLoading: false,
  loginError: null,
  registerError: null,
  loginSuccess: false,
  registerSuccess: false,
  user: null,
  userLoading: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.user = payload.user
    },
  },
  extraReducers: (builder) => {
    // REGISTRATION CASES
    builder.addCase(registerUser.pending, (state) => {
      state.registerLoading = true
      state.registerError = null
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.registerLoading = false
      state.registerError = null
      state.loginError = null
      state.registerSuccess = true
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.registerLoading = false
      state.registerError = (payload as string)
    });

    // LOGIN CASES
    builder.addCase(loginUser.pending, (state) => {
      state.loginLoading = true
      state.loginError = null
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.loginLoading = false
      state.user = (payload as User)
      state.loginError = null
      state.loginSuccess = true
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.loginLoading = false
      state.loginError = (payload as string)
    });

    // LOGOUT CASES
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null
    });
    
  },

})

const authReducer = authSlice.reducer

export const { setCredentials } = authSlice.actions
export default authReducer