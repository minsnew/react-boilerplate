import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice/CounterSlice';

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
