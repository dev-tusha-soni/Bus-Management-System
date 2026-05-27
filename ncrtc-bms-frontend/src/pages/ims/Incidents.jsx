
import DashboardLayout from "../../components/layout/DashboardLayout";

function Incidents() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-5">Incidents</h1>

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-xl font-bold">Breakdown Incident</h2>
        <p>Severity: P1</p>
        <p>Status: Open</p>
      </div>
    </DashboardLayout>
  );
}

export default Incidents;
