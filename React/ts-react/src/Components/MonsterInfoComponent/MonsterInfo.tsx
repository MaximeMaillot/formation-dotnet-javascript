import React from 'react';
import "./MonsterInfo.css"

const MonsterInfo = (props: any) => {
    return (
        <div className='MonsterInfo'>
            {props.monster.currentHealth} / {props.monster.maxHealth}
        </div>
    );
};

export default MonsterInfo;