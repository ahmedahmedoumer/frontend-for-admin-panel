import { Popover, MenuItem } from "@mui/material";

export default function Menu(props) {
  const { anchorEl, open, onClose, openDialog,openSubmit,setTitle,setSubmitText } = props;
  const handleClick=(newTitle,newSubmitText)=>{
             setTitle(newTitle);
             setSubmitText(newSubmitText);
             if (newSubmitText!=="yes Logout") {
                  openDialog();
             }
             else{
             openSubmit();
             }
    }
 
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
      <MenuItem onClick={()=>{handleClick("Are you sure you want to Update the Profile ?","yes Update")}} sx={{ borderBottom: "1px solid #ccc" }}>
        Update profile
      </MenuItem>
      <MenuItem onClick={()=>{handleClick("Are you sure you want to logout ?","yes Logout")}}>Logout</MenuItem>
    </Popover>
  );
}