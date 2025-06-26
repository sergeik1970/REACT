import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Sergey"
        }
        console.log("LifecycleB constructor");

    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount");
    }

    static getDerivedStateFromProps(porps, state) {
        console.log("LifecycleB getDerivedStateFromProps");
        return null
    }

        shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate")
    }

    render() {
        console.log("LifecycleB render");
        return (
            <div>
                <div>LifecycleB</div>
                
            </div>
        )
    }
}

export default LifecycleB