import React, { Component } from 'react';
import { compose } from 'redux';

class Todoitem extends Component {
    constructor(props) {
        super(props);
        this.ckbox = React.createRef();
    }

    componentDidMount() {
        // 在切换状态时使用
        // take effect when swith filter
        this.refs.cb.checked = this.props.element.isComplete
    }

    completeTask(e) {
        this.props.onToggleDone(this.props.element.id);
    }

    deleteTodo() {
        this.props.onDelete(this.props.element.id);
    }

    render() {
        console.log('todoitem')
        let textDecoration = this.props.element.isComplete ?
            'line-through' : 'none';

        return (
            <li key={this.props.element.id} ref={this.ckbox}>
                <input ref='cb' name='cbTask' type='checkbox' onClick={this.completeTask.bind(this)} />{' '}
                <span style={{ textDecoration }}>{this.props.element.value} {' '}</span>
                { /* 注意这儿如果this.deleteTodo('o')，会立刻执行（被认为是一个即时的方法
                    如果是this.deleteTodo，则会按事件执行
                    或者 (e)=>this.this.deleteTodo(e) 也可（但这个效率会较差）*/}
                [<a href='#'
                    className='remove-item'
                    value={this.props.element.id}
                    onClick={this.deleteTodo.bind(this)}>x</a>]</li>
        )
    }
}

export default Todoitem;