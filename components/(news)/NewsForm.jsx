"use client";

import { useState } from 'react';
import DOMPurify from 'dompurify';
import news from './news';
import newsStyled from './news.module.css';
import ui from './../../styles/ui.module.css'
import SearchInput from '../SearchInput';

export default function NewsForm() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) {
      alert('검색어를 입력하세요.');
      return;
    }
    const data = await news(query);
    setResults(data.items);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <>
    <SearchInput
        query={query}
        setQuery={setQuery}
        handleKeyDown={handleKeyDown}
        handleSearch={handleSearch}
      />
      {results.length > 0 ? (
      <div className={newsStyled.container}>
        {results.map((item) => (
          <div className={newsStyled.newsBox} key={item.id}>
            <h4 dangerouslySetInnerHTML={createMarkup(item.title)} />
            <p
              className={newsStyled.text}
              dangerouslySetInnerHTML={createMarkup(item.description)}
            />
            <div className={newsStyled.datelinkBox}>
              <p className={newsStyled.date}>{item.pubDate}</p>
              <a className={`${ui.button2} ${ui.mgt10}`} href={item.link} target="_blank" title={item.title}>
                뉴스 더보기
              </a>
            </div>
          </div>
        ))}
      </div>
      ): null}
    </>
  );
}
