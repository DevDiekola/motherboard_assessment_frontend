import { createSlice } from '@reduxjs/toolkit';


export interface SidebarState {
  isOpen: boolean
}

const initialState: SidebarState = {
  isOpen: false,
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpen = true;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { openSidebar, closeSidebar, toggleSidebar } = sidebarSlice.actions;

export const selectIsSidebarOpen = (state: any) => state.sidebar.isOpen;

const sidebarReducer = sidebarSlice.reducer;

export default sidebarReducer;
