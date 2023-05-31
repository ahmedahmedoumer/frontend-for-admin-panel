import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import trashIcon from "../../../assets/images/trash.svg";
import editIcon from "../../../assets/images/edite.svg";
import userIconTable from "../../../assets/images/users/user1.png";
import axios from 'axios';

export default function UserDetailTable(props) {
  const { setOpenDialog,designData,setAllDesignData } = props;
  const tableColumns = [
    <TableCell key="id">Post ID</TableCell>,
    <TableCell key="text">Text on post</TableCell>,
    <TableCell key="design">Design</TableCell>,
  ];
  const data=designData.map((item)=>({
       id:item.id,
       textOnPost:item.textOnPost,
       userImg:userIconTable,
  }));

   
  // const data = [
  //   {
  //     id: "1434",
  //     userImg: userIconTable,
  //   },
  //   {
  //     id: "1434",
  //     userImg: userIconTable,
  //   },
  //   {
  //     id: "1434",
  //     userImg: userIconTable,
  //   },
  //   {
  //     id: "1434",
  //     userImg: userIconTable,
  //   },
  //   {
  //     id: "1434",
  //     userImg: userIconTable,
  //   },
  // ];
  return (
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
          py: 1,
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
          <RowItem key={index} item={item} setOpenDialog={setOpenDialog} setAllDesignData={setAllDesignData} />
        ))}
      </TableBody>
    </Table>
  );
}

function RowItem(props) {
  const { item, setOpenDialog,setAllDesignData } = props;
  const deleteHandler=(id)=>{
    const deleteItem= axios.get(`http://localhost:8000/api/delete-design?designId=${id}`,{
      headers:{
        'Authorization':'Bearer '+localStorage.getItem('token'),
      }
    })
    .then(function(response){
      setAllDesignData(response.data.data);
      console.log(response);
    })
    .catch(function(error){
        console.log(error);
    });
  }
  return (
    <TableRow>
      <TableCell>
        <Typography
          sx={{ color: "#808080", fontWeight: 500, fontSize: "16px" }}
        >
          {item.id}
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
            "& .MuiFormControl-root": {
              height: "40px",
            },
            "& .MuiInputBase-root": {
              height: "40px",
              fontSize: "10px",
              py: 3.7,
            },
          }}
          value={item.textOnPost}
          fullWidth
          rows={3}
          multiline
          name={item.description}
        />
      </TableCell>
      <TableCell>
        <Box display="flex" alignItem="center" justifyContent="center">
          <img
            src={item.userImg}
            style={{ width: "32px", height: "32px" }}
            alt={item.id}
          />
          <IconButton sx={{ ml: 2 }} 
           onClick={()=>{
            deleteHandler(item.id)
           }}
          >
            <img src={trashIcon} alt="trash" />
          </IconButton>
          <IconButton
            onClick={() => setOpenDialog({ label: "edit", value: true })}
          >
            <img src={editIcon} alt="edite" />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  );
}

