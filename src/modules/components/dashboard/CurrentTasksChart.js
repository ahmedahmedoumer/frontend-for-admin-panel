import { Typography, Box, Card, CardContent } from "@mui/material";
import { POPPINS } from "../../../utils/config";
import progressImg from "../../../assets/images/progressImg.svg";
import { useSelector } from "react-redux";

export default function CurrentTasksChart() {
  const currentTask=useSelector((state)=>state);
  return (
    <Card
      sx={{
        height: "200px",
        background: "#F2F2F2",
        boxShadow: "-2px 4px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "30px",
        paddingLeft: "40px",
        position: "relative",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            ...POPPINS,
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "34px",
            color: "#565656",
            mb: 2,
          }}
        >
          Current Tasks
        </Typography>
        <Typography
          sx={{
            ...POPPINS,
            fontWeight: 500,
            fontSize: "44px",
            lineHeight: "66px",
            color: "#565656",
            background:
              "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)",
            backgroundClip: "text",
            textFillColor: "transparent",
          }}
        >
          {currentTask.dashboard_data.currentTask}
        </Typography>
        <Box sx={{ position: "absolute", right: "50px", top: "15px" }}>
          <img src={progressImg} width="200px" height="200px" alt="prgress" />
        </Box>
      </CardContent>
    </Card>
  );
}
