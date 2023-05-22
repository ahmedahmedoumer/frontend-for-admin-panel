import { Box } from "@mui/material";
import { useState,useEffect } from "react";
import ReportsTable from "../../modules/components/reports/ReportsTable";
import UserDetail from "../../modules/components/reports/UserDetail";
import PageHeader from "../../modules/PageHeader";
import ViewContainer from "../../modules/ViewContainer";
import ViewDate from "../../modules/ViewDate";
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux";
export default function Reports() {
  const Disapatch=useDispatch();
  const Selector=useSelector(state=state)
  const [selectedUser, setSelectedUser] = useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [pageSize,setPageSize]=useState(null);
  const [reports,setReports]=useState([]);
  const perPage=5;

  console.log(selectedUser);
  useEffect(()=>{
    fetchReport();
  },[currentPage]);
  const fetchReport=async()=>{
    const fetchData=await axios.get(`http://localhost:8000/api/reports?perPage=${perPage}&currentPage=${currentPage}`,{
      headers:{
        'Authorization':'Bearer ' + localStorage.getItem('token'),
      }
    })
    .then(function(response){
      console.log(response.data);
      setReports(response.data.data);
      setPageSize(response.data.last_page);
      })
    .catch(function(error){
      console.log(error.response);
    })
  }
  return (
    <ViewContainer>
      <PageHeader
        title="Reports"
        description="Lookup for All the Design Library"
      />

      {selectedUser ? (
        <UserDetail />
      ) : (
        <ReportsTable setSelectedUser={setSelectedUser} reports={reports} />
      )}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ViewDate />
      </Box>
    </ViewContainer>
  );
}
