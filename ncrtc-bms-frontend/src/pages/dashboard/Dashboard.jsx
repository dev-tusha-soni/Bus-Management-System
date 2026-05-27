import DashboardLayout from "../../components/layout/DashboardLayout";

// dummy stats data
const stats = [
  {
    title: "Total Vehicles",
    value: 50,
    color: "border-blue-600",
  },

  {
    title: "Running Trips",
    value: 22,
    color: "border-green-600",
  },

  {
    title: "Open Incidents",
    value: 7,
    color: "border-red-600",
  },

  {
    title: "Drivers",
    value: 34,
    color: "border-orange-500",
  },
];

function Dashboard() {
  return (
    <DashboardLayout>

      <h1 className="text-3xl font-bold text-slate-800">
        Control Room Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-5 mt-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl p-5 shadow-md border-l-4 ${item.color}`}
          >
            <h2 className="text-gray-500">
              {item.title}
            </h2>

            <p className="text-4xl font-bold mt-2">
              {item.value}
            </p>
          </div>
        ))}

      </div>

      {/* recent activity */}

      <div className="bg-white mt-8 p-5 rounded-2xl shadow-md">

        <h2 className="text-2xl font-bold mb-5">
          Recent Activity
        </h2>

        <div className="flex flex-col gap-4">

          <div className="border-b pb-3">
            Bus DL1PC1234 completed Route R12
          </div>

          <div className="border-b pb-3">
            Driver Rahul Kumar acknowledged duty
          </div>

          <div className="border-b pb-3">
            P1 Breakdown incident reported
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;