import { Dialog, DialogTitle, Typography, Box } from "@mui/material";
import { useEffect } from "react";
import { POPPINS } from "../utils/config";

export default function Sneackbar(props) {
  const { open, onClose, title, sx, img } = props;

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        onClose();
      }, 800);
    }
  });

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          background: "#F2F2F2",
          borderRadius: 8,
          px: 4,
        },
      }}
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        <Box sx={{ display: "flex", px: "85px", my: "5px" }}>
          <img src={img} alt="img" />
          <Typography
            sx={{
              ...sx,
              fontWeight: 500,
              fontSize: "30px",
              ml: 1,
              ...POPPINS,
              color: "#565656",
            }}
          >
            {title}
          </Typography>
        </Box>
      </DialogTitle>
    </Dialog>
  );
}
