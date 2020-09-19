import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGameComponent } from './game/new-game/new-game.component';
import { PlayGameComponent } from './game/play-game/play-game.component';
import { GameOverComponent } from './game/game-over/game-over.component';

const appRoutes: Routes = [
  { path: '', component: NewGameComponent },
  { path: 'newgame', component: NewGameComponent },
  { path: 'playgame/:difficulty', component: PlayGameComponent },
  { path: 'gameover', component: GameOverComponent },
  { path: '**', redirectTo: '/newgame'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
