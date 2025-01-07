import React from "react";
import "./Stocklist.css"; 

function StockList({ stock, deleteStock }) {
  return (
    <ul className="stock-list">
      {stock.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={() => deleteStock(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default StockList;
