import { Popover, MenuItem, Box, Typography, Divider } from "@mui/material";
import user1 from "../assets/images/users/user1.png";
import user2 from "../assets/images/users/user2.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';

export default function NotificationPopover(props) {
  const { anchorEl, open, onClose } = props;
  const [notifications,setNotification]=useState([]);
  useEffect(()=>{
    const fetchNotification=async()=>{
            await axios.get('http://localhost:8000/api/showNotification',{
              headers:{
                'Authorization':'Bearer '+localStorage.getItem('token')
              }
            })
            .then(function(response){
              console.log(response.data);
              setNotification(response.data);
            })
            .catch(function(error){
              console.log(error);
            });
    }
    fetchNotification();
  },[]);
  let items=[];
  if (notifications.length!==null) {
 items=notifications.map((item)=>({
    notification:item?item.title:'change something',
    img:item?item.user?item.user.img:'user1.png':'user1.png',
    name:item?item.user?item.user.name:'user':'user',
    role:item?item.user?item.user.title:'role':'role',
  }));
  }
  else{
      items=[
        {
          img:user1,
          name:"Omar",
          notification: "added an new",
          role:"design page",
        }
      ];
  }
  // const notification=useSelector((state)=>state);
  // const data=useSelector((state)=>state.dashboard_data.notification);
  // console.log(data);
//   let items=[];
//   if (data.length!==0) {
//     items=data.map((item)=>
//      img=user1,
//      name="Omar",
//      notification= "added an new",
//      role= "design page",
//     ); 
//  }
//  else{
//    items=[{
//      img: user1,
//      name: "Omar",
//      notification: "added an new",
//      role: "design page", 
//    }]
//  }
  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      sx={{ "& .MuiPaper-root ": { borderRadius: "15px" } }}
      keepMounted
      transitionDuration={0}
    >
      <Typography sx={{ ml: 2, mt: 1 }}>New</Typography>
      {items.map((item, i) => (
        <MenuItem key={i} sx={{ borderBottom: "1px solid #ccc" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={`http://localhost:8000/api/storage/${item.img}`} alt={item.name} />
            <Box>
              <Box sx={{ ml: 1, display: "flex" }}>
                <Typography
                  sx={{
                    color: "#565656",
                    fontWeight: 600,
                    fontSize: "13px",
                    mr: 0.5,
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{ fontWeight: 400, fontSize: "13px", color: "#808080" }}
                >
                  {item.notification}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "13px",
                  color: "#808080",
                  ml: 1,
                }}
              >
                {item.role}
              </Typography>
            </Box>
          </Box>
        </MenuItem>
      ))}
    </Popover>
  );
}
// const items = [
//   {
//     img: user1,
//     name: "data",
//     notification: "added an new",
//     role: "design page",
//   },
  // {
  //   img: user2,
  //   name: "Ahmed",
  //   notification: "added an new",
  //   role: "Plan Row",
  // },
  // {
  //   img: user1,
  //   name: "Omar",
  //   notification: "added an new",
  //   role: "design page",
  // },
  // {
  //   img: user2,
  //   name: "Ahmed",
  //   notification: "added an new",
  //   role: "Plan Row",
  // },
  // {
  //   img: user1,
  //   name: "Omar",
  //   notification: "added an new",
  //   role: "design page",
  // },
// ];
