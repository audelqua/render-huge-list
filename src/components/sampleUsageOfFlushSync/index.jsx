import React from 'react'
import { flushSync } from 'react-dom'

class SampleUsageOfFlushSync extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        flushSync(() => {
            this.setState({
                counter:  this.state.counter+=1
            })
        })
    }

    render() {
        console.log(this.state.counter);
        return(
            <>
                <div>flush sync</div>
                <button onClick={this.handleClick}>click me</button>
            </>
        )
    }
}
export default SampleUsageOfFlushSync