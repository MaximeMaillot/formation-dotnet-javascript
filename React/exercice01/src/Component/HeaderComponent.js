import React, { Component } from "react"
import "../css/HeaderComponent.css"

class HeaderComponent extends Component {
    render() {
        return (
            <div className="red flex">
                <img className="image" src="./M2ILOGO2.png" alt="logo"></img>
                <h1>M2i Formation</h1>
                <span className="transform">votre formation sur mesure...</span>
            </div>
        )
    }
}

export default HeaderComponent