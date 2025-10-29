import React from "react";
import BookCard from "./BookCard";
import "../styles/BookList.css";

function BookList({ books }) {
    if (!books.length) return <p className="no-results">No books found!</p>;

    return (
        <div className="book-list">
            {books.map((book) => (
                <BookCard key={book.key} book={book} />
            ))}
        </div>
    );
}

export default BookList;
