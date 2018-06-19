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
            <div className='tick'>
                Now is {this.state.date.toLocaleTimeString()}.
            </div>
        )
    };

}

export default Ticktick;