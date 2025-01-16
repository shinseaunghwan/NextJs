"use client"

import { useState } from 'react';
import searchBooks from './searchBooks';
import search from './search.module.css'

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
    <div className={search.inputBox}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="검색어를 입력하세요"
      />
      <button onClick={handleSearch}>검색</button>

      <div className={search.container}>
        
        {results.map((item) => (
          <div className={search.imgBox} key={item.link}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.author}</p>
            <p>{item.description}</p>
            <p>{item.discount}</p>
            <p>{item.publisher}</p>
            <p>{item.pubdate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
