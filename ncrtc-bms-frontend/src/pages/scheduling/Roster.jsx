
import DashboardLayout from "../../components/layout/DashboardLayout";

function Roster() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-5">Weekly Roster</h1>

      <table className="w-full bg-white rounded-xl overflow-hidden">
        <thead className="bg-slate-900 text-white">
          <tr>
            <th className="p-4">Driver</th>
            <th className="p-4">Monday</th>
            <th className="p-4">Tuesday</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-4">Rahul Kumar</td>
            <td className="p-4">Bus 12</td>
            <td className="p-4">Bus 14</td>
          </tr>
        </tbody>
      </table>
    </DashboardLayout>
  );
}

export default Roster;
