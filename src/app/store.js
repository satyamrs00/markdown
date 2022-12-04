import { configureStore } from '@reduxjs/toolkit';
import { inputReducer } from './reducers';

export const store = configureStore({reducer: inputReducer});
