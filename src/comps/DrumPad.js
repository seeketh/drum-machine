// Drum Selector and Indicator
import { Component} from 'react';
import '../css/drumPad.scss'


export class DrumPad extends Component {

    constructor(props) {
        super(props);

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.beatDrum = this.beatDrum.bind(this);
        this.playDrum = this.playDrum.bind(this);

        this.state = { drumClass: (this.props.powered) ? "drum-pad" : "inactive-drum-pad" };
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentDidUpdate() {
        if(this.props.powered) {
            if (this.state.drumClass === "inactive-drum-pad") {
                this.setState({ drumClass: "drum-pad" });
            }
        } else {
            if (this.state.drumClass === "drum-pad") {
                this.setState({ drumClass: "inactive-drum-pad" });
            }
        }
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown(event) {
        if (this.props.drumData.id === event.key.toUpperCase() & this.props.powered) {
            console.log(this.props.powered);
            this.setState({ drumClass: "active-drum-pad" });
            this.beatDrum();
            setTimeout(() => {this.setState({ drumClass: "drum-pad" })}, 100);
        }  
    }

    beatDrum() {
        this.props.onSetDisplay(this.props.drumData.type);
        const drum = document.getElementById(this.props.drumData.id);
        drum.volume = this.props.vol;
        drum.currentTime = 0;
        drum.play();
    }

    playDrum() {
        if(this.props.powered) {
            this.beatDrum();
        }
    }

    render() {
        return (
            <div>
                <button
                    className={this.state.drumClass}
                    onClick={this.playDrum} 
                    id={this.props.drumData.type}
                >
                    {this.props.drumData.id}
                    <audio
                        className="clip"
                        id={this.props.drumData.id}
                        src={this.props.drumData.src} 
                    >
                        Your browser does not support the audio element.
                    </audio>
                </button>
            </div>         
        );
    }

}

