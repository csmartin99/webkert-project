import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from './order-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    OrderCardComponent
  ],
  imports: [
    CommonModule, MatCardModule
  ],
  exports: [OrderCardComponent]
})
export class OrderCardModule { }
