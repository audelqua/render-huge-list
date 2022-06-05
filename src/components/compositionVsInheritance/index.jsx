import React, { useState } from 'react'
import useToggle from '../../hooks/useToggle'

const CompositionVsInheritance = () => {
    //instead of defining state and handleToggle here and also in other component we can define 
    // it in useToggle hook as react composition ask us to dont repeat similar codes
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