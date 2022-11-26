import React, { useState, useEffect, useRef } from 'react'

export const useColorFleeter = (propNumber) => {
    const prevLocalNumberRef = useRef();
    const [localNumber, setLocalNumber] = useState(0)
    
    const colorDetector = () => {
        let color = ''
        if(localNumber > prevLocalNumberRef.current) color = 'green'
        else if(localNumber < prevLocalNumberRef.current) color = 'red'
        else color = 'black'
        return color
    }

    useEffect(() => {
        prevLocalNumberRef.current = localNumber;
        setLocalNumber(propNumber)
    }, [propNumber])

    return colorDetector()
}

//this commit is just for doing some commit