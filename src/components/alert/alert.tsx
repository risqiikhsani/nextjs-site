import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    open: boolean;
    severity: "error" | "warning" | "info" | "success";
    text: string;
    onClose: () => void;
}

export default function AlertBase(props: Props) {

    const { open, severity, text, onClose } = props;

    return (
        <Box sx={{ width: '100%' }}>
            <Collapse in={open}>
                <Alert
                    severity={severity}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={onClose}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2,borderRadius:'50px' }}
                >
                    {text}
                </Alert>
            </Collapse>
        </Box>
    )
}
