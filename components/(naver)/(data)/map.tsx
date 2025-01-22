export default async function searchMap(query) {
  const res = await fetch(`/api/map?query=${query}`);
  const data = await res.json();
  return data;
}
