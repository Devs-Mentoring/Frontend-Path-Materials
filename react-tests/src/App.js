import "./App.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.length) {
      return;
    }
    const newItem = {
      text: text,
      id: Date.now(),
    };

    setText("");
    setItems(items.concat(newItem));
  };
  return (
    <div>
      <h1>TODOs</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">What we have todo?</label>
        <input id="new-todo" aria-label="new-todo" value={text} onChange={handleChange} />
        <input type="submit" value="send"/>
      </form>
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
