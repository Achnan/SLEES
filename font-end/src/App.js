import { useState, useEffect } from "react";
import Header from "./components/Header";
import Stock from "./components/Stocklist";
import AddForm from "./components/Addform";
import axios from "axios";

import "./App.css";

function App() {
  const [stock, setStock] = useState([]);
  const [theme, setTheme] = useState("light");

  const getStock = () => {
    axios
      .get("http://localhost:3001/stock")
      .then((response) => setStock(response.data))
      .catch((error) => console.error("Error fetching stock data:", error));
  };

  const deleteStock = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then(() => setStock(stock.filter((item) => item.id !== id)))
      .catch((error) => console.error("Error deleting stock:", error));
  };

  useEffect(() => {
    getStock();
  }, []);

  return (
    <div className={`App ${theme}`}>
      <Header title="Home" theme={theme} setTheme={setTheme} />
      <main>
        <AddForm stock={stock} setStock={setStock} />
        <Stock stock={stock} deleteStock={deleteStock} />
      </main>
    </div>
  );
}

export default App;
