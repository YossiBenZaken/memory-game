import { BoardService } from './services/board.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { BoardComponent } from './board/board.component';
import { LightbulbComponent } from './lightbulb/lightbulb.component';
import { HighscoreComponent } from './highscore/highscore.component';

const routes: Routes = [
  { path: 'game', component: BoardComponent },
  { path: '', component: WelcomePageComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, WelcomePageComponent, BoardComponent, LightbulbComponent, HighscoreComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [BoardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
