import {
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Button,
  Typography,
  IconButton,
  TextField
} from "@mui/material";
import design1 from "../../../assets/images/design.svg";
import editIcon from "../../../assets/images/editCardIcon1.svg";
import downloadIcon from "../../../assets/images/editCardDialogIcon2.svg";
import { POPPINS } from "../../../utils/config";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function EditeCardDialog(props) {
  const { open, onClose,clickedDesign, submitText } = props;
const [design,setDesign]=useState({});

   useEffect(()=>{
    const setDesignData=()=>{
          if(clickedDesign.length!==0){
            setDesign(
              {
              img:clickedDesign.img,
              id:clickedDesign.id,
              label:clickedDesign.label,
              sourceFile:clickedDesign.sourceFile,
              }
            );}
        }
        setDesignData();
   },[clickedDesign]); 


   console.log(clickedDesign);
   console.log(design);
  const onChangeHandler=(e)=>{
     e.preventDefault();
     setDesign({...design,[e.target.name]:e.target.value});
  }

console.log(design);
  
  const downloaSourceFile=async()=>{
          const fileName=design.sourceFile;
          const token=localStorage.getItem('token');
          const download=await axios.get(`http://localhost:8000/api/downloadFile?fileName=${fileName}`,{
            headers:{
              'Authorization':'Bearer '+token
            },
            responseType: 'blob'
          })
          .then(function(response){
            const url = URL.createObjectURL(response.data);

            // Create a link element and trigger the download
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            link.click();
      
            // Clean up the temporary URL
            URL.revokeObjectURL(url);
            onClose();
          })
          .catch(function(error){
            console.log(error);
          });
        }

  const submitHandling=async()=>{
     if (submitText==="Update") {
         const requestData={
             designTitle:design.label,
             image:design.img,
             sourceFile:design.sourceFile,
         }
         const update=await axios.post(`http://localhost:8000/api/update-design?designId=${design.id}`,requestData,{
         headers:{
                'Authorization':'Bearer '+localStorage.getItem('token'),
         }
         })
         .then(function(response){
             console.log(response);
         })
         .catch(function(error){
            console.log(error);
         });
     }
     else{
      const add=await axios.post(`http://localhost:8000/api/add-design?designId=${design.id}`,design,{
        headers:{
               'Authorization':'Bearer '+localStorage.getItem('token'),
        }
        })
        .then(function(response){
            console.log(response);
        })
        .catch(function(error){
           console.log(error);
        });
     }
  }


  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          background: "#F2F2F2",
          borderRadius: 8,
        },
      }}
      open={open}
      onClose={onClose}
    >
      <DialogContent>
        <Box>
          <img src={`http://localhost:8000/api/storage/${clickedDesign.img}`} alt="design" width="440px" height="440px" />
        </Box>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
            <Typography
              sx={{
                color: "#978F8F",
                fontWeight: 500,
                fontSize: "20px",
                mr: 3,
                ...POPPINS,
              }}
            >
              Title :
            </Typography>
            <TextField
              sx={{
                color: "#565656",
                fontWeight: 500,
                fontSize: "24px",
                width:"400px",
                ...POPPINS,
              }}
              id="designLabel"
              name="label"
              onChange={onChangeHandler}
              value={design.label}
            />
           
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", mt: 2 }}>
              <Typography
                sx={{
                  color: "#978F8F",
                  fontWeight: 500,
                  fontSize: "20px",
                  mr: 3,
                  ...POPPINS,
                }}
              >
                Zip file :
              </Typography>
              <Button
              onClick={downloaSourceFile} 
                sx={{
                  textTransform: "unset",
                  color: "#565656",
                  border: "1px solid #B4CD93",
                  borderRadius: 2,
                }}
              >
                Download Zip file
              </Button>
            </Box>
            <Box>
              <IconButton>
                <img src={editIcon} alt="edit" />
              </IconButton>
              <IconButton
              onClick={downloaSourceFile}>
                <img src={downloadIcon} alt="edit" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 3,
          mt: 4,
        }}
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
            mr: 2,
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={submitHandling}
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
          {submitText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
