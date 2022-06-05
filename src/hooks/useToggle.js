import React, { useState, useCallback, useMemo } from 'react'

const useToggle = () => {
    const [bool, setBool] = useState(false)
    console.log('ssss', bool);
    const handleToggle = useCallback(() => setBool(prevBool => !prevBool), [])

    const values = useMemo(
        () => ({
            bool,
            handleToggle
        }),
        [bool, handleToggle]
    );
    return values
}
export default useToggle