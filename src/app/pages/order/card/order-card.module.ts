import { HomeModule } from './../../home/home.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from './order-card.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    OrderCardComponent
  ],
  imports: [
    CommonModule, MatCardModule, MatDialogModule, MatButtonModule, MatIconModule
  ],
  exports: [OrderCardComponent]
})
export class OrderCardModule { }
