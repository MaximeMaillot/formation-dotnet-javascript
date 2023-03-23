import React, { Component } from 'react';
import "./Todo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            text: this.props.todo.text
        }
    }

    handleInputEvent(event) {
        this.props.updateTodo(this.props.todo, this.state.text);
        this.setState({ edit: false })
    }

    render() {
        return (
            <tr>
                <td>{this.props.todo.id}</td>
                {this.state.edit
                    ? <>
                        <td className='td-text'>
                            <input type="text"
                                className='form-control'
                                defaultValue={this.props.todo.text}
                                onChange={(e) => { this.setState({ text: e.target.value }) }}>
                            </input>
                        </td>
                        <td className='td-fa'>
                            <FontAwesomeIcon icon="fa-check"
                                onKeyUp={(e) => { this.handleInputEvent(e) }}
                                onClick={(e) => { this.handleInputEvent(e) }}
                            />
                        </td>
                    </>
                    : <>
                        <td className='td-text'>{this.props.todo.text}</td>
                        <td className='td-fa'>
                            <FontAwesomeIcon icon="pen-to-square"
                                onClick={() => { this.setState({ edit: true }) }}
                            />
                        </td>
                    </>}
                <td className={`${(this.props.todo.checked ? "checked" : "unchecked")} text-center todo-checkbox`}>
                    <input type='checkbox'
                        checked={this.props.todo.checked}
                        onChange={(e) => { this.props.checkTodo(this.props.todo, e.target.checked) }}>
                    </input>
                </td>
                <td className="text-center todo-delete" onClick={() => { this.props.deleteTodo(this.props.todo) }}>
                    <FontAwesomeIcon icon="fa-trash" style={{ color: 'black', fontSize: '25px' }} />
                </td>
            </tr >
        );
    }
}

export default Todo;