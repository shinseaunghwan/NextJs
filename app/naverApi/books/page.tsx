import BooksForm from "../../../components/(books)/BooksForm";
import react from "../../../styles/react.module.css"

export const metadata = {
  title: "Books",
};

export default function BooksPage() {
  return (
    <div className={react.container}>
      <h3>서적 검색</h3>
      <BooksForm />
    </div>
  );
}