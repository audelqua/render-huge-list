// sample with useReducer
import React, { useCallback, useEffect, useState, memo } from 'react'

const SampleOfMemo = props => {
    const [state, setState] = useState(0)
    const [anotherState, setAnotherState] = useState(0)

    const handleClick = useCallback(() => {
        console.log('hi im in handleClick');
        setState(state => state + 1)
    }, [])

    const anotherCallbackNotRelatedToChild = () => {
        console.log('hi im in another handle click');
        setAnotherState(prev => prev + 1)
    }

    return (
        <div>
            hi there im memoized component
            <ExpensiveChildComponent handleClick={handleClick} state={state}/>
            <button onClick={anotherCallbackNotRelatedToChild}>anotherCallbackNotRelatedToChild</button>
        </div>
    )
}
export default SampleOfMemo

const ExpensiveChildComponent = memo(({handleClick, state}) => {
    const massiveCalculation = () => {
        let tempVar
        for(let i = 0; i < 1000000000; i ++){
            tempVar = i
        }
        console.log('i did my calc', tempVar);
    }

    useEffect(() => {
        massiveCalculation()
    })
    return (
        <div>
            im expensive child
            <button onClick={handleClick}>handleClick</button>
            {state}
        </div>
    )
})

