import React, {useState, UseEffect, useEffect, Profiler} from 'react'
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
import Algorithms from './components/Algorithms'
import AsyncInUseEffect from './components/AsyncInUseEffect'
import UseEffectVsUseLayoutEffect from './components/UseEffectVsUseLayoutEffect'
import ReferenceSeparating from './components/referenceSeparating'
import CreatePortal from './components/createPortal'
import SampleOfMemo from './components/sampleOfMemo'


import styled from 'styled-components'
import 'react-virtualized/styles.css'; // only needs to be imported once

function App() {
  window.someVariable = 'hello im global variable one'
  const [state, setState] = useState(1)
  const someConstantVariable = 12

  // **** this is for first commit in current branch
  // **** this is for second commit in current branch
  // **** this is for fourth commit in target branch
  // **** this is for third commit in current branch
  // **** this is for fiveth commit in current branch
  window.name = 'audrey ' //defining global variable via window object 
  
  const handleClick = (e) => {
    e.preventDefault()
    console.log('salam');
  }

  return (
    <div className="App">
      <button onClick={() => setState(prev => prev + 1)}>
        change
      </button>
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
    </div>
  );
}

export default App;

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



