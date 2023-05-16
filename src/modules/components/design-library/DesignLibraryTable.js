import { Card, Grid, Box } from "@mui/material";
import DesignLibraryCard from "./DesignLibraryCard";
import design from "../../../assets/images/design.svg";
import bigPlus from "../../../assets/images/bigPlus.svg";
import Pagination from "../../Pagination";
import EditeCardDialog from "./EditCardDialog";
import { useState } from "react";

export default function DesignLibraryTable() {
  const [openDialog, setOpenDialog] = useState(false);

  const data = [
    {
      img: design,
      label: "Wedding",
    },
    {
      img: design,
      label: "Wedding",
    },
    {
      img: design,
      label: "Wedding",
    },
    {
      img: design,
      label: "Wedding",
    },
    {
      img: design,
      label: "Wedding",
    },
    {
      img: design,
      label: "Wedding",
    },
    {
      img: design,
      label: "Wedding",
    },
    {
      img: design,
      label: "Wedding",
    },
    {
      img: design,
      label: "Wedding",
    },
  ];
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
            key={index}
            img={item.img}
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
          onClose={() => setOpenDialog(false)}
          submitText="Update"
        />
        <Box sx={{ ml: 4, mb: 4, mt: 3 }}>
          <Pagination />
        </Box>
      </Grid>
    </Card>
  );
}
