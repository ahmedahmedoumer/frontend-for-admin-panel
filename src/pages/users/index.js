import {
  Typography,
  Box,
  Card,
  Grid,
  Button,
  IconButton,
  Divider,
  TextField,
} from "@mui/material";
import PageHeader from "../../modules/PageHeader";
import ViewContainer from "../../modules/ViewContainer";
import plannerUserIcon from "../../assets/images/users/user7.png";
import userAvatar2 from "../../assets/images/users/userAvatar2.png";
import cameraIcon from "../../assets/images/cameraIcon.png";
import filesIcon from "../../assets/images/filesIcon.png";
import instagram from "../../assets/images/social/instagram.svg";
import facebook from "../../assets/images/social/facebook.svg";
import linkedin from "../../assets/images/social/linkedin.svg";
import tiktok from "../../assets/images/social/tiktok.svg";
import { POPPINS } from "../../utils/config";
import ViewDate from "../../modules/ViewDate";
import Pagination from "../../modules/Pagination";
import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';
import CreateAndUpdateDialog from "../../modules/components/users/CreateAndUpdateDialog";
import AreYouSureDialog from "../../modules/components/AreYouSureDialog";
import UploadPhotoDialog from "../../modules/components/users/UploadPhotoDialog";
import { useDispatch,useSelector } from "react-redux";
import { SET_ALL_USERS_DATA } from "../../context/actionTypes/actionTypes";

export default function Users() {
  const [openDialog, setOpenDialog] = useState({});
  const [openSubmitDialog, setSubmitOpenDialog] = useState({});
  const [assignedValue,setAssignedValue]=useState(null);
  const [designerId,setDesignerId]=useState(null);
  const [plannerId,setPlannerId]=useState(null);
  const [uploadOpenDialog, setUploadOpenDialog] = useState(false);
  const [allUsers,setAllUsers]=useState([]);
  const Dispatch=useDispatch();
  const Selector=useSelector(state=>state);
  const [perPage,setPerPage]=useState(1);
  const [pageSize,setPageSize]=useState(0);
  const [currentPage,setCurrentPage]=useState(1);

  useEffect(()=>{
    setAllUsers(Selector.all_users_data);
    users();
  },[pageSize,currentPage,perPage,openDialog]);
  const users=async()=>{
    const usersData=await axios.get(`http://localhost:8000/api/all-users?perPage=${perPage}&currentPage=${currentPage}`,{
      headers:{
        'Authorization':'Bearer '+localStorage.getItem('token'),
      }
    })
    .then(function(response){
      const data=response.data.data[0];
      console.log(data);
      Dispatch({
        type:SET_ALL_USERS_DATA,
        payload:data,
      });
      setPageSize(response.data.last_page);
    })
    .catch(function(error){
      console.log(error.response);
    })
  }
    console.log(allUsers);
  // console.log(uploadOpenDialog);
  const userData = [
    {
      label: "Email",
      value: allUsers.email || null,
    },
    {
      label: "Phone Number",
      value: allUsers.phone|| null,
    },
    {
      label: "Whatsapp",
      value: allUsers.whatsapp|| null,
    },
    {
      label: "Adress",
      value: allUsers.address|| null,
    },
    {
      label: "Location",
      value: allUsers.location|| null,
    },
    {
      label: "Start Date",
      value: moment(allUsers.created_at).format('MMMM Do YYYY')|| null,
    },
    {
      label: "End Date",
      value: moment(allUsers.updated_at).format('MMMM Do YYYY')|| null,
    },
    {
      label: "Status",
      value: allUsers.creationStatus|| null,    
    },
  ];

  const userSocialData = [
    {
      label: "Co. Name",
      value: (allUsers.brands_company)?(allUsers.brands_company.companyName):null,    
    },
    {
      label: "Co. Email",
      value:(allUsers.brands_company)?(allUsers.brands_company.email):null,
    },
    {
      label: "Industry",
      value: "+20123123123"|| null,
    },
    {
      label: "Co. Website",
      value: (allUsers.brands_company)?(allUsers.brands_company.companyWebsite):null,
    },
    {
      label: "Co. Number",
      value:  (allUsers.brands_company)?(allUsers.brands_company.companyNumber):null,
    },
    {
      label: "Co. Description",
      value: (allUsers.brands_company)?(allUsers.brands_company.companyDescription):null,
    },
  ];
  return (
    <ViewContainer>
      <PageHeader title={allUsers.firstName} description="User’s information" />
      <Card
        sx={{
          background: "#F2F2F2",
          borderRadius: "30px",
          p: 0,
          mt: 3,
          mb: 6,
          boxShadow: "none",
        }}
      >
        <Grid sx={{ padding: "32px 11px" }} container>
          <Grid item xs={6}>
            <Grid container alignItems="center" sx={{ mb: 4 }}>
              <Box>
                <Box
                  onClick={() =>
                    setOpenDialog({ label: "planner", value: true })
                  }
                  sx={{ display: "flex", mb: "11px", cursor: "pointer" }}
                >
                  <Typography
                    sx={{
                      color: "#B3B3B3",
                      fontWeight: 500,
                      fontSize: "13px",
                      lineHeight: "29px",
                      mr: "14px",
                    }}
                  >
                    Planner
                  </Typography>
                  <img src={plannerUserIcon} alt="PlannerUserIcon" />
                </Box>
                <Box
                  onClick={() =>
                    setOpenDialog({ label: "designer", value: true })
                  }
                  sx={{ display: "flex", cursor: "pointer" }}
                >
                  <Typography
                    sx={{
                      color: "#B3B3B3",
                      fontWeight: 500,
                      fontSize: "13px",
                      lineHeight: "29px",
                      mr: "5px",
                    }}
                  >
                    Designer
                  </Typography>
                  <img src={plannerUserIcon} alt="PlannerUserIcon" />
                </Box>
              </Box>
              <Box
                className="userAvatar"
                sx={{ ml: "10px", mr: "24px", position: "relative" }}
              >
                <img src={userAvatar2} alt="userAvatar2" />
                <IconButton
                  onClick={() => setUploadOpenDialog(true)}
                  sx={{ position: "absolute", bottom: "-4px", right: "-8px" }}
                >
                  <img src={cameraIcon} alt="cameraIcon" />
                </IconButton>
              </Box>
              <Box className="userHeader">
                <Typography
                  sx={{
                    ...POPPINS,
                    fontWeight: 500,
                    fontSize: "24px",
                    lineHeight: "29px",
                    color: "#565656",
                    mb: "15px",
                  }}
                >
                  {" "}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ mr: "16px" }}>
                    <Typography
                      sx={{
                        ...POPPINS,
                        fontWeight: 500,
                        fontSize: "15px",
                        lineHeight: "14px",
                        color: "#565656",
                        mb: "8px",
                        background:
                          "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)",
                        backgroundClip: "text",
                        textFillColor: "transparent",
                      }}
                    >
                      Employee
                    </Typography>
                    <Typography
                      sx={{
                        ...POPPINS,
                        fontWeight: 500,
                        fontSize: "15px",
                        lineHeight: "14px",
                        color: "#B3B3B3",
                      }}
                    >
                     { allUsers.location}
                    </Typography>
                  </Box>
                  <Button
                    sx={{
                      background: "#FFFFFF",
                      border: "0.925432px solid #E6E6E6",
                      borderRadius: "6.76471px",
                      color: "#7F7F7F",
                      ml: 1,
                      padding: "12px 16px",
                      textTransform: "unset",
                    }}
                    startIcon={<img src={filesIcon} alt="filesIcon" />}
                  >
                    Plan
                  </Button>
                  <Button
                    sx={{
                      background: "#FFFFFF",
                      border: "0.925432px solid #E6E6E6",
                      borderRadius: "6.76471px",
                      color: "#7F7F7F",
                      ml: 1,
                      padding: "12px 16px",
                      textTransform: "unset",
                    }}
                    startIcon={<img src={filesIcon} alt="filesIcon" />}
                  >
                    Design
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid sx={{ px: 8 }}>
              <Divider />
              <Grid sx={{ mt: 4 }}>
                {userData.map((item, index) => (
                  <Grid
                    key={index}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography sx={{ ...leftSectionStyle }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ ...leftSectionStyle2 }}>
                      {item.value}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              sx={{ mb: 7, maxWidth: "500px", width: "100%", mx: "auto" }}
            >
              <Grid item lg={6}>
                <Grid container sx={{ mb: 3 }}>
                  <img src={instagram} alt="instagram" />
                  <Typography sx={{ ml: 2 }}>@abc_abc</Typography>
                </Grid>
              </Grid>
              <Grid item lg={6}>
                <Grid container justifyContent="flex-end">
                  <img src={linkedin} alt="linkedin" />
                  <Typography sx={{ ml: 2 }}>@abc_abc</Typography>
                </Grid>
              </Grid>
              <Grid item lg={6}>
                <Grid container>
                  <img src={facebook} alt="facebook" />
                  <Typography sx={{ ml: 2 }}>@abc_abc</Typography>
                </Grid>
              </Grid>
              <Grid item lg={6}>
                <Grid container justifyContent="flex-end">
                  <img src={tiktok} alt="tiktok" />
                  <Typography sx={{ ml: 2 }}>@abc_abc</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid>
              {userSocialData.map((item, index) => (
                <Grid
                  key={index}
                  container
                  justifyContent="space-between"
                  sx={{ maxWidth: "500px", width: "100%", mx: "auto" }}
                >
                  <Typography sx={{ ...leftSectionStyle }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ ...leftSectionStyle2 }}>
                    {item.value}
                  </Typography>
                </Grid>
              ))}
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItem: "center",
                maxWidth: "400px",
                width: "100%",
                mx: "auto",
              }}
            >
              <Typography
                sx={{
                  color: "#565656",
                  fontWeight: 500,
                  fontSize: "15px",
                  ...POPPINS,
                  mb: 3,
                  textAlign: "center",
                }}
              >
                Content Description
              </Typography>
              <TextField
                multiline
                sx={{ background: "#fff" }}
                placeholder="write a description of your content "
                rows={2}
              />
            </Grid>
          </Grid>
        </Grid>
       <Pagination pageSize={pageSize} setCurrentPage={setCurrentPage}/>
       
        {openDialog.label === "planner" && openDialog.value && (
          <CreateAndUpdateDialog
            title="Planner Assigned"
            openDialog={openDialog.label}
            open={openDialog.value}
            setAssignedValue={setAssignedValue}
            setSubmitOpenDialog={() =>
              setSubmitOpenDialog({
                label: "planner",
                value: true,
              })
            }
            onClose={() => setOpenDialog(false)}
          />
        )}
        {openDialog.label === "designer" && openDialog.value && (
          <CreateAndUpdateDialog
            title="Designer Assigned"
            openDialog={openDialog.label}
            open={openDialog.value}
            setAssignedValue={setAssignedValue}
            setSubmitOpenDialog={() =>
              setSubmitOpenDialog({
                label: "designer",
                value: true,
              })
            }
            onClose={() => setOpenDialog(false)}
          />
        )}

        {openSubmitDialog.label === "planner" && openSubmitDialog.value && (
          <AreYouSureDialog
            open={openSubmitDialog}
            userID={allUsers.id}
            assignedRole={openDialog.label}
            assignedValue={assignedValue}
            setOpenDialog={setOpenDialog}
            onClose={() => setSubmitOpenDialog(false)}
            title="Are you sure you want to re-Assign the Planner ?"
            submitText="Yes, Re-Assign"
          />
        )}
        {openSubmitDialog.label === "designer" && openSubmitDialog.value && (
          <AreYouSureDialog
            open={openSubmitDialog}
            userID={allUsers.id}
            assignedRole={openDialog.label}
            assignedValue={assignedValue}
            setOpenDialog={setOpenDialog}
            onClose={() => setSubmitOpenDialog(false)}
            title="Are you sure you want to re-Assign the Designer ?"
            submitText="Yes, Re-Assign"
          />
        )}
      </Card>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ViewDate />
      </Box>
    </ViewContainer>
  );
}

const leftSectionStyle = {
  ...POPPINS,
  maxWidth: "120px",
  width: "100%",
  color: "#B3B3B3",
  fontWeight: 500,
  fontSize: "13px",
  mb: 2,
};

const leftSectionStyle2 = {
  color: "#565656",
  fontWeight: 500,
  fontSize: "15px",
  maxWidth: "120px",
  width: "100%",
  mb: 2,
};
