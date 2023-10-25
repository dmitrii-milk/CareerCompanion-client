import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Reducers from './reducers';

const rootReducer = combineReducers(Reducers);

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
