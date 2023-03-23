import React, { Component } from "react"
import TileComponent from "./TileComponent";
import "./../css/board.css"

class BoardComponent extends Component {
    render() {
        return (
            <div className="board" onDrop={this.handleDrop}>
                {this.constructBoard()}
            </div>
        );
    }

    handleDrop() {
        console.log("drop")
    }

    constructBoard() {
        const tiles = []
        for (let i = 0; i < 100; i++) {
            tiles.push(<TileComponent key={i} index={i} />)
        }
        return tiles
    }
}

export default BoardComponent