import Link from "next/link";
import ui from "../../styles/ui.module.css"

export const metadata = {
  title: "NaverApi",
};

export default function AboutUs() {
  return (
    <>
      <h3 className={ui.pc_green}>Naver Api</h3>
      <div className={ui.linkBox}>
              <Link href="/naverApi/search">네이버 이미지</Link>
              <Link href="/naverApi/news">네이버 뉴스</Link> 
              <Link href="/naverApi/books">네이버 서적</Link> 
              <Link href="/naverApi/shop">네이버 쇼핑</Link> 
              <Link href="/naverApi/map">네이버 지역</Link> 
      </div>
    </>
  );
}