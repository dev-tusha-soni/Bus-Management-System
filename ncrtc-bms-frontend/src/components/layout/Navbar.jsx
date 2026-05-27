function Navbar() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex justify-between items-center mb-5">

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          NCRTC Bus Management System
        </h1>

        <p className="text-gray-500 text-sm">
          Delhi NCR Smart Transit Dashboard
        </p>
      </div>

      <button className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600">
        Logout
      </button>

    </div>
  );
}

export default Navbar;