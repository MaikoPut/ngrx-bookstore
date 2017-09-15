import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserCredentials } from '../models/user-credentials.model';
import { UserService } from './user.service';
import { AuthGuard } from './authguard.service';

@Injectable()
export class AuthService{
    user: Observable<firebase.User>;

    constructor(private firebaseAuth: AngularFireAuth, private userService: UserService, private router: Router, private authGuard: AuthGuard){
        this.user = firebaseAuth.authState;
    }

    register(userCredentials: UserCredentials){
        return this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(userCredentials.email, userCredentials.password)
            .then(value => {
                this.userService.createUser(new User(value.uid, userCredentials.name));
                return userCredentials;
            })
            .catch(err => {
                console.log('Something went wrong: ', err.message);
            });
    }

    login(userCredentials: UserCredentials){
        return this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(userCredentials.email, userCredentials.password)
            .then(value => {
                this.authGuard.isLoggedIn = true;
                console.log(this.authGuard.isLoggedIn + " login function");
                this.router.navigate(["home"]);
                return value
            })
            .catch(err => {
                console.log('Something went wrong: ', err.message);
            })
    }

    logout(){
        return this.firebaseAuth.auth.signOut()
            .then(res => {
                this.router.navigate(["login"]);
            });   
    }
}