import { Button, TextField, Typography, Box } from "@mui/material";
import { useState } from "react";
import UsersTable from "../../modules/components/all-users/UsersTable";
import PageHeader from "../../modules/PageHeader";
import ViewContainer from "../../modules/ViewContainer";
import ViewDate from "../../modules/ViewDate";

export default function AllUsers() {
  const [search, setSearch] = useState("");

  return (
    <ViewContainer>
      <PageHeader
        title="All users"
        description="Lookup for All the Users"
        serchValue={search}
        onSearch={setSearch}
      />
      <UsersTable />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <ViewDate />
      </Box>
    </ViewContainer>
  );
}
