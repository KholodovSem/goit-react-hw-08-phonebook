import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userRegistration, userLogin, userLogOut, fetchUser } from '../helpers/authHelpers';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registration = createAsyncThunk(
  'user/registration',
  async (credentials, {rejectWithValue}) => {
    try {
      const { data } = await userRegistration(credentials);
      token.set(data.token);
      return data;
    } catch ({ code }) {
      return rejectWithValue(code);
    }
  },
);

export const login = createAsyncThunk(
  'user/login',
  async (credentials, {rejectWithValue}) => {
    try {
      const { data } = await userLogin(credentials);
      token.set(data.token);
      console.log(data);
      return data;
    } catch ( error ) {
      return rejectWithValue(error);
    }
  },
);

export const logOut = createAsyncThunk(
  'user/logOut',
  async () => {
    try {
      await userLogOut();
      token.unset();
    } catch ({ data }) {
      return data;
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser',
  async (_, {getState, rejectWithValue}) => {
    const persistToken = getState().user.token;

    if(persistToken === null){
      return rejectWithValue('Ha-Ha-Ha')
    }

    try {
      token.set(persistToken);
      const response = await fetchUser();
      return response.data;
    } catch (error){
      return rejectWithValue(error)
    }
  }
)
