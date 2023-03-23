import React from 'react';
import "./Ressource.css"

const Ressource = (props: any) => {
    return (
        <div className='Ressource'>
            <div>{props.gold}$</div>
        </div>
    );
};

export default Ressource;