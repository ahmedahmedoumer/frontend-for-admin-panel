import {
  TextField,
  Typography,
  Button,
  Box,
  InputAdornment,
} from "@mui/material";
import { useRef, useState } from "react";
import filterIcon from "../assets/images/filter.svg";
import search from "../assets/images/search.svg";
import FilterPopover from "./FilterPopover";

export default function PageHeader(props) {
  const { title, description, serchValue, onSearch, sx } = props;
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  return (
    <Box
      sx={{ ...sx }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "30px",
            lineHeight: "34px",
            color: "#565656",
            mb: 0.5,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "#B3B3B3",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "22px",
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box>
        <TextField
          sx={{
            border: "1px solid #7F7F7F",
            borderRadius: 2,
            background: "#F2F2F2",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={search} alt="search" />
              </InputAdornment>
            ),
          }}
          size="small"
          name="search"
          placeholder="Search"
          value={serchValue}
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button
          ref={ref}
          onClick={() => setIsOpen(true)}
          sx={{
            color: "#978F8F",
            textTransform: "unset",
            background: "#F2F2F2",
            border: "1px solid #7F7F7F",
            borderRadius: 2,
            ml: 1,
            py: 0.88,
          }}
          startIcon={<img src={filterIcon} alt="filter" />}
        >
          Filter
        </Button>
      </Box>
      <FilterPopover
        onClose={() => setIsOpen(false)}
        open={isOpen}
        anchorEl={ref.current}
      />
    </Box>
  );
}
