import React, { Component } from 'react';
import { compose } from 'redux';

class Todoitem extends Component {
    constructor(props) {
        super(props);
    }
   
    deleteTodo(e){
        this.props.onDelete(e);
    }
    
    render() {
        return (
            <li key={this.props.element.id}>{this.props.element.value} {' '}
            { /* 注意这儿如果this.deleteTodo('o')，会立刻执行（被认为是一个即时的方法
                    如果是this.deleteTodo，则会按事件执行
                    或者 (e)=>this.this.deleteTodo(e) 也可（但这个效率会较差）*/}
            [<a href='#' 
            className='remove-item' 
            value={this.props.element.id} 
            onClick={this.deleteTodo.bind(this, this.props.element.id)}>x</a>]</li>
        )
    }
}

export default Todoitem;