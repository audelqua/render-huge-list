import React, { useEffect, useRef, useState, useTransition } from 'react'
import axios from 'axios';

const SampleOfUseTransition = props => {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);

    function handleClick() {
        startTransition(() => {
          setCount(c => c + 1);
        })
    }
    
    return (
        <div>
            {isPending && <div>Loading...</div>}
            <button onClick={handleClick}>{count}</button>
        </div>
    )
}
export default SampleOfUseTransition


// commit A in feature branch
// commit B in feature branch