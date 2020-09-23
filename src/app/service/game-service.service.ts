import { Injectable } from '@angular/core';
import { Game } from '../model/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public currentGame: Game;

  public createNewGame(difficulty: number): void {
    const g = new Game();
    g.init(0, difficulty);
    this.currentGame = g;
  }
}
