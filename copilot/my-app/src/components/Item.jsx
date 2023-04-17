// create a react component that opens a modal showing the item data when isVisible is true

// Path: copilot/my-app/src/components/Item.jsx

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Item({ item, isVisible }) {
    const classes = useStyles();

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={isVisible}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={isVisible}>
                <div className={classes.paper}>
                    <h2 id="transition-modal-title">{item.name}</h2>
                    <p id="transition-modal-description">{item.description}</p>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClose}
                    >
                        X
                    </Button>
                </div>
            </Fade>
        </Modal>
    );
}