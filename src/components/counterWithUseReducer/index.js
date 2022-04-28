// sample with useReducer
import React, { useState, useReducer } from 'react'


const initialState = {counter: 0}
function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE':
            return {counter: state.counter + 1}
        case 'DECREASE':
            return {counter: state.counter - 1}
    }
}

const CounterWithUseReducer = props => {
    const [state, dispatch] = useReducer(reducer, initialState)
    

    return (
        <div>
            <button onClick={() => dispatch({type: 'INCREASE'})}>increase</button>
            <button onClick={() => dispatch({type: 'DECREASE'})}>decrease</button>
            this is your counter: {state.counter}
        </div>
    )
}
export default CounterWithUseReducer
// const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }),
    //     {
    //     hasCameraPermission: null,
    //     }
// )




// sample with useState
// import React, { useState } from 'react'


// const CounterWithUseReducer = props => {
//     const [counter, updateCounter] = useState(0)

//     const handleCounter = type => {
//         switch (type) {
//             case 'I':
//                 updateCounter(counter => counter + 1)
//                 break;
//             case 'D':
//                 updateCounter(counter => counter - 1)
//                 break;
//         }
//     }

//     return (
//         <div>
//             <button onClick={() => handleCounter('I')}>increase</button>
//             <button onClick={() => handleCounter('D')}>decrease</button>
//             this is your counter: {counter}
//         </div>
//     )
// }
// export default CounterWithUseReducer
