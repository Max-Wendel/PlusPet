import { Alert, Box, Grid, IconButton, InputLabel, Modal, Paper, Snackbar, Typography } from "@mui/material";
import "./style.css";
import FilterModal from "../../common/ServiceFilterModal";
import BaseTable from "../../common/Table";
import { adaptToSelectOption, petOptionsSample, serviceRowsSample, statusOptions, tutorOptionsSample } from "../../../utils";
import DashedButton from "../../common/DashedButton";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import BaseInput from "../../common/BaseInput";
import { Form } from "usetheform";
import DateField from "../../common/DateField";
import BaseSelect from "../../common/BaseSelect";
import BasicButton from "../../common/BasicButton";
import NavigationBar from "../../common/NavigationBar";

export default function ServiceListPage() {
    const [open, setOpen] = React.useState(false);
    const [openToast, setOpenToast] = React.useState(false)

    const openForm = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getPetOptions = () => {
        let response = petOptionsSample;

        return response.map((option) => { return adaptToSelectOption(option.pet_name, option.id) });
    }
    const getTutorOptions = () => {
        let response = tutorOptionsSample;

        return response.map((option) => { return adaptToSelectOption(option.pet_tutor, option.id) });
    }

    const data1 = getPetOptions();
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
                                    <h5 className="modal-title-text">Agendar Serviço</h5>
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
                                            <BaseSelect name={"pet_name"} isInputStyle options={data1} placeholder={"Nome do Pet"} />
                                        </Box>
                                        <Box className="formItem">
                                            <InputLabel sx={{ textAlign: 'start' }}>Nome do Tutor</InputLabel>
                                            <BaseSelect name={"pet_tutor"} isInputStyle placeholder={"Nome do Tutor"} options={data2} />
                                        </Box>
                                        <Box className="formItem">
                                            <InputLabel sx={{ textAlign: 'start' }}>Data do Atendimento</InputLabel>
                                            <DateField name={"date"} size="medium" placeholder="DD/MM/AAAA" />
                                        </Box>
                                        <Box className="formItem select">
                                            <InputLabel sx={{ textAlign: 'start' }}>Status do Atendimento</InputLabel>
                                            <BaseSelect name={"status"} isInputStyle defaultOption={statusOptions[0]} options={statusOptions} placeholder={"Status"} />
                                        </Box>
                                        <Box className="formItem">
                                            <InputLabel sx={{ textAlign: 'start' }}>Informações Adicionais</InputLabel>
                                            <BaseInput name={"details"} placeholder={"Informações Adicionais"} size={"medium"} variant={"outlined"} />
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
                                    <Typography variant="h5">Lista de Tutores</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box sx={{ paddingTop: '5px' }}>
                                        <DashedButton disabled={false} onClick={openForm}>Agendar Serviço</DashedButton>
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
                                <FilterModal />
                            </Box>
                        </Grid>
                        <Grid item xs={12} paddingTop={'1%'}>
                            <Box className="container-item table">
                                <BaseTable
                                    rows={serviceRowsSample}
                                    type={"service"}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </NavigationBar>
    )
}