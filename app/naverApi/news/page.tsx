import NewsForm from "../../../components/(news)/NewsForm";


export const metadata = {
  title: "News",
};

export default function SearchPage() {
  return (
    <>
      <h3>뉴스 검색</h3>
      <NewsForm />
    </>
  );
}