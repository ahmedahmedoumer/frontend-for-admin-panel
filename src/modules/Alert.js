import React, { useState, useEffect } from 'react';

const Alert = (props) => {
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

  const alertClassName = ` alert ${type}`;

  return <div className={alertClassName} >{text}</div>;
};

export default Alert;
