import { Box, Grid, Hidden, IconButton, Menu, MenuItem, Modal } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useMemo, useState } from "react";
import OptionsMenuProps from "./type";
import OptionsMenuPropsTutor from "./type";
import NavigationBar from "../NavigationBar";
import { Form } from "usetheform";
import BasicButton from "../BasicButton";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import TutorAPI from "../../../api/TutorAPI";
import {  init, selectFilter, selectPagination, setFilter, setPage } from "../../Pages/TutorList/ListTutorSlice";
import { render } from "react-dom";

export default function OptionMenuTutor({
    tutorId
}:OptionsMenuPropsTutor
) {
    const dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const pagination = useAppSelector(selectPagination);
    const page = pagination.page;
    const itensPerPage = pagination.itensPerPage;
    const filterAplied = useAppSelector(selectFilter);
    const [showMenu, setShowMenu] = useState(true);

    const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickOption = (event:any) => {
        console.log(event.target.innerText as string)
        handleClose();
    };

    const handleArchiveTutor = (event:any) => {
        // const listTutorApi = TutorAPI.archiveTutor(tutorId);
        
        // useMemo(() => {
        //     if(listTutorApi.isSuccess){
        //         console.log('Arquivou');
        //     }
        //     console.log('Erro');
        // },[
        //     listTutorApi
        // ]);

        console.log(event.target.innerText as string)

    };

    const handleClose = ()=>{
        setAnchorEl(null);
    }

    if(showMenu){
        return (
            <>
                    <IconButton
                        id="options-button"
                        aria-label='options'
                        aria-controls={open ? 'options-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickButton}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu 
                        id="options-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'options-button',
                        }}
                    >
                        <MenuItem onClick={handleClickOption} key={'edit'}>{'Editar'}</MenuItem>
                        <MenuItem onClick={handleArchiveTutor} key={'archive'}>{'Archive'}</MenuItem>
                        {
                            // options.map((option) => (
                            //     <MenuItem onClick={handleClickOption} key={option}>{option}</MenuItem>
                            // ))
                        }
                    </Menu>
            </>
        )
    }

    
}