import { BoardService } from './../services/board.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css']
})
export class HighscoreComponent implements OnInit {
  highscore: any[] = [];
  constructor(private _board: BoardService) { }

  ngOnInit(): void {
    this._board.highscoreState.subscribe(state => {
      this.highscore = state.highscore;
    })
  }

}
