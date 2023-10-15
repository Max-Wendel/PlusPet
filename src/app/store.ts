import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import ListTutorSlice from '../components/Pages/TutorList/ListTutorSlice';
import UserSlice from '../slices/UserSlice';
import helperSlice from '../slices/helperSlice';

export const store = configureStore({
  reducer: {
    helper: helperSlice,
    user: UserSlice,
    listActiveTutors: ListTutorSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;