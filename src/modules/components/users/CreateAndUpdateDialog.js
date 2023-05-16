import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  DialogActions,
  Button,
  Box,
  Slide,
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Grid,
  FormControl,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import user1 from "../../../assets/images/dialogUser1.svg";
import userSelectIcon from "../../../assets/images/users/user1.png";
import user2 from "../../../assets/images/dialogUser2.svg";
import { POPPINS } from "../../../utils/config";
import ClearIcon from "@mui/icons-material/Clear";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function CreateAndUpdateDialog(props) {
  const { open, onClose, title, submit, setSubmitOpenDialog } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  return (
    <Dialog
      TransitionComponent={Transition}
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          background: "#F2F2F2",
          borderRadius: 8,
          px: 4,
        },
      }}
      fullWidth
      open={open}
      onClose={onClose}
    >
      <DialogTitle sx={{ textAlign: "center" }}>{title}</DialogTitle>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <img src={user1} alt="user1" />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                textAlign: "center",
                ...POPPINS,
              }}
            >
              Omar Ibrahim
            </Typography>
          </Box>
          <Box sx={{ mt: -5, mx: 1.5 }}>_ _ _</Box>
          <Box>
            <img src={user2} alt="user1" />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                textAlign: "center",
                ...POPPINS,
              }}
            >
              Emy
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{ display: "flex", alignItems: "center", mt: "15px", mb: 1 }}
          >
            <Typography
              sx={{
                mr: 1,
                color: "#565656",
                fontWeight: 500,
                fontSize: "13px",
              }}
            >
              Want to Change the Planner?
            </Typography>
            <Typography
              sx={{ fontWeight: 500, fontSize: "9px", color: "#B8B8B8" }}
            >
              Choose from the list below:
            </Typography>
          </Box>

          {/* <TextField
              fullWidth
              onClick={() => setIsOpen(true)}
              value={selectedItem?.title}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setIsOpen(false)}>
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder="Choose which planner you want to assign"
            /> */}
          <Grid
            container
            alignItems="center"
            flexWrap="nowrap"
            sx={{
              position: "relative",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          >
            <Grid
              item
              sx={{
                flex: "1 !important",
                overflowX: "hidden",
                position: "static",
              }}
            >
              <FormControl fullWidth sx={{ position: "static" }}>
                <TextField
                  fullWidth
                  onClick={() => setIsOpen(true)}
                  value={selectedItem?.title}
                  size="small"
                  sx={{
                    ".MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                  placeholder="Choose which planner you want to assign"
                />
              </FormControl>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => {
                  setSelectedItem({ title: "" });
                  setIsOpen(false);
                }}
              >
                <ClearIcon />
              </IconButton>
            </Grid>
          </Grid>
          {isOpen && (
            <Box sx={{ background: "#fff", borderRadius: "12px", mt: 2, p: 1 }}>
              <Box
                onClick={() => {
                  setIsOpen(false);
                  setSelectedItem({ title: "Omar Ibrahim" });
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                  pb: 1,
                  cursor: "pointer",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <img src={userSelectIcon} />
                <Typography
                  sx={{
                    mr: 5,
                    ml: 1,
                    color: "#565656",
                    fontWeight: 600,
                    fontSize: "13px",
                  }}
                >
                  Omar Ibrahim
                </Typography>
                <Typography
                  sx={{ color: "#B8B8B8", fontWeight: 500, fontSize: "10px" }}
                >
                  Planner
                </Typography>
              </Box>
              <Box
                onClick={() => {
                  setIsOpen(false);
                  setSelectedItem({ title: "Omar Ibrahim" });
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                  pb: 1,
                  cursor: "pointer",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <img src={userSelectIcon} />
                <Typography
                  sx={{
                    mr: 5,
                    ml: 1,
                    color: "#565656",
                    fontWeight: 600,
                    fontSize: "13px",
                  }}
                >
                  Omar Ibrahim
                </Typography>
                <Typography
                  sx={{ color: "#B8B8B8", fontWeight: 500, fontSize: "10px" }}
                >
                  Planner
                </Typography>
              </Box>
              <Box
                onClick={() => {
                  setIsOpen(false);
                  setSelectedItem({ title: "Omar Ibrahim" });
                }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img src={userSelectIcon} />
                <Typography
                  sx={{
                    mr: 5,
                    ml: 1,
                    color: "#565656",
                    fontWeight: 600,
                    fontSize: "13px",
                  }}
                >
                  Omar Ibrahim
                </Typography>
                <Typography
                  sx={{ color: "#B8B8B8", fontWeight: 500, fontSize: "10px" }}
                >
                  Planner
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </DialogContent>
      <DialogActions sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
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
          onClick={setSubmitOpenDialog}
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
