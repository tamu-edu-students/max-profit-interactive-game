import { useState } from "react";
import "./style.css";
import tableImage from "./assets/table2.png";
import chairImage from "./assets/chair3.png";

function App() {
  const [rectangles, setRectangles] = useState(0);
  const [circles, setCircles] = useState(0);
  const [columns, setColumns] = useState(0);
  const [tables, setTables] = useState(0);
  const [chairs, setChairs] = useState(0);
  const [cProfit, setCProfit] = useState(0);
  const [tProfit, setTProfit] = useState(0);

  const updateRectangles = (numRectangles) => {
    if (numRectangles < 0) {
      return alert("number of rectange can't be less than zero");
    } else {
      setRectangles(numRectangles);
    }
  };

  const updateCircles = (numCircles) => {
    if (numCircles < 0) {
      return alert("number of circles can't be less than zero");
    } else {
      setCircles(numCircles);
    }
  };

  const updateColumns = (numColumns) => {
    if (numColumns < 0) {
      return alert("number of columns can't be less than zero");
    } else {
      setColumns(numColumns);
    }
  };

  const updateChairProfit = (profit) => {
    if (profit < 0) {
      return alert("Assume you make a profit per chair greater than zero");
    } else {
      setCProfit(profit);
    }
  };

  const updateTableProfit = (profit) => {
    if (profit < 0) {
      return alert("Assume you make a profit per chair greater than zero");
    } else {
      setTProfit(profit);
    }
  };

  const canAddTable = () => {
    return columns >= 3 && circles >= 1;
  };

  const canAddChair = () => {
    return columns >= 4 && rectangles >= 2;
  };

  const addTable = () => {
    if (canAddTable()) {
      setTables(tables + 1);
      setCircles(circles - 1);
      setColumns(columns - 3);
    } else {
      alert("Not enough resources to add a table.");
    }
  };

  const removeTable = () => {
    if (tables > 0) {
      setTables(tables - 1);
      setCircles(circles + 1);
      setColumns(columns + 3);
    }
  };

  const addChair = () => {
    if (canAddChair()) {
      setChairs(chairs + 1);
      setRectangles(rectangles - 2);
      setColumns(columns - 4);
    } else {
      alert("Not enough resources to add a chair.");
    }
  };

  const removeChair = () => {
    if (chairs > 0) {
      setChairs(chairs - 1);
      setRectangles(rectangles + 2);
      setColumns(columns + 4);
    }
  };

  const calculateTotalProfit = () => {
    return tables * tProfit + chairs * cProfit;
  };

  return (
    <>
      <nav>
        <h1>Inventory Management</h1>
      </nav>
      <div className="main-content">
        <div className="inventory-section">
          <h2>Inventory</h2>
          <div className="block">
            <span>Rectangular Boards:</span>
            <input
              id="rectangular-blocks"
              onChange={(e) => updateRectangles(e.target.value)}
              value={rectangles}
            />
          </div>
          <div className="block">
            <span>Circular Boards:</span>
            <input
              id="circular-blocks"
              value={circles}
              onChange={(e) => updateCircles(e.target.value)}
            />
          </div>
          <div className="block">
            <span>Long Dowels:</span>
            <input
              id="columnar-blocks"
              onChange={(e) => {
                updateColumns(e.target.value);
              }}
              value={columns}
            />
          </div>
          <div className="block">
            <span>Profit Per Chair:</span>
            <input
              id="profit-chair-blocks"
              onChange={(e) => {
                updateChairProfit(e.target.value);
              }}
              value={cProfit}
            />
          </div>
          <div className="block">
            <span>Profit Per Table:</span>
            <input
              id="profit-table-blocks"
              onChange={(e) => {
                updateTableProfit(e.target.value);
              }}
              value={tProfit}
            />
          </div>
        </div>

        <div className="product-section">
          <div className="product">
            <div className="product-content">
              <h3>Chair</h3>
              <p>Requires: 4 Long Dowels (legs), 2 Rectangular Boards</p>
              <p>Chairs built : {chairs}</p>

              <div className="button-group">
                <button onClick={addChair}>+</button>
                <button onClick={removeChair}>-</button>
              </div>
            </div>
            {/*
            <img src={chairImage} alt="Chair" />
            */}
          </div>

          <div className="product">
            <div className="product-content">
              <h3>Table</h3>
              <p>Requires: 3 Long Dowels (legs), 1 Circular Board</p>
              <p>Tables built : {tables}</p>

              <div className="button-group">
                <button onClick={addTable}>+</button>
                <button onClick={removeTable}>-</button>
              </div>
            </div>
            {/* <img src={tableImage} alt="table" /> */}
          </div>
        </div>
      </div>

      <div className="profits-section">
        <h2>Profits Earned</h2>

        <h3 style={{ color: "green" }}>${calculateTotalProfit()}</h3>
      </div>
    </>
  );
}

export default App;
