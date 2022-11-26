import React, { Component } from 'react'

class UsingOfBindMethod extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'ali'
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        console.log('this', this.state)
        console.log('e', e)
    }
    render() {
        return (
            <div>
                <span>hello class component</span>
                <button onClick={() => this.handleClick()}>
                    click me to call handler
                </button>
                {/* <button onClick={this.handleClick.bind(this)}>
                    click me to call handler
                </button> */}
            </div>
        )
    }
}
export default UsingOfBindMethod

// commit C in main branch


