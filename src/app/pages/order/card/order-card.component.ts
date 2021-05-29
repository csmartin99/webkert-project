import { HomeComponent } from './../../home/home.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/firebase.service';
import { ServiceOrder } from 'src/app/models/service-order';
import { DeleteOrderComponent } from '../../home/delete-order/delete-order.component';
import { UpdateComponent } from '../../update/update.component';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input() order: ServiceOrder | undefined;

  constructor(private firebaseService: FirebaseService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteOrderOne(order: ServiceOrder) {
    this.firebaseService.deleteOrder(order);
  }

  updateOrderOne(orders: ServiceOrder) {
    const dialogRef = this.dialog.open(UpdateComponent, {});
    dialogRef.afterClosed().subscribe((order: ServiceOrder) => {
      console.log(order);
      if (order) {
        this.firebaseService.updateOrder(order, orders.id);
      }
    }, err => {
      console.warn(err);
    });
  }

}
