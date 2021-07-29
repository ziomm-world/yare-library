import { deg2rad } from './math';
import { Spirit, SpiritType, Sight } from './models';

const mapSize = {
    width: 4400,
    height: 2700
};

// ===================== points of interest =====================

const topLeft = {
    x: 0,
    y: 0
};

const bottomRight = {
    x: 4400,
    y: 2700
};

const points = {
    topLeft,
    bottomRight,
};

// ===================== stars =====================

// const player

const star_zxq = {
    x: 1000,
    y: 1000
};

const star_p89 = {
    x: 2000,
    y: 1300
};

const star_alc = {
    x: 3200,
    y: 1400
};

const stars = {
    star_zxq,
    star_p89,
    star_alc
};

// ===================== spirits =====================

const spiritIds = [
    'e1',
    'k1'
];

let spirit1: Spirit;

const spirit2 = new Spirit('e1', SpiritType.Square);

// ===================== buildings =====================


const player1 = {
    x: 1600,
    y: 700
};

const player2 = {
    x: 2600,
    y: 1700
};


const outpost = {
    x: 2200,
    y: 1100
};

// ===================== utility =====================

const memory = {

};