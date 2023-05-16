import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import uploadImg from "../../../assets/images/uploadImg.svg";
import { POPPINS } from "../../../utils/config";

export default function UploadPhotoDialog(props) {
  const { open, onClose, submit } = props;

  return (
    <Dialog
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
      maxWidt="sm"
      fullWidth
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
          Editing Design Guide
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography>
          <Typography
            sx={{
              ml: 7,
              mt: 1,
              fontWeight: 500,
              color: "#565656",
              ...POPPINS,
            }}
          >
            Adding image
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <label for="file-upload" class="custom-photo-upload">
              <p>Drag and drop your File here</p>
              <p>Or</p>
              <p>Browse Files</p>
            </label>
            <input id="file-upload" type="file" />
          </Box>
          <Box sx={{ ml: 40, mt: -8 }}>
            <img src={uploadImg} alt="cameraIcon" width="40px" height="40px" />
          </Box>
        </Typography>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "center",
            my: 2,
            mt: 6,
          }}
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
            {submit ?? "Update"}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
