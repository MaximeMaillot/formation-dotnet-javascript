import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div>
            <div>A propos de cette application</div>

            <img src="./img/logo512.png" alt="avatar" />

            <div className='m-1 author'>
                <span className='key'>Author : </span>
                <span className='value'>Maxime Maillot</span>
            </div>
        </div>
    );
};

export default About;