import { Alert, Box, Grid, IconButton, InputLabel, Modal, Paper, Snackbar, Typography } from "@mui/material";
import "./style.css";
import BaseTable from "../../common/Table";
import { adaptToSelectOption, petRowsSample, tutorOptionsSample } from "../../../utils";
import DashedButton from "../../common/DashedButton";
import React, { useEffect, useMemo } from "react";
import CloseIcon from '@mui/icons-material/Close';
import BaseInput from "../../common/BaseInput";
import { Form } from "usetheform";
import DateField from "../../common/DateField";
import BaseSelect from "../../common/BaseSelect";
import BasicButton from "../../common/BasicButton";
import NavigationBar from "../../common/NavigationBar";
import PetFilterModal from "../../common/PetsFilterModal";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectFilter, selectPagination } from "./PetSlice";
import PetAPI from "../../../api/PetAPI";
import instance from "../../../axiosConfig";
import { useNavigate } from "react-router-dom";

export default function ServiceListPage() {
    const [open, setOpen] = React.useState(false);
    const [openToast, setOpenToast] = React.useState(false)

    const openForm = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getTutorOptions = () => {
        let response = tutorOptionsSample;

        return response.map((option) => { return adaptToSelectOption(option.pet_tutor, option.id) });
    }

    const dispatch = useAppDispatch();
    const pagination = useAppSelector(selectPagination);
    const page = pagination.page;
    const itensPerPage = pagination.itensPerPage;
    const filterAplied = useAppSelector(selectFilter);
    const [openSuccessToast, setOpenSuccessToast] = React.useState(false);
    const [openErrorToast, setOpenErrorToast] = React.useState(false);
    const [showLoading, setShowLoading] = React.useState(false);


    const handleCloseSuccessToast = () => {
        setOpenSuccessToast(false)
    }

    const handleCloseErrorToast = () => {
        setOpenErrorToast(false)
    }

    const listPetApi = PetAPI.useListActives(page, itensPerPage, "", filterAplied);
    // const listTutorApi = axios.

    let petList = useMemo(() => {
        if(listPetApi.isSuccess){
            return listPetApi.data?.content;
        }
        return [];
    },[
        listPetApi, listPetApi.data?.content
    ]);

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem('token')||'');
        if(token){
            instance.defaults.headers.common['Authorization'] = token;
        }else{
            let navigation = useNavigate();
            navigation('/')
        }
    }, [dispatch]);

    const data2 = getTutorOptions();

    const handleSave = () => {
        console.log("SALVO")
        handleClose()
        setOpenToast(true)
    };

    const handleCloseToat = ()=>{
        setOpenToast(false)
    }
    return (
        <NavigationBar>
            <Box className="containerBox">
                {/* Start Modal */}
                <Box>
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <Grid container className={'modal'}>
                            <Grid container className="modal-title">
                                <Grid item xs={11}>
                                    <h5 className="modal-title-text">Adicionar Pet</h5>
                                </Grid>
                                <Grid item xs={1} textAlign={'end'}>
                                    <IconButton
                                        aria-label="close"
                                        onClick={handleClose}
                                        sx={{
                                            position: 'sticky',
                                            color: 'white',
                                        }}
                                    >
                                        <CloseIcon sx={{ fontSize: 30 }} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item xs={11} justifyContent={'center'} className="modal-content">
                                    <Form onSubmit={(state: any) => console.log(state)}>
                                        <Box className="formItem">
                                            <InputLabel sx={{ textAlign: 'start' }}>Nome do Pet</InputLabel>
                                            <BaseInput name={"pet_name"} placeholder={"Nome do Pet"} size={"medium"} variant={"outlined"} />
                                        </Box>
                                        <Box className="formItem">
                                            <InputLabel sx={{ textAlign: 'start' }}>Nome do Tutor</InputLabel>
                                            <BaseSelect name={"pet_tutor"} isInputStyle placeholder={"Nome do Tutor"} options={data2} />
                                        </Box>
                                        <Box className="formItem">
                                            <InputLabel sx={{ textAlign: 'start' }}>Espécie</InputLabel>
                                            <BaseSelect 
                                                name={"specie"} 
                                                isInputStyle 
                                                options={
                                                    [
                                                        {label: 'Cachorro', value: 'Cachorro'},
                                                        {label: 'Gato', value: 'Gato'},
                                                        {label: 'Outro', value: 'Outro'}
                                                    ]
                                                } 
                                                placeholder={"Espécie"} 
                                                />
                                        </Box>
                                        <Box className="formItem select">
                                            <InputLabel sx={{ textAlign: 'start' }}>Sexo do animal</InputLabel>
                                            <BaseSelect 
                                                name={"gender"} 
                                                isInputStyle 
                                                options={
                                                    [
                                                        {label: 'Masculino', value: 'Masculino'},
                                                        {label: 'Feminino', value: 'Feminino'},
                                                        {label: 'N/A', value: 'N/A'}
                                                    ]
                                                } 
                                                placeholder={"Status"} 
                                                />
                                        </Box>
                                        <Box className="formItem">
                                            <InputLabel sx={{ textAlign: 'start' }}>Raça</InputLabel>
                                            <BaseInput name={"pet_breed"} placeholder={"Raça"} size={"medium"} variant={"outlined"} />
                                        </Box>
                                        <Box className="formItem">
                                            <InputLabel sx={{ textAlign: 'start' }}>Data de Nascimento</InputLabel>
                                            <DateField name={"birth_date"} size="medium" placeholder="DD/MM/AAAA" />
                                        </Box>
                                        <Grid container spacing={5} paddingTop={3} justifyContent={'center'}>
                                            <Grid item xs={4}>
                                                <BasicButton
                                                    variant={"contained"}
                                                    disabled={false}
                                                    onClick={handleClose}
                                                    sx={{ backgroundColor: '#FC3600', fontWeight: 'bolder', fontSize: 16 }}
                                                >
                                                    CANCELAR
                                                </BasicButton>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <BasicButton
                                                    variant={"contained"}
                                                    disabled={false}
                                                    type="submit"
                                                    onClick={handleSave}
                                                    sx={{ backgroundColor: '#00FC22', fontWeight: 'bolder', fontSize: 16 }}
                                                >
                                                    SALVAR
                                                </BasicButton>
                                            </Grid>
                                        </Grid>
                                    </Form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Modal>
                </Box>
                {/* End Modal */}

                <Paper elevation={3} sx={{ minHeight: '100%' }}>
                    <Grid container>
                        <Grid item xs={12} alignContent={'center'}>
                            <Grid container>
                                <Grid item xs={10}>
                                    <Typography variant="h5">Lista de Pets</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box sx={{ paddingTop: '5px' }}>
                                        <DashedButton disabled={false} onClick={openForm}>Adicionar Pet</DashedButton>
                                    </Box>
                                    <Box>
                                        <Snackbar open={openToast} autoHideDuration={3000} onClose={handleCloseToat} anchorOrigin={{vertical:'top',horizontal:'right'}}>
                                            <Alert onClose={handleCloseToat} severity="success" sx={{ width: '100%', backgroundColor: '#00FC22', color: 'white' }}>
                                                Operação realizada com sucesso!
                                            </Alert>
                                        </Snackbar>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} paddingTop={'0.5%'}>
                            <Box className="container-item">
                                <PetFilterModal />
                            </Box>
                        </Grid>
                        <Grid item xs={12} paddingTop={'1%'}>
                            <Box className="container-item table">
                                <BaseTable
                                    rows={petList || []}
                                    type={"pet"}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </NavigationBar>
    )
}