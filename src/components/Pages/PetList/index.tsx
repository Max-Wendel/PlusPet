import { Alert, Box, Grid, IconButton, InputLabel, Modal, Paper, Snackbar, Typography } from "@mui/material";
import "./style.css";
import BaseTable from "../../common/Table";
import { adaptToSelectOption } from "../../../utils";
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
import SimpleBackdrop from "../../common/BackDrop";

export default function ServiceListPage() {
    const [open, setOpen] = React.useState(false);
    const [petTutors, setPetTutors] = React.useState<any>([])

    const openForm = () => {
        getTutorOptions();
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const dispatch = useAppDispatch();
    const pagination = useAppSelector(selectPagination);
    const page = pagination.page;
    const itensPerPage = pagination.itensPerPage;
    const filterAplied = useAppSelector(selectFilter);
    const [openSuccessToast, setOpenSuccessToast] = React.useState(false);
    const [openErrorToast, setOpenErrorToast] = React.useState(false);
    const [showLoading, setShowLoading] = React.useState(false);
    const navigation = useNavigate();
    
    const getTutorOptions = () => {
        let data:any[] = [];
        setShowLoading(true);
        instance.get('/v1/tutor/active')
            .then((response) => {
                data = response.data.content;
                data =  data.map((option:any) => { return adaptToSelectOption(option.name, option.id) });
                setShowLoading(false);
                setPetTutors(data);
            })
            .catch((error) => {
                console.error(error);
                setShowLoading(false);
                setPetTutors(data)
            })
    }


    const handleCloseSuccessToast = () => {
        setOpenSuccessToast(false)
    }

    const handleCloseErrorToast = () => {
        setOpenErrorToast(false)
    }

    const listPetApi = PetAPI.useListActives(page, itensPerPage, "", filterAplied);

    let petList = useMemo(() => {
        if (listPetApi.isSuccess) {
            return listPetApi.data?.content;
        }
        return [];
    }, [
        listPetApi, listPetApi.data?.content
    ]);

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem('token')||'{"error":true}');
        if(token.error){
            navigation('/')
        }else{
            instance.defaults.headers.common['Authorization'] = token;
        }
    }, [dispatch]);

    const handleSave = (state:any) => {
        setShowLoading(true)
        instance.post('/v1/pet',
            {
             name: state.pet_name,
             tutor: { id: state.pet_tutor.value },
             birthDate: state.birth_date || '',
             gender: state.gender.value || 'Masculino',
             breed:  state.pet_breed || 'RND',
             spieces: state.specie.value || '-'
            }
        )
        .then(()=>{
            handleClose();
            setOpenSuccessToast(true);
            handleClose()        
        })
        .catch((error)=>{
            console.log(error);
            setOpenErrorToast(true)
        });
        setShowLoading(false);
    };

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
                                    <Form onSubmit={(state: any) => handleSave(state)}>
                                        <Box className="formItem">
                                            <InputLabel sx={{ textAlign: 'start' }}>Nome do Pet</InputLabel>
                                            <BaseInput name={"pet_name"} placeholder={"Nome do Pet"} size={"medium"} variant={"outlined"} />
                                        </Box>
                                        <Box className="formItem">
                                            <InputLabel sx={{ textAlign: 'start' }}>Nome do Tutor</InputLabel>
                                            <BaseSelect name={"pet_tutor"} isInputStyle placeholder={"Nome do Tutor"} options={petTutors} />
                                        </Box>
                                        <Box className="formItem">
                                            <InputLabel sx={{ textAlign: 'start' }}>Espécie</InputLabel>
                                            <BaseSelect
                                                name={"specie"}
                                                isInputStyle
                                                options={
                                                    [
                                                        { label: 'Cachorro', value: 'Cachorro' },
                                                        { label: 'Gato', value: 'Gato' },
                                                        { label: 'Outro', value: 'Outro' }
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
                                                        { label: 'Masculino', value: 'Masculino' },
                                                        { label: 'Feminino', value: 'Feminino' },
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
                                    <Typography variant="h5">Lista de Pets</Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Box sx={{ paddingTop: '5px' }}>
                                        <DashedButton disabled={false} onClick={openForm}>Adicionar Pet</DashedButton>
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