import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/auth_slice'
import { useDispatch } from 'react-redux'
import { authApi } from '../services/auth/auth_service'
import sidebarReducer from '../features/sidebar/sidebar_slice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store