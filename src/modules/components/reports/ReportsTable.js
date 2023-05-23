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
import team1 from "../../../assets/images/users/planner.svg";
import team2 from "../../../assets/images/users/creator.png";
import moment from "moment";
import Pagination from "../../Pagination";
import view from "../../../assets/images/view.svg";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function ReportsTable(props) {
  const { setSelectedUser,pageSize,setCurrentPage} = props;
   const Selector=useSelector((state)=>state);
  const tableColumns = [
    <TableCell key="name">User Name</TableCell>,
    <TableCell key="title">Team</TableCell>,
    <TableCell key="email">Status</TableCell>,
    <TableCell key="time">Recieved Time</TableCell>,
    <TableCell key="status">Submit date</TableCell>,
    <TableCell key="date">View</TableCell>,
  ];

console.log(Selector.reports_data);
const reportData=Selector.reports_data;
// if(reportData.length!=0){
  const reports=reportData.map((reportItem)=>({
    img:user1,
    name:reportItem.length!=0 ? reportItem.firstName:null,
    team:[
     {
      img:team1,
      name:reportItem.length!=0 ?reportItem.planner.firstName:null,
     },
     {
       img:team2,
       name:reportItem.length!=0 ?reportItem.designer.firstName:null,
     },
    ],
    recievedTime:reportItem.length!=0  ? [moment(reportItem.planner.created_at).format('YYYY-MM-DD hh:mm:ss'),moment(reportItem.planner.created_at).format('YYYY-MM-DD hh:mm:ss')]:[null,null],
    status: ["approved","pending"],
    submitDate:reportData.length!=0  ? [moment(reportItem.designer.created_at).format('YYYY-MM-DD hh:mm:ss'), moment(reportItem.designer.created_at).format('YYYY-MM-DD hh:mm:ss')]:[null,null],
    id:reportItem.length!=0 ?[reportItem.planner.id+'/'+reportItem.id,reportItem.designer.id+'/'+reportItem.id]:[null,null],
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
            justifyContent: "center",
            textAlign: "center",
            py: 1,
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
          {reports.map((item, index) => (
            <RowItem
              key={index}
              item={item}
              setSelectedUser={setSelectedUser}
            />
          ))}
        </TableBody>
      </Table>
      <Box sx={{ ml: 4, mb: 4 }}>
        <Pagination pageSize={pageSize} setCurrentPage={setCurrentPage}/>
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
        {item.team.map((team, i) => (
          <Box
            key={i}
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "center",
              mx: "auto",
              maxWidth: 120,
              width: "100%",
            }}
          >
            <img
              src={team.img}
              alt={team.name}
              style={{ width: "20px", height: "20px" }}
            />
            <Typography
              sx={{
                ml: 1,
                color: "#7F7F7F",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {team.name}
            </Typography>
          </Box>
        ))}
      </TableCell>
      <TableCell>
        {item.status.map((status, i) => (
          <Box
            key={i}
            sx={{
              background: STATUS_BG_COLOR[status],
              color: STATUS_COLOR[status],
              width: "92px",
              margin: "0 auto",
              borderRadius: "5px",
              fontWeight: 300,
              fontSize: "12px",
              mb: 1.5,
            }}
          >
            <Typography>{STATUS_MESSAGE[status]}</Typography>
          </Box>
        ))}
      </TableCell>
      <TableCell>
        {item.recievedTime.map((time, i) => (
          <Typography
            key={i}
            sx={{
              mb: 1.5,
              fontWeight: 500,
              fontSize: "14px",
              color: "#7F7F7F",
            }}
          >
            {time}
          </Typography>
        ))}
      </TableCell>
      <TableCell>
        {item.submitDate.map((date, i) => (
          <Typography
            key={i}
            sx={{
              mb: 1.5,
              fontWeight: 500,
              fontSize: "14px",
              color: "#7F7F7F",
            }}
          >
            {date}
          </Typography>
        ))}
      </TableCell>
      <TableCell>
      {item.id.map((id,i)=>(
        <Typography>
        <IconButton onClick={() => setSelectedUser(true)}>
          <img src={view} alt="view" id={id} />
        </IconButton>
        </Typography>
         ))}
      </TableCell>
    </TableRow>
  );
}

const STATUS_COLOR = {
  new: "#8D1C04",
  approved: "#427A5B",
  notYet: "#161211",
  pending: "#692600",
};

const STATUS_BG_COLOR = {
  new: "#FFBBB7",
  approved: "#DEEDE5",
  notYet: "#D1D1D1",
  pending: "#FFC19E",
};

const STATUS_MESSAGE = {
  new: "New",
  approved: "approved",
  notYet: "Not Yet",
  pending: "Pending",
};
