// RxJS v6+
import { fromEvent, merge } from 'rxjs';
import { map, scan, take, filter } from 'rxjs/operators';
import { IBody, IPlayer, changeOfPosition as changeOfPosition, updateMovement } from '../models/bodyModel';
import { GameState } from '../models/gameModel';
import { updateView } from '../views/view';
import { Tick } from "../main";
import { GameConstant } from 'src/types';

export const updateGameState = (gameConstants: GameConstant) => (currentState: GameState, event: Tick | changeOfPosition): GameState => {
  if (event instanceof Tick) {
    return {
      ...currentState,
      player: currentState.player,
      time: currentState.time + 1
    }
  }
  else {
    return {
      ...currentState,
      player: updateMovement(currentState.player, event),
      time: currentState.time
    }
  }
  return currentState;
}



