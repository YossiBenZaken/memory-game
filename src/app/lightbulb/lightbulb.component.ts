import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lightbulb',
  templateUrl: './lightbulb.component.html',
  styleUrls: ['./lightbulb.component.css']
})
export class LightbulbComponent implements OnInit {
  @Input() color: string;
  @Input() active: boolean = false;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.clicked.emit(this.color);
  }

}
