import React from 'react'

class SampleOfCallBackRef extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.inputElement = {}
    }
    handleChange(e) {
        this.setState({text: e.target.value})
    }
    componentDidUpdate(prevState) {
        if(prevState.text !== this.state.text) {
            this.inputElement.blur()
        }
    }
    render() {
        return (
            <>
                <div>using callback ref</div>
                <ChildComponent inputRef={el => this.inputElement = el} handleChange={this.handleChange}/>
            </>
        )
    }
}
export default SampleOfCallBackRef
function ChildComponent(props) {
    //D commit in main branch
    //E commit in main branch
    return (
        <div>
            <span>Im child and i have input</span>
            <input ref={props.inputRef} onChange={props.handleChange}/>
        </div>
    )
}
