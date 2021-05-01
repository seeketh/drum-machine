// Drum Selector and Indicator
import { useEffect } from 'react';
import '../css/drum.scss'

export function Drum(props) {

    let drumClass = "drum";

    const handleKeyDown = (event) => {clickDrum();};

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [])
  

    const clickDrum = () => {
        props.setDisplay(props.drumType);
        props.drum.volume = props.vol;
        props.drum.currentTime = 0;
        props.drum.play();
    }


    return (
        <div>
            <button
                className={drumClass}
                onClick={clickDrum}  
            >
                {props.drumLabel}
            </button>
        </div>
    );
}