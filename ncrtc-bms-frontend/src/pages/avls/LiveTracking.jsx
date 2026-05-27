import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

function LiveTracking() {

  // dummy live bus data
  const buses = [
    {
      id: 1,
      name: "DL1PC1234",
      position: [28.6139, 77.2090],
      speed: 45,
    },

    {
      id: 2,
      name: "DL1PC5678",
      position: [28.5355, 77.3910],
      speed: 38,
    },
  ];

  return (
    <DashboardLayout>

      <div className="flex justify-between items-center mb-5">

        <h1 className="text-3xl font-bold">
          AVLS Live Tracking
        </h1>

        <select className="border p-2 rounded-lg">
          <option>All Depots</option>
          <option>Anand Vihar</option>
          <option>Noida Sector 37</option>
        </select>

      </div>

      <div className="bg-white p-3 rounded-2xl shadow-md">

        <MapContainer
          center={[28.6139, 77.2090]}
          zoom={11}
          style={{ height: "75vh", width: "100%" }}
        >

          <TileLayer
            attribution="OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {buses.map((bus) => (
            <Marker
              key={bus.id}
              position={bus.position}
            >
              <Popup>
                <div>
                  <h2 className="font-bold">
                    {bus.name}
                  </h2>

                  <p>
                    Speed: {bus.speed} km/h
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}

        </MapContainer>

      </div>

    </DashboardLayout>
  );
}

export default LiveTracking;