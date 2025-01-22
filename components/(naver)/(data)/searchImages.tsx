export default async function searchImages(query) {
  const res = await fetch(`/api/search?query=${query}`);
  const data = await res.json();
  return data;
}
