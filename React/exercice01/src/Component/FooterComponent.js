import React, { Component } from "react"
import "../css/FooterComponent.css"

class FooterComponent extends Component {
    render() {
        return (
            <div className="yellow flex">
                <span>Ma première page perso générée par react - Copyright@2023 - <span className="hypertext">Me contacter</span></span>
            </div>
        )
    }

}

export default FooterComponent