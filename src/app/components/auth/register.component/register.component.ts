import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredentials } from '../../../models/user-credentials.model';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../../state-management/reducers/store';
import * as UserActions from '../../../state-management/actions/user.actions';

@Component({
    selector: "register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"]
})

export class RegisterComponent {
    userCredentials: UserCredentials = new UserCredentials("","","");

    constructor(private router: Router, private store: Store<fromRoot.State>){}

    register(){
        this.store.dispatch(new UserActions.Register(this.userCredentials));
    }
}