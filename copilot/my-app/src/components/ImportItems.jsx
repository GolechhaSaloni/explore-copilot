// create a new React component called "FileUploader" using the useState hook to keep track of the uploaded file.
// Implement the "FileExplorer" functionality by creating a file input element inside the component and handling its "onChange" event to update the component state with the selected file.
// Add "Drag and Drop" functionality to the component by handling the "ondrop" event of a div element inside the component. You will need to prevent the default behavior of this event to avoid loading the file in the browser.
// Create a button element that triggers the upload of the selected file on click. This button should call a function that sends the file to a server or performs any other desired action.
// Style the component using CSS to make it more visually appealing and intuitive to use. Consider adding hover effects to the "Drag and Drop" area and making the button stand out.

// Path: copilot/my-app/src/components/FileUploader.jsx

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { batchCreateItems } from '../services/itemService';
import { validateExcelFile, parseData } from '../utils/parser';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

export default function FileUploader() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleFileUpload = () => {
        if (file) {
            const isValid = validateExcelFile(file);
            if (isValid) {
                const data = parseData(file);
                batchCreateItems(data);
            }
        }
    }

    const handleDrop = (event) => {
        event.preventDefault();
        setFile(event.dataTransfer.files[0]);
    }

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleFileUpload}
            >
                Upload File
            </Button>
            <div onDrop={handleDrop}>
                <p>Drag and Drop</p>
            </div>
        </div>
    );
}


    

