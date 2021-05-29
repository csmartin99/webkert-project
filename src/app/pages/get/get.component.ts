import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirebaseService } from 'src/app/firebase.service';
import { ServiceOrder } from 'src/app/models/service-order';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  orders: ServiceOrder[] | undefined;
  orderSub: Subscription | undefined;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getOrdersById();
  }

  getOrdersById() {
    this.orderSub = this.firebaseService.getOrderById().subscribe(orders => {
      this.orders = orders;
    });
  }

  ngOnDestroy() {
    this.orderSub?.unsubscribe();
  }
}
