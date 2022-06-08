import React, { Component } from 'react'

// using ref as a DOM node reference
class SampleOfUsingRef extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        this.handleChangeText = this.handleChangeText.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.textInput = React.createRef();
    }
    
    handleChangeText(e) {
        this.setState({text: e.target.value})
    }

    handleClick() {
       this.textInput.current.focus()
    }

    render() {
        return (
            <div>
                <span>hello class component</span>
                <button onClick={this.handleClick}>
                    click me to call handler
                </button>
                <input value={this.state.text} onChange={this.handleChangeText} ref={this.textInput}/>
                {/* <button onClick={this.handleClick.bind(this)}>
                    click me to call handler
                </button> */}
            </div>
        )
    }
}
export default SampleOfUsingRef



