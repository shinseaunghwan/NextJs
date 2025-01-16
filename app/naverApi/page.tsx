import Link from "next/link";
import naver from "../naverApi/naverApi.module.css"

export const metadata = {
  title: "NaverApi",
};

export default function AboutUs() {
  return (
    <div className={naver.container}>
      <h3>Naver Api</h3>
      <div className={naver.linkBox}>
        
              <Link href="/naverApi/search">네이버 이미지 검색</Link>
              <Link href="/naverApi/news">네이버 뉴스 검색</Link> 
      </div>
    </div>
  );
}