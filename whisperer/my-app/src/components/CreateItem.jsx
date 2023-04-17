// create a button component that has a dropdown with options to "create new" and import using material UI which creates a new item when clicked
// import when clicked should render the ImportItem component

import React from 'react';
import { makeStyles } from "react";
import { Button } from "@material-ui/core";

function CreateItemButton() {
    const useStyles = makeStyles((theme) => ({
        button: {
            margin: theme.spacing(1),
        },
    }));

    const classes = useStyles();

    return (
        <Button variant="contained" color="primary" className={classes.button}>
            Create New Item
        </Button>
    );
}