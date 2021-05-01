// The Drum Machine
import { useState } from 'react';
import { IoPowerSharp } from 'react-icons/io5';
import { DrumBank } from './DrumBank';
import { ControlPad } from './ControlPad';
import { MIN_VOL, OFF, ON, SETA, STEPONE } from './config';
import '../css/drumMachine.scss';

function DrumMachine() {

    const [power, setPower] = useState(OFF); // Default to off
    const [volumeLevel, setVolumeLevel] = useState(MIN_VOL); // Default to volume level 1 of 10.
    const [activeDrumSet, setActiveDrumSet] = useState(SETA); // Default to drum set A.

    const powerControl = () => {

        if (!power) {
            setPower(ON);
            setVolumeLevel(STEPONE);
            setActiveDrumSet(SETA);
        } else {
            setPower(OFF);
            setVolumeLevel(MIN_VOL);
        }
    }
    
    return (
        <div className="drum-machine" id="drum-machine">
            <div className="drum-machine-canvas">
                <div
                    className={(power) ? "power-switch-on" : "power-switch-off"}
                    onClick={powerControl}
                >
                    <IoPowerSharp />
                </div>
                <div className="drum-container">
                    <DrumBank
                        drumSet={activeDrumSet}
                        powered={power}
                        vol={volumeLevel}
                    />
                    <ControlPad
                        OnChangeVolumeLevel={setVolumeLevel}
                        vol={volumeLevel}
                        OnChangeDrumSet={setActiveDrumSet}
                        drumSet={activeDrumSet}
                        powered={power}
                    />
                </div>
            </div>
        </div>
    );
}

export default DrumMachine;