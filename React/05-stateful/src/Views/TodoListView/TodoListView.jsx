import React, { Component } from 'react';
import FormTodo from '../../Components/FormTodoComponent/FormTodo';
import Notification from '../../Components/NotificationComponent/Notification';
import TodoList from "../../Components/TodoListComponent/TodoList"
import "./TodoListView.css"

class TodoListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
        };
    }

    componentDidUpdate() {
        localStorage.setItem("todos", JSON.stringify(this.state.todos))
    }

    getMaxId() {
        if (this.state.todos.length > 0) {
            let maxId = this.state.todos[0].id
            for (let i = 1; i < this.state.todos.length; i++) {
                if (maxId < this.state.todos[i].id) {
                    maxId = this.state.todos[i].id
                }
            }
            return maxId + 1
        } else {
            return 1
        }
    }

    addTodo(text) {
        const todos = [...this.state.todos]
        todos.push({
            id: this.getMaxId(),
            text: text,
            checked: false
        })
        this.setState({
            todos: todos
        })
    }

    deleteTodo(delTodo) {
        const filteredTodos = this.state.todos.filter((todo) => {
            if (delTodo !== todo) {
                return todo
            } else {
                return null
            }
        })
        this.setState({
            todos: filteredTodos
        })
    }

    checkTodo(updTodo, state) {
        const filteredTodos = this.state.todos.filter((todo) => {
            if (updTodo !== todo) {
                return todo
            } else {
                todo.checked = state
                return todo
            }
        })
        this.setState({
            todos: filteredTodos
        })
    }

    updateTodo(updTodo, text) {
        const filteredTodos = this.state.todos.filter((todo) => {
            if (updTodo !== todo) {
                return todo
            } else {
                todo.text = text
                return todo
            }
        })
        this.setState({
            todos: filteredTodos
        })
    }

    render() {
        return (
            <div>
                <FormTodo addTodo={this.addTodo.bind(this)} />
                <Notification todos={this.state.todos} />
                <TodoList
                    todos={this.state.todos}
                    deleteTodo={this.deleteTodo.bind(this)}
                    checkTodo={this.checkTodo.bind(this)}
                    updateTodo={this.updateTodo.bind(this)}
                />
            </div>
        );
    }
}

export default TodoListView;