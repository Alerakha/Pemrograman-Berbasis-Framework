import React, { useState } from "react";

function TodoList() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  function handleListChange(e) {
    setInput(e.target.value);
  }

  function handleaddToList() {
    if (input.trim() != "") {
      setList([...list, input]);
      setInput("");
    }
  }

  //   Untuk handle penghapusan data dalam list
  function handleDelete(index) {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  }

  return (
    <div>
      <h2>To-do List:</h2>
      <input
        type="text"
        placeholder="tugas"
        value={input}
        onChange={handleListChange}
      ></input>
      <button onClick={handleaddToList}>Tambah</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
