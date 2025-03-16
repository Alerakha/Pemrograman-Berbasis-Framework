export default async function handler(req, res) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await response.json();

  res.status(200).json(user);
}
