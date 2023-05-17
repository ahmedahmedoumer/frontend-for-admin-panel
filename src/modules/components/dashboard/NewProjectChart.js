import { POPPINS } from "../../../utils/config";
import { Typography, Box, Card, CardContent } from "@mui/material";
import arrowUpRight from "../../../assets/images/arrow-up-right.png";
import arrowDownLeft from "../../../assets/images/arrow-down-left.png";
import { Gauge } from "@ant-design/plots";
import { useSelector } from "react-redux";

export default function NewProjectChart() {
  const newProjects=useSelector((state)=>state);
  const config = {
    percent: 0.75,
    range: {
      color: "l(0) 0:#B4CD93 1:#427A5B",
    },
    gaugeStyle: {
      lineCap: "round",
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: "36px",
          color: "#4B535E",
        },
        formatter: () => "70%",
      },
      content: {
        style: {
          fontSize: "24px",
          lineHeight: "44px",
          color: "#4B535E",
        },
        formatter: () => "Projects",
      },
    },
  };

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
          New Projects
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
          +{newProjects.dashboard_data.newProject}
        </Typography>
        <Box sx={{ position: "absolute", right: "50px", bottom: "10px" }}>
          <Gauge
            style={{
              width: "200px",
              height: "150px",
            }}
            {...config}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={arrowUpRight} alt="arrowUpRight" />
                <Typography
                  sx={{
                    ...POPPINS,
                    fontWeight: 500,
                    fontSize: "17px",
                    lineHeight: "22px",
                    color: "#565656",
                    ml: 1,
                  }}
                >
                  + 3,49%
                </Typography>
              </Box>
              <Typography
                sx={{
                  ...POPPINS,
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "#565656",
                  ml: 1,
                  textAlign: "center",
                }}
              >
                This month
              </Typography>
            </Box>
            <Box sx={{ marginLeft: "10px" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    ...POPPINS,
                    fontWeight: 300,
                    fontSize: "17px",
                    lineHeight: "22px",
                    color: "#B8B8B8",
                    ml: 1,
                  }}
                >
                  - 0,13%
                </Typography>
                <img src={arrowDownLeft} alt="arrowDownLeft" />
              </Box>
              <Typography
                sx={{
                  ...POPPINS,
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "16px",
                  color: "#B8B8B8",
                  ml: 1,
                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                Last month
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
