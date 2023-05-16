import { Typography, Grid, Paper } from "@mui/material";

export default function DesignLibraryCard(props) {
  const { img, openDialog } = props;
  const styles = {
    paperContainer: {
      backgroundImage: `url(${img})`,
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
      onClick={() => openDialog(true)}
    >
      <Paper style={styles.paperContainer}>
        <Typography sx={{ color: "#fff", ml: 1, mb: 1 }}>Wedding</Typography>
      </Paper>
    </Grid>
  );
}
