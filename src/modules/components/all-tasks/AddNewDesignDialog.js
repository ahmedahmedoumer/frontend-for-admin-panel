import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  TextField,
  InputLabel,
  DialogActions,
  Button,
} from "@mui/material";
import { POPPINS } from "../../../utils/config";
import { useState } from "react";
import axios from 'axios';

export default function AddNewDesignDialog(props) {
  const { open, onClose, title, submitText,selectedUser ,userData} = props;
   let userId=null;
if(title==="Add A New bulk plan"){
  userId=userData.id?userData.id:null;
}
else{
  userId=selectedUser?selectedUser.id:null;
}
   const [fileData,setFileData]=useState({
    userId:userId,
    zipFile:null,
   });
   const onchangeHandler=(e)=>{
    const {name,values,files}=e.target;
        if(files){
          const file=files[0];
          setFileData({...fileData,[name]:file});
        }
   }
   const addBulk=async()=>{
       if(title==="Add A New bulk plan"){
          const {userId,zipFile}=fileData
             const addBulkDesign=await axios.post('http://localhost:8000/api/all-tasks/add-bulk-plan',{userId,zipFile},{
              headers:{
                'Authorization':'Bearer '+localStorage.getItem('token'),
                'Content-Type': 'multipart/form-data',
              }
             })
             .then(function(response){
               console.log(response);
             })
             .catch(function(error){
              console.log(error);
             })
       }
       else{
            const {userId,zipFile}=fileData
               const addBulkDesign= axios.post('http://localhost:8000/api/all-tasks/add-bulk-design',{userId,zipFile},{
                headers:{
                  'Authorization':'Bearer '+localStorage.getItem('token'),
                  'Content-Type': 'multipart/form-data',
                }
               })
               .then(function(response){
                 console.log(response);
               })
               .catch(function(error){
                console.log(error);
               })
           }      
   }
  
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          background: "#F2F2F2",
          borderRadius: 8,
          px: 4,
        },
      }}
      open={open}
      onClose={onClose}
    >
      <DialogTitle sx={{ textAlign: "center" }}>{title}</DialogTitle>
      <DialogContent>
        <Box mb={2}>
          <InputLabel sx={{ ...labelStyle }} htmlFor="post">
            Post ID
          </InputLabel>
          <TextField
            fullWidth
            size="small"
            name="title"
            id="post"
            sx={{ background: "#fff" }}
            value={userId}
            disabled
            // placeholder="Write your Post ID "
          />
        </Box>
        <Box sx={{ mb: 1 }}>
          <Typography sx={{ ...labelStyle }}>Adding Zip file</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
          <label for="file-upload" class="design-file-upload">
            <p>{fileData.zipFile?fileData.zipFile.name:"Drag and drop your csv File here"}</p>
            <p>Or</p>
            <p>Browse Files</p>
          </label>
          <input id="file-upload" onChange={onchangeHandler} name="zipFile"  type="file" />
        </Box>
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", justifyContent: "center", mb: 5.78 }}
      >
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
          onClick={ addBulk }
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
          {submitText ?? "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const labelStyle = {
  ...POPPINS,
  color: "#565656",
  fontWeight: 500,
  fontSize: "14px",
  mb: 1.5,
};
