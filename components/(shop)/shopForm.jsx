"use client"

import { useState } from 'react';
import DOMPurify from 'dompurify';
import searchShop from './shop';
import shop from './shop.module.css';
import ui from './../../styles/ui.module.css';
import SearchInput from '../SearchInput';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) {
      alert('검색어를 입력하세요.');
      return;
    }
    const data = await searchShop(query);
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
        <div className={shop.container}>
          {results.map((item) => (
            <div className={shop.imgBox} key={item.link}>
              <img src={item.image} alt={item.title} />
              <div className={shop.contBox}>
                <h3 dangerouslySetInnerHTML={createMarkup(item.title)} />
                <p>{item.category1}</p>
                <p>{item.lprice}원 ~ {item.hprice}</p>
                <p>{item.pubdate}</p>
                <p>
                  <a className={ui.button} href={item.link} target="_blank">
                    자세히 보기
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
