import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import Slice from "../enums/Slice";

interface UserSlice{
    token: string
}

const initialState: UserSlice = {
    token: ''
};

export const userSlice = createSlice({
    name: Slice.USER_SLICE,
    initialState,
    reducers:{
        init: (state) => {
            Object.assign(state, initialState);
        },
        setToken: (state, {payload}: PayloadAction<string>
        ) => {
            state.token = payload;
        },
        logOut: (state) => {
            Object.assign(state, initialState);
        }
    }
});

export const {
    init,
    setToken,
    logOut
} = userSlice.actions;

export const selectUser = (state: RootState) => state.user.token;

export default userSlice.reducer;
