import React, { Component } from "react"
import "./../css/tile.css"

class TileComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bgColor: "aqua"
        }
    }
    render() {
        return (
            <div className="tile" style={{ backgroundColor: this.state.bgColor }} onClick={() => { this.clickEvent() }}>
                Tile
            </div>
        );
    }

    clickEvent() {
        this.setState({
            bgColor: "red"
        })
    }
}

export default TileComponent