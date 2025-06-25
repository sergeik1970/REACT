import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        // Деструктуризация
        const {name, heroName} = this.props
        // const {state1, state2} = this.state
        return (
            // если без деструктуризации то писать this.props.name
            <h1>Welcome {name} a.k.a {heroName}</h1>
        )
    }
}

export default Welcome;