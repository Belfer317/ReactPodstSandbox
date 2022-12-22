import { useState } from "react";
import Button from "../Button/Button";
import "./AddElement.css";

const AddElement = () => {
  const element = {
    id: "",
    title: "",
    author: ""
  };

  const [newTitle, setNewTitle] = useState();
  const [newAuthor, setNewAuthor] = useState();

  const handleAddElem = (evt) => {
    evt.preventDefault();

    element.id = crypto.randomUUID();
    element.title = newTitle;
    element.author = newAuthor;
    console.log(element);

    let elements = JSON.parse(localStorage.getItem("elements")) || [];

    elements = [...elements, element];

    localStorage.setItem("elements", JSON.stringify(elements));
    setNewTitle("");
    setNewAuthor("");
  };

  return (
    <>
      <form method="get" action="#" onSubmit={handleAddElem}>
        <label htmlFor="elementTitle">
          Tytuł:
          <input
            type="text"
            id="elementTitle"
            value={newTitle}
            onChange={(evt) => setNewTitle(evt.target.value)}
          />
        </label>
        <label htmlFor="elementAuthor">
          Autor:
          <input
            type="text"
            id="elementTitle"
            value={newAuthor}
            onChange={(evt) => setNewAuthor(evt.target.value)}
          />
        </label>
        <div>
          <Button innerText="dodaj" />
        </div>
      </form>
    </>
  );
};

export default AddElement;
