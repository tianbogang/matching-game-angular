import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CardState } from 'src/app/model/enums';
import { Game } from '../../model/game';
import { Card } from '../../model/card';
import { GameService } from '../../service/game-service.service';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css']
})
export class PlayGameComponent implements OnInit, AfterViewInit {

  @ViewChildren (StopwatchComponent) stopWatch: QueryList<StopwatchComponent>;

  public difficulty: number;

  public game: Game;
  public cardset1: Card[];
  public cardset2: Card[];

  constructor(private router: Router, private route: ActivatedRoute, private service: GameService) {
  }

  public get CardState(): typeof CardState {
    return CardState;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.difficulty = Number(params.get('difficulty'));
    });

    this.game = this.service.currentGame;
    this.cardset1 = this.game.cardset1;
    this.cardset2 = this.game.cardset2;
  }

  ngAfterViewInit() {
    this.stopWatch.first.start();
  }

  noMoreCard() {
    return (this.game.remainCards() === 0);
  }

  matchedCards() {
    return this.game.matchedCards();
  }

  anyRedCard() {
    return this.game.anyRedCard();
  }

  public gameIcon(): string {
    if (this.matchedCards()) {
      return 'thumb_up';
    } else if (this.anyRedCard()) {
      return 'thumb_down';
    } else {
      return 'verified_user';
    }
  }

  onClickSet1(card: Card) {
    this.game.updateCardInCardsetUno(card.point);
    this.checkAndStop();
  }

  onClickSet2(card: Card) {
    this.game.updateCardInCardsetDue(card.point);
    this.checkAndStop();
  }

  checkAndStop() {
    setTimeout (() => {
        if (this.noMoreCard()) {
          this.stopWatch.first.stop();
          this.game.timeUsed = this.stopWatch.first.counter;
          this.router.navigate(['gameover']);
        }
    }, 1000);
  }
}
