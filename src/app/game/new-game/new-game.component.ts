import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameDifficulty } from '../../model/enums';
import { GameService } from '../../service/game-service.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css']
})
export class NewGameComponent implements OnInit {

  constructor(private router: Router, private service: GameService) { }

  ngOnInit(): void {
  }

  public get GameDifficulty(): typeof GameDifficulty {
    return GameDifficulty;
  }

  startNewGame(difficulty: GameDifficulty): void {
    this.service.createNewGame(difficulty);
    this.router.navigate(['playgame', difficulty]);
  }
}
