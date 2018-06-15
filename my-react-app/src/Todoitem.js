import React, { Component } from 'react';
import { compose } from 'redux';

class Todoitem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("test")
        return (
            <li key={this.props.element.id}>{this.props.element.value}</li>
        )
    }
}

export default Todoitem;