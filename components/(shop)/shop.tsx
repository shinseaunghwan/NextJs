export default async function searchShop(query) {
  const res = await fetch(`/api/shop?query=${query}`);
  const data = await res.json();
  return data;
}
