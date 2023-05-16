import { Box } from "@mui/material";
import { useState } from "react";
import ReportsTable from "../../modules/components/reports/ReportsTable";
import UserDetail from "../../modules/components/reports/UserDetail";
import PageHeader from "../../modules/PageHeader";
import ViewContainer from "../../modules/ViewContainer";
import ViewDate from "../../modules/ViewDate";

export default function Reports() {
  const [selectedUser, setSelectedUser] = useState(false);

  console.log(selectedUser);

  return (
    <ViewContainer>
      <PageHeader
        title="Reports"
        description="Lookup for All the Design Library"
      />

      {selectedUser ? (
        <UserDetail />
      ) : (
        <ReportsTable setSelectedUser={setSelectedUser} />
      )}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ViewDate />
      </Box>
    </ViewContainer>
  );
}
