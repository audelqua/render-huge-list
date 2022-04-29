import React, { useEffect, useRef, useState } from 'react'

// ******************** save mutable  ********************
const SampleOfUseRef = props => {
    const intervalRef = useRef(null)
    const [counter, setCounter] = useState(120)
    console.log('counter', counter, intervalRef);

    const downCountHandler = () => setCounter(counter => counter - 1)
    useEffect(() => {
        const myInterval = setInterval(() => {
            downCountHandler()
        }, 10000)
        intervalRef.current = myInterval
        return () => {
            clearInterval(myInterval)
        }
    }, [])

    return (
        <div>
        </div>
    )
}
export default SampleOfUseRef

// ******************** access dom node ********************
// const SampleOfUseRef = props => {
//     const inputRef = useRef(null)

//     const handleClick = () => {
//         console.log('inputRef', inputRef);
//         inputRef.current.focus()
//     }

//     return (
//         <div>
//             <input ref={inputRef}/>
//             <br />
//             <button onClick={handleClick}>focus with ref</button>
//         </div>
//     )
// }
// export default SampleOfUseRef


