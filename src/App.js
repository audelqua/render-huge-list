import React, {useState, UseEffect, useEffect} from 'react'
// import myJSONData from './constants/data.json'
import './App.css';
import { useColorFleeter } from './hooks/useColorFleeter'
import {AutoSizer, List} from 'react-virtualized';
import styled from 'styled-components'
import 'react-virtualized/styles.css'; // only needs to be imported once

let timerUnifier; 
function App() {
  const [number, setNumber] = useState(0)
  
  const randomNumberGenerator = () => {
    setNumber(Math.floor(Math.random() * 100))
  }
  
  useEffect(() => {
    timerUnifier = setInterval(() => {
      randomNumberGenerator()
    }, 3000)
    return () => {
      clearInterval(timerUnifier)
    }
  }, [])

  return (
    <div className="App">
      <div style={{background: useColorFleeter(number), height: '100vh'}}>
        
      </div>
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



