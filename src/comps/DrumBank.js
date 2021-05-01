// Drum knobs container
import { useEffect, useMemo, useState } from 'react';
import '../css/drumBank.scss';
import { DrumPad } from './DrumPad';
import { DRUM_SETA, DRUM_SETB, SETA } from './config';


const DrumBankDisplay = (props) => {
    return(
        <div className="drum-bank-display" id="display">
            <div className='active-drum-type'>
                {props.activeDrumType}
            </div>
        </div>
    );
}


export function DrumBank(props) {

    const [activeDrumType, setActiveDrumType] = useState("");

     // Set active drum set
    const drumSet = useMemo(() => (props.drumSet === SETA) ? DRUM_SETA : DRUM_SETB, [props.drumSet]);

     // Clear display after power up.
    useEffect(() => {
        props.powered && setActiveDrumType("");
    }, [props.powered]);

    return (
        <div className="drum-bank">
            <DrumBankDisplay activeDrumType={(props.powered) ? activeDrumType : ""} />
            <DrumPad drumData={drumSet.drumQ} powered={props.powered} vol={props.vol} onSetDisplay={setActiveDrumType} />
            <DrumPad drumData={drumSet.drumW} powered={props.powered} vol={props.vol} onSetDisplay={setActiveDrumType} />
            <DrumPad drumData={drumSet.drumE} powered={props.powered} vol={props.vol} onSetDisplay={setActiveDrumType} />
            <DrumPad drumData={drumSet.drumA} powered={props.powered} vol={props.vol} onSetDisplay={setActiveDrumType} />
            <DrumPad drumData={drumSet.drumS} powered={props.powered} vol={props.vol} onSetDisplay={setActiveDrumType} />
            <DrumPad drumData={drumSet.drumD} powered={props.powered} vol={props.vol} onSetDisplay={setActiveDrumType} />
            <DrumPad drumData={drumSet.drumZ} powered={props.powered} vol={props.vol} onSetDisplay={setActiveDrumType} />
            <DrumPad drumData={drumSet.drumX} powered={props.powered} vol={props.vol} onSetDisplay={setActiveDrumType} />
            <DrumPad drumData={drumSet.drumC} powered={props.powered} vol={props.vol} onSetDisplay={setActiveDrumType} /> 
        </div>
    );
}