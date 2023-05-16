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
import user1 from "../../../assets/images/users/user1.png";
import user2 from "../../../assets/images/users/user2.png";
import user3 from "../../../assets/images/users/user3.png";
import user4 from "../../../assets/images/users/user4.png";
import user5 from "../../../assets/images/users/user5.png";
import user6 from "../../../assets/images/users/user6.png";
import setting from "../../../assets/images/setting.svg";
import Pagination from "../../Pagination";

export default function TeamMembersTable(props) {
  const { setOpenDialog } = props;

  const tableColumns = [
    <TableCell key="name">User Name</TableCell>,
    <TableCell key="title">Title</TableCell>,
    <TableCell key="email">Email</TableCell>,
    <TableCell key="status">Number</TableCell>,
    <TableCell key="status">Status</TableCell>,
    <TableCell key="date">Joining date</TableCell>,
  ];

  const data = [
    {
      img: user1,
      name: "Omar",
      title: "Planner",
      status: "active",
      email: "omar123@abc.com",
      number: "+010213123121",
      date: "22/4/2023",
    },
    {
      img: user2,
      name: "Omar",
      title: "Manager",
      status: "active",
      email: "omar123@abc.com",
      number: "+010213123121",
      date: "22/4/2023",
    },
    {
      img: user3,
      name: "Omar",
      title: "Creator",
      status: "active",
      email: "omar123@abc.com",
      number: "+010213123121",
      date: "22/4/2023",
    },
    {
      img: user4,
      name: "Omar",
      title: "Planner",
      status: "hold",
      email: "omar123@abc.com",
      number: "+010213123121",
      date: "22/4/2023",
    },
    {
      img: user5,
      name: "Omar",
      title: "Manager",
      status: "hold",
      email: "omar123@abc.com",
      number: "+010213123121",
      date: "22/4/2023",
    },
    {
      img: user6,
      name: "Omar",
      status: "hold",
      title: "Creator",
      email: "omar123@abc.com",
      number: "+010213123121",
      date: "22/4/2023",
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
          <Typography sx={{ ml: 2 }}>{item.name}</Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Typography>{item.title}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{item.email}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{item.number}</Typography>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            background: STATUS_BG_COLOR[item.status],
            color: STATUS_COLOR[item.status],
            width: "92px",
            margin: "0 auto",
            borderRadius: "5px",
          }}
        >
          <Typography>{STATUS_MESSAGE[item.status]}</Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ mr: 2 }}>{item.date}</Typography>
          <IconButton
            onClick={() => setOpenDialog({ label: "edit", value: true })}
          >
            <img src={setting} alt="setting" />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  );
}

const STATUS_COLOR = {
  active: "#427A5B",
  hold: "#3F3904",
};

const STATUS_BG_COLOR = {
  active: "#DEEDE5",
  hold: "#FDF8CE",
};

const STATUS_MESSAGE = {
  active: "Active",
  hold: "Hold",
};
