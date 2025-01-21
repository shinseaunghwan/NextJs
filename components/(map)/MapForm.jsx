"use client"

import { useState } from 'react';
import DOMPurify from 'dompurify';
import searchMap from './map';
import map from './map.module.css';
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
    const data = await searchMap(query);
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
        <div className={map.container}>
          {results.map((item) => (
            <div className={map.contBox} key={item.id}>
               <h3 dangerouslySetInnerHTML={createMarkup(item.title)} />
                <p>{item.description}</p>
                <p>{item.category}</p>
                <p>{item.telephone}</p>
                <p>{item.address}</p>
                <p>
                  <a className={ui.button3} href={item.link} target="_blank">
                    자세히 보기
                  </a>
                </p>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}
