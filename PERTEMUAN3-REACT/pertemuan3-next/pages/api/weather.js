export default async function handler(req, res) {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=-7.983908,-7.250445,-6.2&longitude=112.621391,112.768845,106.816666&current=temperature_2m,is_day,rain,cloud_cover,wind_speed_10m"
  );
  const weather = await response.json();

  res.status(200).json(weather);
}
