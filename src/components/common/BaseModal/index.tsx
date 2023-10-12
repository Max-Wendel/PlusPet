import { Box, IconButton, Modal, Typography } from "@mui/material";
import BaseModalProps from "./types";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";

export default function BaseModal({
    children,
    title,
    open
}: BaseModalProps) {
    const [show, setShow] = React.useState(open);
    const handleClose = () => setShow(false);

    return (
        <Modal open={show} onClose={handleClose}>
            <Box>
                <Box>
                    <Box className={'title'}>
                        <Typography>{title}</Typography>
                    </Box>
                    <Box>
                        <IconButton
                            aria-label="close"
                            onClick={handleClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Box>
                <Box>
                    {children}
                </Box>
            </Box>
        </Modal>
    );
}