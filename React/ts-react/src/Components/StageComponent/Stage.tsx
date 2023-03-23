import React from 'react';
import "./Stage.css"

const Stage = (props: any) => {
    function changeStage(event: string) {
        const stageUpdate = Object.assign({}, props.player)
        switch (event) {
            case "start":
                stageUpdate.stage = 1
                break;
            case "-1":
                stageUpdate.stage -= 1
                break;
            case "+1":
                stageUpdate.stage += 1
                break;
            case "end":
                stageUpdate.stage += props.maxStage
                break;
            default:
                console.log('error')
                break;
        }
    }

    return (
        <div className='Stage'>
            <span onClick={() => { props.stage > 1 ? changeStage("start") : null }} className={`${props.stage > 1 ? "span-enabled" : "span-disabled"} stage-margin`}>|&lt;</span>
            <span onClick={() => { props.stage > 1 ? changeStage("-1") : null }} className={`${props.stage > 1 ? "span-enabled" : "span-disabled"} stage-margin`}>&lt;</span>
            <span className='stage-margin'>{`Stage ${props.player.stage}`}</span>
            <span onClick={() => { props.stage < props.maxStage ? changeStage("+1") : null }} className={`${props.stage < props.maxStage ? "span-enabled" : "span-disabled"} stage-margin`}>&gt;</span>
            <span onClick={() => { props.stage < props.maxStage ? changeStage("end") : null }} className={`${props.stage < props.maxStage ? "span-enabled" : "span-disabled"} stage-margin`}>&gt;|</span>
        </div >
    );
};

export default Stage;