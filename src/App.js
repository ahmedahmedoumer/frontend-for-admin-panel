import { Route, Routes, Navigate } from "react-router-dom";
import ContentWrapper from "./modules/ContentWrapper";
import AllUsers from "./pages/all-users";
import TeamMembers from "./pages/team-members";
import Dashboard from "./pages/dashboard";
import PlanLibrary from "./pages/plan-library";
import Reports from "./pages/reports";
import AllTasks from "./pages/all-tasks";
import Users from "./pages/users";
import DesignLibrary from "./pages/design-library";
import Login from "./pages/login-page";

function App() {
  return (
    <ContentWrapper>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/users" element={<Users />} />
        <Route path="/team-members" element={<TeamMembers />} />
        <Route path="plan-library" element={<PlanLibrary />} />
        <Route path="design-library" element={<DesignLibrary />} />
        <Route path="all-tasks" element={<AllTasks />} />
        <Route path="/reports" element={<Reports />} />
        <Route index element={<Navigate to="/dashboard" />} />
      </Routes>
    </ContentWrapper>
  );
}

export default App;
