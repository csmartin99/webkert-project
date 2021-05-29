import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceOrder } from 'src/app/models/service-order';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() order: ServiceOrder | undefined;

  form: FormGroup = new FormGroup({
    category: new FormControl('', Validators.required),
    description: new FormControl(''),
    expectedCompletionDate: new FormControl(''),
    externalId: new FormControl(''),
    href: new FormControl(''),
    orderDate: new FormControl(''),
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

  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<UpdateComponent>) { 
    
  }

  ngOnInit(): void {
  }

}
