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
import design from "../../../assets/images/design.svg";
import editIcon from "../../../assets/images/editCardIcon1.svg";
import downloadIcon from "../../../assets/images/editCardDialogIcon2.svg";
import { POPPINS } from "../../../utils/config";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function EditeCardDialog(props) {
  const { open, onClose,clickedDesign, submitText } = props;
  const [design,setDesign]=useState({
    id:clickedDesign.id,
    label:clickedDesign.label,
    sourceFile:clickedDesign.sourceFile,
  }); 
  const onChangeHandler=(e)=>{
     e.preventDefault();
     setDesign({...design,[e.target.name]:e.target.value});
  }

console.log(design);
  const submitHandling=async()=>{
     if (submitText==="Update") {
         const update=await axios.post(`http://localhost:8000/api/update-design?designId=${design.id}`,design,{
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
          <img src={clickedDesign.img} alt="design" width="440px" height="440px" />
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
              <IconButton>
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
