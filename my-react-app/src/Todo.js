import React, { Component } from 'react';
import './App.css';
import Todoitem from './Todoitem'
import Ticktick from './Ticktick'
import AddTodo from './AddTodo'
import uuid from 'uuid'

function Name(params) {
    return <li>{params.text}</li>
}
class Todo extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.onDelete = this.onDelete.bind(this);

        let [...list] = []
        this.state = { list: [] };
    }

    onclick() {
        this.props.onclick();
    }
    onDelete(todoId) {
        let prev = this.state;
        // let action = {
        //     type: 'delete',
        //     id: todoId
        // }

        // this.setState((prev, action)=>{
        //     if (action.type === 'delete'){
        //         return prev.filter(o=>o.id != action.id);
        //     }
        // });

        this.setState({ list: prev.list.filter(o => o.id != todoId) })
    }
    handleClick(e) {

        e.preventDefault();
        console.log('test')

    }
    componentDidMount() {
        console.log('did mount')
    }

    componentWillUnmount() {
        console.log('will mount')

    }

    onAdd(name) {
        console.log('to add item')
        debugger
        if (this.state.list.length <= 0)
            this.setState({ list: [{ id: uuid.v4(), value: name }] })
        else
            this.setState({
                list: [...this.state.list,
                { id: uuid.v4(), value: name }]
            })
    }

    render() {
        const list = this.props.list;
        this.props.list.forEach(element => {
            console.log(element.id)
        })
        const els = this.props.list.map((el) =>
            <Todoitem
                key={el.id}
                onDelete={this.onDelete.bind(this, el.id)}
                element={el} />
        );
        return (
            <div>
                <h4>Todo List:</h4>
                <Ticktick />
                <AddTodo onAdd={this.onAdd.bind(this)} />
                <ul>
                    {this.state.list.length > 0 &&
                        this.state.list.map((el) =>
                            <Todoitem
                                key={el.id} element={el}
                                onDelete={this.onDelete.bind(this, el.id)} />
                        )
                    }
                </ul>

                {this.props.text}{'  '}
                <input type="button" value="Click me, aha!" onClick={this.handleClick} />
            </div>
        )
    }
}

export default Todo; 