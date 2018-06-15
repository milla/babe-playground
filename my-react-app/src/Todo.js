import React, { Component } from 'react';
import './App.css';
import Todoitem from './Todoitem'
import Ticktick from './Ticktick'

function Name(params) {
    return <li>{params.text}</li>
}
class Todo extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    onclick() {
        this.props.onclick();
    }

    handleClick(e){

        e.preventDefault();
        console.log('test')

    }
    componentDidMount() {
        console.log('did mount')
    }

    componentWillUnmount() {
        console.log('will mount')

    }

    render() {
        const list = this.props.list;
        this.props.list.forEach(element => {
            console.log(element.id)
        })
        const els = this.props.list.map((el) =>
            <Todoitem key={el.id} element={el} />
        );
        return (
            <div>
                <h1>Aha</h1>
                <ul>
                    {this.props.list.length > 0 &&
                        this.props.list.map((el) =>
                            <Todoitem key={el.id} element={el} />
                        )
                    }
                    <Name text={'test11'} />
                    <Name text={'test12'} />
                    <Name text={'test14'} />
                    <Name text={'test13'} />
                </ul>
                <Ticktick />
                {this.props.text}
                <input type="button" value="Click me, aha!" onClick={this.handleClick}  />
            </div>
        )
    }
}

export default Todo; 