import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="flex footer">
            <span>Ma première page perso générée par react - Copyright@2023 - <a href='/about' className="hypertext">Me contacter</a></span>
        </div>
    );
};

export default Footer;