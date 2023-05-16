import { Popover, MenuItem } from "@mui/material";

export default function FilterPopover(props) {
  const { anchorEl, open, onClose } = props;

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
      <MenuItem
        sx={{
          borderBottom: "1px solid #ccc",
          color: "#978F8F",
          fontWeight: 400,
          fontSize: "13px",
          px: 1.5,
        }}
      >
        Done
      </MenuItem>
      <MenuItem
        sx={{ color: "#978F8F", fontWeight: 400, fontSize: "13px", px: 1.5 }}
      >
        Pending
      </MenuItem>
    </Popover>
  );
}
