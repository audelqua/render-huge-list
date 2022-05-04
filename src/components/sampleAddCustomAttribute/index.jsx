import React, { useEffect, useRef, useState } from 'react'

const SampleAddCustomAttribute = props => {
    const myRef = useRef()

    useEffect(() => {
        console.log(myRef.current.getAttribute('data-name'));
        console.log(document.getElementById('custom_div').getAttribute('customName'));
    },[])
    console.log('document', document);
    return (
        <div customName='hello' id='custom_div' ref={myRef}>
            hi custom
        </div>
    )
}
export default SampleAddCustomAttribute


