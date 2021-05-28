import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() menu: Menu[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
