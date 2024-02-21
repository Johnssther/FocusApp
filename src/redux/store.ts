import { configureStore } from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { userApi } from './apis/users/usersApi';

import rootReducer from './reducers'

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    userApi.middleware
    
  ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
