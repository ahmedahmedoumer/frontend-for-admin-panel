import { Box } from "@mui/material";
import { DateTime } from "luxon";

export default function ViewDate() {
  const currentTime = DateTime.now()
    .toLocaleString(DateTime.TIME_SIMPLE)
    .split(":");
  const time = currentTime[1].split(" ");
  const CurrentDate = DateTime.now().toFormat("dd/MM/yyyy");

  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" sx={{ mr: 7 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            border: "1px solid #CACACA",
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {currentTime[0]}
        </Box>
        <Box sx={{ mx: 1 }}>:</Box>
        <Box
          sx={{
            width: 40,
            height: 40,
            border: "1px solid #CACACA",
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {time[0]}
        </Box>
        <Box
          sx={{
            width: 40,
            height: 40,
            background:
              "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)",
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: 2,
          }}
        >
          {time[1]}
        </Box>
      </Box>
      <Box>{CurrentDate}</Box>
    </Box>
  );
}
