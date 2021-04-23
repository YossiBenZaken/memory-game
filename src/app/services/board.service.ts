import {
  Colors,
  environment,
  sleepTimer,
} from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BoardService {
  memory: string[] = [];
  player: string[] = [];
  count: number;
  state = new Subject<any>();
  highscoreState = new Subject<any>();
  name: string;
  highscore: any[] = [];
  bestscore: number;
  gameover: boolean;
  constructor() {
    this.count = environment.Count;
    this.gameover = false;
  }

  private get randomColor(): string {
    return Colors[Math.floor(Math.random() * 6)];
  }

  addToMemory(inc: boolean = false): void {
    if (inc) {
      this.count++;
    }
    this.memory.push(this.randomColor);
  }

  startMemory(): string[] {
    this.memory = [];
    for (let i = 0; i < this.count; i++) {
      this.addToMemory();
    }
    this.setState();
    return this.memory;
  }

  restartGame(): string[] {
    this.count = environment.Count;
    this.gameover = false;
    return this.startMemory();
  }

  playerClick(value: string) {
    if(!this.gameover) {
      this.player.push(value);
      if (!this.checkGame()) {
        this.gameover= true;
        this.highscore.push({
          name: this.name,
          date: new Date().toLocaleString('he'),
          score: (this.count - 1) * 10,
        });
       this.highscore = this.highscore.sort((a,b) => a.score < b.score ? 1 : a.score > b.score ? -1 : 0);
        this.bestscore = this.highscore[0].score;
        this.player = [];
        this.setHighscoreState();
      }
    }
    this.setState();
  }
  checkGame(): boolean {
    for (let i = 0; i < this.player.length; i++) {
      if (this.player[i] !== this.memory[i]) {
        return false;
      }
    }
    if (this.player.length === this.memory.length) {
      sleepTimer(1000);
      this.updateMemory();
    }
    return true;
  }

  updateMemory() {
    this.addToMemory(true);
    this.player = [];
  }

  setState() {
    this.state.next({
      player: this.player,
      memory: this.memory,
      count: this.count,
      name: this.name,
      gameover: this.gameover,
      best: this.bestscore
    });
  }

  setHighscoreState() {
    this.highscoreState.next({
      highscore: this.highscore
    })
  }
}
