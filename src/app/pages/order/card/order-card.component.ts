import { Component, Input, OnInit } from '@angular/core';
import { ServiceOrder } from 'src/app/models/service-order';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input() order: ServiceOrder | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
