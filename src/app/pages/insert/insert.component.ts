import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  today = Date().toString();

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    category: new FormControl('', Validators.required),
    description: new FormControl(''),
    expectedCompletionDate: new FormControl(''),
    externalId: new FormControl(''),
    href: new FormControl(''),
    orderDate: new FormControl(this.today),
    priority: new FormControl(''),
    requestedCompletionDate: new FormControl(''),
    requestedStartDate: new FormControl(''),
    state: new FormControl('new'),
    cancellationDate: new FormControl(''),
    cancellationReason: new FormControl(''),
    completionDate: new FormControl(''),
    externalReference: new FormControl(''),
    note: new FormControl(''),
    notificationContact: new FormControl(''),
    orderRelationship: new FormControl(''),
    relatedParty: new FormControl(''),
    serviceOrderItem: new FormControl(''),
    startDate: new FormControl(''),
    type: new FormControl('')

  });

  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<InsertComponent>) { }

  ngOnInit(): void {
  }

}
