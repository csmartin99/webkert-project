import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    category: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<InsertComponent>) { }

  ngOnInit(): void {
  }

}
