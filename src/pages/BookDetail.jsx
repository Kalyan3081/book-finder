import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchBookDetails } from "../services/api";
import "../styles/Bookdetail.css";

function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const getBookDetail = async () => {
            try {
                setLoading(true);
                const data = await fetchBookDetails(id);
                setBook(data);
            } catch (err) {
                setError("Failed to fetch book details. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        getBookDetail();
    }, [id]);

    if (loading) return <p className="loading">Loading book details...</p>;
    if (error) return <p className="error">{error}</p>;
    if (!book) return <p className="error">Book not found</p>;

    return (
        <div className="book-detail-container">
            <Link to="/" className="back-button">← Back to Home</Link>
            <div className="book-detail-card">
                <img
                    src={book.covers ? `https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg` : "https://via.placeholder.com/200x300?text=No+Cover"}
                    alt={book.title}
                    className="book-detail-cover"
                />
                <div className="book-detail-info">
                    <h2>{book.title}</h2>
                    <p><strong>Description:</strong> {book.description ? (typeof book.description === "string" ? book.description : book.description.value) : "N/A"}</p>
                    <p><strong>First Published:</strong> {book.first_publish_date || "N/A"}</p>
                    <p><strong>Subjects:</strong> {book.subjects ? book.subjects.join(", ") : "N/A"}</p>
                    <p><strong>Authors:</strong> {book.authors ? book.authors.map(a => a.name).join(", ") : "N/A"}</p>
                    <a href={`https://openlibrary.org/works/${id}`} target="_blank" rel="noreferrer" className="open-link">Open on Open Library</a>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;
