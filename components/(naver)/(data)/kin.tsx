export default async function kin(query) {
  const res = await fetch(`/api/kin?query=${query}`);
  const data = await res.json();
  return data;
}
