import { Typography, Grid, Box } from "@mui/material";
import ViewContainer from "../../modules/ViewContainer";
import CurrentProjectChart from "../../modules/components/dashboard/CurrentProjectChart";
import CurrentTasksChart from "../../modules/components/dashboard/CurrentTasksChart";
import NewProjectChart from "../../modules/components/dashboard/NewProjectChart";
import NewTasksChart from "../../modules/components/dashboard/NewTasksChart";
import ViewDate from "../../modules/ViewDate";
import UserCard from "../../modules/components/dashboard/UserCard";

export default function Dashboard() {
  return (
    <ViewContainer>
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "30px",
          lineHeight: "34px",
          color: "#565656",
          mb: 3,
        }}
      >
        Overview
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <CurrentProjectChart />
          <CurrentTasksChart />
        </Grid>
        <Grid item xs={6}>
          <NewProjectChart />
          <NewTasksChart />
        </Grid>
      </Grid>
      <Box>
        <UserCard />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ViewDate />
      </Box>
    </ViewContainer>
  );
}
