/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

// let someInterval 
const AsyncInUseEffect = () => {

    // useEffect(() => {
    //     someInterval = setInterval(() => console.log('called'), 1000)
    //     return function() {
    //         console.log('component will unmount');
    //         clearInterval(someInterval)
    //     }
    // },[])

    const someFunction = async() => {
        let res = await new Promise((res, rej) => {
            setTimeout(() => {
                    res('im resolve after 4 seconds')
            }, 4000)
        })
        console.log('res is: ', res);
    }

    useEffect(() => {
        someFunction()
        return () => {
            console.log('sdsdsd');
        }
    }, [])

    return (
        <div>
            hi there
        </div>
    );
}
export default AsyncInUseEffect