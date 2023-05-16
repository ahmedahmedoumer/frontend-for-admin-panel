import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Typography,
  Box,
  Button,
  Slide,
} from "@mui/material";
import React from "react";
import { POPPINS } from "../../../utils/config";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function AddNewPlanDialog(props) {
  const { open, onClose, title, type, submit } = props;

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          background: "#F2F2F2",
          borderRadius: 8,
          px: 4,
        },
      }}
      TransitionComponent={Transition}
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={onClose}
    >
      <DialogTitle sx={{ textAlign: "center" }}>{title}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Typography sx={{ fontWeight: 500, fontSize: "14px", ...POPPINS }}>
            Upload File
          </Typography>
          <Typography
            sx={{
              color: "#B8B8B8",
              fontWeight: 500,
              fontSize: "10px",
              ...POPPINS,
              ml: 0.88,
            }}
          >
            {type}
          </Typography>
        </Box>
        <Box>
          <label for="file-upload" class="custom-file-upload">
            <p>Drag and drop your File here</p>
            <p>Or</p>
            <p>Browse Files</p>
          </label>
          <input id="file-upload" type="file" />
        </Box>
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", justifyContent: "center", mb: 2, mt: 4 }}
      >
        <Button
          onClick={onClose}
          sx={{
            textTransform: "unset",
            color: "#565656",
            border: "1px solid #B4CD93",
            maxWidth: "120px",
            width: "100%",
            px: 5,
            fontSize: "20px",
            mr: 2,
          }}
        >
          Cancel
        </Button>
        <Button
          sx={{
            background:
              "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)",
            border: "0.5px solid #7F7F7F",
            borderRadius: "8px",
            color: "#fff",
            maxWidth: "120px",
            width: "100%",
            px: 5,
            fontSize: "20px",
          }}
        >
          {submit ?? "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
