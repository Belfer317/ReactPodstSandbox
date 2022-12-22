import Book from "../../Components/Book/Book";
import Nav from "../../Components/Nav/Nav";

// const books = [
//   { id: 1, title: "Kubuś Puchatek", author: "A. Milne" },
//   { id: 2, title: "Tytuł 2", author: "Autor 2" }
// ];

// console.log(books)

const BookView = () => {
  const books = JSON.parse(localStorage.getItem("elements")) || [];
  return (
    <>
      <Nav />
      {books.map((book, index) => (
        <div key={book.id}>
          <Book id={index + 1} title={book.title} author={book.author} />
          <hr />
        </div>
      ))}
    </>
  );
};
export default BookView;
