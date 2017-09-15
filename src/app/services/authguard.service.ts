import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthGuard implements CanActivate {
    isLoggedIn: boolean= false;
    user: Observable<firebase.User>

    constructor(private router: Router, private auth: AngularFireAuth) { 
        this.user = auth.authState;
    }

    canActivate(): Observable<boolean> {
        console.log(this.checkLogin(true));
        return this.auth.authState
            .take(1)
            .map(authState => !!authState)
            .do(auth => this.checkLogin(auth) ? true : this.router.navigate(['/login']));
    }

    checkLogin(auth: boolean){
        if(auth && this.isLoggedIn){
            return true
        }
        else{
            return false;
        }
    }
}