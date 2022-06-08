import React, { Component } from 'react'

//adding ref to the class component
class SampleOfUsingRef extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }

    render() {
        return (
            <div>
                <span>grandpa component</span>
                <br />
                {/* <AutoFocusTextInput /> */}
                <ChildFunctionComponent ref={this.componentRef}/>
            </div>
        )
    }
}
export default SampleOfUsingRef

const ChildFunctionComponent = (props) => {
    const myRef = React.createRef()
    console.log(myRef)
    return (
        <>
            <div>Im child function component</div>
            <input ref={myRef}/>
        </>
    )
}
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

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
    }

    render() {
        return(
            <>
                <span>child</span>
                <input type='text' onChange={this.handleChange} ref={this.textInput}/>
            </>
        )
    }
}



