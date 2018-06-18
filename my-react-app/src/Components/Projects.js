import React, { Component } from 'react'

class Projects extends Component {
    static defaultProps = {name:'Helen'}
    render() {
        return (
            <div>
                Hi {this.props.name}
            </div>
        )
    }
}

export default Projects