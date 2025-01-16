"use client";

import { useState } from 'react';
import DOMPurify from 'dompurify';
import news from './news';
import newsStyled from './news.module.css';

export default function NewsForm() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleNews = async () => {
    if (!query.trim()) {
      alert('검색어를 입력하세요.');
      return;
    }
    const data = await news(query);
    setResults(data.items);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleNews();
    }
  };

  const createMarkup = (html) => {
    return { __html: DOMPurify.sanitize(html) };
  };

  return (
    <div className={newsStyled.inputBox}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="검색어를 입력하세요"
      />
      <button onClick={handleNews}>검색</button>

      <div className={newsStyled.container}>
        {results.map((item) => (
          <div className={newsStyled.newsBox} key={item.link}>
            <h4 dangerouslySetInnerHTML={createMarkup(item.title)} />
            <p className={newsStyled.text} dangerouslySetInnerHTML={createMarkup(item.description)} />
            <div className={newsStyled.datelinkBox}>
            <p className={newsStyled.date}>{item.pubDate}</p>
              <a href={item.link} target="_blank" title={item.title}>뉴스 더보기</a>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
