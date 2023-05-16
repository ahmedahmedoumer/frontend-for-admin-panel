import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Box,
  Card,
  TextField,
  IconButton,
} from "@mui/material";
import Pagination from "../../Pagination";
import promptIcon from "../../../assets/images/promptIcon.svg";
import settingIcon from "../../../assets/images/setting.svg";
import { POPPINS } from "../../../utils/config";

export default function PlanLibraryTable(props) {
  const { setOpenDialog } = props;

  const tableColumns = [
    <TableCell key="name">
      <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
        Plan Title
      </Typography>
    </TableCell>,
    <TableCell key="title">
      <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
        Description
      </Typography>
    </TableCell>,
    <TableCell key="email">
      <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>Prompt</Typography>
    </TableCell>,
  ];

  const data = [
    {
      title: "Planner",
      description: "Write a description of your Plan",
      prompt: "Write The prompt of your Plan",
    },
    {
      title: "Planner",
      description: "Write a description of your Plan",
      prompt: "Write The prompt of your Plan",
    },
    {
      title: "Planner",
      description: "Write a description of your Plan",
      prompt: "Write The prompt of your Plan",
    },
    {
      title: "Planner",
      description: "Write a description of your Plan",
      prompt: "Write The prompt of your Plan",
    },
  ];

  return (
    <Card
      sx={{
        background: "#F2F2F2",
        borderRadius: "30px",
        p: 0,
        mt: 3,
        mb: 6,
        boxShadow: "none",
      }}
    >
      <Table
        sx={{
          background: "transparent",
          border: "none",
          mb: 2,
          "& td": {
            border: 0,
            justifyContent: "center",
            textAlign: "center",
            height: "96px",
            borderBottom: "1px solid #ccc",
          },
          "& th": {
            paddingTop: 4,
            border: 0,
            textAlign: "center",
          },
        }}
      >
        <TableHead>
          <TableRow>{tableColumns}</TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <RowItem key={index} item={item} setOpenDialog={setOpenDialog} />
          ))}
        </TableBody>
      </Table>
      <Box sx={{ ml: 4, mb: 4 }}>
        <Pagination />
      </Box>
    </Card>
  );
}

function RowItem(props) {
  const { item, setOpenDialog } = props;

  return (
    <TableRow>
      <TableCell>
        <Typography sx={{ fontWeight: 500, fontSize: "20px", ...POPPINS }}>
          {item.title}
        </Typography>
      </TableCell>
      <TableCell>
        <TextField
          sx={{
            borderRadius: 2,
            background: "#fff",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          fullWidth
          rows={2}
          multiline
          name={item.description}
          placeholder={item.description}
        />
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: " center",
          }}
        >
          <TextField
            sx={{
              borderRadius: 2,
              background: "#fff",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
            fullWidth
            rows={2}
            multiline
            name={item.prompt}
            placeholder={item.prompt}
          />
          <IconButton>
            <img src={promptIcon} alt="promptIcon" />
          </IconButton>
          <IconButton
            sx={{ px: 0 }}
            onClick={() => setOpenDialog({ label: "edit", value: true })}
          >
            <img src={settingIcon} alt="setting" />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  );
}
