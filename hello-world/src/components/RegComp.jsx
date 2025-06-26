import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    console.log('Regular Component Render')
    return (
      <>
      <h2>RegularComp {this.props.name}</h2>
      </>
    )
  }
}

export default RegComp