import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Box,
  Card,
} from "@mui/material";
import user1 from "../../../assets/images/users/user1.png";
import user2 from "../../../assets/images/users/user2.png";
import user3 from "../../../assets/images/users/user3.png";
import user4 from "../../../assets/images/users/user4.png";
import user5 from "../../../assets/images/users/user5.png";
import user6 from "../../../assets/images/users/user6.png";
import planner from "../../../assets/images/users/planner.svg";
import creator from "../../../assets/images/users/creator.png";
import view from "../../../assets/images/view.svg";
import Pagination from "../../Pagination";

export default function UsersTable() {
  const tableColumns = [
    <TableCell key="name">User Name</TableCell>,
    <TableCell key="status">Creation Status</TableCell>,
    <TableCell key="email">Email</TableCell>,
    <TableCell key="planner">Planner</TableCell>,
    <TableCell key="creator">Creator</TableCell>,
  ];

  const data = [
    {
      img: user1,
      name: "Omar",
      status: "done",
      email: "omar123@abc.com",
      planner: {
        img: planner,
        name: "Nassef",
      },
      creator: {
        img: creator,
        name: "Matheo",
      },
    },
    {
      img: user2,
      name: "Ahmed",
      status: "pending",
      email: "Ahmed3@abc.com",
      planner: {
        img: planner,
        name: "Nassef",
      },
      creator: {
        img: creator,
        name: "Matheo",
      },
    },
    {
      img: user3,
      name: "Leo",
      status: "notActive",
      email: "Leo123@abc.com",
      planner: {
        img: planner,
        name: "Nassef",
      },
      creator: {
        img: creator,
        name: "Matheo",
      },
    },
    {
      img: user4,
      name: "Cris",
      status: "done",
      email: "Cris13231@abc.com",
      planner: {
        img: planner,
        name: "Nassef",
      },
      creator: {
        img: creator,
        name: "Matheo",
      },
    },
    {
      img: user4,
      name: "Cris",
      status: "done",
      email: "Cris13231@abc.com",
      planner: {
        img: planner,
        name: "Nassef",
      },
      creator: {
        img: creator,
        name: "Matheo",
      },
    },
    {
      img: user5,
      name: "Matheo",
      status: "pending",
      email: "Matheo1@abc.com",
      planner: {
        img: planner,
        name: "Nassef",
      },
      creator: {
        img: creator,
        name: "Matheo",
      },
    },
    {
      img: user6,
      name: "Sergio",
      status: "notActive",
      email: "Sergio123@abc.com",
      planner: {
        img: planner,
        name: "Nassef",
      },
      creator: {
        img: creator,
        name: "Matheo",
      },
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
            <RowItem key={index} item={item} />
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
  const { item } = props;
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
        <Typography>{item.email}</Typography>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={item.planner.img} alt={item.planner.img} />
          <Typography sx={{ ml: 2 }}>{item.planner.name}</Typography>
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
          <img src={item.creator.img} alt={item.creator.name} />
          <Typography sx={{ ml: 2, mr: 3 }}>{item.creator.name}</Typography>
          <img src={view} alt="view icon" />
        </Box>
      </TableCell>
    </TableRow>
  );
}

const STATUS_COLOR = {
  pending: "#692600",
  done: "#427A5B",
  notActive: "#242424",
};

const STATUS_BG_COLOR = {
  pending: "#FFC19E",
  done: "#DEEDE5",
  notActive: "#D1D1D1",
};

const STATUS_MESSAGE = {
  done: "Done",
  pending: "Pending",
  notActive: "Not Active",
};
