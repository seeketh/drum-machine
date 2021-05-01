// Volume Level indicator
import '../css/volumeLevelSelector.scss'

export function VolumeLevelSelector(props) {

    return (
        <div className="volume-level-selector">
            <div className={props.volumeLevelIndicator}>
            </div>
        </div>
    );
}