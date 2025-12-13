import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});


const positions = [
  {
    district: "Dhaka",
    latitude: 23.8103,
    longitude: 90.4125,
    covered_area: ["Uttara", "Mirpur", "Dhanmondi", "Gulshan"],
  },
  {
    district: "Chittagong",
    latitude: 22.3475,
    longitude: 91.8123,
    covered_area: ["Pahartali", "Halishahar", "Kotwali"],
  },
  {
    district: "Rajshahi",
    latitude: 24.3745,
    longitude: 88.6042,
    covered_area: ["Boalia", "Motihar"],
  },
  {
    district: "Sylhet",
    latitude: 24.8949,
    longitude: 91.8687,
    covered_area: ["Zindabazar", "Amberkhana"],
  },
  {
    district: "Khulna",
    latitude: 22.8456,
    longitude: 89.5403,
    covered_area: ["Sonadanga", "Khalishpur"],
  },
  {
    district: "Barishal",
    latitude: 22.701,
    longitude: 90.3535,
    covered_area: ["Bakerganj", "Kawran Bazar"],
  },
  {
    district: "Rangpur",
    latitude: 25.7439,
    longitude: 89.2752,
    covered_area: ["Gangachara", "Mithapukur"],
  },
  {
    district: "Mymensingh",
    latitude: 24.7471,
    longitude: 90.4203,
    covered_area: ["Trishal", "Muktagachha"],
  },
  {
    district: "Comilla",
    latitude: 23.4609,
    longitude: 91.1809,
    covered_area: ["Daudkandi", "Debidwar"],
  },
  {
    district: "Narsingdi",
    latitude: 23.9246,
    longitude: 90.7174,
    covered_area: ["Belabo", "Shibpur"],
  },
  {
    district: "Jessore",
    latitude: 23.1617,
    longitude: 89.224,
    covered_area: ["Chaugachha", "Abhaynagar"],
  },
  {
    district: "Tangail",
    latitude: 24.25,
    longitude: 89.9167,
    covered_area: ["Delduar", "Madhupur"],
  },
  {
    district: "Pabna",
    latitude: 24.0061,
    longitude: 89.233,
    covered_area: ["Atghoria", "Santhia"],
  },
  {
    district: "Cox's Bazar",
    latitude: 21.4272,
    longitude: 92.0058,
    covered_area: ["Chakaria", "Ukhiya"],
  },
  {
    district: "Bhola",
    latitude: 22.6853,
    longitude: 90.6566,
    covered_area: ["Lalmohan", "Char Fasson"],
  },
];

const CoverageSection = () => {
  const mapref = useRef(null);
  const centerPosition = [23.685, 90.3563];

  return (
    <div className="w-full mt-10">
      <div className="text-center bg-blue-50 p-8 rounded-lg">
        <h2 className="text-4xl font-bold text-blue-700 mb-3">
          We deliver almost all over{" "}
          <span className="text-sky-600">Bangladesh</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          This section shows a map that displays all available cities where
          books can be delivered.
        </p>
      </div>

      <div className="border w-full h-[800px] rounded-xl overflow-hidden shadow-md">
        <MapContainer
          center={centerPosition}
          zoom={8}
          scrollWheelZoom={false}
          className="h-full w-full"
          ref={mapref}
        >
          {/* Tile Layer */}
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* All District Markers */}
          {positions.map((position, index) => (
            <Marker
              key={index}
              position={[position.latitude, position.longitude]}
            >
              <Tooltip>
                <strong>{position.district}</strong> <br />
                Service area: {position.covered_area.join(", ")}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default CoverageSection;
