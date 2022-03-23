import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { apiSlice } from '../features/dogs/dogsApiSlice';

//It's a wrapper for the Redux Store
//it automatically activate the reduxDevTools
//it automatically adds thunk middleware
//it turn's on development checks that catch errors

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    }
})

//we taking the stores dispatch function
//and we're exporting the TYPE of that function as the thing we could use

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;