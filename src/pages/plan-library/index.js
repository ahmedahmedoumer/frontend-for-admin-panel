import { Box, Button } from "@mui/material";
import ViewContainer from "../../modules/ViewContainer";
import plusIcon from "../../assets/images/plus.svg";
import PageHeader from "../../modules/PageHeader";
import PlanLibraryTable from "../../modules/components/plan-library/PlanLibraryTable";
import ViewDate from "../../modules/ViewDate";
import CreateAndUpdateDialog from "../../modules/CreateAndUpdateDialog";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from 'axios';

export default function PlanLibrary() {
  const [openDialog, setOpenDialog] = useState({});
  const [pageSize,setPageSize]=useState(1);
  const [currentPage,setCurrentPage]=useState(1);
  const [planLibrary,setPlanLibrary]=useState([]);
  const perPage=4;
useEffect(()=>{
  fetchPlanLibrary();
},[currentPage]);
const fetchPlanLibrary=async()=>{
      const fetchData=await axios.get(`http://localhost:8000/api/plan-library?perPage=${perPage}&currentPage=${currentPage}`,{
        headers:{
          'Authorization':'Bearer '+localStorage.getItem('token'),
        }
      })
      .then(function(response){
         console.log(response.data.data);
         setPlanLibrary(response.data.data);
         setPageSize(response.data.last_page);
      })
      .catch(function(error){
         console.log(error.response.data);
      });
}


  return (
    <ViewContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <PageHeader
          sx={{ flex: 1 }}
          title="Plan Library"
          description="Lookup for All the Plan Library"
        />
        <Box>
          <Button
            startIcon={<img src={plusIcon} alt="plus" />}
            onClick={() => setOpenDialog({ label: "add", value: true })}
            sx={{
              color: "white",
              background:
                "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)",
              border: "0.5px solid #7F7F7F",
              borderRadius: "8px",
              textTransform: "unset",
              pl: 4,
              pr: 2,
              ml: 1,
              py: 0.88,
              mt: -0.3,
            }}
          >
            Add a new Plan
          </Button>
        </Box>
      </Box>
      <PlanLibraryTable setOpenDialog={setOpenDialog} planLibrary={planLibrary} pageSize={pageSize} setCurrentPage={setCurrentPage} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ViewDate />
      </Box>
      {openDialog.label === "add" && openDialog.value && (
        <CreateAndUpdateDialog
          title="Add A Prompt"
          label1="Plan Title"
          label2="Description"
          label3="Prompt"
          placeholder1="Write your Plan Title here"
          placeholder2="write a description for you plan"
          placeholder3="write a Prompt for you plan "
          open={openDialog.value}
          submit="Add"
          onClose={() => setOpenDialog(false)}
        />
      )}

      {openDialog.label === "edit" && openDialog.value && (
        <CreateAndUpdateDialog
          title="Editing A Prompt"
          label1="Plan Title"
          label2="Description"
          label3="Prompt"
          placeholder1="Write your Plan Title here"
          placeholder2="write a description for you plan"
          placeholder3="write a Prompt for you plan"
          open={openDialog.value}
          submit="Update"
          onClose={() => setOpenDialog(false)}
        />
      )}
    </ViewContainer>
  );
}
