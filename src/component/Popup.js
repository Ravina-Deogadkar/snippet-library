import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

const Popup = ({ open, handleClose }) => {
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
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <Chip label={"Angular"} color="primary" />
          <Chip label={"Java"} color="success" />
          <Chip label={"React"} color="warning" />
        </div>
        <TextField
          id="outlined-basic"
          label="Star Count"
          variant="filled"
          size="small"
        />
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Date Created"
            variant="filled"
            size="small"
          />
          <TextField
            id="outlined-basic"
            label="Date Modified"
            variant="filled"
            size="small"
          />
        </div>
        <Button sx={{ alignSelf: "flex-end" }}>Save</Button>
      </Box>
    </Modal>
  );
};

export default Popup;
