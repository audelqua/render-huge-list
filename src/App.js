import React, {useState, UseEffect, useEffect} from 'react'
// import myJSONData from './constants/data.json'
import './App.css';
import {AutoSizer, List} from 'react-virtualized';
import SampleOfContext from './components/useContextSample'
import CounterWithUseReducer from './components/counterWithUseReducer'
import SampleOfUseCallback from './components/sampleOfUseCallback'
import SampleOfUseRef from './components/sampleOfUseRef'
import SampleOfUseMemo from './components/sampleOfUseMemo'
import SampleOfUseTransition from './components/sampleOfUseTransition'
import UsingOfBindMethod from './components/sampleOfUsingBind'
import SampleAddCustomAttribute from './components/sampleAddCustomAttribute'
import SampleOfForwardRef from './components/sampleOfForwardRef'
import CompositionVsInheritance from './components/compositionVsInheritance'
import Editable from './components/compositionVsInheritance/EditableComponent'
import SampleOfUsingRef from './components/sampleOfUsingRef'
import SampleOfForwardingRef from './components/sampleOfForwardingRef'
import SampleOfHOC from './components/sampleOfHOC'
import SampleOfCallBackRef from './components/sampleOfCallBackRef'
import SampleUsageOfRootRender from './components/sampleUsageOfRootRender'
import SampleUsageOfFlushSync from './components/sampleUsageOfFlushSync'
import ShallowComparisonTesting from './components/shallowComparisonTesting'
import ShoppingCart from './components/shoppingCart'
import CssSelectors from './components/cssSelectors'

import styled from 'styled-components'
import 'react-virtualized/styles.css'; // only needs to be imported once

function App() {
  // **** this is for first commit in current branch
  // **** this is for second commit in current branch
  // **** this is for third commit in current branch
  window.name = 'audrey ' //defining global variable via window object 

  return (
    <div className="App">
      <CssSelectors />
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



