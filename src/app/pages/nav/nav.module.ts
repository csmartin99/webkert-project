import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule, MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule
  ],
  exports: [NavComponent]
})
export class NavModule { }
