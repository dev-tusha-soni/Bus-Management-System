import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex bg-gray-100">

      <Sidebar />

      <div className="flex-1 p-5">
        <Navbar />

        {children}
      </div>

    </div>
  );
}

export default DashboardLayout;