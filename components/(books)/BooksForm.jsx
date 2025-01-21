"use client"

import { useState } from 'react';
import searchBooks from './searchBooks';
import books from './books.module.css'
import ui from './../../styles/ui.module.css'
import SearchInput from '../SearchInput';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) {
      alert('검색어를 입력하세요.');
      return;
    }
    const data = await searchBooks(query);
    setResults(data.items);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
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
      <div className={books.container}>
        {results.map((item) => (
          <div className={books.imgBox} key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className={books.contBox}>
              <h3>{item.title}</h3>
              <h4>{item.author}</h4>
              <p>{item.description}</p>
              <p>{item.discount}원</p>
              <p>{item.publisher}</p>
              <p>{item.pubdate}</p>
              <p>
                <a className={ui.button3} href={item.link} target="_blank">
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
