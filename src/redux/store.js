import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import homeReducer from './Home/homeSlice';
import countryReducer from './countryDetail/countryDetailSlice';

const store = configureStore({
  reducer: {
    country: homeReducer,
    countryDetail: countryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
