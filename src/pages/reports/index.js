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
import Loading from "../../modules/Loading";
export default function Reports() {
  const Disapatch=useDispatch();
  const Selector=useSelector((state)=>state);
  const [viewReportDetail,setViewReportDetail]=useState(null);
  const [selectedUser, setSelectedUser] = useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [pageSize,setPageSize]=useState(null);
  const [isLoading,setIsLoading]=useState(false);
  const [clickedType,setClickedType]=useState({});
  const perPage=5;
  const fetchReport=async()=>{
    setIsLoading(true);
    await axios.get(`http://localhost:8000/api/reports?perPage=${perPage}&currentPage=${currentPage}`,{
      headers:{
        'Authorization':'Bearer ' + localStorage.getItem('token'),
      }
    })
    .then(function(response){
      setIsLoading(false);
      Disapatch({
        type:SET_REPORTS_DATA,
        payload:response.data.data,
      });
      setPageSize(response.data.last_page);
      })
    .catch(function(error){
      setIsLoading(false);
      console.log(error.response);
    });
  }
  const data=Selector.reports_data;
  useEffect(()=>{
    fetchReport();
  },[pageSize]);
 
  return (
    <ViewContainer>
      <Loading isLoading={isLoading}/>
      <PageHeader
        title="Reports"
        description="Lookup for All the Design Library"
      />

      {selectedUser ? (
        <UserDetail
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        viewReportDetail={viewReportDetail} clickedType={clickedType} />
      ) : (
        <ReportsTable 
              setSelectedUser={setSelectedUser} 
              pageSize={pageSize} 
              setCurrentPage={setCurrentPage}
              setViewReportDetail={setViewReportDetail}
              setClickedType={setClickedType}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
         />
      )}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ViewDate />
      </Box>
    </ViewContainer>
  );
}
