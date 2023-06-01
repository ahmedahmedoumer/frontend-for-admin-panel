import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  TextField,
  Box,
} from "@mui/material";
import axios from 'axios';
import { POPPINS } from "../utils/config";
import { useState } from "react";

export default function CreateAndUpdateDialog(props) {
  const {
    open,
    onClose,
    title,
    label1,
    label2,
    label3,
    submit,
    onSubmit,
    setPlanLibrary,
    editPlanData,
    setAllDesignData,
    setAllPlanData,
    userData,
    selectedUser,
  } = props;
const userId=selectedUser ?selectedUser.id?selectedUser.id:null:null;
const planData=editPlanData;
const [item,setItems]=useState({
  id:planData?planData.id:null,
  title:planData?planData.title:null,
  description:planData?planData.description:null,
  prompt:planData?planData.prompt:null,
});
const checkValidation=async()=>{
const data={
  id:item.id,
  title:item.title,
  description:item.description,
  prompt:item.prompt,
};
    if (submit==="Add" && title==="Add A Prompt") {
      const checkValidation=await axios.post(`http://localhost:8000/api/add-planLibrary`,{data},{
        headers:{
          'Authorization':'Bearer '+localStorage.getItem('token'),
        }
      })
      .then(function(response){
           setPlanLibrary(response.data.data);
           onClose();
           onSubmit();
      })
      .catch(function(error){
         console.log(error);
      });      
    }
    else if(submit==="Add" && title==="Add A design Row"){
      const textOnPost=data.title;
      const checkValidation=await axios.post(`http://localhost:8000/api/add-design-plan?userId=${userId}`,{textOnPost},{
        headers:{
          'Authorization':'Bearer '+localStorage.getItem('token')
        },
      }
      )
      .then(function(response){
        setAllDesignData(response.data.data);
          onClose();
          // onSubmit();
    })
      .catch(function(error){
       console.log(error);
    });
    }
    else{
      const checkValidation=await axios.post(`http://localhost:8000/api/plan-library/update-plan?planId=${data.id}`,{data},{
          headers:{
                  'Authorization':'Bearer '+localStorage.getItem('token'),
                  }
      })
        .then(function(response){
            setPlanLibrary(response.data.data);
            onClose();
            onSubmit();
      })
        .catch(function(error){
         console.log(error);
      });
    }
}
const HandleChange=(e)=>{
      e.preventDefault();
      setItems({...item,[e.target.name]:e.target.value});
}
  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          background: "#F2F2F2",
          borderRadius: 8,
          px: 4,
        },
      }}
    >
      <DialogTitle
        sx={{
          ...POPPINS,
          textAlign: "center",
          mt: 5,
          fontWeight: 500,
          fontSize: "20px",
          mb: 3,
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent>
        <Box mb={2}>
          <InputLabel sx={{ ...labelStyle }} htmlFor="plan-title">
            {label1}
          </InputLabel>
          <TextField
            fullWidth
            multiline
            rows={3}
            sx={{ background: "#fff" }}
            name="title"
            id="plan-title"
            value={item.title}
            onChange={HandleChange}
          />
        </Box>
        {title !=="Add A design Row" &&(<Box mb={2}>
          <InputLabel sx={{ ...labelStyle }} htmlFor="plan-description">
            {label2}
          </InputLabel>
          <TextField
            fullWidth
            multiline
            rows={3}
            name="description"
            id="plan-description"
            sx={{ background: "#fff" }}
            value={item.description}
            onChange={HandleChange}
          />
        </Box>
        )}
        {title !=="Add A design Row" &&(<Box mb={8}>
          <InputLabel sx={{ ...labelStyle }} htmlFor="prompt">
            {label3}
          </InputLabel>
          <TextField
            fullWidth
            multiline
            rows={3}
            name="prompt"
            id={"plan-prompt"}
            sx={{ background: "#fff" }}
            value={item.prompt}
            onChange={HandleChange}
          />
        </Box>
        )}

      </DialogContent>
      <DialogActions
        sx={{ display: "flex", justifyContent: "center", mb: 5.78 }}>
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
          onClick={()=>{
            checkValidation(item)
          }}
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
          {submit ?? "Add"}
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
