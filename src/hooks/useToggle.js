import React, { useState } from 'react'

const useToggle = () => {
    const [bool, setBool] = useState(false)

    const handleToggle = () => setBool(prevBool => !prevBool)

    return {bool, handleToggle}
}
export default useToggle