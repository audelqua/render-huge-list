import React, { Component } from 'react'

//adding ref to the class component
class SampleOfUsingRef extends Component {
    render() {
        return (
            <div>
                <span>grandpa</span>
                <br />
                <AutoFocusTextInput />
            </div>
        )
    }
}
export default SampleOfUsingRef

//parent component
class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.textInputWrapper = React.createRef()
    }

    componentDidMount() {
        // this.textInputWrapper.current.focusTextInput();
        this.textInputWrapper.current.textInput.current.focus();
        console.log('this.textInputWrapper', this.textInputWrapper);
    }

    render() {
        return (
            <>
                <span>son</span>
                <br />
                <CustomTextInput ref={this.textInputWrapper}/>
            </>
        )
    }
}

//child component
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
        // this.handleChange = this.handleChange.bind(this)
        this.textInput = React.createRef()
    }

    handleChange(e) {
        this.setState({text: e.target.value})
    }

    // focusTextInput() {
    //     // Explicitly focus the text input using the raw DOM API
    //     // Note: we're accessing "current" to get the DOM node
    //     this.textInput.current.focus();
    // }

    render() {
        return(
            <>
                <span>child</span>
                <input type='text' onChange={this.handleChange} ref={this.textInput}/>
            </>
        )
    }
}

// this code uses a ref to store a reference to a DOM node.
// class SampleOfUsingRef extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             text: ''
//         }
//         this.handleChangeText = this.handleChangeText.bind(this)
//         this.handleClick = this.handleClick.bind(this)
//         this.textInput = React.createRef();
//     }
    
//     handleChangeText(e) {
//         this.setState({text: e.target.value})
//     }

//     handleClick() {
//        this.textInput.current.focus()
//        console.log(this.textInput);
//     }
//     render() {
//         return (
//             <div>
//                 <span>hello class component</span>
//                 <button onClick={this.handleClick}>
//                     click me to call handler
//                 </button>
//                 <input value={this.state.text} onChange={this.handleChangeText} ref={this.textInput}/>
//                 {/* <button onClick={this.handleClick.bind(this)}>
//                     click me to call handler
//                 </button> */}
//             </div>
//         )
//     }
// }
// export default SampleOfUsingRef



