import NewsForm from "../../../components/(news)/NewsForm";
import ui from "../../../styles/ui.module.css"

export const metadata = {
  title: "News",
};

export default function SearchPage() {
  return (
    <>
    <h3 className={ui.pc_green}>뉴스 검색</h3>
        
        <NewsForm />
    </>
  );
}