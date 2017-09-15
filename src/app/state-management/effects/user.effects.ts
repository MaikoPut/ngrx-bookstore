import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as UserActions from '../actions/user.actions';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Injectable()
export class UserEffects {

    constructor(private actions$: Actions, private authService: AuthService, private userService: UserService){}

    @Effect()
    login$: Observable<Action> = this.actions$.ofType(UserActions.LOGIN)
            .map(toPayload)
            .switchMap(userCred => {
                return this.authService.login(userCred)
                .then(res => new UserActions.LoginDone(res.uid));
            });
    
    @Effect()
    loginDone$: Observable<Action> = this.actions$.ofType(UserActions.LOGIN_DONE)
            .map(toPayload)
            .switchMap(userId => {
                return this.userService.getUserById(userId)
                .map(user => new UserActions.GetUser(user));
            });

    @Effect()
    register$: Observable<Action> = this.actions$.ofType(UserActions.REGISTER)
            .map(toPayload)
            .switchMap(userCred => {
                return this.authService.register(userCred)
                .then(userCred => {return new UserActions.Login(userCred)});
            });

    @Effect()
    logout$: Observable<Action> = this.actions$.ofType(UserActions.LOGOUT)
            .map(toPayload)
            .switchMap(res => {
                return this.authService.logout()
                .then(res => new UserActions.LogoutDone());
            });
}