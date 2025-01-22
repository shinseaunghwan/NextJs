import SearchForm from "../../../components/(naver)/SearchForm";
import ui from "../../../styles/ui.module.css"

export const metadata = {
  title: "네이버 검색",
};

export default function SearchPage() {
  return (
    <>
    <h3 className={ui.pc_green}>네이버버 검색</h3>
        
        <SearchForm />
    </>
  );
}