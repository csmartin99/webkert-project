import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertComponent } from './insert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    InsertComponent
  ],
  imports: [
    CommonModule, MatDialogModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule
  ],
  exports: [InsertComponent]
})
export class InsertModule { }
