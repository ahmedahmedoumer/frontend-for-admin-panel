import { Box } from "@mui/system";

export default function ViewContainer({ sx, children }) {
  return (
    <Box
      sx={{
        ...sx,
        flexGrow: 1,
        py: 4,
        px: 8,
      }}
    >
      {children}
    </Box>
  );
}
