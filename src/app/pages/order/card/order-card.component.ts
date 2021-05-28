import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceOrder } from 'src/app/models/service-order';
import { DeleteOrderComponent } from '../../home/delete-order/delete-order.component';

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

  deleteOrder(): void {
    /*const dialogRef = this.dialog.open(DeleteOrderComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        
      }
    });*/
  }

}
