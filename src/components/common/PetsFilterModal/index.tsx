import { Box, Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import BasicButton from "../BasicButton";
import './style.css';
import BaseSelect from "../BaseSelect";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectFilter, setFilter, setPage } from "../../Pages/PetList/PetSlice";
import PetFilter from "../../../model/PetFilter";
import { useEffect, useState } from "react";

export default function PetFilterModal() {

    const dispatch = useAppDispatch();
    const apliedFilter = useAppSelector(selectFilter);
    const [filterToAply, setFilterToAply] = useState<PetFilter>({});
    const [gender, setGender] = useState(null);
    const [spieces, setSpieces] = useState(null);

    const setFilterNameToAply = (name?: string) => {
        setFilterToAply((prev) => ({ ...prev, name: name}));
    }
    const setFilterTutorToAply = (tutorName?: string) => {
        setFilterToAply((prev) => ({ ...prev, tutorName: tutorName}));
    }
    const setFilterGenderToAply = (gender?: any) => {
        setGender(gender);
        setFilterToAply((prev) => ({ ...prev, gender: gender.value}));
    }

    const setFilterSpiecesToAply = (spieces?: any) => {  
        setSpieces(spieces);
        setFilterToAply((prev) => ({ ...prev, spieces: spieces.value}));
    }

    const handleClearFilter = ()=>{
        dispatch(setPage(0));
        dispatch(setFilter({}));
    }

    const handleApplyFilterClick = ()=>{
        dispatch(setPage(0));
        dispatch(setFilter(filterToAply));
    }

    useEffect(() => {
        setFilterToAply(apliedFilter);
    }, [apliedFilter])

    return (
        <Box sx={{ minWidth: '100%' }}>
            <Box sx={{ minHeight: '15vh', backgroundColor: '#7AE4C4', borderRadius: '10px' }}>
                <Paper sx={{ width: '99.5%', height: '15vh', borderRadius: '10px', paddingLeft: '1%', paddingRight: '0.5%', float: 'right' }} elevation={1}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography align="left" variant="h5">Filtrar Pets</Typography>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} >
                                <Grid container spacing={3}>
                                    <Grid item xs={3} sm={4}>
                                        <TextField
                                            value={filterToAply.name || ''}
                                            placeholder="Nome do Pet" 
                                            size="small"
                                            fullWidth
                                            onChange={(ev) => setFilterNameToAply(ev.target.value.length > 0 ? ev.target.value : undefined)}>
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={3} sm={4}>
                                        <TextField
                                            value={filterToAply.tutorName || ''}
                                            placeholder="Nome do Tutor" 
                                            size="small"
                                            fullWidth
                                            onChange={(ev) => setFilterTutorToAply(ev.target.value.length > 0 ? ev.target.value : undefined)}>
                                        </TextField>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <BaseSelect
                                            name="specie"
                                            placeholder="Espécie"
                                            isClearable
                                            value={spieces || undefined}
                                            onChange={(ev)=> {setFilterSpiecesToAply(ev != null  ? ev : undefined)}}
                                            options={
                                                [
                                                    { label: 'Cachorro', value: 'Cachorro' },
                                                    { label: 'Gato', value: 'Gato' },
                                                    { label: 'Todos', value: '' },
                                                ]
                                            }
                                        /> 
                                    </Grid>
                                    <Grid item xs={2}>
                                        <BaseSelect
                                            name="gender"
                                            placeholder="Sexo do Pet"
                                            isClearable
                                            value={gender || undefined}
                                            onChange={(ev)=> {setFilterGenderToAply(ev != null ? ev : undefined)}}
                                            options={
                                                [
                                                    { label: 'Masculino', value: 'Masculino' },
                                                    { label: 'Feminino', value: 'Feminino' },
                                                ]
                                            }
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2} justifyContent={'flex-end'} alignItems={'center'} paddingRight={'10px'} paddingTop={'10px'}>
                                    <Grid item xs={2}>
                                        <BasicButton
                                            variant={"contained"}
                                            disabled={!(filterToAply.name != null || filterToAply.tutorName != null || filterToAply.gender != null || filterToAply.spieces != null || filterToAply.spieces != null)}
                                            onClick={() => handleClearFilter()}
                                            sx={{ borderBottomColor: '#FC8C19', backgroundColor: 'transparent', border: '1px solid #FC8C19', color: 'black', fontWeight: 'bolder', maxHeight:'40px' }}
                                        >
                                            LIMPAR FILTROS
                                        </BasicButton>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <BasicButton
                                            variant={"contained"}
                                            disabled={false}
                                            type="submit"
                                            onClick={() => handleApplyFilterClick()}
                                            sx={{ backgroundColor: '#FC8C19', color: 'black', fontWeight: 'bolder', maxHeight:'40px' }}
                                        >
                                            Aplicar Filtros
                                        </BasicButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                </Paper>
            </Box>
        </Box>
    );
}