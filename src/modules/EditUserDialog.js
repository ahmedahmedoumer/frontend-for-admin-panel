import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  InputLabel,
  TextField,
  Grid,
  DialogActions,
  Button,
  Box,
  IconButton,
  CloudUpload,
  MenuItem,
  FormControl,
  FormHelperText,
  Select,
} from "@mui/material";
import { useState } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import { POPPINS } from "../utils/config";
import photo from "../assets/images/photo.svg";
import { useEffect } from "react";
import { ContactsOutlined } from "@mui/icons-material";
// import Select from "../components/Select";
export default function EditUserDialog(props) {
const Selector=useSelector((state)=>state);
const User=Selector.user;
const { open, onClose, openSubmit, submitText,setUpdateUserData,ValidationData,editorDialog,updatedData,setUpdatedData} = props;

  const [file, setFile] = useState(null);
  const [userArray, setUserArray]=useState({});
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };
  
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const adduserData=[];
  console.log(editorDialog);
  console.log(User);
let userData=(editorDialog=="adminProfile")?User:(editorDialog=="addTeamMember")?[]:updatedData;
console.log(userData);
  useEffect(()=>{
    setUserArray({
      id:userData?userData.id:null,
      firstName:userData?userData.firstName:null,
      lastName:userData?userData.lastName:null,
      email:userData?userData.email:null,
      status:userData?userData.status:null,
      phone:userData?userData.phone:null,
      title:userData?userData.title:null,
      password: "*** ",
      confirmPassword: "***",
    });
  },[]);
const [ValidationError,setValidationError]=useState({
  firstName:null,
  lastName:null,
  email:null,
  phone:null,
  status:null,
  title:null,
  password:null,
  confirmPassword:null,
});

const onChangeHandler=(e)=>{
      e.preventDefault();
      setUserArray({...userArray,[e.target.name]:e.target.value});
      var spanName=e.target.name;
      if(ValidationError.spanName){
      var spanElement = document.getElementById(e.target.name);
      spanElement.style.display = "none";
      }
}
const submiHandling=async()=>{
   (editorDialog=="adminProfile")?setUpdateUserData(userArray):setUpdatedData(userArray);
  const checkValidation=await axios.post(`http://localhost:8000/api/UpdatecheckValidation?updateId=${userArray.id}`,userArray,{
     headers:{
      'Authorization':'Bearer '+localStorage.getItem('token'),
     }
  })
  .then(function(response){
    openSubmit();
  })
  .catch(function(error){
    console.log(error);
    setValidationError({
      firstName:error.response.data.errors.firstName,
      lastName:error.response.data.errors.lastName,
      email:error.response.data.errors.email,
      phone:error.response.data.errors.phone,
      status:error.response.data.errors.status,
      title:error.response.data.errors.title,
      password:error.response.data.errors.password,
      confirmPassword:error.response.data.errors.confirmPassword,
    });
  });
}
  return (
    <Dialog
      maxWidth="md"
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
      <DialogTitle>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Avatar sx={{ width: 102, height: 102 }} />
          <div onDrop={handleDrop} onDragOver={handleDragOver}>
          <IconButton component="label">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </IconButton>
        </div>
          <Typography
            sx={{ fontWeight: 500, fontSize: "20px", ml: 1.5, ...POPPINS }}
          >
            Editing A Profile Picture
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={4}>
          <Grid item lg={6}>
            <InputLabel sx={{ ...labelStyle }} htmlFor="first-name">
              First Name
            </InputLabel>
            <TextField
              fullWidth
              size="small"
              name="firstName"
              id="first-name"
              value={userArray.firstName}
              onChange={onChangeHandler}
            />
       {ValidationError.firstName && <span className="alert alert-danger" id="firstName">{ValidationError.firstName}</span>}
          </Grid>
          <Grid item lg={6}>
            <InputLabel sx={{ ...labelStyle }} htmlFor="last-name">
              Last Name
            </InputLabel>
            <TextField
              fullWidth
              size="small"
              name="lastName"
              id="last-name"
              value={userArray.lastName}
              onChange={onChangeHandler}
            />
            {ValidationError.lastName && <span className="alert alert-danger" id="lastName">{ValidationError.lastName}</span>}
          </Grid>
          <Grid item lg={6} sx={{ pt: "8px !important" }}>
            <InputLabel sx={{ ...labelStyle }} htmlFor="email">
              Email
            </InputLabel>
            <TextField
              fullWidth
              size="small"
              name="email"
              id="email_id"
              value={userArray.email}
              onChange={onChangeHandler}
            />
            {ValidationError.email && <span className="alert alert-danger" id="email">{ValidationError.email}</span>}
          </Grid>
          <Grid item lg={6} sx={{ pt: "8px !important" }}>
            <InputLabel sx={{ ...labelStyle }} htmlFor="phone">
              Phone
            </InputLabel>
            <TextField
              fullWidth
              size="small"
              name="phone"
              id="phone_no"
              value={userArray.phone}
              onChange={onChangeHandler}
            />
       {ValidationError.phone && <span className="alert alert-danger" id="phone">{ValidationError.phone}</span>}
          </Grid>
        </Grid>
        <Grid container flexDirection="column" spacing={4} sx={{ mb: 7 }}>
          <Grid item lg={6} sx={{ pt: "38px !important" }}>
          <FormControl required fullWidth>
          <InputLabel sx={{ ...labelStyle }} htmlFor="Ttitle">
            Title
           </InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-required-label"
            name="title"
            id="title_id"
            value={userArray.title}
            label="Status"
            onChange={onChangeHandler}
          >
            <MenuItem  value={"admin"}>admin</MenuItem>
            <MenuItem  value={"manager"}>manager</MenuItem>
            <MenuItem  value={"planner"}>admin</MenuItem>
            <MenuItem  value={"designer"}>designer</MenuItem>
          </Select>
        </FormControl>
       {ValidationError.title && <span className="alert alert-danger" id="title">{ValidationError.title}</span>}
          </Grid>
          <Grid item lg={6} sx={{ pt: "8px !important" }}>
          <FormControl required fullWidth>
          <InputLabel sx={{ ...labelStyle }} htmlFor="status">
            Status
           </InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-required-label"
            name="status"
            id="status_"
            value={userArray.status}
            label="Status"
            onChange={onChangeHandler}
          >
            <MenuItem value="hold">Hold</MenuItem>
            <MenuItem value="Active">Active</MenuItem>
          </Select>
        </FormControl>
  
       {ValidationError.status && <span className="alert alert-danger" id="status">{ValidationError.status}</span>}
          </Grid>
          <Grid item lg={6} sx={{ pt: "8px !important" }}>
            <InputLabel sx={{ ...labelStyle }} htmlFor="password">
              Password
            </InputLabel>
            <TextField
              fullWidth
              size="small"
              type="password"
              name="password"
              id="password_"
              value={userArray.password}
              onChange={onChangeHandler}
            />
       {ValidationError.password && <span className="alert alert-danger" id="password">{ValidationError.password}</span>}
          </Grid>
          <Grid item lg={6} sx={{ pt: "8px !important" }}>
            <InputLabel sx={{ ...labelStyle }} htmlFor="confirm-password">
              Confirm Password
            </InputLabel>
            <TextField
              fullWidth
              size="small"
              type="password"
              name="confirmPassword"
              id="confirm_password"
              value={userArray.confirmPassword}
              onChange={onChangeHandler}
            />
       {ValidationError.confirmPassword && <span className="alert alert-danger" id="confirmPassword">{ValidationError.confirmPassword}</span>}
          </Grid>
        </Grid>
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
          onClick={submiHandling}
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
          {submitText ?? "Update"}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const labelStyle = {
  ...POPPINS,
  mb: 1,
  color: "#565656",
  fontWeight: 500,
  fontSize: "14px",
};

const TITLE_ITEMS = [
  {
    id: 1,
    label: "Manager",
  },
  {
    id: 2,
    label: "Planner",
  },
  {
    id: 3,
    label: "Designer",
  },
];

const STATUS_ITEMS = [
  {
    id: 1,
    label: "Active",
  },
  {
    id: 2,
    label: "Hold",
  },
];
