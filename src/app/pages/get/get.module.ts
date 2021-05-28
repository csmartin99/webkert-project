import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetComponent } from './get.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    GetComponent
  ],
  imports: [
    CommonModule, MatTableModule
  ],
  exports: [GetComponent]
})
export class GetModule { }
