import React, { Component } from "react"
import "./../css/ship.css"

class ShipComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: "grey"
        }
    }
    render() {
        return (
            <div className="ship" style={{ backgroundColor: this.state.bgColor }} draggable="true" onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} onDrop={this.handleDrop} >
                Tile
            </div>
        );
    }

    handleDragStart() {
        console.log("Start drag")
    }

    handleDragEnd() {
        console.log("dragEnd")
    }

    handleDrop() {
        console.log("drop")
    }
}

export default ShipComponent