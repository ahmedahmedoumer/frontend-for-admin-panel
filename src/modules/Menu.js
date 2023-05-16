import { Popover, MenuItem } from "@mui/material";

export default function Menu(props) {
  const { anchorEl, open, onClose, openDialog } = props;
  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root ": {
          border: "1px solid #828282",
          borderRadius: "10px",
        },
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      keepMounted
      transitionDuration={0}
    >
      <MenuItem onClick={openDialog} sx={{ borderBottom: "1px solid #ccc" }}>
        Update profil
      </MenuItem>
      <MenuItem onClick={onClose}>Logout</MenuItem>
    </Popover>
  );
}
