import React, {useState, UseEffect, useEffect} from 'react'
// import myJSONData from './constants/data.json'
import './App.css';
import {AutoSizer, List} from 'react-virtualized';
import SampleOfContext from './components/useContextSample'
import CounterWithUseReducer from './components/counterWithUseReducer'
import styled from 'styled-components'
import 'react-virtualized/styles.css'; // only needs to be imported once

function App() {
  return (
    <div className="App">
      <CounterWithUseReducer />
    </div>
  );
}

export default App;

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



