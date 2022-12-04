import { configureStore } from '@reduxjs/toolkit';
import { inputReducer, viewReducer } from './reducers';

export const store = configureStore({reducer: {input: inputReducer, view: viewReducer}});
