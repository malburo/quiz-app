import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '../../api/authApi';
import userApi from '../../api/userApi';

export const register = createAsyncThunk('auth/register', async (payload) => {
  const data = await authApi.register(payload);
  await AsyncStorage.setItem('@access_token', data.jwtToken);
  return data;
});

export const login = createAsyncThunk('auth/login', async (payload) => {
  const data = await authApi.login(payload);
  await AsyncStorage.setItem('@access_token', data.jwtToken);
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

export const getMe = createAsyncThunk('auth/getMe', async (payload) => {
  const data = await authApi.getMe(payload);
  return data;
});

export const changeAvatar = createAsyncThunk('auth/changeAvatar', async (payload) => {
  const data = await userApi.changeAvatar(payload);
  return data;
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
      state.current = {};
    },

    [checkAuth.fulfilled]: (state, { payload }) => {
      state.isAuth = payload;
    },

    [getMe.fulfilled]: (state, { payload }) => {
      state.current = payload;
    },
    
    [changeAvatar.fulfilled]: (state, { payload }) => {
      state.current = payload;
    },
  },
});

const { actions, reducer } = authSlice;
export default reducer;
