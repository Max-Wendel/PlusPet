import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import Slice from '../enums/Slice';

interface HelperState {
  isLoading: boolean;
}

const initialState: HelperState = {
  isLoading: false
};

export const helperSlice = createSlice({
  name: Slice.HELPER,
  initialState,
  reducers: {
    iniciar: (state) => {
      Object.assign(state, initialState);
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    }
  }
});

export const {
  iniciar,
  setIsLoading,
} = helperSlice.actions;

export const selectIsLoading = (state: RootState) => state.helper.isLoading;

export default helperSlice.reducer;