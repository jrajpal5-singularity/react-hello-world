import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)
        this.state={message:'Hello'}

        // method 3 part better method from 1 & 2
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:'Goodbye!'
    //     })
    //     console.log(this)



    // }

    // method 4
    clickHandler = () => {
        this.setState({
            message:'Goodbye!'
        })
        console.log(this)



    }
    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* method1 */}
        {/* <button onClick={this.clickHandler.bind(this)} >Click</button> */}
        
        {/* method 2 */}
        {/* <button onClick={() => this.clickHandler()} >Click</button> */}
        
        {/* method3 */}
        {/* <button onClick={this.clickHandler} >Click</button> */}

        {/* method4 */}
        <button onClick={this.clickHandler} >Click</button>
      </div>
    )
  }
}

export default EventBind