import { Dialog, DialogActions, Button, DialogTitle } from "@mui/material";
import { POPPINS } from "../../utils/config";

export default function AreYouSureDialog(props) {
  const { open, onClose, title, submitText, submit, submitIcon, openSnackbar } =
    props;

  const handleClose = () => {
    if (submit) {
      submit();
    }
    if (openSnackbar) {
      openSnackbar();
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          background: "#F2F2F2",
          borderRadius: 8,
          px: 4,
          pt: 2,
          pb: 3.5,
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          color: "#565656",
          fontWeight: 500,
          fontSize: "20px",
          ...POPPINS,
        }}
      >
        {title}
      </DialogTitle>
      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
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
          }}
        >
          Cancel
        </Button>
        <Button
          startIcon={<img src={submitIcon} alt="submitIcon" />}
          onClick={handleClose}
          sx={{
            background:
              "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)",
            border: "0.5px solid #7F7F7F",
            borderRadius: "8px",
            textTransform: "unset",
            color: "#fff",
            px: 3,
            fontSize: "20px",
          }}
        >
          {submitText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
