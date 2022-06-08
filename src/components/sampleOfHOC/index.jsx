import React from 'react'

class SampleOfHOC extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props);
        return (
            <div>{this.props.nameCameFromHOC}</div>
        )
    }
}
export default myCustomHOC(SampleOfHOC)

function myCustomHOC(Component) {
    return class extends React.Component{
        constructor(props) {
            super(props)
            this.state = {
                name: 'audrey custom HOC'
            }
        }
        render() {
            return (
                <div>
                    <Component {...this.props} nameCameFromHOC={this.state.name}/>
                </div>
            )
        }
    }
}