export default async function cafearticle(query) {
  const res = await fetch(`/api/cafearticle?query=${query}`);
  const data = await res.json();
  return data;
}
