import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameServiceService } from '../../service/game-service.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  constructor(private router: Router, private service: GameServiceService) { }

  public timeUsed: Date;

  ngOnInit(): void {
    this.timeUsed = this.service.currentGame.timeUsed;
  }

  playAgain(): void {
    this.router.navigate(['newgame']);
  }
}
