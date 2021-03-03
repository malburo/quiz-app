import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '../../api/authApi';

export const register = createAsyncThunk('auth/register', async (payload) => {
  const data = await authApi.register(payload);
  await AsyncStorage.setItem('@access_token', data.access_token);
  return data;
});

export const login = createAsyncThunk('auth/login', async (payload) => {
  const data = await authApi.login(payload);
  await AsyncStorage.setItem('@access_token', data.access_token);
  return data;
});

export const logout = createAsyncThunk('auth/logout', async (payload) => {
  await AsyncStorage.removeItem('@access_token');
  return false;
});

export const checkAuth = createAsyncThunk('auth/checkAuth', async (payload) => {
  const token = await AsyncStorage.getItem('@access_token');
  return !!token;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    current: {},
    isAuth: false,
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, { payload }) => {
      state.isAuth = true;
    },

    [login.fulfilled]: (state, { payload }) => {
      state.isAuth = true;
    },

    [logout.fulfilled]: (state, { payload }) => {
      state.isAuth = false;
    },

    [checkAuth.fulfilled]: (state, { payload }) => {
      state.isAuth = payload;
    },
  },
});

const { actions, reducer } = authSlice;
export default reducer;
