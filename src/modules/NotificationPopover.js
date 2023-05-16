import { Popover, MenuItem, Box, Typography, Divider } from "@mui/material";
import user1 from "../assets/images/users/user1.png";
import user2 from "../assets/images/users/user2.png";

export default function NotificationPopover(props) {
  const { anchorEl, open, onClose } = props;

  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      sx={{ "& .MuiPaper-root ": { borderRadius: "15px" } }}
      keepMounted
      transitionDuration={0}
    >
      <Typography sx={{ ml: 2, mt: 1 }}>New</Typography>
      {items.map((item, i) => (
        <MenuItem key={i} sx={{ borderBottom: "1px solid #ccc" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={item.img} alt={item.name} />
            <Box>
              <Box sx={{ ml: 1, display: "flex" }}>
                <Typography
                  sx={{
                    color: "#565656",
                    fontWeight: 600,
                    fontSize: "13px",
                    mr: 0.5,
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{ fontWeight: 400, fontSize: "13px", color: "#808080" }}
                >
                  {item.notification}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "#808080",
                  ml: 1,
                }}
              >
                {item.role}
              </Typography>
            </Box>
          </Box>
        </MenuItem>
      ))}
    </Popover>
  );
}

const items = [
  {
    img: user1,
    name: "Omar",
    notification: "added an new",
    role: "design page",
  },
  {
    img: user2,
    name: "Ahmed",
    notification: "added an new",
    role: "Plan Row",
  },
  {
    img: user1,
    name: "Omar",
    notification: "added an new",
    role: "design page",
  },
  {
    img: user2,
    name: "Ahmed",
    notification: "added an new",
    role: "Plan Row",
  },
  {
    img: user1,
    name: "Omar",
    notification: "added an new",
    role: "design page",
  },
];
