import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
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
export class PlayGameComponent implements OnInit {

  @ViewChildren (StopwatchComponent) stopWatch: QueryList<StopwatchComponent>;

  public difficulty: number;

  public cardset1: Card[];
  public cardset2: Card[];

  public gameIcon: string;

  constructor(private router: Router, private route: ActivatedRoute, private service: GameService) {
  }

  public get CardState(): typeof CardState {
    return CardState;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.difficulty = Number(params.get('difficulty'));
    });

    this.gameIcon = 'verified_user';
    this.cardset1 = this.service.currentGame.cardset1;
    this.cardset2 = this.service.currentGame.cardset2;
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.stopWatch.first.start();
  }

  onClickSet1(card: Card): void {
    this.toggleStateInSameCardset(this.cardset1, card);
    this.updateStateBetweenCardset(this.cardset2, card);
  }

  onClickSet2(card: Card): void {
    this.toggleStateInSameCardset(this.cardset2, card);
    this.updateStateBetweenCardset(this.cardset1, card);
  }

  toggleStateInSameCardset(cardset: Card[], card: Card): void {
    const selectedCard = cardset.find(c => c.state === CardState.OpenGreen);
    if (selectedCard !== undefined) {
      selectedCard.state = CardState.Closed;
      card.state = CardState.OpenGreen;
    }
  }

  updateStateBetweenCardset(cardset: Card[], card: Card): void {
    const selectedCard = cardset.find(c => c.state === CardState.OpenGreen);
    if (selectedCard !== undefined) {
      if(selectedCard.point === card.point) {
        card.state = CardState.OpenGreen;
        this.gameIcon = 'thumb_up';
        setTimeout (() => {
          selectedCard.state = CardState.Hidden;
          card.state = CardState.Hidden;
          this.gameIcon = 'verified_user';

          if (this.noMoreCardToPlay(this.cardset1) && this.noMoreCardToPlay(this.cardset2)) {
            this.stopWatch.first.stop();
            this.service.currentGame.timeUsed = this.stopWatch.first.counter;
            this.router.navigate(['gameover']);
          }
        }, 1000);
      } else {
        card.state = CardState.OpenRed;
        this.gameIcon = 'thumb_down';
        setTimeout (() => {
          card.state = CardState.Closed;
          this.gameIcon = 'verified_user';
        }, 3000);
      }
    } else {
      card.state = CardState.OpenGreen;
    }
  }

  noMoreCardToPlay(cardset: Card[]): boolean {
    return (cardset.length === cardset.filter(c => c.state === CardState.Hidden).length);
  }
}
