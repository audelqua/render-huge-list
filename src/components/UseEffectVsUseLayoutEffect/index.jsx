import React, { useEffect, useState } from 'react'

const UseEffectVsUseLayoutEffect = () => {
    const [message, setMessage]= useState('some custom message')

    useEffect(function() {
        console.log('did mount');
    }, [])
    return(
        <div>
            {message}
        </div>
    )
}
export default UseEffectVsUseLayoutEffect