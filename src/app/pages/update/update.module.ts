import { MatFormFieldModule } from '@angular/material/form-field';
import { UpdateComponent } from './update.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule, MatDialogModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule
  ],
  exports: [UpdateComponent]
})
export class UpdateModule { }
