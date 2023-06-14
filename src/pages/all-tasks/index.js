import { Box, Typography } from "@mui/material";
import { useState,useEffect } from "react";
import AllTasksTable from "../../modules/components/all-tasks/AllTasksTable";
import UserDetiail from "../../modules/components/all-tasks/UserDetiail";
import PageHeader from "../../modules/PageHeader";
import ViewContainer from "../../modules/ViewContainer";
import ViewDate from "../../modules/ViewDate";
import user1 from "../../assets/images/users/user1.png";
import user2 from "../../assets/images/users/user2.png";
import user3 from "../../assets/images/users/user3.png";
import user4 from "../../assets/images/users/user4.png";
import user5 from "../../assets/images/users/user5.png";
import user6 from "../../assets/images/users/user6.png";
import arrow from "../../assets/images/arrow.svg";
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux";
import Loading from "../../modules/Loading";

export default function AllTasks() {
  const Dispatch=useDispatch();
  const Selector=useSelector(state=>state);
  const [isLoading,setIsLoading]=useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage,setCurrentPage]=useState(1);
  const [pageSize,setPageSize]=useState(null);
  const [allTasks,setAllTasks]=useState([]);
  const PerPage=6;
  useEffect(()=>{
    fetchAllTasks();
  },[currentPage]);

  const fetchAllTasks=async()=>{
     setIsLoading(true);
     const fetchData=await axios.get(`http://localhost:8000/api/all-tasks?perPage=${PerPage}&currentPage=${currentPage}`,{
      headers:{
        'Authorization':'Bearer ' + localStorage.getItem('token')
      }
     })
     .then(function(response){
      setIsLoading(false);
      console.log(response.data.data);
      setAllTasks(response.data.data);
      setPageSize(response.data.last_page);
     })
     .catch(function(error){
      setIsLoading(false);
      console.log(error.response);
     });
  }
const taskData=allTasks;
  const data = [
    {
      img: user1,
      name: "Omar",
      industry: "Real Estet",
      recievedTime: ["22/04/2023", "7:00 Am"],
      status: "new",
      submitDate: ["22/04/2023", "7:00 Am"],
    },
    {
      img: user2,
      name: "Ahmed",
      industry: "Real Estet",
      recievedTime: ["22/04/2023", "7:00 Am"],
      status: "approved",
      submitDate: ["22/04/2023", "7:00 Am"],
    },
    {
      img: user3,
      name: "Leo",
      industry: "Real Estet",
      recievedTime: ["22/04/2023", "7:00 Am"],
      status: "needEdit",
      submitDate: ["22/04/2023", "7:00 Am"],
    },
    {
      img: user4,
      name: "Cris",
      industry: "Real Estet",
      recievedTime: ["22/04/2023", "7:00 Am"],
      status: "pending",
      submitDate: ["22/04/2023", "7:00 Am"],
    },
    {
      img: user5,
      name: "Matheo",
      industry: "Real Estet",
      recievedTime: ["22/04/2023", "7:00 Am"],
      status: "new",
      submitDate: ["22/04/2023", "7:00 Am"],
    },
    {
      img: user6,
      name: "Sergio",
      industry: "Real Estet",
      recievedTime: ["22/04/2023", "7:00 Am"],
      status: "approved",
      submitDate: ["22/04/2023", "7:00 Am"],
    },
  ];

  return (
    <ViewContainer>
    <loading isLoading={isLoading} />
      {selectedUser ? (
        <Box sx={{ mb: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "30px",
                lineHeight: "34px",
                color: "#565656",
                mb: 0.5,
              }}
            >
              All Tasks
            </Typography>
            <Box sx={{ mx: 2 }}>
              <img src={arrow} />
            </Box>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "30px",
                lineHeight: "34px",
                color: "#565656",
                mb: 0.5,
              }}
            >
              User Name
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#B3B3B3",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: "22px",
              }}
            >
              Lookup for All the All tasks
            </Typography>
          </Box>
        </Box>
      ) : (
        <PageHeader
          title="All Tasks"
          description="Lookup for All the All tasks"
          selectedUser={selectedUser}
        />
      )}

      {selectedUser ? (
        <UserDetiail 
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        isLoading={isLoading} 
        setIsLoading={setIsLoading}
        />
      ) : (
        <AllTasksTable data={taskData} isLoading={isLoading} setIsLoading={setIsLoading} setSelectedUser={setSelectedUser} pageSize={pageSize} setCurrentPage={setCurrentPage} />
      )}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ViewDate />
      </Box>
    </ViewContainer>
  );
}
