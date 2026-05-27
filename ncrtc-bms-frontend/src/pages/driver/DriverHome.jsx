
function DriverHome() {
  return (
    <div className="p-5">
      <div className="bg-white rounded-xl p-5 shadow">
        <h1 className="text-2xl font-bold mb-4">Today's Duty</h1>

        <p>Vehicle: DL1PC1234</p>
        <p>Route: Noida Sector 37 → Anand Vihar</p>

        <button className="bg-green-600 text-white w-full p-3 rounded-xl mt-5">
          Acknowledge Duty
        </button>
      </div>
    </div>
  );
}

export default DriverHome;
