import { configureStore, combineReducers, createSlice } from '@reduxjs/toolkit';

const counter = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  }
});

const reducer = combineReducers({
  counter: counter.reducer,
})

export default configureStore({
  reducer
});
