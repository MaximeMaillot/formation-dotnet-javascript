import React from 'react';
import Upgrade from '../UpgradeComponent/Upgrade';
import "./UpgradeList.css"

const UpgradeList = (props: any) => {
    return (
        <div className='UpgradeList'>
            <Upgrade id={1} key={1} player={props.player} setPlayer={props.setPlayer} />
        </div>
    );
};

export default UpgradeList;