import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import Slice from "../../../enums/Slice";
import Pet from "../../../model/Pet";
import PetFilter from "../../../model/PETFilter";

interface ListPetSlice {
    pagination : { page: number, itensPerPage: number };
    filter: PetFilter;
    tutors: Pet[];
}

const initialState: ListPetSlice = {
    pagination: {page: 0, itensPerPage: 10},
    filter: {},
    tutors: []
};

export const ListPetSlice = createSlice({
    name: Slice.LIST_ACTIVES_PETS,
    initialState,
    reducers:{
        init: (state) => {
            Object.assign(state, initialState);
        },
        setFilter: (state, {payload}: PayloadAction<PetFilter>
        ) => {
            state.filter = payload;
        },
        setFilterName: (state, {payload}: PayloadAction<string>) =>{
            state.filter.name = payload;
        },
        setFilterTutor: (state, {payload}: PayloadAction<string>) =>{
            state.filter.tutorName = payload;
        },
        setFilterSpieces: (state, {payload}: PayloadAction<string>) =>{
            state.filter.spieces = payload;
        },
        setFilterGender: (state, {payload}: PayloadAction<string>) =>{
            state.filter.gender = payload;
        },
        setPage: (state, {payload}: PayloadAction<number>) =>{
            state.pagination.page = payload;
        },
        setItensPerPage: (state, {payload}: PayloadAction<number>) =>{
            state.pagination.itensPerPage = payload;
        }
    }
});

export const {
    init,
    setFilter,
    setFilterName,
    setFilterTutor,
    setFilterSpieces,
    setFilterGender,
    setPage,
    setItensPerPage
} = ListPetSlice.actions;

export const selectFilter = (state: RootState) => state.listActivePets.filter;
export const selectPagination = (state: RootState) => state.listActivePets.pagination;
export const selectTutors = (state:RootState) => state.listActivePets.tutors;

export default ListPetSlice.reducer;
