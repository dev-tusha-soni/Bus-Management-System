
import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import LiveTracking from "../pages/avls/LiveTracking";
import Roster from "../pages/scheduling/Roster";
import Incidents from "../pages/ims/Incidents";
import Notices from "../pages/cms/Notices";
import DriverHome from "../pages/driver/DriverHome";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/avls" element={<LiveTracking />} />
      <Route path="/scheduling" element={<Roster />} />
      <Route path="/ims" element={<Incidents />} />
      <Route path="/cms" element={<Notices />} />
      <Route path="/driver" element={<DriverHome />} />
    </Routes>
  );
}

export default AppRoutes;
