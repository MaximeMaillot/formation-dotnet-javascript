import React, { Component } from "react"

class StatefulComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prenom: "Magalie"
        }
    }

    changeState = (event) => {
        this.setState({
            prenom: event.target.value
        })
    }

    render() {
        return (
            <div>
                <label>Nom</label>
                <input type="text" onChange={this.changeState} />
                <div>Je suis stateful? {this.state.prenom}</div>
            </div>
        )
    }
}

export default StatefulComponent