import BooksForm from "../../../components/(books)/BooksForm";


export const metadata = {
  title: "Books",
};

export default function BooksPage() {
  return (
    <>
      <h3>서적 검색</h3>
      <BooksForm />
    </>
  );
}