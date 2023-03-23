import React, { useState } from 'react';
import "./Upgrade.css"

const Upgrade = (props: any) => {
    //TODO change base price via the id given by props
    const [price, setPrice] = useState(1)

    const handleClick = () => {
        if (props.player.gold >= price) {
            const updatePlayer = Object.assign({}, props.player)
            updatePlayer.attack += 1
            updatePlayer.gold -= price
            props.setPlayer(updatePlayer)
            setPrice(price * 2)
        }
    }

    return (
        <div className='Upgrade' onClick={handleClick}>
            Attack + 1 | Price : {price}
        </div>
    );
};

export default Upgrade;