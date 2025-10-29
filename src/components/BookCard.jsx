import React from "react";
import { Link } from "react-router-dom";
// import "./BookCard.css";

function BookCard({ book }) {
    const coverUrl = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : "https://via.placeholder.com/150x200?text=No+Cover";

    return (
        <Link to={`/book/${book.key.replace("/works/", "")}`} className="book-card">
            <img className="book-cover" src={coverUrl} alt={book.title} />
            <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author_name ? book.author_name.join(", ") : "Unknown"}</p>
                <p>{book.first_publish_year || "N/A"}</p>
            </div>
        </Link>
    );
}

export default BookCard;
