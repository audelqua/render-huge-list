import React, { useEffect } from 'react'
import { createPortal } from "react-dom";

const CreatePortal = (props) => {
    return (
        <div style={{width: '300px', height: '300px', background: 'red'}}>
            <div style={{width: '100px', height: '100px', background: 'green'}} onClick={() => console.log('hi there im portal clicked')}>
                <MyCustomPortal>
                    <span>hi there im portal</span>
                </MyCustomPortal>
            </div> 
        </div>
    )
}
export default CreatePortal

const MyCustomPortal = ({children}) => {
    const mount = document.getElementById('portal-root')
    const el = document.createElement("div")

    useEffect(() => {
        mount.appendChild(el)
        return function() {
            mount.removeChild(el)
        }
    }, [el, mount])

    return createPortal(children, el)
}




