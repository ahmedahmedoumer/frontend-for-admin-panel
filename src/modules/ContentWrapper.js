import {
  Box,
  Drawer,
  ListItem,
  Typography,
  Button,
  Avatar,
  styled,
  IconButton,
} from "@mui/material";
import axios from 'axios';
import logo from "../assets/images/logo.svg";
import submitIcon from "../assets/images/submitPlus.svg";
import arrow from "../assets/images/arrow.svg";
import bell from "../assets/images/bell.svg";
import { Link, Navigate, useLocation } from "react-router-dom";
import Menu from "./Menu";
import { useEffect } from "react";
import { useRef, useState } from "react";
import EditUserDialog from "./EditUserDialog";
import AreYouSureDialog from "./components/AreYouSureDialog";
import NotificationPopover from "./NotificationPopover";
import { LOGIN_USER,GET_LOGIN_USER } from '../context/actionTypes/actionTypes';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  DashboardIcon,
  AllUsersIcon,
  GalleryIcon,
  ReceiptIcon,
} from "../utils/config";
import { AxiosContext } from "react-axios/lib/components/AxiosProvider";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

export default function ContentWrapper({ children }) {
  const currentPath = useLocation();
  const [open, setIsOpen] = useState(false);
  const [openNotofocation, setOpenNotofocation] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [submitDialog, setSubmitDialog] = useState(false);
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const notificationRef = useRef(null);
  const userData = useSelector((state)=>state);
  const [updateUserData,setUpdateUserData]=useState(null);
  const [updateUserValidation,setUpdateUserValidation]=useState(null);
  const [title,setTitle]=useState("Are you sure you want to Update the Profile ?");
  const [submitText,setSubmitText]=useState("Yes Update");
  const dispatch=useDispatch();
  const Navigate=useNavigate();

  const handleOpenDialog = async() => {

    setIsOpen(false);
    setOpenDialog(true);
  };
  useEffect(()=>{
    async function checkAuthenticated(){
      try {
      const check = await axios.get('http://localhost:8000/api/user', {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      .then(function(response){
        // console.log(response);
         dispatch({
          type:LOGIN_USER,
          payload:response.data,
         });
         currentPath.pathname==='/login' ? Navigate('/dashboard'):Navigate(currentPath.pathname);
      })
      .catch(function(error){
        // console.log(error);
        Navigate('/login');
      });
        
    }catch (error){
        //  console.log(error);
    }
}
checkAuthenticated();
  },[]);

  return (
      <Box>
     { localStorage.getItem('token') && <Box sx={{ display: "flex" }}>
        <Drawer
          anchor="left"
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: 280,
              borderRightColor: "divider",
              borderRightStyle: "solid",
              background: "#F2F2F2",
            },
          }}
        >
           <Box
            sx={{
              mt: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="logo" style={{ marginBottom: "64px" }} />
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link
                to="/dashboard"
                style={{ maxWidth: "190px", width: "100%" }}
              >
                <Button
                  disableRipple
                  startIcon={
                    <DashboardIcon
                      color={
                        currentPath.pathname === "/dashboard"
                          ? "#fff"
                          : "#7F7F7F"
                      }
                    />
                  }
                  sx={{
                    textAlign: "left",
                    justifyContent: "flex-start",
                    textTransform: "none",
                    textDecoration: "none",
                    width: "100%",
                    py: 1,
                    pl: 2,
                    background:
                      currentPath.pathname === "/dashboard"
                        ? "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)"
                        : "#F2F2F2",
                    color:
                      currentPath.pathname === "/dashboard"
                        ? "#fff"
                        : "#808080",
                    // "& .MuiButton-startIcon": {
                    //   color: currentPath.pathname === '/dashboard' ? "#fff" : "#7F7F7F",
                    // },
                    marginBottom: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: 1.5,
                      ml: 0.5,
                    }}
                  >
                    Dashboard
                  </Typography>
                </Button>
              </Link>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link
                to="/all-users"
                style={{ maxWidth: "190px", width: "100%" }}
              >
                <Button
                  disableRipple
                  startIcon={
                    <AllUsersIcon
                      color={
                        currentPath.pathname === "/all-users"
                          ? "#fff"
                          : "#7F7F7F"
                      }
                    />
                  }
                  sx={{
                    textAlign: "left",
                    justifyContent: "flex-start",
                    textTransform: "none",
                    textDecoration: "none",
                    width: "100%",
                    py: 1,
                    pl: 2,
                    background:
                      currentPath.pathname === "/all-users"
                        ? "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)"
                        : "#F2F2F2",
                    color:
                      currentPath.pathname === "/all-users"
                        ? "#fff"
                        : "#808080",
                    // "& .MuiButton-startIcon": {
                    //   color: currentPath.pathname === '/dashboard' ? "#fff" : "#7F7F7F",
                    // },
                    marginBottom: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: 1.5,
                      ml: 0.5,
                    }}
                  >
                    All Users
                  </Typography>
                </Button>
              </Link>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link to="/users" style={{ maxWidth: "190px", width: "100%" }}>
                <Button
                  disableRipple
                  startIcon={
                    <GalleryIcon
                      color={
                        currentPath.pathname === "/users" ? "#fff" : "#7F7F7F"
                      }
                    />
                  }
                  sx={{
                    textAlign: "left",
                    justifyContent: "flex-start",
                    textTransform: "none",
                    textDecoration: "none",
                    width: "100%",
                    py: 1,
                    pl: 2,
                    background:
                      currentPath.pathname === "/users"
                        ? "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)"
                        : "#F2F2F2",
                    color:
                      currentPath.pathname === "/users" ? "#fff" : "#808080",
                    marginBottom: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: 1.5,
                      ml: 0.5,
                    }}
                  >
                    Users
                  </Typography>
                </Button>
              </Link>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link
                to="/team-members"
                style={{ maxWidth: "190px", width: "100%" }}
              >
                <Button
                  disableRipple
                  startIcon={
                    <ReceiptIcon
                      color={
                        currentPath.pathname === "/team-members"
                          ? "#fff"
                          : "#7F7F7F"
                      }
                    />
                  }
                  sx={{
                    textAlign: "left",
                    justifyContent: "flex-start",
                    textTransform: "none",
                    textDecoration: "none",
                    width: "100%",
                    py: 1,
                    pl: 2,
                    background:
                      currentPath.pathname === "/team-members"
                        ? "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)"
                        : "#F2F2F2",
                    color:
                      currentPath.pathname === "/team-members"
                        ? "#fff"
                        : "#808080",
                    marginBottom: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: 1.5,
                      ml: 0.5,
                    }}
                  >
                    Team Members
                  </Typography>
                </Button>
              </Link>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link
                to="/plan-library"
                style={{ maxWidth: "190px", width: "100%" }}
              >
                <Button
                  disableRipple
                  startIcon={
                    <GalleryIcon
                      color={
                        currentPath.pathname === "/plan-library"
                          ? "#fff"
                          : "#7F7F7F"
                      }
                    />
                  }
                  sx={{
                    textAlign: "left",
                    justifyContent: "flex-start",
                    textTransform: "none",
                    textDecoration: "none",
                    width: "100%",
                    py: 1,
                    pl: 2,
                    background:
                      currentPath.pathname === "/plan-library"
                        ? "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)"
                        : "#F2F2F2",
                    color:
                      currentPath.pathname === "/plan-library"
                        ? "#fff"
                        : "#808080",
                    marginBottom: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: 1.5,
                      ml: 0.5,
                    }}
                  >
                    Plan Library
                  </Typography>
                </Button>
              </Link>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link
                to="/design-library"
                style={{ maxWidth: "190px", width: "100%" }}
              >
                <Button
                  disableRipple
                  startIcon={
                    <ReceiptIcon
                      color={
                        currentPath.pathname === "/design-library"
                          ? "#fff"
                          : "#7F7F7F"
                      }
                    />
                  }
                  sx={{
                    textAlign: "left",
                    justifyContent: "flex-start",
                    textTransform: "none",
                    textDecoration: "none",
                    width: "100%",
                    py: 1,
                    pl: 2,
                    background:
                      currentPath.pathname === "/design-library"
                        ? "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)"
                        : "#F2F2F2",
                    color:
                      currentPath.pathname === "/design-library"
                        ? "#fff"
                        : "#808080",
                    marginBottom: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: 1.5,
                      ml: 0.5,
                    }}
                  >
                    Design Library
                  </Typography>
                </Button>
              </Link>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link
                to="/all-tasks"
                style={{ maxWidth: "190px", width: "100%" }}
              >
                <Button
                  disableRipple
                  startIcon={
                    <ReceiptIcon
                      color={
                        currentPath.pathname === "/all-tasks"
                          ? "#fff"
                          : "#7F7F7F"
                      }
                    />
                  }
                  sx={{
                    textAlign: "left",
                    justifyContent: "flex-start",
                    textTransform: "none",
                    textDecoration: "none",
                    width: "100%",
                    py: 1,
                    pl: 2,
                    background:
                      currentPath.pathname === "/all-tasks"
                        ? "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)"
                        : "#F2F2F2",
                    color:
                      currentPath.pathname === "/all-tasks"
                        ? "#fff"
                        : "#808080",
                    marginBottom: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: 1.5,
                      ml: 0.5,
                    }}
                  >
                    All Tasks
                  </Typography>
                </Button>
              </Link>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Link to="/reports" style={{ maxWidth: "190px", width: "100%" }}>
                <Button
                  disableRipple
                  startIcon={
                    <ReceiptIcon
                      color={
                        currentPath.pathname === "/reports" ? "#fff" : "#7F7F7F"
                      }
                    />
                  }
                  sx={{
                    textAlign: "left",
                    justifyContent: "flex-start",
                    textTransform: "none",
                    textDecoration: "none",
                    width: "100%",
                    py: 1,
                    pl: 2,
                    background:
                      currentPath.pathname === "/reports"
                        ? "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)"
                        : "#F2F2F2",
                    color:
                      currentPath.pathname === "/reports" ? "#fff" : "#808080",
                    marginBottom: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: 1.5,
                      ml: 0.5,
                    }}
                  >
                    Report
                  </Typography>
                </Button>
              </Link>
            </ListItem>
          </Box>
        </Drawer>
        <Box
          sx={{
            pl: "344px",
            pr: "66px",
            flex: 1,
            height: "104px",
            background: "#F2F2F2",
            pt: 2,
            display: "flex",
            alignItems: "start",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={arrow} alt="arrow" />
              <Typography sx={{ ml: 1, fontSize: "32px", fontWeight: 500 }}>
                Dashboard
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#B8B8B8",
                fontWeight: 400,
                fontSize: "12px",
                ml: 2.2,
              }}
            >
              Welcome back, {userData.user.firstName}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", pt: 1 }}>
            <IconButton
              ref={notificationRef}
              onClick={() => setOpenNotofocation(true)}
            >
              <img src={bell} alt="bell" />
            </IconButton>
            <Avatar sx={{ width: "32px", height: "32px", mr: 1, ml: 0.88 }} />
            <Box
              sx={{ cursor: "pointer" }}
              ref={ref}
              onClick={() => setIsOpen(true)}
            >
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
              {userData.user.firstName+"   "}
              </Typography>
              <Typography
                sx={{ color: "#B8B8B8", fontWeight: 400, fontSize: "12px" }}
              >
              {userData.user.email}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Menu
          onClose={() => setIsOpen(false)}
          openDialog={handleOpenDialog}
          openSubmit={()=>setSubmitDialog(true)}
          open={open}
          setTitle={setTitle}
          setSubmitText={setSubmitText}
          anchorEl={ref.current}
        />
        <NotificationPopover
          onClose={() => setOpenNotofocation(false)}
          open={openNotofocation}
          anchorEl={notificationRef.current}
        />
        <EditUserDialog
          openSubmit={() => setSubmitDialog(true)}
          open={openDialog}
          ValidationData={updateUserValidation}
          setUpdateUserData={setUpdateUserData}
          onClose={() => setOpenDialog(false)}
        />
        <AreYouSureDialog
          open={submitDialog}
          onClose={() => setSubmitDialog(false)}
          title={title}
          submitText={submitText}
          updateUserData={updateUserData}
          submitIcon={submitIcon}
          submit={() => setOpenDialog(false)}
        />
      </Box>
              }
       <Container>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Container> 
    </Box>
  );
}
