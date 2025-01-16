import NewsForm from "../../../components/(news)/NewsForm";
import react from "../../../styles/react.module.css"

export const metadata = {
  title: "News",
};

export default function SearchPage() {
  return (
    <div className={react.container}>
      <h3>뉴스 검색</h3>
      <NewsForm />
    </div>
  );
}