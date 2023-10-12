import * as React from "react";
import Button from "@mui/material/Button";
import Popup from "./Popup";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";

const CreateNewSnippet = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ mt: 2 }}>
      <Button onClick={handleOpen} variant="contained" startIcon={<AddIcon />}>
        Create new Snippet
      </Button>
      <Popup open={open} handleClose={handleClose} />
    </Box>
  );
};

export default CreateNewSnippet;
