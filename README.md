# 📚 Book Finder App

A responsive React application for searching and exploring books using the **Open Library API**. Users can browse popular books, search by title or author, and view detailed information about each book.

This project was built using **React** and **Vite**.

---

## 🚀 Live Demo

🔗 **Live Preview:** [https://jqm67t-5173.csb.app/](https://jqm67t-5173.csb.app/)  
💻 **View on CodeSandbox:** [https://jqm67t-5173.csb.app/](https://jqm67t-5173.csb.app/)  
📦 **GitHub Repository:** [https://github.com/Kalyan3081/book-finder](https://github.com/Kalyan3081/book-finder)

---

## 🎯 Features

- 🔍 **Search Books:** Search by title or author.  
- 📱 **Responsive UI:** Works seamlessly on desktop and mobile.  
- 📘 **Book Cards:** Display cover, title, author(s), year published, and edition count.  
- ⚡ **Shimmer Loading:** Skeleton loader while fetching data.  
- 📖 **Book Details Page:** View detailed info by clicking on a book.  
- 🚨 **Error Handling:** Graceful messages for no results or errors.  
- 🧩 **Clean Code:** Modular React components with comments.  

---

## 🛠 Tech Stack

- ⚛️ React 18  
- ⚡ Vite  
- 🌐 React Router DOM  
- 🔗 Fetch API  
- 🎨 CSS Grid & Flexbox for layout  
- 💫 Shimmer/Skeleton Loader  

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Kalyan3081/book-finder.git
cd book-finder
npm install
npm run dev
npm run build
```
```
book-finder/
│
├── public/                     # Static assets
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── BookCard.jsx
│   │   ├── BookList.jsx
│   │   ├── BookModal.jsx
│   │   ├── SearchBar.jsx
│   │   └── Shimmer.jsx
│   │
│   ├── pages/                   # Route-based pages
│   │   ├── BookDetail.jsx
│   │   └── Home.jsx
│   │
│   ├── services/                # API and data fetching logic
│   │   └── api.js
│   │
│   ├── styles/                  # CSS files for each component/page
│   │   ├── BookDetail.css
│   │   ├── BookList.css
│   │   ├── BookModal.css
│   │   ├── Home.css
│   │   ├── SearchBar.css
│   │   └── Shimmer.css
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```
### 🌐 API Reference
https://openlibrary.org/search.json?q={query}

### 🧑‍💻 Author

**Vijay Kalyan**  
🔗 [GitHub](https://github.com/Kalyan3081)



