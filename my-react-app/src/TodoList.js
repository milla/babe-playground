import React, { Component } from 'react';
import { compose } from 'redux';
import uuid from 'uuid'
import Todoitem from './Todoitem'

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        filter: 'All'
    }
    onDelete(todoId){
        this.props.onDelete(todoId)
    }
    onToggleDone(todoId){
        this.props.onToggleDone(todoId)
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.list.length > 0 &&
                        this.props.list.map((el) =>
                            <Todoitem
                                key={el.id} element={el}
                                onDelete={this.onDelete.bind(this, el.id)}
                                onToggleDone={this.onToggleDone.bind(this, el.id)} />
                        )
                    }
                </ul>
                <br />
            </div>
        )
    }
}

export default TodoList;