import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Sergey"
        }
        console.log("LifecycleA constructor");

    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount");
    }

    static getDerivedStateFromProps(porps, state) {
        console.log("LifecycleA getDerivedStateFromProps");
        return null
    }

    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleA getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate")
    }

    changeState = () => {
        this.setState({
            name: "Vasya"
        })
    }

    render() {
        console.log("LifecycleA render");
        return (
            <div>
                    <div>LifecycleA</div>
                    <button onClick={this.changeState}>Change state</button>
                    <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA