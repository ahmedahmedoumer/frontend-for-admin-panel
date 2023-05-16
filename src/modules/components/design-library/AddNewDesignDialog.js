import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  InputLabel,
  Box,
  DialogActions,
  Button,
} from "@mui/material";
import { POPPINS } from "../../../utils/config";

export default function AddNewDesignDialog(props) {
  const { open, onClose, title, submitText } = props;

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          background: "#F2F2F2",
          borderRadius: 8,
          px: 4,
          pt: 2,
        },
      }}
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 500,
            fontSize: "20px",
            color: "#565656",
            ...POPPINS,
          }}
        >
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box mb={2}>
          <InputLabel sx={{ ...labelStyle }} htmlFor="plan-title">
            Design Title
          </InputLabel>
          <TextField
            fullWidth
            size="small"
            sx={{ background: "#fff" }}
            name="title"
            id="plan-title"
            placeholder="Write your Design Title"
          />
        </Box>
        <Box>
          <Typography sx={{ ...labelStyle }}>Adding image</Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
            <label for="file-upload" class="design-library-upload">
              <p>Drag and drop your File here</p>
              <p>Or</p>
              <p>Browse Files</p>
            </label>
            <input id="file-upload" type="file" />
          </Box>
        </Box>
        <Box>
          <Typography sx={{ ...labelStyle }}>AAdding zip file</Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
            <label for="file-upload" class="design-library-upload">
              <p>Drag and drop your File here</p>
              <p>Or</p>
              <p>Browse Files</p>
            </label>
            <input id="file-upload" type="file" />
          </Box>
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
            mr: 1,
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
          {submitText ?? "Add"}
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
