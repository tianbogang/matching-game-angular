import { Injectable } from '@angular/core';
import { Card } from './card';
import { CardState } from './enums';

declare function shuffle(array);

@Injectable({
    providedIn: 'root'
})
export class Game {
    public id: number;
    public difficulty: number;
    public cardset1: Card[];
    public cardset2: Card[];
    public timeUsed: Date;

    constructor() {}

    public init(gameId: number, gameLevel: number): void {
        this.id = gameId;
        this.difficulty = gameLevel;

        const len = gameLevel;
        let pts: number[] = [];
        for (let n = 1; n <= len; n++) {
            pts.push(n);
        }

        pts = shuffle(pts);
        this.cardset1 = [];
        for (let n = 1; n <= len; n++) {
            const card: Card = {
                point: pts[n - 1],
                state: CardState.Closed
            };
            this.cardset1.push(card);
        }

        pts = shuffle(pts);
        this.cardset2 = [];
        for (let n = 1; n <= len; n++) {
            const card: Card = {
                point: pts[n - 1],
                state: CardState.Closed
            };
            this.cardset2.push(card);
        }
    }

    public updateCardInCardsetUno(point: number) {
        const card = this.cardset1.find(c => c.point === point);
        if (card !== undefined) {
            this.toggleStateInSameCardset(this.cardset1, card);
            this.updateStateBetweenCardset(this.cardset2, card);
        }
    }

    public updateCardInCardsetDue(point: number) {
        const card = this.cardset2.find(c => c.point === point);
        if (card !== undefined) {
            this.toggleStateInSameCardset(this.cardset2, card);
            this.updateStateBetweenCardset(this.cardset1, card);
        }
    }

    toggleStateInSameCardset(cardset: Card[], card: Card) {
        const selectedCard = cardset.find(c => c.state === CardState.OpenGreen);
        if (selectedCard !== undefined) {
            selectedCard.state = CardState.Closed;
            card.state = CardState.OpenGreen;
        }
    }

    updateStateBetweenCardset(cardset: Card[], card: Card) {
        const selectedCard = cardset.find(c => c.state === CardState.OpenGreen);
        if (selectedCard !== undefined) {
            if (selectedCard.point === card.point) {
                card.state = CardState.OpenGreen;
                setTimeout (() => {
                    selectedCard.state = CardState.Hidden;
                    card.state = CardState.Hidden;
                }, 1000);
            } else {
                card.state = CardState.OpenRed;
                setTimeout (() => {
                    card.state = CardState.Closed;
                }, 3000);
            }
        } else {
          card.state = CardState.OpenGreen;
        }
    }

    public remainCards(): number {
        return (
            this.cardset1.filter(c => c.state !== CardState.Hidden).length +
            this.cardset2.filter(c => c.state !== CardState.Hidden).length
        );
    }

    public matchedCards(): boolean {
        return (
            this.cardset1.filter(c => c.state === CardState.OpenGreen).length !== 0 &&
            this.cardset2.filter(c => c.state === CardState.OpenGreen).length !== 0
        );
    }

    public anyRedCard(): boolean {
        return (
            this.cardset1.filter(c => c.state === CardState.OpenRed).length !== 0 ||
            this.cardset2.filter(c => c.state === CardState.OpenRed).length !== 0
        );
    }
}
