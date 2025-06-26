import React, { Component } from 'react'

// По нажатию на кнопку меняется текст
class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }

    //   Третий способ
    //   this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler() {
    //     this.setState({
    //         message:"Goodbye"
    //     })
    //     console.log(this);
    // }

    // Четвертый способ
    clickHandler = () => {
        this.setState({
            message:"Goodbye"
        })
    }
  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        {/* Без bind не работает */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* Второй способ */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        {/* Третий способ */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind