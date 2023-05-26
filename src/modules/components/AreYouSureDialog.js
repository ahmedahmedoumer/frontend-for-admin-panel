import { Dialog, DialogActions, Button, DialogTitle } from "@mui/material";
import { POPPINS } from "../../utils/config";
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_ALERT_MESSAGE, SET_VALIDATION_ERROR,LOGIN_USER } from "../../context/actionTypes/actionTypes";

export default function AreYouSureDialog(props) {
  const { open, onClose, title, submitText, submit, submitIcon, openSnackbar,updateUserData,userID,assignedValue,assignedRole,setOpenDialog } =props;
   const Navigate=useNavigate();
   const Selector=useSelector(state=>state);
   const Dispatch=useDispatch();
  async function handleSubmit(){
    

    console.log(submitText);
    if (submit && submitText==="yes Logout") {
      submit();
      const check=await axios.get('http://localhost:8000/api/logout', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(function(response){
        localStorage.removeItem('token');
        Dispatch({
          type:LOGIN_USER,
          payload:null,
        });
        Navigate('/login');
      })
      .catch(function(error){
        console.log(error);
      });
    }
    else if(submit && submitText=="yes Update"){
           const update=await axios.post('http://localhost:8000/api/update-profile',updateUserData,{
            headers:{
              'Authorization':'Bearer '+localStorage.getItem('token'),
            }
           })
           .then(function(response){
            submit();
           })
           .catch(function(error){
              Dispatch({
                type:SET_ALERT_MESSAGE,
                payload:error.response,
              });
           });
    }
    else if( submitText=="Yes, Re-Assign"){
         const reAssign=await axios.get(`http://localhost:8000/api/users/${assignedRole}/re-assigned?userID=${userID}&assignedValue=${assignedValue}`,{
          headers:{
            'Authorization':'Bearer '+ localStorage.getItem('token'),
          }
         })
         .then(function(response){
               console.log(response.data);
               setOpenDialog(false);
         })
         .catch(function(error){
          console.log(error.response);
         });
    }
    else if(submitText==="Yes, Edit"){
      const update=await axios.post(`http://localhost:8000/api/team-members/update?updateId=${updateUserData.id}`,updateUserData,{
        headers:{
          'Authorization':'Bearer '+localStorage.getItem('token'),
        }
       })
       .then(function(response){
        submit();
       })
       .catch(function(error){
        console.log(error.response);
       })
    }
    else if(submitText==="Yes, Add"){
      const add=await axios.post('http://localhost:8000/api/team-members/add',updateUserData,{
        headers:{
          'Authorization':'Bearer '+localStorage.getItem('token'),
        }
       })
       .then(function(response){
        submit();
       })
       .catch(function(error){
        console.log(error.response);
       });
    }

    if (openSnackbar) {
      openSnackbar();
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          background: "#F2F2F2",
          borderRadius: 8,
          px: 4,
          pt: 2,
          pb: 3.5,
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          color: "#565656",
          fontWeight: 500,
          fontSize: "20px",
          ...POPPINS,
        }}
      >
        {title}
      </DialogTitle>
      <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
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
          startIcon={<img src={submitIcon} alt="submitIcon" />}
          onClick={handleSubmit}
          sx={{
            background:
              "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)",
            border: "0.5px solid #7F7F7F",
            borderRadius: "8px",
            textTransform: "unset",
            color: "#fff",
            px: 3,
            fontSize: "20px",
          }}
        >
          {submitText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
