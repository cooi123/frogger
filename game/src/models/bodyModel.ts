export interface changeOfPosition {
    x: 0 | 1 | -1,
    y: 0 | 1 | -1
}
export interface Position {
    x: number,
    y: number
}

export interface IBody {
    //Required for all game objects 
    id: string
    position: Position,
    fill: string,
    active: boolean,
    kill: boolean,
    wrapperble: boolean
    point: number
    stepSize: number
}

export interface IPlayer extends IBody {
    //Required for player object
    lives: number
}



export function updateMovement(acc: IPlayer, current: changeOfPosition): IPlayer {
    return {
        ...acc, position: {
            x: acc.position.x + current.x * acc.stepSize,
            y: acc.position.y + current.y * acc.stepSize
        }
    }
}


