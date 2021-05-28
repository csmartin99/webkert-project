import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Options } from 'src/app/models/options-model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  sMenuTitle: string | undefined;
  @Input() selectedMenu: string | undefined;
  @Input() options: Options[] = [];
  @Output() callSelectPage = new EventEmitter<string>();
  @Output() callSelectO = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  select(target: string): void {
    this.callSelectO.emit(target);
  }

}
