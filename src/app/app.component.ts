import { FirebaseService } from './firebase.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from './models/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'webkert-project';
  users: User[] | undefined;
  userSub: Subscription | undefined;

  constructor(private firebaseService: FirebaseService) {
    
  }

  ngOnInit() {
    this.getUsersByAge();
  }

  getUsersByAge() {
    this.userSub = this.firebaseService.getUserByAge(20).subscribe(users => {
      this.users = users;
    });
  }

  addUser() {
    this.firebaseService.addUser().then(data => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.userSub?.unsubscribe();
  }
}
