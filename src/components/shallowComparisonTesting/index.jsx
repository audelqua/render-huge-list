import React from 'react'
import ReactDOM from 'react-dom/client';

class ShallowComparisonTesting extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            x: 0,
            y: {
                name: 'jafar',
                family: 'hossein'
            }
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        let x = this.state.y
        x.name = 3
        console.log(this.state);
    }
    render() {
        return (
            <div onClick={this.isStatsEqual}>
                <span onClick={() => this.handleClick()}>wefwef</span>
                <ChildComponent obj={this.state.y}/>
            </div>
        )
    }
}
export default ShallowComparisonTesting

const ChildComponent = props => {
    console.log('re rendered', props)
    return (
        <div>
            hello {props.obj.name}
        </div>
    )
}
