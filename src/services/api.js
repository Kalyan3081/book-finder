export const fetchBooks = async (query = "") => {
    const url = `https://openlibrary.org/search.json?title=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch books");
    return res.json();
};

export const fetchBookDetails = async (key) => {
    const url = `https://openlibrary.org/works/${key}.json`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch book details");
    return res.json();
};
