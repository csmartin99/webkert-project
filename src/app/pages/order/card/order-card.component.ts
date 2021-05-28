import { HomeComponent } from './../../home/home.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from 'src/app/firebase.service';
import { ServiceOrder } from 'src/app/models/service-order';
import { DeleteOrderComponent } from '../../home/delete-order/delete-order.component';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input() order: ServiceOrder | undefined;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  deleteOrderOne(id: string) {
    this.firebaseService.deleteOrder(id);
    console.log("elso");
    /*const dialogRef = this.dialog.open(DeleteOrderComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        
      }
    });*/
  }

}
