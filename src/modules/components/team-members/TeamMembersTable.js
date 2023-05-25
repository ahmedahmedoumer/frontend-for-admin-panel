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
  const { setOpenDialog,teamMembers, pageSize,setCurrentPage } = props;

  const tableColumns = [
    <TableCell key="name">User Name</TableCell>,
    <TableCell key="title">Title</TableCell>,
    <TableCell key="email">Email</TableCell>,
    <TableCell key="number">Number</TableCell>,
    <TableCell key="status">Status</TableCell>,
    <TableCell key="date">Joining date</TableCell>,
  ];
 const teamMembersData=teamMembers;
  const data=teamMembersData.map((teamMembers)=>({
    img: user1,
    name: teamMembers.firstName,
    email: teamMembers.email,
    title: teamMembers.title,
    status: teamMembers.status,
    number:teamMembers.phone,
    date:teamMembers.created_at,
  }));   
  
  
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
        <Pagination pageSize={pageSize} setCurrentPage={setCurrentPage} />
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
          <img src={item.img} alt={"sample data"} />
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
          <Typography sx={{ mr: 2 }}>{item.joiningDate
          }</Typography>
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
  Active: "#427A5B",
  Hold: "#3F3904",
};

const STATUS_BG_COLOR = {
  Active: "#DEEDE5",
  Hold: "#FDF8CE",
};

const STATUS_MESSAGE = {
  Active: "Active",
  Hold: "Hold",
};
