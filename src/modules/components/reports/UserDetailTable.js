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
import user1 from "../../../assets/images/users/user1.png";
import user3 from "../../../assets/images/users/user3.png";
import user4 from "../../../assets/images/users/user4.png";
import user5 from "../../../assets/images/users/user5.png";
import team1 from "../../../assets/images/users/planner.svg";
import Pagination from "../../Pagination";
import trashIcon from "../../../assets/images/trash.svg";
import editIcon from "../../../assets/images/edite.svg";
import { useEffect } from "react";
import axios from 'axios';

export default function UserDetailTable(props) {
  const { setOpenDialog,planner,user } = props;


  console.log(planner);
  console.log(user);
  const tableColumns = [
    <TableCell key="postID">Post ID</TableCell>,
    <TableCell key="textOnPost">Text on post</TableCell>,
    <TableCell key="caption">Caption</TableCell>,
    <TableCell key="hashtag">Hashtag</TableCell>,
    <TableCell key="planner">Planner</TableCell>,
    <TableCell key="planners"/>,
  ];
  useEffect(()=>{
      const fetchPlan=async()=>{
         await axios.get(`http://localhost:8000/api/getAllListOfplans?planId=${planner}&userId=${user.id}`,{
          headers:{
            'Authorization':'Bearer '+localStorage.getItem('token')
          }
        })
        .then(function(response){
          console.log(response);
        })
        .catch(function(error){
          console.log(error);
        })
      }
      fetchPlan();
  },[]);
  // let planData=allPlanData;
  // console.log(planData);
  // const data=allPlanData.map((item)=>({
  //   postId:item?item.plans?item.plans.id:null:null,
  //   textOnPost:item?item.plans?item.plans.textOnPost:null:null,
  //   caption:item?item.plans?item.plans.caption:null:null,
  //   hashtag:item?item.plans?item.plans.hashtag:null:null,
  //   planner: [
  //     {
  //       img: user1,
  //       name: "Penny",
  //     },
  // ]}))
  const data = [
    {
      postId: "1434",
      textOnPost: "Write you description here",
      caption: "Write you caption here",
      hashtag: "Write you Hashtags here",
      planner: [
        {
          img: user1,
          name: "Penny",
        },
      ],
    },
  ];
  //   {
  //     postId: "1434",
  //     textOnPost: "Write you description here",
  //     caption: "Write you caption here",
  //     hashtag: "Write you Hashtags here",
  //     planner: [
  //       {
  //         img: user3,
  //         name: "Penny",
  //       },
  //     ],
  //   },
  //   {
  //     postId: "1434",
  //     textOnPost: "Write you description here",
  //     caption: "Write you caption here",
  //     hashtag: "Write you Hashtags here",
  //     planner: [
  //       {
  //         img: user4,
  //         name: "Penny",
  //       },
  //     ],
  //   },
  //   {
  //     postId: "1434",
  //     textOnPost: "Write you description here",
  //     caption: "Write you caption here",
  //     hashtag: "Write you Hashtags here",
  //     planner: [
  //       {
  //         img: user5,
  //         name: "Penny",
  //       },
  //     ],
  //   },
  //   {
  //     postId: "1434",
  //     textOnPost: "Write you description here",
  //     caption: "Write you caption here",
  //     hashtag: "Write you Hashtags here",
  //     planner: [
  //       {
  //         img: team1,
  //         name: "Penny",
  //       },
  //     ],
  //   },
  // ];

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
        <Typography
          sx={{ ml: 2, fontSize: "16px", fontWeight: 500, color: "#808080" }}
        >
          {item.postId}
        </Typography>
      </TableCell>
      <TableCell>
        <TextField
          sx={{ background: "#fff", borderRadius: 2 }}
          fullWidth
          multiline
          row={2}
          placeholder={item.caption}
        />
      </TableCell>
      <TableCell>
        <TextField
          sx={{ background: "#fff", borderRadius: 2 }}
          fullWidth
          multiline
          row={2}
          placeholder={item.caption}
        />
      </TableCell>
      <TableCell>
        <TextField
          sx={{ background: "#fff", borderRadius: 2 }}
          fullWidth
          multiline
          row={2}
          placeholder={item.hashtag}
        />
      </TableCell>
      <TableCell>
        {item.planner.map((p) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={p.img} />
            <Typography sx={{ ml: 2 }}>{p.name}</Typography>
          </Box>
        ))}
      </TableCell>
      <TableCell>
        <IconButton>
          <img src={trashIcon} alt="trashIcon" />
        </IconButton>
        <IconButton
          onClick={() => setOpenDialog({ label: "edit", value: true })}
        >
          <img src={editIcon} alt="editIcon" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
