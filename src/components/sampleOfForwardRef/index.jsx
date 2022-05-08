// sample with useReducer
import React, {useState, useCallback, useRef, useEffect} from 'react'

const SampleOfForwardRef = props => {
    const myRef = useRef(null)

    // useEffect(() => {
    //     console.log('myRef', myRef.current);
    // }, [myRef.current])

    return (
       <div>
           <span ref={myRef}>Im in parent and have some ref</span>
           <br />
           hello
           <br />
           <ChildComponent parentRef={myRef}/>
       </div>
    )
}
export default SampleOfForwardRef

const ChildComponent = props => {
    const { parentRef } = props
    console.log('parentRef', parentRef.current);
    return (
        <div>
            im child component
            <br />
            <GrandComponent />
        </div>
    )
}

const GrandComponent = props => {
    return (
        <div>
            im grand child component
        </div>
    )
}
