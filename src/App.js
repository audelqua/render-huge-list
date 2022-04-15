import React, {useState, UseEffect, useEffect} from 'react'
import myJSONData from './constants/data.json'
import './App.css';
import { FixedSizeList as List } from 'react-window';

function App() {
  return (
    <div className="App">
      <HeavyChildComponent />
    </div>
  );
}

export default App;

const HeavyChildComponent = (props) => { 
  // const [myData, updateMyData] = useState(myJSONData.human.filter((item , index) => index < 1000));
  const [myData, updateMyData] = useState(myJSONData.human);
  
  return(
    <List
      height={1000}
      itemSize={100}
      width={'100%'}
      itemData={myData}
      itemCount={myData.length}
    >
      {({data, index, style}) => {
        return (
          <tr style={style}>
            <td>{index}</td>
          </tr>
        )
      }}
    </List>
  )
}


