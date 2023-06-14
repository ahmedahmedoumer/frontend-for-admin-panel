import React from "react";
import {Alert , Snackbar} from '@mui/material';
 const PopUpAlert=(props)=>{
  const {type,text,open,handleClose}=props;
   return (
    <Snackbar open={open}  autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {{type}}
     </Alert>
    </Snackbar>
   );

 };
 export default PopUpAlert;