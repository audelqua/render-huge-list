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
        console.log('state in father', this.state);
    }
    render() {
        return (
            <div onClick={this.isStatsEqual} style={{marginTop: '30px'}}>
                <button onClick={() => this.handleClick()}>click me to mutate the state</button>
                <ChildComponent obj={this.state.y}/>
            </div>
        )
    }
}
export default ShallowComparisonTesting

const ChildComponent = props => {
    console.log('props in child', props)
    return (
        <div>
            hello {props.obj.name}
        </div>
    )
}
