import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser, login, logOut, registration } from './userOperations';

const initialState = {
  name: null,
  email: null,
  token: null,
  isLogin: false,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleError(state) {
      state.error = null;
    },
  },
  extraReducers: {
    [registration.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [registration.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
      state.name = action.user.name;
      state.token = action.payload.token;
      state.error = 'none';
    },
    [registration.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [login.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, action) => {
      state.error = 'none';
      state.name = action.payload.user.name;
      state.isLogin = true;
      state.isLoading = false;
      state.token = action.payload.token;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [logOut.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [logOut.fulfilled]: (state) => {
      state.name = null;
      state.email = null;
      state.token = null;
      state.isLogin = false;
      state.isLoading = false;
      state.error = null;
    },
    [logOut.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchCurrentUser.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCurrentUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
      state.name = action.payload.name;
    },
    [fetchCurrentUser.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;

export const { handleError } = userSlice.actions;
