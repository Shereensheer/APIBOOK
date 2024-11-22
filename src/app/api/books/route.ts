import { NextResponse } from "next/server";


type Book = {
  id: number;
  title: string;
  author: string;
  available: boolean;
};


const books: Book[] = [
  { id: 1, title: "The Great Gatsby", author: "By F. Scott Fitzgerald", available: true },
  { id: 2, title: "To Kill a Mockingbird", author: "By Harper Lee", available: true },
  { id: 3, title: "1984", author: "By George Orwell", available: true },
  { id: 4, title: "Tale of Izrail", author: "Allama Iqbal", available: false },
];

export async function GET() {
  try {
    return NextResponse.json(books, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Error fetching books" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newBook: Omit<Book, "id"> = await request.json();
    const id = books.length > 0 ? books[books.length - 1].id + 1 : 1;
    const book: Book = { id, ...newBook };
    books.push(book);
    return NextResponse.json(book, { status: 201 });
  } catch {
    return NextResponse.json({ message: "Error creating book" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const updatedBookData: Partial<Book> & { id: number } = await request.json();
    const { id } = updatedBookData;
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }
    const updatedBook = { ...books[index], ...updatedBookData };
    books[index] = updatedBook;
    return NextResponse.json(updatedBook, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Error updating book" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id }: { id: number } = await request.json();
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) {
      return NextResponse.json({ message: "Book not found" }, { status: 404 });
    }
    books.splice(index, 1);
    return NextResponse.json({ message: "Book deleted successfully" }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Error deleting book" }, { status: 500 });
  }
}
