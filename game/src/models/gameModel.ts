import { IPlayer } from "./bodyModel";
export type GameState = Readonly<{
    time: number;
    player: IPlayer;
}>;



