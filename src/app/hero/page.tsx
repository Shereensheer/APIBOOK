import React from "react";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen text-center text-white" style={{ backgroundImage: 'url("/book.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Welcome to Book Library
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Explore a wide collection of books from various genres. Find your next great read today.
        </p>
        <Link href="/featurebook">
          <button className="bg-black text-secondary px-6 py-3 rounded-lg text-xl shadow-lg hover:bg-accent hover:text-white transition-all duration-300">
            Explore Featured Books
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
