import { Dialog, DialogActions, Button, DialogTitle } from "@mui/material";
import { POPPINS } from "../../utils/config";
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_ALERT_MESSAGE, SET_VALIDATION_ERROR,LOGIN_USER } from "../../context/actionTypes/actionTypes";

export default function AreYouSureDialog(props) {
  const { open, onClose, title, submitText, submit, submitIcon, openSnackbar,updateUserData } =props;
   const Navigate=useNavigate();
   const Selector=useSelector(state=>state);
   const Dispatch=useDispatch();
  async function handleSubmit(){
    if (submit && submitText==="yes Logout") {
      submit();
      console.log(localStorage.getItem('token'));
      const check=await axios.get('http://localhost:8000/api/logout', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(function(response){
        console.log(response.data);
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
            //  submit();
           const update=await axios.post('http://localhost:8000/api/update-profile',updateUserData,{
            headers:{
              'Authorization':'Bearer '+localStorage.getItem('token'),
            }
           })
           .then(function(response){
            submit();
            console.log(response.data);
          //  Dispatch({
          //    type:LOGIN_USER,
          //    payload:response.,
          // });
           })
           .catch(function(error){
              Dispatch({
                type:SET_ALERT_MESSAGE,
                payload:error.response,
              });
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
