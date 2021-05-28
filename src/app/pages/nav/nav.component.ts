import { Component, Input, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
