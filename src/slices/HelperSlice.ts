import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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

export default helperSlice.reducer;