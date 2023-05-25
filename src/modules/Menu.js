import { Popover, MenuItem } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import { USER_EDITOR_DIALOG } from "../context/actionTypes/actionTypes";

export default function Menu(props) {
  const { anchorEl, open, onClose, openDialog,openSubmit,setTitle,setSubmitText,setEditorDialog } = props;
  const handleClick=()=>{
        setTitle("Are you sure you want to Update the Profile ?");
        setEditorDialog("adminProfile");
        setSubmitText("yes Update");
        openDialog();
}
  const logoutHandler=()=>{
    setTitle("Are you sure you want to logout ?");
    setSubmitText("yes Logout");
    openSubmit();
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
      <MenuItem onClick={()=>{handleClick()}} sx={{ borderBottom: "1px solid #ccc" }}>
        Update profile
      </MenuItem>
      <MenuItem onClick={()=>{logoutHandler()}}>Logout</MenuItem>
    </Popover>
  );
}