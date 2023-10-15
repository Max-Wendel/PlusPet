import { Alert, Box, Grid, IconButton, InputLabel, Modal, Paper, Snackbar, Typography } from "@mui/material";
import "./style.css";
import BaseTable from "../../common/Table";
import {tutorAdapter} from "../../../utils";
import DashedButton from "../../common/DashedButton";
import React, { useEffect, useMemo } from "react";
import CloseIcon from '@mui/icons-material/Close';
import BaseInput from "../../common/BaseInput";
import { Form } from "usetheform";
import DateField from "../../common/DateField";
import BasicButton from "../../common/BasicButton";
import NavigationBar from "../../common/NavigationBar";
import TutorFilterModal from "../../common/TutorsFilterModal";
import instance from "../../../axiosConfig";
import SimpleBackdrop from "../../common/BackDrop";
import TutorAPI from "../../../api/TutorAPI";
import {useAppDispatch, useAppSelector} from '../../../app/hooks';
import { selectFilter, selectPagination } from "./ListTutorSlice";
import { useNavigate } from "react-router-dom";

export default function TutorListPage() {
    const dispatch = useAppDispatch();
    const pagination = useAppSelector(selectPagination);
    const page = pagination.page;
    const itensPerPage = pagination.itensPerPage;
    const [open, setOpen] = React.useState(false);
    const filterAplied = useAppSelector(selectFilter);
    const [openSuccessToast, setOpenSuccessToast] = React.useState(false);
    const [openErrorToast, setOpenErrorToast] = React.useState(false);
    const [showLoading, setShowLoading] = React.useState(false);
    let navigation = useNavigate();


    const openForm = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCloseSuccessToast = () => {
        setOpenSuccessToast(false)
    }

    const handleCloseErrorToast = () => {
        setOpenErrorToast(false)
    }

    const listTutorApi = TutorAPI.useListActives(page, itensPerPage, "", filterAplied);

    let tutorList = useMemo(() => {
        if(listTutorApi.isSuccess){
            return listTutorApi.data?.content;
        }
        return [];
    },[
        listTutorApi, listTutorApi.data?.content
    ]);

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem('token')||'{"error":true}');
        if(token.error){
            navigation('/')
        }else{
            instance.defaults.headers.common['Authorization'] = token;
        }
    }, [dispatch]);

    const handleSave = (newTutor: any) => {
        setShowLoading(true);
        instance.post('/v1/tutor',
            tutorAdapter(newTutor)
        )
            .then((response) => {
                console.log(response)
                handleClose()
                setOpenSuccessToast(true)
            })
            .catch((error) => {
                console.error(error);
                setOpenErrorToast(true);
            })
        setShowLoading(false);
    }

    return (
        <>
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
                                        <h5 className="modal-title-text">Novo Tutor</h5>
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
                                        <Form onSubmit={(state: any) => handleSave(state)}>
                                            <Box className="formItem">
                                                <InputLabel sx={{ textAlign: 'start' }}>Nome</InputLabel>
                                                <BaseInput name={"tutor_name"} placeholder={"Nome"} size={"medium"} variant={"outlined"} />
                                            </Box>
                                            <Box className="formItem">
                                                <InputLabel sx={{ textAlign: 'start' }}>CPF</InputLabel>
                                                <BaseInput name={"tutor_cpf"} placeholder={"CPF"} size={"medium"} variant={"outlined"} />
                                            </Box>
                                            <Box className="formItem">
                                                <InputLabel sx={{ textAlign: 'start' }}>Data de Nascimento</InputLabel>
                                                <DateField name={"birth_date"} size="medium" placeholder="DD/MM/AAAA" />
                                            </Box>
                                            <Box className="formItem select">
                                                <InputLabel sx={{ textAlign: 'start' }}>Email</InputLabel>
                                                <BaseInput name={"tutor_email"} placeholder={"example@example.com"} size={"medium"} variant={"outlined"} />
                                            </Box>
                                            <Box className="formItem">
                                                <InputLabel sx={{ textAlign: 'start' }}>Endereço</InputLabel>
                                                <BaseInput name={"address"} placeholder={"Ex: Rua, n°, Complemento, Bairro"} size={"medium"} variant={"outlined"} />
                                            </Box>
                                            <Box className="formItem">
                                                <InputLabel sx={{ textAlign: 'start' }}>Telefone</InputLabel>
                                                <BaseInput name={"phone"} placeholder={"(xx) xxxx-xxxx"} size={"medium"} variant={"outlined"} />
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

                    <SimpleBackdrop open={showLoading} />

                    <Paper elevation={3} sx={{ minHeight: '100%' }}>
                        <Grid container>
                            <Grid item xs={12} alignContent={'center'}>
                                <Grid container>
                                    <Grid item xs={10}>
                                        <Typography variant="h5">Lista de Tutores</Typography>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Box sx={{ paddingTop: '5px' }}>
                                            <DashedButton disabled={false} onClick={openForm}>Adicionar Tutor</DashedButton>
                                        </Box>
                                        <Box>
                                            <Snackbar open={openSuccessToast} autoHideDuration={3000} onClose={handleCloseSuccessToast} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                                                <Alert onClose={handleCloseSuccessToast} severity="success" sx={{ width: '100%', backgroundColor: '#00FC22', color: 'white' }}>
                                                    Operação realizada com sucesso!
                                                </Alert>
                                            </Snackbar>
                                        </Box>
                                        <Box>
                                            <Snackbar open={openErrorToast} autoHideDuration={3000} onClose={handleCloseErrorToast} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                                                <Alert onClose={handleCloseErrorToast} severity="error" sx={{ width: '100%', backgroundColor: '#FC3600', color: 'white' }}>
                                                    Houve um erro ao realizar a operação!
                                                </Alert>
                                            </Snackbar>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} paddingTop={'0.5%'}>
                                <Box className="container-item">
                                    <TutorFilterModal />
                                </Box>
                            </Grid>
                            <Grid item xs={12} paddingTop={'1%'}>
                                <Box className="container-item table">
                                    <BaseTable
                                        rows={tutorList || []}
                                        type={"tutor"}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
            </NavigationBar>
        </>
    )
}