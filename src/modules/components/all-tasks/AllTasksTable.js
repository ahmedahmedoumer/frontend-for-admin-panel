import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Box,
  Card,
  IconButton,
} from "@mui/material";
import Pagination from "../../Pagination";
import view from "../../../assets/images/view.svg";

export default function AllTasksTable(props) {
  const { setSelectedUser, data ,setCurrentPage, pageSize,allTasks } = props;

  const tableColumns = [
    <TableCell key="name">User Name</TableCell>,
    <TableCell key="industry">Industry</TableCell>,
    <TableCell key="status">Status</TableCell>,
    <TableCell key="recievedTime">Recieved Time</TableCell>,
    <TableCell key="submitDate">Submit date</TableCell>,
    <TableCell key="view">View</TableCell>,
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
            justifyContent: "center",
            textAlign: "center",
            py: 1.5,
            boderBottom: "1px solid #ccc",
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
            <RowItem
              key={index}
              item={item}
              index={index}
              setSelectedUser={setSelectedUser}
            />
          ))}
        </TableBody>
      </Table>
      <Box sx={{ ml: 4, mb: 4 }}>
        <Pagination setCurrentPage={setCurrentPage} pageSize={pageSize} />
      </Box>
    </Card>
  );
}

function RowItem(props) {
  const { item, setSelectedUser } = props;

  return (
    <TableRow>
      <TableCell>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mx: "auto",
            maxWidth: 120,
            width: "100%",
          }}
        >
          <img src={item.img} alt={item.name} />
          <Typography
            sx={{ ml: 2, fontSize: "16px", fontWeight: 500, color: "#808080" }}
          >
            {item.name}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Typography
          sx={{
            ml: 1,
            color: "#7F7F7F",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          {item.industry}
        </Typography>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            background: STATUS_BG_COLOR[item.status],
            color: STATUS_COLOR[item.status],
            width: "92px",
            margin: "0 auto",
            fontWeight: 300,
            fontSize: "12px",
            borderRadius: "5px",
          }}
        >
          <Typography>{STATUS_MESSAGE[item.status]}</Typography>
        </Box>
      </TableCell>
      <TableCell>
        {item.recievedTime.map((time) => (
          <Typography>{time}</Typography>
        ))}
      </TableCell>
      <TableCell>
        {item.submitDate.map((date) => (
          <Typography>{date}</Typography>
        ))}
      </TableCell>
      <TableCell>
        <IconButton onClick={() => setSelectedUser(item.name)}>
          <img src={view} alt="view" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

const STATUS_COLOR = {
  new: "#8D1C04",
  approved: "#427A5B",
  notYet: "#161211",
  pending: "#692600",
  needEdit: "#161211",
};

const STATUS_BG_COLOR = {
  new: "#FFBBB7",
  approved: "#DEEDE5",
  notYet: "#D1D1D1",
  pending: "#FFC19E",
  needEdit: "#FDF8CE",
};

const STATUS_MESSAGE = {
  new: "New",
  approved: "Approved",
  notYet: "Not Yet",
  pending: "Pending",
  needEdit: "Need Edit",
};
