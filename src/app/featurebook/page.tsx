'use client'
import React from "react";
import Image from "next/image"

const FeaturedBooks = () => {
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "/ii.jpg",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "/mm.jpg",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      image: "/jj.jpg",
    },
  ];

  return (
    <section className="bg-slate-200 h-screen">
      <div className="container mx-auto text-center">
       
        <h2 className="text-3xl font-bold text-primary mb-8">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={book.image}
                alt={book.title}
                height={200}
                width={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {book.title}
                </h3>
                <p className="text-black-600">{book.author}</p>
                <button className="mt-4 bg-black text-white px-4 py-2 rounded shadow hover:bg-accent hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
