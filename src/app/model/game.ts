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
}
