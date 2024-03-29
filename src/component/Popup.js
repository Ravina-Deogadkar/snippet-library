import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel"; // Importing the Cancel icon
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const Popup = ({ open, handleClose }) => {
  const tags = [
    { id: 1, name: "Angular", color: "error" },
    { id: 1, name: "Vue", color: "success" },
    { id: 1, name: "React", color: "primary" },
  ];

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
      >
        <TextField
          id="outlined-basic"
          label="Title"
          variant="filled"
          size="small"
        />
        <TextField
          id="filled-multiline-static"
          label="Code Snippet"
          multiline
          rows={4}
          variant="filled"
        />
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={null}
          variant="filled"
          onChange={() => {}}
        >
          <MenuItem value="html">Html</MenuItem>
          <MenuItem value="div">Div</MenuItem>
          <MenuItem value="section">Section</MenuItem>
        </Select>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          {tags.map((item) => (
            <Chip
              key={item.id}
              label={item.name}
              color={item.color}
              onDelete={() => {}}
              deleteIcon={<CancelIcon />}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button sx={{ marginLeft: "0.5rem" }}>Cancel</Button>
          <Button sx={{ marginLeft: "0.5rem" }}>Save</Button>
        </div>
      </Box>
    </Modal>
  );
};

export default Popup;
