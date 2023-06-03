import { Box } from "@mui/material";
import { useState,useEffect } from "react";
import ReportsTable from "../../modules/components/reports/ReportsTable";
import UserDetail from "../../modules/components/reports/UserDetail";
import PageHeader from "../../modules/PageHeader";
import ViewContainer from "../../modules/ViewContainer";
import ViewDate from "../../modules/ViewDate";
import axios from 'axios';
import { SET_REPORTS_DATA } from "../../context/actionTypes/actionTypes";
import { useDispatch,useSelector } from "react-redux";
export default function Reports() {
  const Disapatch=useDispatch();
  const Selector=useSelector((state)=>state);
  const [viewReportDetail,setViewReportDetail]=useState(null);
  const [selectedUser, setSelectedUser] = useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [pageSize,setPageSize]=useState(null);
  const [clickedType,setClickedType]=useState({});
  const perPage=5;
  const fetchReport=async()=>{
    await axios.get(`http://localhost:8000/api/reports?perPage=${perPage}&currentPage=${currentPage}`,{
      headers:{
        'Authorization':'Bearer ' + localStorage.getItem('token'),
      }
    })
    .then(function(response){
      Disapatch({
        type:SET_REPORTS_DATA,
        payload:response.data.data,
      });
      setPageSize(response.data.last_page);
      })
    .catch(function(error){
      console.log(error.response);
    });
  }
  const data=Selector.reports_data;
  useEffect(()=>{
    fetchReport();
  },[pageSize]);
 
  return (
    <ViewContainer>
      <PageHeader
        title="Reports"
        description="Lookup for All the Design Library"
      />

      {selectedUser ? (
        <UserDetail viewReportDetail={viewReportDetail} clickedType={clickedType} />
      ) : (
        <ReportsTable 
              setSelectedUser={setSelectedUser} 
              pageSize={pageSize} 
              setCurrentPage={setCurrentPage}
              setViewReportDetail={setViewReportDetail}
              setClickedType={setClickedType}
         />
      )}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ViewDate />
      </Box>
    </ViewContainer>
  );
}
