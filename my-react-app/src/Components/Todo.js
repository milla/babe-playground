import React, { Component } from 'react';
import uuid from 'uuid'
import '../App.css';
import Todoitem from './Todoitem'
import Ticktick from './Ticktick'
import AddTodo from './AddTodo'
import TodoLinks from './TodoLinks'
import TodoList from './TodoList'

var allList = []
class Todo extends Component {

    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);

        let [...list] = []
        this.state = { list: [], filter: 'All' };
        allList = []
        this.onFilterShow = this.onFilterShow.bind(this)
    }
    static defaultProps = {
        currentFliter: 'All'
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
        allList = prev.list.filter(o => o.id != todoId)
        this.setState({
            list: allList,
            filter: this.state.filter
        })
    }

    onToggleDone(todoId) {
        let list = this.state.list;
        let item = list.find(o => o.id == todoId)
        item.isComplete = !item.isComplete;

        this.setState({
            list: list,
            filter: this.state.filter
        })
    }

    onFilterShow(filter) {
        switch (filter) {
            case "All":
                this.setState({
                    list: allList,
                    filter
                });
                break;

            case 'Completed':
                this.setState({
                    list: allList.filter(o => o.isComplete),
                    filter
                });
                break;

            case 'Active':
                this.setState({
                    list: allList.filter(o => !o.isComplete),
                    filter
                });
                break;

            default:
                return this.state;
        }
    }

    componentDidMount() {
        console.log('mount')
    }
    onAdd(name) {
        allList.push({ id: uuid.v4(), value: name, isComplete: false })
        this.setState({
            list: allList,
            filter: this.state.filter
        })
    }

    render() {
        const list = this.props.list;
        return (
            <div>
                <h4>Todo List:</h4>
                <Ticktick />
                <AddTodo
                    onAdd={this.onAdd.bind(this)} />
                <TodoList list={this.state.list}
                    onDelete={this.onDelete}
                    onToggleDone={this.onToggleDone.bind(this)} />
                <TodoLinks currentFliter={this.state.filter}
                    onFilterShow={this.onFilterShow} />
            </div>
        )
    }
}

export default Todo; 