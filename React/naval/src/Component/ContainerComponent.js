import React, { Component } from "react"
import BoardComponent from "./BoardComponent";
import ShipComponent from "./ShipComponent";

class ContainerComponent extends Component {
    render() {
        return (
            <div>
                <ShipComponent />
                <BoardComponent />
            </div>
        );
    }
}

export default ContainerComponent