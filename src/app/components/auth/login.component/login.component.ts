import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredentials } from '../../../models/user-credentials.model';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../../state-management/reducers/store';
import * as UserActions from '../../../state-management/actions/user.actions';

@Component({
    selector: "login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})

export class LoginComponent {
    userCredentials: UserCredentials = new UserCredentials("","");

    constructor(private router: Router, private store: Store<fromRoot.State>){}

    login(){
        this.store.dispatch(new UserActions.Login(this.userCredentials));
    }
}