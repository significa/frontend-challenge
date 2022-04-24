import * as React from "react";
import { Alert, Snackbar } from "@mui/material";

const Alerts = ({ open, closeAlert }: { open: boolean; closeAlert: () => void}) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      autoHideDuration={2000}
      onClose={closeAlert}
    >
      <Alert severity="error" color="error" variant="filled">
        Movie not found
      </Alert>
    </Snackbar>
  );
};
export default Alerts;
