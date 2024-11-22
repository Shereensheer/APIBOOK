'use client'
import React, { useState, useEffect } from "react";

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
}

const Dashboard = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [formData, setFormData] = useState<Book>({
    id: 0,
    title: "",
    author: "",
    available: true,
  });
  const [isEdit, setIsEdit] = useState(false);

  const fetchBooks = async () => {
    try {
      const response = await fetch("/api/books");
      if (!response.ok) throw new Error("Failed to fetch books");
      const data: Book[] = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "available" ? value === "true" : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = isEdit ? "PUT" : "POST";
    try {
      const response = await fetch("/api/books", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to save book");
      setFormData({ id: 0, title: "", author: "", available: true });
      setIsEdit(false);
      fetchBooks();
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch("/api/books", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) throw new Error("Failed to delete book");
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleEdit = (book: Book) => {
    setFormData(book);
    setIsEdit(true);
  };

  useEffect(() => {
    fetchBooks();
  }, []);


  return (
    <div className="min-h-screen bg-slate-300 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Book Management Dashboard</h1>

     
      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-6 max-w-lg mx-auto">
        <h2 className="text-xl font-semibold mb-4">{isEdit ? "Edit Book" : "Add Book"}</h2>
        <div className="mb-4">
          <label className="block font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Available</label>
          <select
            name="available"
            value={formData.available ? "true" : "false"}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          {isEdit ? "Update Book" : "Add Book"}
        </button>
      </form>

 
      <table className="w-full bg-white shadow rounded">
        <thead>
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Author</th>
            <th className="border px-4 py-2">Available</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book: Book) => (
            <tr key={book.id}>
              <td className="border px-4 py-2">{book.title}</td>
              <td className="border px-4 py-2">{book.author}</td>
              <td className="border px-4 py-2">{book.available ? "Yes" : "No"}</td>
              <td className="border px-4 py-2 flex justify-center space-x-2">
                <button
                  onClick={() => handleEdit(book)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(book.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
