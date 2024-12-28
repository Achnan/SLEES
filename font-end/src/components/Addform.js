import React, { useState } from "react";
import axios from "axios";

function AddForm({ stock, setStock }) {
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (name.trim()) {
      axios
        .post("http://localhost:3001/create", { name: name.trim() })
        .then((response) => {
          setStock([...stock, { id: response.data.id, name: name.trim() }]);
          setName("");
        })
        .catch((error) => console.error("Error adding stock:", error.response || error));
    } else {
      console.error("Name cannot be empty");
    }
  };
  

  return (
    <div className="add-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter stock name"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddForm;
