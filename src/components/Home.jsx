// src/components/Home.jsx

import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import BookCard from "./BookCard"; // Corrected path
import books from "../booksData"; // Ensure correct path for data import
import "./Home.css"; // Import CSS for styling

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <button className="add-book-btn" onClick={() => navigate("/add-book")}>
        + Add Book
      </button>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
