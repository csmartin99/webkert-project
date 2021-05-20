import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  myUser: User = {
    username: 'user005',
    age: 58,
    hometown: 'Budapest',
    score: 43
  };

  constructor(private afs: AngularFirestore) { }

  addUser() {
    return this.afs.collection('Users').add(this.myUser);
  }

  getUserByAge(minAge: number) {
    return this.afs.collection<User>('Users', ref => ref.where('age', '>=', minAge).orderBy('age', 'desc')).valueChanges();
  }
}
