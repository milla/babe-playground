import React, { Component } from 'react';
import { compose } from 'redux';

class Todoitem extends Component {
    constructor() {
        super();
    }
    render() {
        debugger
        return <li key={this.props.element.id}>{this.props.element.value}</li>
    }
}

export default Todoitem;