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
import { useNavigate } from "react-router-dom";

const isAuthenticated=()=>{
  if(localStorage.getItem('token')){
    return true;
  }
  return false;
}


function App() {
  return (
    <ContentWrapper>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={isAuthenticated && <Dashboard />} />
        <Route path="/all-users" element={isAuthenticated && <AllUsers />} />
        <Route path="/users" element={isAuthenticated && <Users />} />
        <Route path="/team-members" element={isAuthenticated && <TeamMembers />} />
        <Route path="plan-library" element={isAuthenticated && <PlanLibrary />} />
        <Route path="design-library" element={ isAuthenticated && <DesignLibrary />} />
        <Route path="all-tasks" element={isAuthenticated && <AllTasks />} />
        <Route path="/reports" element={isAuthenticated && <Reports />} />
        <Route index element={<Navigate to="/dashboard" />} />
      </Routes>
    </ContentWrapper>
  );
}

export default App;
