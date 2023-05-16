import { Typography, Card, CardContent, Box } from "@mui/material";
import { POPPINS } from "../../../utils/config";
import chartIcon from "../../../assets/images/Chart.png";

export default function dashboardChartOne() {
  return (
    <Card
      sx={{
        height: "200px",
        background: "#F2F2F2",
        boxShadow: "-2px 4px 10px rgba(0, 0, 0, 0.25)",
        borderRadius: "30px",
        paddingLeft: "40px",
        position: "relative",
        marginBottom: "32px",
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
          Current Projects
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
          +30,000
        </Typography>
        <img
          src={chartIcon}
          alt="chartIcon"
          style={{ position: "absolute", bottom: 0, right: 0 }}
        />
      </CardContent>
    </Card>
  );
}
