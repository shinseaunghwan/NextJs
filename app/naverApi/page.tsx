import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faOtter } from '@fortawesome/free-solid-svg-icons'; 
import ui from "../../styles/ui.module.css"

export const metadata = {
  title: "Naver",
};

export default function AboutUs() {
  return (
    <>
      <h3 className={ui.pc_green}>Naver Api <FontAwesomeIcon icon={faOtter} className={ui.icon} /></h3>
      <div className={ui.linkBox}>
              <Link href="/naverApi/search">네이버 검색</Link> 
              <Link href="/naverApi/books">네이버 서적</Link> 
              <Link href="/naverApi/shop">네이버 쇼핑</Link> 
      </div>
    </>
  );
}