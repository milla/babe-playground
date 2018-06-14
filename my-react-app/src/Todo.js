import React, { Component } from 'react';
import './App.css';
import Todoitem from './Todoitem'

function Name(params) {
    return <li>{params.text}</li>
}
class Todo extends Component {
    constructor() {
        super();
        this.onclick = this.onclick.bind(this);
    }

    onclick() {
        this.props.onclick();
    }


    componentDidMount() {
        console.log('did mount')
    }

    componentWillMount() {
        console.log('will mount')

    }

    render() {
        this.onclick();
        return <div>
            <h1>Aha</h1>
            <ul>
                {/* {this.props.list.forEach(element => {
                    <Todoitem element={element}></Todoitem>
                })} */}

                <Name text={'test11'}/>
                <Name text={'test12'}/>
                <Name text={'test14'}/>
                <Name text={'test13'}/>
            </ul>
            {this.props.text}
            <input type="text" onChange={()=>this.setState({tick: new Date()})}/>
        </div>

    }

}

export default Todo; 