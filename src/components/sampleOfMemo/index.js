// sample with useReducer
import React, { useCallback, useEffect, useState, memo, useMemo } from 'react'

const SampleOfMemo = props => {
    const [counter, setCounter] = useState(0)
    const someStoredValue = useMemo(() => someMassiveCalculator(), []) 

    const handleClick = () => {
        setCounter(prev => prev + 1)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            hi there im massive data: {someStoredValue}
            <button onClick={handleClick}>another function updating some unrelated state</button>
            counter is: {counter}
        </div>
    )
}
export default SampleOfMemo

const someMassiveCalculator = () => {
    let tempVar = 0
    for(let i = 0; i< 1000000000; i++) {
        tempVar = i 
    }
    console.log('calc is done');
    return tempVar
}



// const handleClick = useCallback(() => {
//     console.log('hi im in handleClick');
//     setState(state => state + 1)
// }, [])

// const anotherCallbackNotRelatedToChild = () => {
//     console.log('hi im in another handle click');
//     setAnotherState(prev => prev + 1)
// }

// const expensiveCalInParent = useMemo(() => {
//     let tempVar
//     for(let i = 0; i < 1000000000; i ++){
//         tempVar = i
//     }
//     console.log('im ready to show everything');
//     return tempVar
// }, [])



{/* <ExpensiveChildComponent handleClick={handleClick} state={state}/> */}
// const ExpensiveChildComponent = memo(({handleClick, state}) => {
//     const massiveCalculation = () => {
//         let tempVar
//         for(let i = 0; i < 1000000000; i ++){
//             tempVar = i
//         }
//         console.log('i did my calc', tempVar);
//     }

//     useEffect(() => {
//         massiveCalculation()
//     })
//     return (
//         <div>
//             im expensive child
//             <button onClick={handleClick}>handleClick</button>
//             {state}
//         </div>
//     )
// })

