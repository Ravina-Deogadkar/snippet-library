import * as React from "react";
import Button from "@mui/material/Button";
import Popup from "./Popup";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';

const CreateNewSnippet = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showToast = (success, msg) =>{

    if(success){
      toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    else{
      toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }
  return (
    <Box sx={{ mt: 2 }}>
        <ToastContainer toastStyle={{ backgroundColor: "#202d40", color: 'white' }} />

      <Button onClick={handleOpen} variant="contained" startIcon={<AddIcon />}>
        Create new Snippet
      </Button>
      <Popup open={open} handleClose={handleClose} showToast={showToast} />
    </Box>
  );
};

export default CreateNewSnippet;
