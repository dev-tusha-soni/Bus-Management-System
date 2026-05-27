import { Link } from "react-router-dom";
import { FaBus, FaMapMarkedAlt, FaClipboardList } from "react-icons/fa";
import { MdDashboard, MdNotifications } from "react-icons/md";

function Sidebar() {
  return (
    <div className="w-[240px] h-screen bg-[#0f172a] text-white p-5">

      <h1 className="text-3xl font-bold mb-10 text-orange-400">
        NCRTC BMS
      </h1>

      <div className="flex flex-col gap-4 text-[17px]">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 hover:bg-slate-700 p-3 rounded-lg duration-300"
        >
          <MdDashboard />
          Dashboard
        </Link>

        <Link
          to="/avls"
          className="flex items-center gap-3 hover:bg-slate-700 p-3 rounded-lg duration-300"
        >
          <FaMapMarkedAlt />
          Live Tracking
        </Link>

        <Link
          to="/scheduling"
          className="flex items-center gap-3 hover:bg-slate-700 p-3 rounded-lg duration-300"
        >
          <FaClipboardList />
          Scheduling
        </Link>

        <Link
          to="/ims"
          className="flex items-center gap-3 hover:bg-slate-700 p-3 rounded-lg duration-300"
        >
          <FaBus />
          Incidents
        </Link>

        <Link
          to="/cms"
          className="flex items-center gap-3 hover:bg-slate-700 p-3 rounded-lg duration-300"
        >
          <MdNotifications />
          Notices
        </Link>

      </div>
    </div>
  );
}

export default Sidebar;