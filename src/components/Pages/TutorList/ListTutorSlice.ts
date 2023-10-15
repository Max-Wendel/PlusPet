import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TutorFilter from "../../../model/TutorFilter";
import { RootState } from "../../../app/store";
import Slice from "../../../enums/Slice";
import Tutor from "../../../model/Tutor";
import TutorProvider from "../../../providers/TutorProvider";

interface ListTutorSlice{
    pagination : { page: number, itensPerPage: number };
    filter: TutorFilter
    tutors: Tutor[]
}

const initialState: ListTutorSlice = {
    pagination: {page: 0, itensPerPage: 10},
    filter: {},
    tutors: []
};

export const ListTutorSlice = createSlice({
    name: Slice.LIST_ACTIVES_TUTORS,
    initialState,
    reducers:{
        init: (state) => {
            Object.assign(state, initialState);
        },
        setFilter: (state, {payload}: PayloadAction<TutorFilter>
        ) => {
            state.filter = payload;
        },
        setFilterName: (state, {payload}: PayloadAction<string>) =>{
            state.filter.name = payload;
        },
        setFilterCpf: (state, {payload}: PayloadAction<string>) =>{
            state.filter.cpf = payload;
        },
        setFilterEmail: (state, {payload}: PayloadAction<string>) =>{
            state.filter.email = payload;
        },
        setPage: (state, {payload}: PayloadAction<number>) =>{
            state.pagination.page = payload;
        },
        setItensPerPage: (state, {payload}: PayloadAction<number>) =>{
            state.pagination.itensPerPage = payload;
        }
        // ,
        // setTutors: (state, {payload}: PayloadAction<Tutor[]>) => {
        //     state.tutors = payload;
        // }
    }
});

export const archive = createAsyncThunk('archiveTutor', (tutorId: string) => TutorProvider.archiveTutor(tutorId));

export const {
    init,
    setFilter,
    setFilterName,
    setFilterCpf,
    setFilterEmail,
    setPage,
    setItensPerPage
} = ListTutorSlice.actions;

export const selectFilter = (state: RootState) => state.listActiveTutors.filter;
export const selectPagination = (state: RootState) => state.listActiveTutors.pagination;
export const selectTutors = (state:RootState) => state.listActiveTutors.tutors;
// export const getTutors = createAsyncThunk (
//     'getTutors',
//     (_, {getState}) => {
//         let filterPage = (getState as unknown as RootState);
//         return TutorAPI.useListActives( filterPage.listActiveTutors.pagination.page, filterPage.listActiveTutors.pagination.itensPerPage, '', filterPage.listActiveTutors.filter)}
// );

export default ListTutorSlice.reducer;
