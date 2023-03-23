import React, { useState } from 'react';
import MonsterZone from '../MonsterZoneComponent/MonsterZone';
import PlayerZone from '../PlayerZoneComponent/PlayerZone';
import "./Main.css"

const Main = (props: any) => {
    return (
        <div className='Main'>
            <MonsterZone player={props.player} setPlayer={props.setPlayer} />
            <PlayerZone player={props.player} setPlayer={props.setPlayer} />
        </div>
    );
};

export default Main;