
import DashboardLayout from "../../components/layout/DashboardLayout";

function Notices() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-5">Notices</h1>

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-2xl font-bold">Traffic Notice</h2>
        <p>Heavy traffic near Anand Vihar route.</p>
      </div>
    </DashboardLayout>
  );
}

export default Notices;
