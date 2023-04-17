// create a new React component called "FileUploader" using the useState hook to keep track of the uploaded file.
// Implement the "FileExplorer" functionality by creating a file input element inside the component and handling its "onChange" event to update the component state with the selected file.
// Add "Drag and Drop" functionality to the component by handling the "ondrop" event of a div element inside the component. You will need to prevent the default behavior of this event to avoid loading the file in the browser.
// Create a button element that triggers the upload of the selected file on click. This button should call a function that sends the file to a server or performs any other desired action.
// Style the component using CSS to make it more visually appealing and intuitive to use. Consider adding hover effects to the "Drag and Drop" area and making the button stand out.

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addItem } from '../redux/actions/itemActions';


export default function ImportItems() {
    const dispatch = useDispatch();
  const history = useHistory();

  const [file, setFile] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    dispatch(addItem(formData));
    history.push('/items');
  };

  return (
    <div className="import-items">
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
/*
const ImportItems = () => {
    const [file, setFile] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData);
    };

    return (
        <div className="import-items">
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}
*/
/*

const ImportItems = () => {
    const [file, setFile] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData);
    };

    return (
        <div className="import-items">
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}
*/
/*


const ImportItems = () => {
    const [file, setFile] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData);
    };

    return (
        <div className="import-items">
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}
*/


