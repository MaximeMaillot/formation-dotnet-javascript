import React, { Component } from 'react';
import Todo from '../TodoComponent/Todo';
import "./TodoList.css"

class TodoList extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th className='th-id'>ID</th>
                        <th className='th-text' colSpan={2}>Text</th>
                        <th className='th-action text-center' colSpan={2} >Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.todos.map(todo => {
                        return <Todo todo={todo} deleteTodo={this.props.deleteTodo} checkTodo={this.props.checkTodo} updateTodo={this.props.updateTodo} key={todo.id} />
                    })}
                </tbody>
            </table>
        );
    }
}

export default TodoList;