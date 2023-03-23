import React, { useState } from 'react';
import Main from '../../Components/MainComponent/Main';
import Ressource from '../../Components/RessourceComponent/Ressource';
import "./MainView.css"

const MainView = () => {
    const [player, setPlayer] = useState({ attack: 1, gold: 0, stage: 1, maxStage: 1 })

    return (
        <div className='MainView'>
            <Ressource gold={player.gold} />
            <Main player={player} setPlayer={setPlayer} />
        </div>
    );
};

export default MainView;