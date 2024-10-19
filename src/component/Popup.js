import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel"; // Importing the Cancel icon

const {REACT_APP_SERVER_URL} = process.env;


const Popup = ({ open, handleClose, showToast }) => {

  const [attachment, setAttachment] = React.useState(null);

  const handleSubmit = async(e) =>{

    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      title: data.get('title'),
      description: data.get('description'),
      attachment:attachment
    });
    const title = data.get('title');
    const description = data.get('description');
    const authorId = "1";

    const response = await fetch(REACT_APP_SERVER_URL + '/api/snippet/createsnippet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, attachment, authorId })
    });
    const json = await response.json();
    if (json.error) {
      showToast(false, json.error);
    }
    else if (json.errors) {
      json.errors.forEach(error => {
        showToast(false, error.msg);

      });
    }else{
      showToast(true, "New snippet added successfully");
      handleClose();
    }
  }

  const fileUpload = async(e)=>{
    e.preventDefault();
    const fileReader = new FileReader();

    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = (ev) => {
      setAttachment({
        data: ev.target.result, 
        filename: e.target.files[0].name});
    };
    showToast(true, "file uploaded successfully");

  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        component="form" noValidate onSubmit={handleSubmit}
      >
        <TextField
          id="title"
          label="Title"
          variant="filled"
          size="small"
          name="title"
        />
        <TextField
          id="description"
          label="Description"
          multiline
          rows={4}
          variant="filled"
          name="description"
        />
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="attachment"
          multiple
          type="file"
          onChange={fileUpload}
        />
        <label htmlFor="attachment">
          <Button variant="contained" component="span" >
            Upload
          </Button>
        </label>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button sx={{ marginLeft: "0.5rem" }} onClick={handleClose}>Cancel</Button>
          <Button sx={{ marginLeft: "0.5rem" }} type="submit">Save</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default Popup;
