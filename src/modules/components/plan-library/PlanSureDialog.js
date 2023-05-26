import { Dialog, DialogActions, Button, DialogTitle } from "@mui/material";
import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function PlanSureDialog(props) {
  const { alertMessage,alertTitle } =props;

  const handleSubmit=()=>{
     console.log("hello");
  }
return (
     <Alert severity="success" onClose={() => {}}>
       <AlertTitle>alertTitle</AlertTitle>
        {alertMessage} <strong>check it out!</strong>
      </Alert>
);
}