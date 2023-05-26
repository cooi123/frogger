import { updateGameState } from "./controllers/controller";
import { IPlayer, changeOfPosition } from "./models/bodyModel";
import { GameState } from "./models/gameModel";
import { fromEvent, merge, interval } from 'rxjs';
import { map, scan, take, filter } from 'rxjs/operators';
import { updateView } from "./views/view";
import { GameConstant } from "./types";
const screenSize = { x: 600, y: 600 }
export class Tick {
  /*
  Used to  update game state
  */
  constructor(public readonly second: number) { }
}

const gameConstants: GameConstant = {
  screenSize: screenSize

}
const initialPlayerState: IPlayer = {
  id: "player",
  position: { x: 0, y: 0 },
  fill: "red",
  active: true,
  kill: false,
  wrapperble: false,
  point: 0,
  stepSize: screenSize.x / 10,
  lives: 3
}
const initialState: GameState = {
  player: initialPlayerState,
  time: 0
}
function main() {
  const gameClock = interval(10).pipe(map(second => new Tick(second)))
  /**
    * Keyboard event handlers 
    */
  const keyboard$ = fromEvent<KeyboardEvent>(document, "keydown");
  const movementLetter = keyboard$.pipe(map(({ key }) => key));
  const up = movementLetter.pipe(filter(key => key == "w"), map(() => ({ x: 0, y: -1 }) as changeOfPosition));
  const down = movementLetter.pipe(filter(key => key == "s"), map(() => ({ x: 0, y: 1 }) as changeOfPosition))
  const left = movementLetter.pipe(filter(key => key == "a"), map(() => ({ x: -1, y: 0 }) as changeOfPosition))
  const right = movementLetter.pipe(filter(key => key == "d"), map(() => ({ x: 1, y: 0 }) as changeOfPosition))

  const movement$ = merge(up, down, left, right)
  const game$ = merge(gameClock, movement$)
  const u = updateGameState(gameConstants)
  game$.pipe(scan(u, initialState)).subscribe(updateView)


}

// The following simply runs your main function on window load.  Make sure to leave it in place.
if (typeof window !== "undefined") {
  window.onload = () => {
    main();
  };
}