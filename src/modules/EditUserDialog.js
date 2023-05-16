import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  InputLabel,
  TextField,
  Grid,
  DialogActions,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { POPPINS } from "../utils/config";
import photo from "../assets/images/photo.svg";
import Select from "../components/Select";

export default function EditUserDialog(props) {
  const { open, onClose, openSubmit, submitText } = props;
  return (
    <Dialog
      maxWidth="md"
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
      <DialogTitle>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Avatar sx={{ width: 102, height: 102 }} />
          <IconButton
            sx={{
              mt: 4,
              ml: -4,
              background: "#fff",
              width: 48,
              height: 48,
            }}
          >
            <img src={photo} alt="upload" />
          </IconButton>
          <Typography
            sx={{ fontWeight: 500, fontSize: "20px", ml: 1.5, ...POPPINS }}
          >
            Editing A Profile Picture
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={4}>
          <Grid item lg={6}>
            <InputLabel sx={{ ...labelStyle }} htmlFor="first-name">
              First Name
            </InputLabel>
            <TextField
              fullWidth
              size="small"
              name="firstName"
              id="first-name"
              placeholder="first name"
            />
          </Grid>
          <Grid item lg={6}>
            <InputLabel sx={{ ...labelStyle }} htmlFor="last-name">
              Last Name
            </InputLabel>
            <TextField
              fullWidth
              size="small"
              name="lastName"
              id="last-name"
              placeholder="last name"
            />
          </Grid>
          <Grid item lg={6} sx={{ pt: "8px !important" }}>
            <InputLabel sx={{ ...labelStyle }} htmlFor="email">
              Email
            </InputLabel>
            <TextField
              fullWidth
              size="small"
              name="email"
              id="email"
              placeholder="comapny12@xyz.com"
            />
          </Grid>
          <Grid item lg={6} sx={{ pt: "8px !important" }}>
            <InputLabel sx={{ ...labelStyle }} htmlFor="phone">
              Phone
            </InputLabel>
            <TextField
              fullWidth
              size="small"
              name="phone"
              id="phone"
              placeholder="+20 ***************"
            />
          </Grid>
        </Grid>
        <Grid container flexDirection="column" spacing={4} sx={{ mb: 7 }}>
          <Grid item lg={6} sx={{ pt: "38px !important" }}>
            <InputLabel sx={{ ...labelStyle }} htmlFor="Ttitle">
              Title
            </InputLabel>
            <Select
              fullWidth
              size="small"
              name="title"
              id="title"
              label="Your title"
              items={TITLE_ITEMS}
            />
          </Grid>
          <Grid item lg={6} sx={{ pt: "8px !important" }}>
            <InputLabel sx={{ ...labelStyle }} htmlFor="status">
              Status
            </InputLabel>

            <Select
              fullWidth
              size="small"
              name="status"
              id="status"
              label="Your Status"
              items={STATUS_ITEMS}
            />
          </Grid>
          <Grid item lg={6} sx={{ pt: "8px !important" }}>
            <InputLabel sx={{ ...labelStyle }} htmlFor="password">
              Password
            </InputLabel>
            <TextField
              fullWidth
              size="small"
              name="password"
              id="password"
              placeholder="***************"
            />
          </Grid>
          <Grid item lg={6} sx={{ pt: "8px !important" }}>
            <InputLabel sx={{ ...labelStyle }} htmlFor="confirm-password">
              Confirm Password
            </InputLabel>
            <TextField
              fullWidth
              size="small"
              name="confirmPassword"
              id="confirm-password"
              placeholder="***************"
            />
          </Grid>
        </Grid>
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
          onClick={openSubmit}
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
          {submitText ?? "Update"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const labelStyle = {
  ...POPPINS,
  mb: 1,
  color: "#565656",
  fontWeight: 500,
  fontSize: "14px",
};

const TITLE_ITEMS = [
  {
    id: 1,
    label: "Manager",
  },
  {
    id: 2,
    label: "Planner",
  },
  {
    id: 3,
    label: "Designer",
  },
];

const STATUS_ITEMS = [
  {
    id: 1,
    label: "Active",
  },
  {
    id: 2,
    label: "Hold",
  },
];
