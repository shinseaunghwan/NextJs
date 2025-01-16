import SearchForm from "../../components/(search)/SearchForm";
import react from "../../styles/react.module.css"

export const metadata = {
  title: "Search",
};

export default function SearchPage() {
  return (
    <div className={react.container}>
      <h3>이미지 검색기</h3>
      <SearchForm />
    </div>
  );
}