export const ON = true;
export const OFF = false;
export const STEPONE = 0.1;
export const SETA = 'A';
export const SETB = 'B';
export const MAX_VOL = 1.0;
export const MIN_VOL = 0.0;
export const VOL = [
    {inactiveStyle: 'grayVolumeLevelIndicator', activeStyle: 'greenVolumeLevelIndicator', isActive: false},
    {inactiveStyle: 'grayVolumeLevelIndicator', activeStyle: 'greenVolumeLevelIndicator', isActive: false},
    {inactiveStyle: 'grayVolumeLevelIndicator', activeStyle: 'greenVolumeLevelIndicator', isActive: false},
    {inactiveStyle: 'grayVolumeLevelIndicator', activeStyle: 'yellowVolumeLevelIndicator', isActive: false},
    {inactiveStyle: 'grayVolumeLevelIndicator', activeStyle: 'yellowVolumeLevelIndicator', isActive: false},
    {inactiveStyle: 'grayVolumeLevelIndicator', activeStyle: 'yellowVolumeLevelIndicator', isActive: false},
    {inactiveStyle: 'grayVolumeLevelIndicator', activeStyle: 'redVolumeLevelIndicator', isActive: false},
    {inactiveStyle: 'grayVolumeLevelIndicator', activeStyle: 'redVolumeLevelIndicator', isActive: false},
    {inactiveStyle: 'grayVolumeLevelIndicator', activeStyle: 'redVolumeLevelIndicator', isActive: false},
    {inactiveStyle: 'grayVolumeLevelIndicator', activeStyle: 'redVolumeLevelIndicator', isActive: false}
]; // Styles are css classes.



export const DRUM_SETA = {             
    drumQ: {id: "Q", src: '../drums/clapp.mp3', type: 'clapp'},
    drumW: {id: "W", src: '../drums/claves.mp3', type: 'claves'},
    drumE: {id: "E", src: '../drums/cowbell.mp3', type: 'cowbell'},
    drumA: {id: "A", src: '../drums/flsnare.mp3', type: 'flsnare'},
    drumS: {id: "S", src: '../drums/handclap.mp3', type: 'handclap'},
    drumD: {id: "D", src: '../drums/highconga.mp3', type: 'high-conga'},
    drumZ: {id: "Z", src: '../drums/highhat.mp3', type: 'high-hat'},
    drumX: {id: "X", src: '../drums/hightom.mp3', type: 'high-tom'},
    drumC: {id: "C", src: '../drums/kick.mp3', type: 'kick'}
};

export const DRUM_SETB = {                
    drumQ: {id: "Q", src: '../drums/lowconga.mp3', type: 'low-conga'},
    drumW: {id: "W", src: '../drums/lowtom.mp3', type: 'low-tom'},
    drumE: {id: "E", src: '../drums/maracas.mp3', type: 'maracas'},
    drumA: {id: "A", src: '../drums/open_hh.mp3', type: 'open-hh'},
    drumS: {id: "S", src: '../drums/rassel.mp3', type: 'rassel'},
    drumD: {id: "D", src: '../drums/rimshot.mp3', type: 'rimshot'},
    drumZ: {id: "Z", src: '../drums/sharp_rimshot.mp3', type: 'high-rimshot'},
    drumX: {id: "X", src: '../drums/snare.mp3', type: 'snare'},
    drumC: {id: "C", src: '../drums/yamkick.mp3', type: 'yam-kick'}
};