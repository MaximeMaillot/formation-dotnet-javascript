import React, { Component } from "react"
import "../css/CenterComponent.css"

class CenterComponent extends Component {
    render() {
        return (
            <div className="cyan container-text">
                {this.props.name}
            </div>
        )
    }
}

export default CenterComponent