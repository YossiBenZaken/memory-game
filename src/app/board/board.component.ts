import { sleepTimer } from './../../environments/environment';
import { BoardService } from './../services/board.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent implements OnInit {
  count: number;
  colors: any = {
    red: false,
    green: false,
    blue: false,
    orange: false,
    cyan: false,
    purple: false,
  };
  name: string;
  gameover: boolean = false;
  bestscore: number;
  constructor(private _board: BoardService, private _router: Router) {}

  ngOnInit() {
    this._board.state.subscribe((state) => {
      if (state.name == undefined) {
        this._router.navigateByUrl('');
      }
      if(this.gameover != state.gameover) {
        this.gameover = state.gameover
        this.bestscore = state.best
      }
      if (this.count != state.count) {
        this.count = state.count;
        this.teasePlayer(state.memory);
        this.name = state.name;
      }
    });
    this._board.startMemory();
  }
  playerClick(color: string) {
    if(!this.gameover) {
      this._board.playerClick(color);
    }
  }
  async teasePlayer(memory: string[]) {
    for (let i = 0; i < memory.length; i++) {
      this.colors[memory[i]] = true;
      await sleepTimer(400);
      this.colors[memory[i]] = false;
      await sleepTimer(200);
    }
  }
  Restart() {
    this._board.memory = this._board.restartGame();
    this.teasePlayer(this._board.memory);
  }
}
