import React, { Component } from 'react';
import { compose } from 'redux';

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    AddTodo() {
        if (this.textInput.current.value === '')
            alert('please input text');
        else
            this.props.onAdd(this.textInput.current.value);
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.textInput}/>
                <input type='button' ref='' value='Add' onClick={this.AddTodo.bind(this)} />
            </div>
        )
    }
}

export default AddTodo;