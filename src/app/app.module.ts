import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewGameComponent } from './game/new-game/new-game.component';
import { PlayGameComponent } from './game/play-game/play-game.component';
import { GameOverComponent } from './game/game-over/game-over.component';
import { StopwatchComponent } from './game/stopwatch/stopwatch.component';

@NgModule({
  declarations: [
    AppComponent,
    NewGameComponent,
    PlayGameComponent,
    GameOverComponent,
    StopwatchComponent
  ],
  imports: [
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
