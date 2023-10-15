import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";
import OptionsMenuProps from "./type";

export default function OptionMenu({
    options,
    elementId
}:OptionsMenuProps
) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickOption = (event:any) => {
        console.log(event.target.innerText as string)
        handleClose();
    };

    const handleClose = ()=>{
        setAnchorEl(null);
    }

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
                {
                    options.map((option) => (
                        <MenuItem onClick={handleClickOption} key={option}>{option}</MenuItem>
                    ))
                }
            </Menu>
        </>
    )
}