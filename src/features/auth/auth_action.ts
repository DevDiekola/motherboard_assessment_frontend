import { createAsyncThunk } from '@reduxjs/toolkit';

export interface RegisterData {
  email: string,
  password: string
}

export interface LoginData {
  email: string,
  password: string,
  remember: boolean
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (registerData: RegisterData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
        credentials: 'include'
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.message) {
          return rejectWithValue(data.message);
        }
        return rejectWithValue("Error registering user");
      }

      return data;

    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (loginData: LoginData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
        credentials: 'include'
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.message) {
          return rejectWithValue(data.message);
        }
        return rejectWithValue("Error logging in user");
      }

      return data.user;

    } catch (error: any) {
      return rejectWithValue("Error sending request");
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.message) {
          return rejectWithValue(data.message);
        }
        return rejectWithValue("Error logging out user");
      }

    } catch (error: any) {
      return rejectWithValue("Error sending request");
    }
  }
);
