"use client"

import { useState } from 'react';
import searchImages from './searchImages';
import search from './search.module.css'
import SearchInput from '../SearchInput';

export default function SearchForm() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) {
      alert('검색어를 입력하세요.');
      return;
    }
    const data = await searchImages(query);
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
        <div className={search.container}>
      {results.map((item) => (
        <div className={search.imgBox} key={item.link}>
          <img src={item.thumbnail} alt={item.title} />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
    ): null}
    </>

  );
}
