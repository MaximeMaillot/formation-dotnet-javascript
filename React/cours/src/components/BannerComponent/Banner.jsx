import React from 'react';
import "./Banner.css"

const Banner = () => {
    return (
        <div className="red flex">
            <img className="image" src="./img/M2ILOGO2.png" alt="logo"></img>
            <h1>M2i Formation</h1>
            <span className="transform">votre formation sur mesure...</span>
        </div>
    );
};

export default Banner;