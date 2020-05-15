import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => ({ ...state, ...action.payload }),
    logout: () => initialState
  }
});

export default auth.reducer;
export const { setAuth, logout } = auth.actions;
