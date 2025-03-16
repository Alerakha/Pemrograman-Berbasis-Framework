import { useState, useEffect } from "react";

const WeatherList = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch("api/weather");
      const weather = await response.json();
      setWeather(weather);
    };

    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pb-8 px-4">
      <h1 className="text-3xl font-bold text-gray-900 text-center pt-6 mb-8">
        Daftar Cuaca:
      </h1>
      <ul className="grid grid-cols-2 space-y-6">
        {weather.map((cuaca) => (
          <li
            key={cuaca.location_id}
            className="w-auto bg-white shadow-lg rounded-lg p-6 mx-3 space-y-3"
          >
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Koordinat Lokasi:
                </h2>
                <div className="text-gray-600">
                  <p>Latitude: {cuaca.latitude}</p>
                  <p>Longitude: {cuaca.longitude}</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Informasi Cuaca
              </h2>
              <div className="text-gray-600 font-medium">
                <p>
                  <span>Situasi:</span>{" "}
                  {cuaca.current.is_day === 1 ? "Cerah" : "Gelap"}
                </p>
                <p>
                  <span>Suhu:</span> {cuaca.current.temperature_2m}{" "}
                  {cuaca.current_units.temperature_2m}
                </p>
                <p>
                  <span>Kecepatan Angin: </span>
                  {cuaca.current.wind_speed_10m}{" "}
                  {cuaca.current_units.wind_speed_10m}
                </p>
                <p>
                  <span>Cakupan Awan: </span>
                  {cuaca.current.cloud_cover} {cuaca.current_units.cloud_cover}
                </p>
                <p>
                  <span>Curah Hujan: </span>
                  {cuaca.current.rain} {cuaca.current_units.rain}
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Informasi Tambahan
              </h2>
              <div className="text-gray-600 font-medium">
                <p>
                  <span>Zona Waktu: </span> {cuaca.timezone}
                </p>
                <p>
                  <span>Ketinggian: </span> {cuaca.elevation} meter
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherList;
