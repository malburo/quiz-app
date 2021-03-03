import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import auth from '../features/auth/authSilce';
const rootReducer = {
  auth,
};
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
