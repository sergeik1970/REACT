import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
  render() {

    // Так не писать
    // return this.state.isLoggedIn && <div>Welcome User</div>

    // Способ 1
    return (
      this.state.isLoggedIn ?
        (<div><h4>Welcome User</h4></div>) :
        (<div><h4>Welcome Guest</h4></div>)
    )

    // Способ 2
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div><h4>Welcome User</h4></div>;
    // }
    // else {
    //   message = <div><h4>Welcome Guest</h4></div>
    // }
    // return <div>{message}</div>

    // Способ 3
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <h4>Welcome User</h4>
    //     </div>
    //   )
    // }
    // else {
    //   return (
    //     <div>
    //       <h4>Welcome Guest</h4>
    //     </div>
    //   )
    // }
  }
}

export default UserGreeting