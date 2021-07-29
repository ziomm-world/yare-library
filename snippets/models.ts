export interface Sight {
    friends: string[];
    enemies: string[];
    structures: string[];
}

export enum SpiritType {
    Circle,
    Square,
    Triangle
}

export class Spirit {
    id: string;
    position: [number, number];
    size: number;
    energy_capacity: number;
    energy: number;
    hp: number;
    mark: string;
    last_energized: string;
    sight: Sight;

    // ===================== custom =====================

    _type?: SpiritType;

    constructor(id: string, type: SpiritType) {
        this.id = id;
        this._type = type;
    }
}

export class Base {
    id: string;
    structure_type: string;
    position: [number, number];
    size: number;
    energy_capacity: number;
    energy: number;
    hp: number;
    sight: Sight;

}