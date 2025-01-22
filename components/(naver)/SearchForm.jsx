"use client";

import { useState } from "react";
import TabBox from "../TabBox";
import SearchInput from "../SearchInput";
import searchImages from "./(data)/searchImages";
import news from "./(data)/news";
import kin from "./(data)/kin";
import cafearticle from "./(data)/cafearticle";
import map from "./(data)/map";
import ImagesPage from "./(images)/ImagesPage";
import NewsPage from "./(news)/NewsPage";
import KinPage from "./(kin)/KinPage";
import CafePage from "./(cafe)/CafePage";
import MapPage from "./(map)/MapPage";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [results2, setResults2] = useState([]);
  const [results3, setResults3] = useState([]);
  const [results4, setResults4] = useState([]);
  const [results5, setResults5] = useState([]);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleSearch = async () => {
    if (!query.trim()) {
      alert("검색어를 입력하세요.");
      return;
    }
    const data = await searchImages(query);
    setResults(data.items);

    const data2 = await news(query);
    setResults2(data2.items);

    const data3 = await kin(query);
    setResults3(data3.items);

    const data4 = await cafearticle(query);
    setResults4(data4.items);

    const data5 = await map(query);
    setResults5(data5.items);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const tabs = ["이미지", "뉴스", "지식인", "카페글", "지역 검색"];

  return (
    <>
      <SearchInput
        query={query}
        setQuery={setQuery}
        handleKeyDown={handleKeyDown}
        handleSearch={handleSearch}
      />
      <TabBox tabs={tabs} onClick={setSelectedTabIndex} />

      {selectedTabIndex === 0 && results.length > 0 ? (
        <ImagesPage results={results} />
      ) : null}

      {selectedTabIndex === 1 && results.length > 0 ? (
        <NewsPage results={results2} />
      ) : null}

      {selectedTabIndex === 2 && results.length > 0 ? (
        <KinPage results={results3} />
      ) : null}

      {selectedTabIndex === 3 && results.length > 0 ? (
        <CafePage results={results4} />
      ) : null}

      {selectedTabIndex === 4 && results.length > 0 ? (
        <MapPage results={results5} />
      ) : null}
    </>
  );
}
