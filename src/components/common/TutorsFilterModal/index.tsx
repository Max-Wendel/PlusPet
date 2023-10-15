import { Box, Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import BasicButton from "../BasicButton";
import './style.css';
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectFilter, setFilter, setPage } from "../../Pages/TutorList/ListTutorSlice";
import TutorFilter from "../../../model/TutorFilter";
import { useEffect, useState } from "react";

export default function TutorFilterModal() {

    const dispatch = useAppDispatch();
    const apliedFilter = useAppSelector(selectFilter);
    const [filterToAply, setFilterToAply] = useState<TutorFilter>({});

    const setFilterNameToAply = (name?: string) => {
        setFilterToAply((prev) => ({ ...prev, name: name}));
    }
    const setFilterCpfToAply = (cpf?: string) => {
        setFilterToAply((prev) => ({ ...prev, cpf: cpf}));
    }
    const setFilterEmailToAply = (email?: string) => {
        setFilterToAply((prev) => ({ ...prev, email: email}));
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
                            <Typography align="left" variant="h5">Filtrar Tutores</Typography>
                            <Divider />
                        </Grid>
                        <Grid item xs={12} >
                            <Grid container spacing={4}>
                                <Grid item xs={4} sm={4}>
                                    <TextField
                                    value={filterToAply.name || ''}
                                    placeholder="Nome do Tutor" 
                                    size="small"
                                    fullWidth
                                    onChange={(ev) => setFilterNameToAply(ev.target.value.length > 0 ? ev.target.value : undefined)}>
                                    </TextField>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField
                                        value={filterToAply.cpf || ''}
                                        placeholder="CPF"
                                        size="small"
                                        fullWidth
                                        onChange={(ev) => setFilterCpfToAply(ev.target.value.length > 0 ? ev.target.value : undefined)}>
                                    </TextField>
                                </Grid>
                                <Grid item xs={4}>
                                <TextField
                                    value={filterToAply.email || ''}
                                    placeholder="Email"
                                    size="small"
                                    fullWidth
                                    onChange={(ev) => setFilterEmailToAply(ev.target.value.length > 0 ? ev.target.value : undefined)}>
                                    </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={2} justifyContent={'flex-end'} alignItems={'center'} paddingRight={'10px'} paddingTop={'10px'}>
                                <Grid item xs={2}>
                                <BasicButton
                                    variant={"contained"}
                                    disabled={!(filterToAply.cpf != null || filterToAply.email != null|| filterToAply.name != null)}
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