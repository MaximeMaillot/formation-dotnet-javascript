import React, { Component } from 'react';
import "./FormTodo.css"

class FormTodo extends Component {
    constructor(props) {
        super(props)
        this.text = "";
    }
    render() {
        return (
            <form className="form-control form-background-color" onSubmit={(e) => { e.preventDefault(); this.props.addTodo(this.text); e.target.reset() }}>
                <div className='text-center'>
                    <label className="form-label text-label" htmlFor="todo-text">Texte</label>
                    <input type="text" name="todo-text" id="todo-text" onChange={(e) => { this.text = e.target.value }} />
                </div>
                <div className='text-center'>
                    <button className="btn btn-success" type="submit">Valider</button>
                </div>
            </form>
        );
    }
}


export default FormTodo;