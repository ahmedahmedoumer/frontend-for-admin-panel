import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
  InputLabel,
  Box,
  DialogActions,
  Button,
} from "@mui/material";
import { POPPINS } from "../../../utils/config";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AddNewDesignDialog(props) {
  const { open, onClose, title, submitText } = props;
  const [submitData,setSubmitData]=useState(null);
  const [validationMessage,setValidationMessage]=useState({
    designTitle:null,
    image:null,
    sourceFile:null,
  });
  const [designData,setDesignData]=useState({
    title:'',
    image:null,
    zipFile:null,
  });
  const onSubmitHandler=async()=>{
            // const data=submitData;
            console.log(designData);
            const formData = new FormData();
                  formData.append('designTitle', designData.title);
                  formData.append('image', designData.image);
                  formData.append('sourceFile', designData.zipFile);
          const register=await axios.post('http://localhost:8000/api/add-design',formData,{
            headers:{
              'Authorization':'Bearer '+localStorage.getItem('token'),
              'Content-Type': 'multipart/form-data',
            }
          })
          .then(function(response){
             console.log(response);
             onClose();
          })
          .catch(function(error){
           setValidationMessage(error.response.data.errors);
          });
  }
  const onChangeHandler=(e)=>{
    const {name,value,files}=e.target;
    if(files){
      const file = files[0];
    setDesignData({...designData,
      [name]: file,
    });
    }
    else{
      e.preventDefault();
      setDesignData({...designData,[name]:value});
    }

  }
  useEffect(() => {
    if(designData.image!==null && designData.zipFile!==null){
      setSubmitData(designData);
      console.log(submitData);
    }
}, [designData,onSubmitHandler,onChangeHandler]);
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      sx={{
        "& .MuiPaper-root": {
          background: "#F2F2F2",
          borderRadius: 8,
          px: 4,
          pt: 2,
        },
      }}
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 500,
            fontSize: "20px",
            color: "#565656",
            ...POPPINS,
          }}
        >
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box mb={2}>
          <InputLabel sx={{ ...labelStyle }} htmlFor="plan-title">
            Design Title
          </InputLabel>
          <TextField
            fullWidth
            size="small"
            sx={{ background: "#fff" }}
            name="title"
            value={designData.title}
            onChange={onChangeHandler}
            id="plan-title"
            placeholder="Write your Design Title"
          />
        </Box>
        {validationMessage.designTitle && (<span className="alert alert-danger">{validationMessage.designTitle}</span>)}

        <Box>
          <Typography sx={{ ...labelStyle }}>Adding image</Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
            <label for="file-upload" class="design-library-upload">
              <p>{designData.image?designData.image.name:"Drag and drop your File here"}</p>
              <p>Or</p>
              <p>Browse Files</p>
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={onChangeHandler}
              name="image"
              />
        {validationMessage.image && (<span className="alert alert-danger">{validationMessage.image}</span>)}
          </Box>
        </Box>
        <Box>
          <Typography sx={{ ...labelStyle }}>Adding zip file</Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 5 }}>
            <label for="zip-file" class="design-library-upload">
            <p>{designData.zipFile?designData.zipFile.name:"Drag and drop your File here"}</p>
              <p>Or</p>
              <p>Browse Files</p>
            </label>
            <input 
            id="zip-file" 
            type="file"
            onChange={onChangeHandler}
            name="zipFile"
             />
        {validationMessage.sourceFile && (<span className="alert alert-danger">{validationMessage.sourceFile}</span>)}

          </Box>
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
            mr: 1,
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={onSubmitHandler}
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
