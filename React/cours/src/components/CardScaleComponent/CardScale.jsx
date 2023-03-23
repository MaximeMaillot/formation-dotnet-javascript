import React from 'react';
import "./CardScale.css"

const CarScale = ({ scaleValue }) => {
    const quantityLabel = {
        1: "Débutant",
        2: "Averti",
        3: "Confirmé",
        4: "Chevronné",
        5: "Expert"
    }

    const range = [1, 2, 3, 4, 5]

    const scaleType = <img src='./img/Star.png' alt='star-icon' height="20px" />

    return (
        <div onClick={() => {
            alert(`Cette formation requiert le niveau ${quantityLabel[scaleValue]}`)
        }}>

            {range.map((rangeElement) => {
                if (scaleValue >= rangeElement) {
                    return <span key={rangeElement.toString()}>{scaleType}</span>
                }
                return null
            })}

        </div>
    );
};

export default CarScale;