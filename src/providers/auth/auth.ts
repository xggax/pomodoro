import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/*@Injectable()
export class AuthProvider {

  constructor(public http: Http) {
    console.log('Hello AuthProvider Provider');
  }

}
*/
@Injectable()
export class AuthData {
  firebase: AngularFireAuth;
  firedb: AngularFireDatabase;
  
  constructor() {}

  loginUser(email: string, password: string): Promise<any> {
    return this.firebase.auth.signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): Promise<any> {
    return this.firebase.auth
    .createUserWithEmailAndPassword(email, password)
    .then( newUser => {
      this.firedb.database.ref('/userProfile').child(newUser.uid).set({ email: email });
    });
  }

  




}