import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert';
import { Alert } from '@mui/material';

const AlertComponent = (props) => {
  const {type,text,setAlertMessage}=props;
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlertMessage(null);
      setShowAlert(false);
    }, 5000); // Adjust the timeout duration as needed (in milliseconds)

    return () => clearTimeout(timeout);
  }, []);

  if (!showAlert) {
    return null; // Hide the alert if showAlert is false
  }

  return <Alert severity={type}>{text}</Alert>;
};

export default AlertComponent;
