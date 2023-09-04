import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import homeReducer from './Home/homeSlice';
import countriesDetailReducer from './countryDetail/countryDetailSlice';

const store = configureStore({
  reducer: {
    country: homeReducer,
    countryDetail: countriesDetailReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
