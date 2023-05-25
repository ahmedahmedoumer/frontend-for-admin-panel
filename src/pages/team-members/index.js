import { Button, Box } from "@mui/material";
import PageHeader from "../../modules/PageHeader";
import ViewContainer from "../../modules/ViewContainer";
import plusIcon from "../../assets/images/plus.svg";
import ViewDate from "../../modules/ViewDate";
import TeamMembersTable from "../../modules/components/team-members/TeamMembersTable";
import { useState,useEffect } from "react";
import EditUserDialog from "../../modules/EditUserDialog";
import AreYouSureDialog from "../../modules/components/AreYouSureDialog";
import axios from 'axios'
export default function TeamMembers() {

  const [teamMembers,setTeamMembers]=useState([]);
  const [editorDialog,setEditorDialog]=useState(null);
  const [updatedData,setUpdatedData]=useState([]);
  const [openDialog, setOpenDialog] = useState({});
  const [submitDialog, setSubmitDialog] = useState({});
  const [pageSize,setPageSize]=useState(1)
  const [currentPage,setCurrentPage]=useState(1);
  const perPage=6;
  useEffect(()=>{
    getTeamMembersData();
  },[currentPage]);
   
  const getTeamMembersData=async()=>{
    const fetch=await axios.get(`http://localhost:8000/api/all-team-members?perPage=${perPage}&currentPage=${currentPage}`,{
      headers:{
        'Authorization':'Bearer '+localStorage.getItem('token'),
      },
    })
    .then(function(response){
      console.log(response.data.data);
      setTeamMembers(response.data.data);
      setPageSize(response.data.last_page);
    })
    .catch(function(error){
      console.log(error.response);
    });
  }

  return (
    <ViewContainer>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <PageHeader
          sx={{ flex: 1 }}
          title="Team Members"
          description="Lookup for All the Team Members"
        />
        <Box>
          <Button
            onClick={() => setOpenDialog({ label: "add", value: true })}
            startIcon={<img src={plusIcon} alt="plus" />}
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
            Add a new Member
          </Button>
        </Box>
      </Box>
      <TeamMembersTable
       setEditorDialog={setEditorDialog}
       setOpenDialog={setOpenDialog} 
       setUpdatedData={setUpdatedData}
       teamMembers={teamMembers} 
       pageSize={pageSize} 
       setCurrentPage={setCurrentPage}
       />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ViewDate />
      </Box>

      {openDialog.label === "add" && openDialog.value && (
        <EditUserDialog
          submitText="Add"
          updatedData={updatedData}
          openSubmit={() => setSubmitDialog({ label: "add", value: true })}
          open={openDialog.value}
          onClose={() => setOpenDialog(false)}
        />
      )}
      {openDialog.label === "edit" && openDialog.value && (
        <EditUserDialog
          submitText="Update"
          updatedData={updatedData}
          openSubmit={() => setSubmitDialog({ label: "edit", value: true })}
          open={openDialog.value}
          onClose={() => setOpenDialog(false)}
        />
      )}
      {submitDialog.label === "add" && submitDialog.value && (
        <AreYouSureDialog
          updateUserData={updatedData}
          submitText="Yes, Add"
          open={submitDialog.value}
          onClose={() => setSubmitDialog(false)}
          title="Are you sure you want to  Add Member ?"
          submit={() => setOpenDialog({ ...openDialog, value: false })}
        />
      )}
      {submitDialog.label === "edit" && submitDialog.value && (
        <AreYouSureDialog
          updateUserData={updatedData}
          open={submitDialog.value}
          onClose={() => setSubmitDialog(false)}
          title="Are you sure you want to Edit Member ?"
          submitText="Yes, Edit"
          submit={() => setOpenDialog({ ...openDialog, value: false })}
        />
      )}
 </ViewContainer>

  );
      }
