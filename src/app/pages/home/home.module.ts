import { MatButtonModule } from '@angular/material/button';
import { InsertModule } from './../insert/insert.module';
import { NavModule } from './../nav/nav.module';
import { DetailModule } from './../detail/detail.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenModule } from '../splash-screen/splash-screen.module';
import { OrderCardModule } from '../order/card/order-card.module';
import { UpdateModule } from '../update/update.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, SplashScreenModule, OrderCardModule, DetailModule, NavModule, UpdateModule, InsertModule, 
    MatButtonModule, MatIconModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
