import React, { useState, useEffect } from "react";
// import myJSONData from './constants/data.json'
import "./App.css";
// import { AutoSizer, List } from "react-virtualized";
// import SampleOfContext from "./components/useContextSample";
// import CounterWithUseReducer from "./components/counterWithUseReducer";
// import SampleOfUseCallback from "./components/sampleOfUseCallback";
// import SampleOfUseRef from "./components/sampleOfUseRef";
// import SampleOfUseMemo from "./components/sampleOfUseMemo";
// import SampleOfUseTransition from "./components/sampleOfUseTransition";
// import UsingOfBindMethod from "./components/sampleOfUsingBind";
// import SampleAddCustomAttribute from "./components/sampleAddCustomAttribute";
// import SampleOfForwardRef from "./components/sampleOfForwardRef";
// import CompositionVsInheritance from "./components/compositionVsInheritance";
// import Editable from "./components/compositionVsInheritance/EditableComponent";
// import SampleOfUsingRef from "./components/sampleOfUsingRef";
// import SampleOfForwardingRef from "./components/sampleOfForwardingRef";
// import SampleOfHOC from "./components/sampleOfHOC";
// import SampleOfCallBackRef from "./components/sampleOfCallBackRef";
// import SampleUsageOfRootRender from "./components/sampleUsageOfRootRender";
// import SampleUsageOfFlushSync from "./components/sampleUsageOfFlushSync";
// import ShallowComparisonTesting from "./components/shallowComparisonTesting";
// import ShoppingCart from "./components/shoppingCart";
// import CssSelectors from "./components/cssSelectors";
// import Algorithms from "./components/Algorithms";
// import AsyncInUseEffect from "./components/AsyncInUseEffect";
// import UseEffectVsUseLayoutEffect from "./components/UseEffectVsUseLayoutEffect";
// import ReferenceSeparating from "./components/referenceSeparating";
// import CreatePortal from "./components/createPortal";
// import SampleOfMemo from "./components/sampleOfMemo";

// import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import "react-virtualized/styles.css"; // only needs to be imported once

function App() {
  const [rows, setRows] = useState([]);
  const [calcRows, setCalcRows] = useState([]);
  console.log("calcRows", calcRows);
  // console.log(rows);
  // window.someVariable = 'hello im global variable one'
  // const [state, setState] = useState(1)
  // const someConstantVariable = 12

  // // **** this is for first commit in current branch
  // // **** this is for second commit in current branch
  // // **** this is for fourth commit in target branch
  // // **** this is for third commit in current branch
  // // **** this is for fiveth commit in current branch
  // window.name = 'audrey ' //defining global variable via window object

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   console.log('salam');
  // }

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
      {/* <Profiler id='css-selector' onRender={() => console.log('CssSelectors called')}>
        <CssSelectors />
      </Profiler>
      <Profiler id='ShoppingCart' onRender={() => console.log('ShoppingCart called')}>
        <ShoppingCart />
      </Profiler>
      
      <Profiler id='SampleUsageOfRootRender' onRender={() => console.log('SampleUsageOfRootRender called')}>
        <SampleUsageOfRootRender />
      </Profiler> */}
      {/* <UseEffectVsUseLayoutEffect /> */}
      {/* <CreatePortal someConstantVariable={someConstantVariable}/> */}
      {/* <SampleOfMemo /> */}
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
