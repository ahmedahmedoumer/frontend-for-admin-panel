import { Grid, TextField, InputLabel, Card } from "@mui/material";
import { POPPINS } from "../../../utils/config";
import userIcon from "../../../assets/images/userIcon.svg";
import { useSelector } from "react-redux";

export default function UserCard() {
const user=useSelector(state=>state.user) || null;
  return (
    <Card
      sx={{
        background: "#F2F2F2",
        borderRadius: "30px",
        boxShadow: "-2px 4px 10px rgba(0, 0, 0, 0.25)",
        p: 0,
        mt: 4,
        mb: 4,
        px: 1,
        py: 1.5,
      }}
    >
      <Grid container spacing={3} sx={{ mb: 1 }}>
        <Grid item lg={2}>
          <Grid
            sx={{
              mt: 3,
              ml: 6,
            }}
          >
            <img src={userIcon} alt="user" />
          </Grid>
        </Grid>
        <Grid
          item
          lg={4.5}
          sx={{
            "& .MuiFormControl-root": {
              height: "32px",
            },
            "& .MuiInputBase-root": {
              height: "32px",
              fontSize: "10px",
            },
          }}
        >
          <InputLabel sx={{ ...labelStyle }} htmlFor="prompt">
            Name
          </InputLabel>
          <TextField
            disabled
            fullWidth
            size="small"
            name="title"
            value={user.firstName}
            sx={{ background: "#fff" }}
            id="prompt"
          />
          <InputLabel sx={{ ...labelStyle }} htmlFor="prompt">
            Phone Num
          </InputLabel>
          <TextField
            disabled
            fullWidth
            size="small"
            name="title"
            value={user.phone}
            sx={{ background: "#fff" }}
            id="prompt"
          />
        </Grid>
        <Grid
          item
          lg={4.5}
          sx={{
            "& .MuiFormControl-root": {
              height: "32px",
            },
            "& .MuiInputBase-root": {
              height: "32px",
              fontSize: "10px",
            },
          }}
        >
          <InputLabel sx={{ ...labelStyle }} htmlFor="prompt">
            Email
          </InputLabel>
          <TextField
            disabled
            fullWidth
            size="small"
            name="title"
            value={user.email}
            sx={{ background: "#fff" }}
            id="prompt"
          />
          <InputLabel sx={{ ...labelStyle }} htmlFor="prompt">
            Title
          </InputLabel>
          <TextField
            disabled
            fullWidth
            size="small"
            name="title"
            value={user.title}
            sx={{ background: "#fff" }}
            id="prompt"
          />
        </Grid>
      </Grid>
    </Card>
  );
}

const labelStyle = {
  ...POPPINS,
  color: "#565656",
  fontWeight: 500,
  fontSize: "16px",
  mb: 1,
  mt: 1,
};
