import { Popover, MenuItem } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";

export default function Menu(props) {
  const Selector=useSelector((state)=>state);
  const { anchorEl, open, onClose, openDialog,openSubmit,setTitle,setSubmitText,setEditorDialog } = props;
  const handleClick=(newTitle,newSubmitText)=>{
             setTitle("Are you sure you want to Update the Profile ?");
             setHeader("Editing Admin Profile Picture");
             setSubmitText("yes Update");
             if (newSubmitText!=="yes Logout") {
                  openDialog();
             }
             else{
             openSubmit();
             }
    }
    const logoutHandler=()=>{
      setTitle(newTitle);
      setHeader("Editing A Profile Picture");
      setEditorDialog('adminProfileUpdate');
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
      <MenuItem onClick={()=>{handleClick()}} sx={{ borderBottom: "1px solid #ccc" }}>
        Update profile
      </MenuItem>
      <MenuItem onClick={()=>{handleClick("Are you sure you want to logout ?","yes Logout")}}>Logout</MenuItem>
    </Popover>
  );
}