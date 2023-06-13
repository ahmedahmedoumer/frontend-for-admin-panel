import { Typography, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
export default function DesignLibraryCard(props) {
  const { item, openDialog,setClickedDesign } = props;
  const styles = {
    paperContainer: {
      backgroundImage: `url(http://localhost:8000/api/storage/${item.img?item.img:'design.svg'})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "240px",
      filter: "drop-shadow(-2px 4px 10px rgba(0, 0, 0, 0.25))",
      borderRadius: "20px",
      display: "flex",
      alignItems: "flex-end",
    },
  };
  return (
    <Grid
      item
      lg={2.4}
      sx={{ cursor: "pointer" }}
      onClick={() =>{
        setClickedDesign({
             id:item.id,
             sourceFile:item.sourceFile,
             img:item.img,
             label:item.label,
        })
        openDialog(true)
      } }
    >
      <Paper style={styles.paperContainer}>
        <Typography sx={{ color: "#fff", ml: 1, mb: 1 }}>{item.label}</Typography>
      </Paper>
    </Grid>
  );
}
