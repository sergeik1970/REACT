import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <>
      <h3>{this.props.render(true)}</h3>
      </>
    )
  }
}

export default User