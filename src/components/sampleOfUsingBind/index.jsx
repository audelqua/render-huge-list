import React, { Component } from 'react'

//version with unbounded method to constructor **********************************************
class UsingOfBindMethod extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'ali'
        }
    }

    handleClick() {
        console.log('name is', this.state.name);
    }

    render() {
        return (
            <div>
                <span>hello class component</span>
                <button onClick={() => this.handleClick()}>
                    click me to call handler
                </button>
            </div>
        )
    }
}
export default UsingOfBindMethod
//version with unbounded method to constructor **********************************************


//version with bounded method to constructor **********************************************
// class UsingOfBindMethod extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: 'ali'
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         console.log('name is', this.state.name);
//     }

//     render() {
//         return (
//             <div>
//                 <span>hello class component</span>
//                 <button onClick={() => this.handleClick()}>
//                     click me to call handler
//                 </button>
//             </div>
//         )
//     }
// }
// export default UsingOfBindMethod
//version with bounded method to constructor **********************************************



// important this here is that bounded one and unbounded one are work exactly the same
