import { Box, Button } from "@mui/material";
import PageHeader from "../../modules/PageHeader";
import ViewContainer from "../../modules/ViewContainer";
import plusIcon from "../../assets/images/plus.svg";
import { useState,useEffect } from "react";
import DesignLibraryTable from "../../modules/components/design-library/DesignLibraryTable";
import ViewDate from "../../modules/ViewDate";
import AddNewDesignDialog from "../../modules/components/design-library/AddNewDesignDialog";
import { useDispatch,useSelector } from "react-redux";
import axios from 'axios';
export default function DesignLibrary() {
  const [openDialog, setOpenDialog] = useState(false);
  const [designLibrary,setDesignLibrary]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [pageSize,setPageSize]=useState(null);
  const perPage=9;

  useEffect(()=>{
    fetchDesignLibrary();
  },[currentPage]);
  const fetchDesignLibrary=async()=>{
      const fetchData=await axios.get(`http://localhost:8000/api/design-library?perPage=${perPage}&currentPage=${currentPage}`,{
        headers:{
          'Authorization':'Bearer ' + localStorage.getItem('token'),
        }
      })
      .then(function(response){
          // console.log(response.data.data);
          setDesignLibrary(response.data.data);
          setPageSize(response.data.last_page);
      })
      .catch(function(error){
          console.log(error);
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
            onClick={() => setOpenDialog(true)}
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
      <Box>
        <DesignLibraryTable 
        pageSize={pageSize} 
        designLibrary={designLibrary} 
        setCurrentPage={setCurrentPage} 
       />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ViewDate />
      </Box>

      <AddNewDesignDialog
        title="Add A New Design Guide"
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      />
    </ViewContainer>
  );
}
