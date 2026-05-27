function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-slate-800">

      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[400px]">

        <h1 className="text-4xl font-bold text-center text-slate-800 mb-2">
          NCRTC BMS
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Bus Management Login
        </p>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-3 rounded-xl mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-xl mb-5"
        />

        <button className="bg-orange-500 hover:bg-orange-600 duration-300 text-white w-full p-3 rounded-xl">
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;