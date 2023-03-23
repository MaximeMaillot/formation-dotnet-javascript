import React, { Component } from "react"
import "../css/SideComponent.css"

class SideComponent extends Component {
    render() {
        return (
            <div className="blue container-text">
                {this.props.name}
            </div>
        )
    }
}

export default SideComponent