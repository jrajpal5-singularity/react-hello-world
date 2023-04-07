import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {

        super(props)
        this.state = {count:0}
    }
  
    increment(){
        // this.setState({count:this.state.count+1},()=>console.log('callback value',this.state.count))
        this.setState((prevState)=>({
            count:prevState.count+1
        }
        ))
        console.log(this.state.count)
        // never modify state directly rather use setstate
        // dont place console log after setstate rather use callback of setstate
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
  
    render() {
    return (
      <div>
            <div>count = {this.state.count}</div>
            <button onClick={()=>this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter