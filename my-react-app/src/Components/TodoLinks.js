import React, { Component } from 'react';
import { compose } from 'redux';

class TodoLinks extends Component {
    constructor(props) {
        super(props);
        this.filterShow = this.filterShow.bind(this);
        this.links = React.createRef();
    }

    componentDidMount() {
        switch (this.props.currentFilter) {
            case 'all':
            default:
                this.refs.all.className = 'none_line'
                this.refs.c.className = 'normal_line'
                this.refs.a.className = 'normal_line'
                break;

            case 'c':
                this.refs.all.className = 'normal_line'
                this.refs.c.className = 'none_line'
                this.refs.a.className = 'normal_line'
                break;

            case 'a':
                this.refs.all.className = 'normal_line'
                this.refs.c.className = 'normal_line'
                this.refs.a.className = 'none_line'
                break;
        }
    }

    filterAll() { this.filterShow('All'); }
    filterCompleted() { this.filterShow('Completed'); }
    filterActive() { this.filterShow('Active'); }

    filterShow(filter) {
        this.props.onFilterShow(filter);
    }
    render() {
        return (
            <div>
                <a href='#' ref='all' onClick={this.filterAll.bind(this)}>All</a> {' | '}
                <a href='#' ref='c' onClick={this.filterCompleted.bind(this)}>Completed</a> {' | '}
                <a href='#' ref='a' onClick={this.filterActive.bind(this)}>Active</a>
            </div>
        )
    }
}

export default TodoLinks;