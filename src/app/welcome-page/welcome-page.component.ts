import { BoardService } from './../services/board.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {
  disabled: boolean = true;
  constructor(private _router: Router,private _board: BoardService) { }
  Start(n:any) {
    this._board.name = n.value;
    this._router.navigateByUrl('/game');
  }
  disabledBtn(n:any) {
    this.disabled = n.value == '';
  }
}
