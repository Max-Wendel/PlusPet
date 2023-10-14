import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import BaseInput from "../BaseInput";
import BasicButton from "../BasicButton";
import './style.css';
import { Form } from "usetheform";
import ClearButton from "../ClearButton";

export default function TutorFilterModal() {

    const applyFilters = (state:any)=>{
        console.log(state)
    }

    const handleApplyFilterClick = ()=>{
        console.log('APLICADO')
    }

    return (
        <Box sx={{ minWidth: '100%' }}>
            <Box sx={{ minHeight: '15vh', backgroundColor: '#7AE4C4', borderRadius: '10px' }}>
                <Paper sx={{ width: '99.5%', height: '15vh', borderRadius: '10px', paddingLeft: '1%', paddingRight: '0.5%', float: 'right' }} elevation={1}>
                    <Form 
                        onSubmit={applyFilters}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <Typography align="left" variant="h5">Filtrar Tutores</Typography>
                                <Divider />
                            </Grid>
                            <Grid item xs={12} >
                                <Grid container spacing={3}>
                                    <Grid item xs={4} sm={4}>
                                        <BaseInput
                                            placeholder="Nome do Tutor"
                                            name="tutor_name"
                                            id="tutor-name-filter-input"
                                            size={"small"}
                                            variant={"outlined"}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <BaseInput
                                            placeholder="CPF"
                                            name="tutor_cpf"
                                            id="tutor-cpf-filter-input"
                                            size={"small"}
                                            variant={"outlined"}
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <BaseInput
                                            placeholder="Email"
                                            name="tutor_mail"
                                            id="tutor-email-filter-input"
                                            size={"small"}
                                            variant={"outlined"}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2} justifyContent={'flex-end'} alignItems={'center'} paddingRight={'10px'} paddingTop={'10px'}>
                                    <Grid item xs={2}>
                                        <ClearButton label="LIMPAR FILTROS"/>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <BasicButton
                                            variant={"contained"}
                                            disabled={false}
                                            type="submit"
                                            onClick={handleApplyFilterClick}
                                            sx={{ backgroundColor: '#FC8C19', color: 'black', fontWeight: 'bolder' }}
                                        >
                                            Aplicar Filtros
                                        </BasicButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Form>
                </Paper>
            </Box>
        </Box>
    );
}