import React, { useState, useCallback, useMemo } from 'react'

const useToggle = () => {
    const [bool, setBool] = useState(false)
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