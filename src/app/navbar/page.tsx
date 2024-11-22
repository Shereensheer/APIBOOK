import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary text-secondary p-4 bg-black text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">SHEREEN LIBRARY</h1>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-accent">Home</Link></li>
          <li><Link href="/featurebook" className="hover:text-accent">Books</Link></li>
          <li><Link href="/dashboard" className="hover:text-accent">Admin Dashboard</Link></li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
