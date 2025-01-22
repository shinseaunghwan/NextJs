import ui from "../styles/ui.module.css"

export default function SearchInput({ query, setQuery, handleKeyDown, handleSearch }) {
  return (
    <div className={ui.inputBox}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="검색어를 입력하세요"
      />
      <button onClick={handleSearch}>
        검색
      </button>
    </div>
  );
}
