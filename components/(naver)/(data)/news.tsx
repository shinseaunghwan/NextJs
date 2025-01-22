export default async function news(query) {
  const res = await fetch(`/api/news?query=${query}`);
  const data = await res.json();
  return data;
}
