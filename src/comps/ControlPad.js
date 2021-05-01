
import { IoVolumeHighOutline, IoVolumeLowOutline } from 'react-icons/io5';
import { FaFreeCodeCamp } from 'react-icons/fa'
import { VolumeLevelSelector } from './VolumeLevelSelector';
import { MAX_VOL, MIN_VOL, SETA, SETB, VOL } from './config';
import '../css/controlPad.scss';

export function ControlPad(props) {

    // Adjust drum volume display to reflect volume level.
    for (let x = 1; x <= VOL.length; x++) {
        if (x <= props.vol * 10) {
            VOL[x - 1].isActive = true;
        } else {
            VOL[x - 1].isActive = false;
        }
    }

    const volumeUp = () => {
        if (props.powered & props.vol < MAX_VOL) {
            props.OnChangeVolumeLevel((props.vol * 10 + 1) / 10); // Work around float number issue.
        }
    }

    const volumeDown = () => {
        if (props.powered & props.vol > MIN_VOL) {
            props.OnChangeVolumeLevel((props.vol * 10 - 1) / 10); // Work around float number issue.
        }
    }

    return (
        <div className="control-pad">
            <div className="volume-display">
                <VolumeLevelSelector volumeLevelIndicator={(VOL[9].isActive) ? VOL[9].activeStyle : VOL[9].inactiveStyle}/>
                <VolumeLevelSelector volumeLevelIndicator={(VOL[8].isActive) ? VOL[8].activeStyle : VOL[8].inactiveStyle}/>
                <VolumeLevelSelector volumeLevelIndicator={(VOL[7].isActive) ? VOL[7].activeStyle : VOL[7].inactiveStyle}/>
                <VolumeLevelSelector volumeLevelIndicator={(VOL[6].isActive) ? VOL[6].activeStyle : VOL[6].inactiveStyle}/>
                <VolumeLevelSelector volumeLevelIndicator={(VOL[5].isActive) ? VOL[5].activeStyle : VOL[5].inactiveStyle}/>
                <VolumeLevelSelector volumeLevelIndicator={(VOL[4].isActive) ? VOL[4].activeStyle : VOL[4].inactiveStyle}/>
                <VolumeLevelSelector volumeLevelIndicator={(VOL[3].isActive) ? VOL[3].activeStyle : VOL[3].inactiveStyle}/>
                <VolumeLevelSelector volumeLevelIndicator={(VOL[2].isActive) ? VOL[2].activeStyle : VOL[2].inactiveStyle}/>
                <VolumeLevelSelector volumeLevelIndicator={(VOL[1].isActive) ? VOL[1].activeStyle : VOL[1].inactiveStyle}/>
                <VolumeLevelSelector volumeLevelIndicator={(VOL[0].isActive) ? VOL[0].activeStyle : VOL[0].inactiveStyle}/>
            </div>
            <div className="control-knobs">
                <div className="expansion-slot">
                    <FaFreeCodeCamp />       
                </div>
                <div>
                    <button
                        className={
                            (props.drumSet === SETA & props.powered) 
                            ? "knob active-drum-set"
                            : "knob inactive-drum-set"
                        }
                        onClick={() => {props.powered && props.OnChangeDrumSet(SETA)}}
                    >
                        Set A
                    </button>
                </div>
                <div>
                    <button
                        className={
                            (props.drumSet === SETB & props.powered)
                            ? "knob active-drum-set"
                            : "knob inactive-drum-set"
                        }
                        onClick={() => {props.powered && props.OnChangeDrumSet(SETB)}}
                    >
                        Set B
                    </button>
                </div>
                <div className="volume-up">
                    <button className="vol-knob" onClick={volumeUp}>
                        <IoVolumeHighOutline />
                    </button>
                </div>
                <div className="volume-down" onClick={volumeDown}>
                    <button className="vol-knob">
                        <IoVolumeLowOutline />
                    </button>
                </div>
            </div>
        </div>
    );
}