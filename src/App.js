import React, { useState, useEffect } from "react";
import "./App.css";
import "react-virtualized/styles.css"; // only needs to be imported once

function App() {
  const [rows, setRows] = useState([]);
  const [calcRows, setCalcRows] = useState([]);

  const handleAddNewRow = (previousId) => {
    let tempRows = structuredClone(rows);

    const tempRow = {
      type: undefined,
      value: 0,
      name: undefined,
      calculate: true,
    };

    tempRows = [
      ...tempRows.slice(0, previousId + 1),
      tempRow,
      ...tempRows.slice(previousId + 1),
    ];

    setRows(tempRows);
  };

  const handleUpdateRowData = (field, id, val) => {
    let tempRows = structuredClone(rows);

    tempRows = tempRows.map((row, index) => {
      if (index === id) {
        row[field] = val;
        return row;
      }
      return row;
    });
    setRows(tempRows);
  };

  const handleRemoveRow = (id) => {
    let tempRows = structuredClone(rows);
    tempRows = tempRows.filter((_, index) => index !== id);
    setRows(tempRows);
  };

  const handleCalculate = () => {
    let tempRows = structuredClone(rows);

    tempRows = tempRows.map((row, index) => {
      if (row.type === "total") {
        const tempRow = {
          ...row,
          children: childFinder(tempRows, index, "total"),
          value: sumFinder(childFinder(tempRows, index, "total")),
        };
        return tempRow;
      } else if (row.type === "subtotal") {
        const tempRow = {
          ...row,
          children: childFinder(tempRows, index, "subtotal"),
          value: sumFinder(childFinder(tempRows, index, "subtotal")),
        };
        return tempRow;
      } else return row;
    });
    setCalcRows(tempRows);
  };

  const sumFinder = (children) => {
    let val = 0;
    val = children
      .filter((child) => child.type === "item" && child.calculate)
      .reduce((acc, cur) => +acc + +cur.value, 0);
    return val;
  };

  const childFinder = (tempRows, index, myType) => {
    let children = [];

    for (let i = index - 1; i >= 0; i--) {
      if (myType === "total") {
        if (tempRows[i].type === "total" || tempRows[i].type === "title")
          return children;
        else {
          children.push(tempRows[i]);
        }
      } else if (myType === "subtotal") {
        if (
          tempRows[i].type === "subtotal" ||
          tempRows[i].type === "subtitle" ||
          tempRows[i].type === "total" ||
          tempRows[i].type === "title"
        )
          return children;
        else {
          children.push(tempRows[i]);
        }
      }
    }
    return children;
  };

  useEffect(() => {
    handleCalculate();
  }, [rows]);

  return (
    <div className="App" style={{ marginTop: "20px" }}>
      {calcRows.map((row, index) => (
        <Row
          key={index}
          handleAddNewRow={handleAddNewRow}
          handleUpdateRowData={handleUpdateRowData}
          handleRemoveRow={handleRemoveRow}
          row={{ ...row, id: index }}
        />
      ))}
      {!calcRows.length > 0 && (
        <div
          style={{ border: "1px solid red", cursor: "pointer" }}
          onClick={handleAddNewRow}
        >
          add new
        </div>
      )}
    </div>
  );
}

export default App;

const Row = ({
  handleAddNewRow,
  handleUpdateRowData,
  row,
  handleRemoveRow,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <select
        name="type"
        id="type"
        value={row.type || "Please Choose..."}
        onChange={(e) => handleUpdateRowData("type", row.id, e.target.value)}
      >
        <option disabled selected hidden>
          Please Choose...
        </option>
        <option value="title">title</option>
        <option value="subtitle">subtitle</option>
        <option value="item">item</option>
        <option value="subtotal">subtotal</option>
        <option value="total">total</option>
      </select>
      <select
        name="name"
        id="name"
        value={row.name || "Please Choose..."}
        onChange={(e) => handleUpdateRowData("name", row.id, e.target.value)}
      >
        <option disabled selected hidden>
          Please Choose...
        </option>
        <option value="khoms">khoms</option>
        <option value="zakat">zakat</option>
        <option value="revenue">revenue</option>
        <option value="annual-profit">annual-profit</option>
      </select>
      <input
        disabled={row.type !== "item"}
        onChange={(e) => handleUpdateRowData("value", row.id, e.target.value)}
        value={row.value || ""}
      />
      <div
        style={{ border: "1px solid red", cursor: "pointer" }}
        onClick={() => handleAddNewRow(row.id)}
      >
        add new
      </div>
      <div
        style={{ border: "1px solid red", cursor: "pointer" }}
        onClick={() => handleRemoveRow(row.id)}
      >
        remove
      </div>
    </div>
  );
};

// this is a changed i only want to get this from main branch and put it in my feature branch.
// const HeavyChildComponent = (props) => {
//   // const [myData, updateMyData] = useState(myJSONData.human.filter((item , index) => index < 1000));
//   // const [myData, updateMyData] = useState(myJSONData.human);

//   function rowRenderer({key, index, style}) {
//     return (
//       <div key={key} style={style}>
//         {myData[index]}
//       </div>
//     );
//   }

//   return(

//     <AutoSizer>
//       {({height, width}) => (
//         <List
//           height={height}
//           rowCount={myData.length}
//           rowHeight={1000}
//           rowRenderer={rowRenderer}
//           width={width}
//         />
//       )}
//     </AutoSizer>
//   )
// }
