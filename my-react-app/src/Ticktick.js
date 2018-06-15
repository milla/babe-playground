import React, { Component } from 'react'

class Ticktick extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    onclick() {
        this.props.onclick();
    }


    componentDidMount() {
        console.log('did mount')
        setInterval(() => { this.ticktick() }, 1000);
    }

    ticktick() {
        this.setState({ date: new Date() })
    }
    componentWillUnmount() {
        console.log('will mount')

    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    };

}

export default Ticktick;