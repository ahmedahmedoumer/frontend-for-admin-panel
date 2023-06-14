import React from 'react';
import { CircularProgress, Modal, Backdrop } from '@mui/material';

const Loading = ({ isLoading }) => {
  if (!isLoading) {
    return null; // Hide the loading component if isLoading is false
  }

  return (
    <Modal
    open={isLoading}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
      timeout: 500,
      style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
    }}
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <CircularProgress />
  </Modal>
  );
};

export default Loading;
