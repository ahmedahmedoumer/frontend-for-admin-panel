import {
  Box,
  Button,
  Card,
  Grid,
  InputLabel,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import { POPPINS } from "../../../utils/config";
import userIcon from "../../../assets/images/user-detail.svg";
import fileIcon from "../../../assets/images/file.svg";
import search from "../../../assets/images/search.svg";
import plusIcon from "../../../assets/images/plus.svg";
import doneIcon from "../../../assets/images/done.svg";
import filesIcon from "../../../assets/images/files.svg";
import redPluse from "../../../assets/images/plusRed.svg";
import UserDetailTable from "./UserDetailTable";
import Pagination from "../../Pagination";
import CreateAndUpdateDialog from "../../CreateAndUpdateDialog";
import { useState } from "react";
import AreYouSureDialog from "../AreYouSureDialog";
import snackbarImg from "../../../assets/images/snackbarImg.svg";
import submitIcon from "../../../assets/images/submitPlus.svg";
import sourceIcon from "../../../assets/images/source.svg";
import AddNewDesignDialog from "./AddNewDesignDialog";
import AddNewPlanDialog from "./AddNewPlanDialog";
import Sneackbar from "../../Sneckbar";

export default function UserDetiail() {
  const [openDialog, setOpenDialog] = useState({});
  const [openNewPlanDialog, setOpenNewPlanDialog] = useState(false);
  const [submitDialog, setSubmitDialog] = useState({});
  const [openNewDesignDialog, setOpenNewDesignDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState({});

  return (
    <>
      <Card
        sx={{
          background: "#F2F2F2",
          borderRadius: "20px",
          boxShadow: "none",
          pl: 4,
          py: 1.5,
        }}
      >
        <Grid container alignItems="center" spacing={3}>
          <Grid item lg={1}>
            <img src={userIcon} alt="user" />
          </Grid>
          <Grid
            item
            lg={3}
            sx={{
              "& .MuiFormControl-root": {
                height: "30px",
              },
              "& .MuiInputBase-root": {
                height: "30px",
                fontSize: "10px",
                py: 1.7,
              },
            }}
          >
            <Grid>
              <InputLabel sx={{ ...labelStyle }} htmlFor="co-name">
                CO. Name
              </InputLabel>
              <TextField
                fullWidth
                size="small"
                name="coName"
                id="co-name"
                sx={{ background: "#fff" }}
                placeholder="Company Name"
              />
            </Grid>
            <Grid sx={{ mt: 1 }}>
              <InputLabel sx={{ ...labelStyle }} htmlFor="co-industry">
                CO. Industry
              </InputLabel>
              <TextField
                fullWidth
                size="small"
                name="coIndustry"
                id="co-industry"
                sx={{ background: "#fff" }}
                placeholder="Company Industry"
              />
            </Grid>
          </Grid>
          <Grid
            item
            lg={3}
            sx={{
              "& .MuiFormControl-root": {
                height: "30px",
              },
              "& .MuiInputBase-root": {
                height: "30px",
                fontSize: "10px",
                py: 1.7,
              },
            }}
          >
            <Grid>
              <InputLabel sx={{ ...labelStyle }} htmlFor="co-name">
                CO. Name
              </InputLabel>
              <TextField
                fullWidth
                size="small"
                name="coName"
                id="co-name"
                sx={{ background: "#fff" }}
                placeholder="Company Name"
              />
            </Grid>
            <Grid sx={{ mt: 1 }}>
              <InputLabel sx={{ ...labelStyle }} htmlFor="co-industry">
                CO. Industry
              </InputLabel>
              <TextField
                fullWidth
                size="small"
                name="coIndustry"
                id="co-industry"
                sx={{ background: "#fff" }}
                placeholder="Company Industry"
              />
            </Grid>
          </Grid>
          <Grid
            item
            lg={3}
            sx={{
              "& .MuiInputBase-root": {
                fontSize: "10px",
              },
            }}
          >
            <InputLabel sx={{ ...labelStyle }} htmlFor="content-description">
              Content description
            </InputLabel>
            <TextField
              fullWidth
              multiline
              rows={5}
              size="small"
              sx={{ background: "#fff" }}
              name="contentDescription"
              id="content-description"
              placeholder="Write you company description here "
            />
          </Grid>
          <Grid item lg={1}>
            <Button
              sx={{
                height: "88px",
                mt: 2.9,
                px: 2,
                textTransform: "unset",
                color: "#565656",
                background: "#fff",
                border: "1px solid #E8E8E8",
                borderRadius: "6px",
              }}
              startIcon={<img src={fileIcon} alt="img" />}
            >
              Assets
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Box
        sx={{
          display: "flex",
          alignItem: "center",
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        <Typography sx={{ fontWeight: 500, fontSize: "24px", ...POPPINS }}>
          Total Users : 150
        </Typography>
        <Box display="flex">
          <Box>
            <TextField
              sx={{
                border: "1px solid #7F7F7F",
                borderRadius: 2,
                background: "#F2F2F2",
                maxWidth: "290px",
                width: "100%",
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
            />
          </Box>
          <Box>
            <Button
              startIcon={<img src={plusIcon} alt="plus" />}
              onClick={() => setOpenDialog({ label: "row", value: true })}
              sx={{
                color: "white",
                background:
                  "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)",
                border: "0.5px solid #7F7F7F",
                borderRadius: "8px",
                textTransform: "unset",
                pl: 4,
                pr: 2,
                ml: 1,
                py: 0.88,
              }}
            >
              Add Row
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() => setOpenNewDesignDialog(true)}
              startIcon={<img src={plusIcon} alt="plus" />}
              sx={{
                color: "white",
                background:
                  "linear-gradient(99.32deg, #B4CD93 7.91%, #427A5B 88.96%)",
                border: "1px solid #7F7F7F",
                borderRadius: "8px",
                textTransform: "unset",
                pl: 4,
                pr: 2,
                ml: 1,
                py: 0.88,
              }}
            >
              Add Bulk Designs
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() =>
                setSubmitDialog({ label: "moreEdit", value: true })
              }
              startIcon={
                <img src={redPluse} alt="plus" style={{ marginTop: "2.4px" }} />
              }
              sx={{
                color: "#978F8F",
                border: "1px solid #D40101",
                background: "#F2F2F2",
                borderRadius: "8px",
                textTransform: "unset",
                pr: 2,
                ml: 1,
                py: 0.88,
                "& .MuiButton-startIcon": {
                  pl: 0.5,
                },
              }}
            >
              More Edit
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() => setSubmitDialog({ label: "save", value: true })}
              startIcon={<img src={filesIcon} alt="plus" />}
              sx={{
                color: "#978F8F",
                border: "1px solid #B4CD93",
                background: "#F2F2F2",
                borderRadius: "8px",
                textTransform: "unset",
                pr: 2,
                ml: 1,
                py: 0.88,
              }}
            >
              Save
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() => setSubmitDialog({ label: "approve", value: true })}
              startIcon={<img src={doneIcon} alt="plus" />}
              sx={{
                color: "#978F8F",
                border: "0.5px solid #B4CD93",
                background: "#F2F2F2",
                borderRadius: "8px",
                textTransform: "unset",
                pr: 2,
                ml: 1,
                py: 0.88,
              }}
            >
              Approve
            </Button>
          </Box>
        </Box>
      </Box>
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
        <Box sx={{ display: "flex" }}>
          <UserDetailTable setOpenDialog={setOpenDialog} />
          <UserDetailTable setOpenDialog={setOpenDialog} />
        </Box>
        <Box
          sx={{
            ml: 4,
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Pagination />
          <Box>
            <Button
              onClick={() => setOpenNewPlanDialog(true)}
              startIcon={<img src={sourceIcon} alt="source" />}
              sx={{
                textTransform: "unset",
                mr: 6,
                background: "#FFFFFF",
                border: "1px solid #E8E8E8",
                borderRadius: "6px",
                color: "#7F7F7F",
                fontWeight: 400,
                fontSize: "13px",
                py: 1.5,
              }}
            >
              Source Files
            </Button>
          </Box>
        </Box>
      </Card>

      {openDialog.label === "row" && openDialog.value && (
        <CreateAndUpdateDialog
          title="Add A Plan Row"
          label1="Text on the Post"
          label2="Caption"
          label3="Hashtags"
          placeholder1="Add your text on the post here"
          placeholder2="write the plan caption here"
          placeholder3="add your hashtags here"
          submit="Add"
          onClose={() => setOpenDialog(false)}
          open={openDialog.value}
        />
      )}

      {openDialog.label === "edit" && openDialog.value && (
        <CreateAndUpdateDialog
          title="Editing A Plan Row"
          label1="Text on the Post"
          label2="Caption"
          label3="Hashtags"
          placeholder1="Add your text on the post here"
          placeholder2="write the plan caption here"
          placeholder3="add your hashtags here"
          submit="Add"
          onClose={() => setOpenDialog(false)}
          open={openDialog.value}
        />
      )}
      <AddNewPlanDialog
        title="Add A New Plan - Bulk"
        type="( .zip ) file"
        open={openNewPlanDialog}
        onClose={() => setOpenNewPlanDialog(false)}
      />

      {submitDialog.label === "approve" && submitDialog.value && (
        <AreYouSureDialog
          open={submitDialog.value}
          onClose={() => setSubmitDialog(false)}
          title="Do you want to Approve the work done ?"
          submitIcon={submitIcon}
          submitText="Approve"
          openSnackbar={() =>
            setOpenSnackbar({ label: "approve", value: true })
          }
        />
      )}
      {submitDialog.label === "save" && submitDialog.value && (
        <AreYouSureDialog
          open={submitDialog.value}
          onClose={() => setSubmitDialog(false)}
          title="Do you want to Save the work done ?"
          submitIcon={submitIcon}
          submitText="Save"
          openSnackbar={() => setOpenSnackbar({ label: "save", value: true })}
        />
      )}
      {submitDialog.label === "moreEdit" && submitDialog.value && (
        <AreYouSureDialog
          open={submitDialog.value}
          onClose={() => setSubmitDialog(false)}
          title="Are you sure you want to Request Edit for the submitted work ? "
          submitIcon={submitIcon}
          submitText="Request Edit"
          openSnackbar={() =>
            setOpenSnackbar({ label: "moreEdit", value: true })
          }
        />
      )}
      {openSnackbar.label === "approve" && openSnackbar.value && (
        <Sneackbar
          img={snackbarImg}
          open={openSnackbar.value}
          title="Approved"
          onClose={() => setOpenSnackbar(false)}
        />
      )}
      {openSnackbar.label === "save" && openSnackbar.value && (
        <Sneackbar
          img={snackbarImg}
          open={openSnackbar.value}
          title="Saved"
          onClose={() => setOpenSnackbar(false)}
        />
      )}
      {openSnackbar.label === "moreEdit" && openSnackbar.value && (
        <Sneackbar
          img={snackbarImg}
          open={openSnackbar.value}
          title="Edit Requested"
          onClose={() => setOpenSnackbar(false)}
        />
      )}
      <AddNewDesignDialog
        open={openNewDesignDialog}
        onClose={() => setOpenNewDesignDialog(false)}
        title="Add A New Design"
        submitText="Add"
      />
    </>
  );
}

const labelStyle = {
  ...POPPINS,
  mb: 1,
  color: "#565656",
  fontWeight: 500,
  fontSize: "14px",
};
