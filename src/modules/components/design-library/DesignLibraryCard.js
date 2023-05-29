import { Typography, Grid, Paper } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
export default function DesignLibraryCard(props) {
  const { item, openDialog,setClickedDesign } = props;
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const imageModule = await import(`../../../assets/images/${item.img}`);
        setImageSrc(imageModule.default);
      } catch (error) {
        console.error('Failed to load image:', error);
      }
    };

    loadImage();
  }, []);
  const styles = {
    paperContainer: {
      backgroundImage: `url(${imageSrc})`,
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
        item.img=setImageSrc;
        setClickedDesign({
             id:item.id,
             sourceFile:item.sourceFile,
             img:imageSrc,
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
