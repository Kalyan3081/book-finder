import React from "react";
import "../styles/SearchBar.css";

function SearchBar({ query, setQuery, handleSearch, searchType, setSearchType }) {
    return (
        <form
            className="search-bar"
            onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
            }}
        >
            <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
            >
                <option value="title">Title</option>
                <option value="author">Author</option>
                <option value="cover">With Cover</option>
            </select>
            <input
                type="text"
                placeholder="Search books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                disabled={searchType === "cover"} // Only allow text for title/author
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;
