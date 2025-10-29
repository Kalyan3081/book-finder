import React from "react";
import "./BookModal.css";

function BookModal({ book, onClose }) {
    if (!book) return null;

    const coverUrl = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : "https://via.placeholder.com/300x450?text=No+Cover";

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <div className="modal-body">
                    <img className="modal-cover" src={coverUrl} alt={book.title} />
                    <div className="modal-info">
                        <h2>{book.title}</h2>
                        <p>
                            <strong>Author(s):</strong>{" "}
                            {book.author_name ? book.author_name.join(", ") : "Unknown"}
                        </p>
                        <p>
                            <strong>First Published:</strong>{" "}
                            {book.first_publish_year || "N/A"}
                        </p>
                        <p>
                            <strong>Edition Count:</strong> {book.edition_count || "N/A"}
                        </p>
                        <p>
                            <strong>Language(s):</strong>{" "}
                            {book.language ? book.language.join(", ") : "N/A"}
                        </p>
                        <p>
                            <strong>Subjects:</strong>{" "}
                            {book.subject ? book.subject.slice(0, 10).join(", ") : "N/A"}
                        </p>
                        {book.lending_edition_s && (
                            <p>
                                <strong>Lending Edition:</strong> {book.lending_edition_s}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookModal;
