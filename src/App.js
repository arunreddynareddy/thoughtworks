import "./styles.css";
import { useState } from "react";

export default function App() {
  const [details, setDetails] = useState({});
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();

  let id = 0;

  handleSubmitForm = (e) => {
    e.preventDefault();
    id = id + 1;
    let userDetails = {
      id: id,
      title,
      description,
      date,
    };
    setDetails(userDetails);
  };

  handleEdit = (id) => {};

  return (
    <div className="App">
      <h1 className="heading">Personal Task Manager</h1>
      <form className="form" onSubmit={handleSubmitForm}>
        <label className="label" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter Your Title"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="description" className="label">
          Description
        </label>
        <input
          id="description"
          type="text"
          placeholder="Enter Your Description"
          className="input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <label htmlFor="dueDate" className="label">
          Due Date
        </label>
        <input
          id="dueDate"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
      <div>
        <h1 className="count-heading">Count: {details.length}</h1>
        <ul className="ul-container">
          <li
            key={details.id}
            className="li-container"
            onClick={handleEdit(details.id)}
          >
            <p>{details.title}</p>
            <p>{details.description}</p>
            <p>{details.date}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
