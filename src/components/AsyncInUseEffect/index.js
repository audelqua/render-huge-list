import React, { useState, useEffect } from 'react'

let someInterval 
const AsyncInUseEffect = () => {

    useEffect(() => {
        someInterval = setInterval(() => console.log('called'), 1000)
        return function() {
            console.log('component will unmount');
            clearInterval(someInterval)
        }
    },[])

    return (
        <div>
            hi there
        </div>
    );
}
export default AsyncInUseEffect