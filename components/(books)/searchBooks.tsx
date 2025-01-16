export default async function searchBooks(query) {
  const res = await fetch(`/api/books?query=${query}`);
  const data = await res.json();
  return data;
}
