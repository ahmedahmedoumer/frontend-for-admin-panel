import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  TextField,
  Box,
} from "@mui/material";
import { POPPINS } from "../utils/config";

export default function CreateAndUpdateDialog(props) {
  const {
    open,
    onClose,
    title,
    label1,
    label2,
    label3,
    placeholder1,
    placeholder2,
    placeholder3,
    submit,
  } = props;

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          background: "#F2F2F2",
          borderRadius: 8,
          px: 4,
        },
      }}
    >
      <DialogTitle
        sx={{
          ...POPPINS,
          textAlign: "center",
          mt: 5,
          fontWeight: 500,
          fontSize: "20px",
          mb: 3,
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <Box mb={2}>
          <InputLabel sx={{ ...labelStyle }} htmlFor="plan-title">
            {label1}
          </InputLabel>
          <TextField
            fullWidth
            multiline
            rows={3}
            sx={{ background: "#fff" }}
            name="title"
            id="plan-title"
            placeholder={placeholder1}
          />
        </Box>
        <Box mb={2}>
          <InputLabel sx={{ ...labelStyle }} htmlFor="plan-description">
            {label2}
          </InputLabel>
          <TextField
            fullWidth
            multiline
            rows={3}
            name="title"
            id="plan-description"
            sx={{ background: "#fff" }}
            placeholder={placeholder2}
          />
        </Box>
        <Box mb={8}>
          <InputLabel sx={{ ...labelStyle }} htmlFor="prompt">
            {label3}
          </InputLabel>
          <TextField
            fullWidth
            multiline
            rows={3}
            name="title"
            sx={{ background: "#fff" }}
            id="prompt"
            placeholder={placeholder3}
          />
        </Box>
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", justifyContent: "center", mb: 5.78 }}
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
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onClose}
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

const labelStyle = {
  ...POPPINS,
  color: "#565656",
  fontWeight: 500,
  fontSize: "14px",
  mb: 1.5,
};
