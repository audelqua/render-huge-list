import React, { useState } from 'react'
import useToggle from '../../hooks/useToggle'

const CompositionVsInheritance = () => {
    const { bool, handleToggle } = useToggle()
    
    return (
        <div>
        <button onClick={handleToggle}>
            Header <span>{bool ? "-" : "+"}</span>
        </button>
        {bool && <div>Content</div>}
        </div>
    );
}
export default CompositionVsInheritance