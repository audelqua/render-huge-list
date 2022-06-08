// sample with useReducer
import React from 'react'

class SampleOfForwardingRef extends React.Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef()
    }

    render() {
        console.log('this.inputRef', this.inputRef);
        return (
            <>
                <div>hi there im father</div>
                <br />
                <input />
                <FancyButton forwardedRef={this.inputRef}>
                    click me
                </FancyButton>
            </>
            
        )
    }
}
export default SampleOfForwardingRef

const FancyButton = React.forwardRef((props, forwardedRef) => (
        <div >
            <button ref={forwardedRef}>
                {props.children}
            </button>
        </div>
))
