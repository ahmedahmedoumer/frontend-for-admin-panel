import { Card, Grid, Box } from "@mui/material";
import DesignLibraryCard from "./DesignLibraryCard";
import bigPlus from "../../../assets/images/bigPlus.svg";
import design from "../../../assets/images/design.svg";
import Pagination from "../../Pagination";
import EditeCardDialog from "./EditCardDialog";
import { useState } from "react";

export default function DesignLibraryTable(props) {
  const {pageSize,designLibrary,setCurrentPage }=props;
  const [openDialog, setOpenDialog] = useState(false);
  const [clickedDesign,setClickedDesign]=useState({});
  let data=[{
    img:design,
    label:"",
  }];
  console.log(designLibrary);
  if(designLibrary){
     data=designLibrary.map((item,index)=>({
      id:item.id?item.id:null,
      sourceFile:item.sourceFile?item.sourceFile:null,
      img:item.image?item.image:design,
      label:item.designTitle?item.designTitle:"",
     }));
  }
  console.log(data);
  //  data=design.map;
  //  data = [
  //   {
  //     img: design,
  //     label: "Wedding",
  //   },
  //   {
  //     img: design,
  //     label: "Wedding",
  //   },
  //   {
  //     img: design,
  //     label: "Wedding",
  //   },
    // {
    //   img: design,
    //   label: "Wedding",
    // },
    // {
    //   img: design,
    //   label: "Wedding",
    // },
    // {
    //   img: design,
    //   label: "Wedding",
    // },
    // {
    //   img: design,
    //   label: "Wedding",
    // },
    // {
    //   img: design,
    //   label: "Wedding",
    // },
    // {
    //   img: design,
    //   label: "Wedding",
    // },
  // ];
  return (
    <Card
      sx={{
        background: "#F2F2F2",
        borderRadius: "30px",
        p: 0,
        mt: 3,
        mb: 6,
        px: 1,
        py: 1.2,
        boxShadow: "none",
      }}
    >
      <Grid container spacing={3} justifyContent="space-between">
        {data.map((item, index) => (
          <DesignLibraryCard
            openDialog={setOpenDialog}
            setClickedDesign={setClickedDesign}
            key={index}
            item={item}
          />
        ))}
        <Grid item lg={2.4}>
          <Box
            sx={{
              background: "#fff",
              height: "240px",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={bigPlus} alt="plus" />
          </Box>
        </Grid>
        <EditeCardDialog
          open={openDialog}
          clickedDesign={clickedDesign}
          onClose={() => setOpenDialog(false)}
          submitText="Update"
        />
        <Box sx={{ ml: 4, mb: 4, mt: 3 }}>
          <Pagination
           pageSize={pageSize}
           setCurrentPage={setCurrentPage}
           />
        </Box>
      </Grid>
    </Card>
  );
}
