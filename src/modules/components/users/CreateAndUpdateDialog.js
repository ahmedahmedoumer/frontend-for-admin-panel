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
import React, { useState ,useEffect } from "react";
import user1 from "../../../assets/images/dialogUser1.svg";
import userSelectIcon from "../../../assets/images/users/user1.png";
import user2 from "../../../assets/images/dialogUser2.svg";
import { POPPINS } from "../../../utils/config";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import { SET_DESIGNNER,SET_PLANNER } from "../../../context/actionTypes/actionTypes";
import {useSelector,useDispatch} from "react-redux";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function CreateAndUpdateDialog(props) {
  const { open, onClose, title, submit, setSubmitOpenDialog,openDialog,setAssignedValue } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const Selector=useSelector((state)=>state);
  const userData=Selector.all_users_data;
  const plannerData=Selector.planner_data;
  const designnerData=Selector.designner_data;
  const dataArray=openDialog;
  // console.log(planner);
  const Dispatch=useDispatch();
   useEffect(()=>{
        getAllPlannerAndDesigner();
   },[]);
   const planner=plannerData.map((planner)=>({
    id:planner.id,
    name:planner.firstName,
    img:planner.img,
    })); 
    const designer=designnerData.map((designner)=>({
        id:designner.id,
        name:designner.firstName,   
        img:designner.img,
    }));
   const getAllPlannerAndDesigner=async()=>{
       const fetch=await axios.get('http://localhost:8000/api/users',{
        headers:{
          'Authorization':'Bearer '+ localStorage.getItem('token'),
        },
       })
       .then(function(response){
        console.log(response.data);
        Dispatch({
          type:SET_DESIGNNER,
          payload:response.data.designner,
        });
        Dispatch({
          type:SET_PLANNER,
          payload:response.data.planner,
        });
       })
       .catch(function(error){
        console.log(error.response);
       });
   }

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
          <img src={`http://localhost:8000/api/storage/${userData.length!=0 ? userData.img:'user1.png'}`} alt="userAvatar2" />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                textAlign: "center",
                ...POPPINS,
              }}
            >
              {userData.length!=0 && userData.firstName }
            </Typography>
          </Box>
          <Box sx={{ mt: -5, mx: 1.5 }}>_ _ _</Box>
          <Box>
          <img src={`http://localhost:8000/api/storage/${userData.length!=0 && openDialog=='designer'  ? userData.designer.img:userData.planner.img}`} alt="userAvatar2" />
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                textAlign: "center",
                ...POPPINS,
              }}
            >
            {userData.length!=0 && openDialog=='designer' ? userData.designer.firstName:userData.planner.firstName }
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
              Want to Change the {openDialog}?
            </Typography>
            <Typography
              sx={{ fontWeight: 500, fontSize: "9px", color: "#B8B8B8" }}
            >
              Choose from the list below:
            </Typography>
          </Box>
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
              }}>  
              <Grid>
              <FormControl fullWidth sx={{ position: "static" }}>
              <TextField fullWidth
               onClick={() => setIsOpen(true)} 
               value={selectedItem} size="small"  
               placeholder={`Choose which ${openDialog} you want to assign`}
                sx={{
                  ".MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },}}/></FormControl>  
              </Grid>       
              </Grid>

            <Grid item>
              <IconButton
                onClick={() => {
                  setSelectedItem("");
                  setIsOpen(false);
                }}
              >
                <ClearIcon />
              </IconButton>
            </Grid>
          </Grid>
          


          {isOpen && (
            <Box>
            <Box  sx={{ background: "#fff", borderRadius: "12px", mt: 2, p: 1 }}>
               {(openDialog=="designer"?designer:planner).map((option)=>(
              <Box
                onClick={() => {
                  setIsOpen(false);
                  setSelectedItem(option.name);
                  setAssignedValue(option.id);
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
              <img src={`http://localhost:8000/api/storage/${option.img}`} alt="userAvatar2" />
                <Typography
                  sx={{
                    mr: 5,
                    ml: 1,
                    color: "#565656",
                    fontWeight: 600,
                    fontSize: "13px",
                  }}
                >
                  {option.name}
                </Typography>
                <Typography
                  sx={{ color: "#B8B8B8", fontWeight: 500, fontSize: "10px" }}
                >
                  {openDialog}
                </Typography>
                </Box>
          ))}
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
