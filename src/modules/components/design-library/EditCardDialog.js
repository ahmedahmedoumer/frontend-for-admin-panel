import {
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import design from "../../../assets/images/design.svg";
import editIcon from "../../../assets/images/editCardIcon1.svg";
import downloadIcon from "../../../assets/images/editCardDialogIcon2.svg";
import { POPPINS } from "../../../utils/config";

export default function EditeCardDialog(props) {
  const { open, onClose, submitText } = props;
  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          background: "#F2F2F2",
          borderRadius: 8,
        },
      }}
      open={open}
      onClose={onClose}
    >
      <DialogContent>
        <Box>
          <img src={design} alt="design" width="440px" height="440px" />
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
            <Typography
              sx={{
                color: "#978F8F",
                fontWeight: 500,
                fontSize: "20px",
                mr: 3,
                ...POPPINS,
              }}
            >
              Title :
            </Typography>
            <Typography
              sx={{
                color: "#565656",
                fontWeight: 500,
                fontSize: "24px",
                ...POPPINS,
              }}
            >
              A Pretty Model
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", mt: 2 }}>
              <Typography
                sx={{
                  color: "#978F8F",
                  fontWeight: 500,
                  fontSize: "20px",
                  mr: 3,
                  ...POPPINS,
                }}
              >
                Zip file :
              </Typography>
              <Button
                sx={{
                  textTransform: "unset",
                  color: "#565656",
                  border: "1px solid #B4CD93",
                  borderRadius: 2,
                }}
              >
                Download Zip file
              </Button>
            </Box>
            <Box>
              <IconButton>
                <img src={editIcon} alt="edit" />
              </IconButton>
              <IconButton>
                <img src={downloadIcon} alt="edit" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
          mt: 4,
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
          {submitText ?? "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
