import SearchForm from "../../../components/(search)/SearchForm";
import ui from "../../../styles/ui.module.css"
export const metadata = {
  title: "Search",
};

export default function SearchPage() {
  return (
   <>
         <h3>이미지 검색</h3>
        <SearchForm />
   </>
  );
}