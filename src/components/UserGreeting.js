import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:true
      }
    }
    
  render() {
    // method 1 if else
        // if(this.state.isLoggedIn){
        //     return (<div>welcome jimmy</div>)
        // }

        // else{
        //     return (<div>welcome Guest</div>)
        // }


        // method 2 if else with message
        // let message
        // if(this.state.isLoggedIn){
        //     message =  (<div>welcome jimmy</div>)
        // }

        // else{
        //     message =  (<div>welcome Guest</div>)
        // }

        // return <div>{message}</div>

        // method 3 if else inside jsx indirectly === ternery operator approach
        // return (
        //     this.state.isLoggedIn ?
        //     (<div>welcome Jimmy</div>) :
        //     (<div>welcome Guest</div>)
        // )

        // method 4 short circuit operator only specific case method
        return (
            this.state.isLoggedIn && (<div>welcome Jimmy</div>)
        )


    // return (<div>
    //   <div>welcome jimmy</div>
    //   <div>welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting