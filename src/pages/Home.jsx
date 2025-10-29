import React, { useState, useEffect } from "react";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";
import Shimmer from "../components/Shimmer";
import "../styles/Home.css";
function Home() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [searchType, setSearchType] = useState("title");

    // Fetch default books on initial render
    useEffect(() => {
        fetchBooks("harry potter"); // default query to show some books
    }, []);

    const fetchBooks = async (searchQuery) => {
        try {
            setLoading(true);
            setError("");
            const response = await fetch(
                `https://openlibrary.org/search.json?title=${searchQuery}&limit=20`
            );

            const data = await response.json();
            if (data.docs.length === 0) {
                setError("No books found!");
            }
            setBooks(data.docs);
        } catch (err) {
            setError("Failed to fetch books. Please try again later.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        if (searchType === "cover") {
            const filtered = books.filter((book) => book.cover_i);
            setBooks(filtered);
        } else {
            fetchBooks(searchType === "title" ? query : `author:${query}`);
        }
    };

    return (
        <>
            <div className="home">
                <h1>Book Finder</h1>
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    handleSearch={handleSearch}
                    searchType={searchType}
                    setSearchType={setSearchType}
                />

                {loading && <Shimmer count={8} />}
                {error && <p className="error">{error}</p>}
                {!loading && !error && <BookList books={books} />}
            </div>
        </>
    );
}

export default Home;
