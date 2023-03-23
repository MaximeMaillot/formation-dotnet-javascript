import React, { Component } from 'react';
import "./Notification.css"

class Notification extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='text-center Notification'>
                {this.props.todos.length ? ("Nombre de tâches : " + this.props.todos.reduce((accumulator, initialValue) => {
                    if (!initialValue.checked) {
                        accumulator++
                    }
                    return accumulator
                }, 0)) : "Pas de todos"}
            </div>
        );
    }
}

export default Notification;