import { GameState } from "../models/gameModel";

export function updateView({ time, player }: GameState) {
    //update the view based on the model
    //update the time
    document.getElementById("timer")!.innerText = `Time : ${time}`
    const playerView = document.getElementById("player") as HTMLElement
    playerView.setAttribute("x", `${player.position.x}`)
    playerView.setAttribute("y", `${player.position.y}`)


}