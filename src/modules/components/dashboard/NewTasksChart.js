import { Typography, Card, Box, CardContent } from "@mui/material";
import { Line } from "@ant-design/plots";
import { POPPINS } from "../../../utils/config";

export default function NewTasksChart() {
  const data = [
    {
      year: "1991",
      value: 3,
    },
    {
      year: "1992",
      value: 4,
    },
    {
      year: "1993",
      value: 3.5,
    },
    {
      year: "1994",
      value: 5,
    },
    {
      year: "1995",
      value: 4.9,
    },
    {
      year: "1996",
      value: 6,
    },
    {
      year: "1997",
      value: 7,
    },
    {
      year: "1998",
      value: 9,
    },
    {
      year: "1999",
      value: 13,
    },
  ];
  const config = {
    data,
    color: "#B4CD93",
    xField: "year",
    yField: "value",
    label: {},
    point: {
      size: 5,
      shape: "round",
      style: {
        fill: "white",
        stroke: "#B4CD93",
        lineWidth: 2,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "red",
        },
      },
    },
    interactions: [
      {
        type: "marker-active",
      },
    ],
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
          New Tasks
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
          250
        </Typography>
        <Box sx={{ position: "absolute", right: "30px", top: "38px" }}>
          <Line
            {...config}
            withInnerLines={false}
            style={{
              width: "350px",
              height: "150px",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
}
