import React, { useEffect, useRef, useState, useTransition } from 'react'

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


