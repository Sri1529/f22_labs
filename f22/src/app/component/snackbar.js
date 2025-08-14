import { Snackbar } from "@mui/material";
import React from "react";

const CustomSnackbar = ({ data, open, setOpen }) => {
  const handleClose = (_, reason) => {
    if (reason === "clickaway") return; 
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose} 
      message={data}
      ContentProps={{
        sx: {
          backgroundColor: "#d32f2f",
          color: "#fff",
          fontWeight: "bold",
        },
      }}
    />
  );
};

export default CustomSnackbar;
