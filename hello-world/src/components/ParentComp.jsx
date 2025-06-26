import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Sergey"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Sergey"
            })
        }, 2000)
    }
    render() {
        console.log("ParentComp render")
        return (
            <>
                <h1>ParentComp</h1>
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name} /> */}
                {/* <PureComp name={this.state.name} /> */}
            </>
        )
    }
}

export default ParentComp