import React from 'react';

class Counter extends React.Component{
    state={
        counter: 0
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render(){
        return(
            <div>
                <button onClick={this.increment}>+</button>
                <h4>{this.state.counter}</h4>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}



export default Counter