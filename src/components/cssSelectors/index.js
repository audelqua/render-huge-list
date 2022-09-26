import React from 'react'
import './cssSelector.css'


const CssSelector = () => {
    return (
        <>
            <div className='container'>
                <div className='general-child child-1'>
                    <span>child div 1</span>
                </div>
                <div className='general-child child-2'>
                    <span>child div 2</span>
                </div>
                <div className='general-child child-3'>
                    <span>child div 3</span>
                </div>
                <div className='child-4'>
                    <span>child div 4</span>
                </div>
            </div>
            <div className='container-2'>
                <div className='general-child child-1'>
                    <span>child div 1</span>
                </div>
                <div className='general-child child-2'>
                    <span>child div 2</span>
                </div>
                <div className='general-child child-3'>
                    <span>child div 3</span>
                </div>
                <div className='child-4'>
                    <span>child div 4</span>
                </div>
            </div>
        </>
        
    )
}
export default CssSelector