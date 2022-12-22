const Book = ({ id, title, author }) => (
  <>
    <h2>
      {id}. "{title}""
    </h2>
    <h3>{author}</h3>
  </>
);
export default Book;
