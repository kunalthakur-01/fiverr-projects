import { configureStore } from '@reduxjs/toolkit';
import firebaseReducer from './AuthSlice';

const store = configureStore({
    reducer: { firebaseAuth: firebaseReducer }
});

export default store;