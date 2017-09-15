import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { UserCredentials } from '../../models/user-credentials.model';
import { User } from '../../models/user.model';

export const LOGIN = "LOGIN";
export const LOGIN_DONE = "LOGIN_DONE";

export const REGISTER = "REGISTER";

export const LOGOUT = "LOGOUT";
export const LOGOUT_DONE = "LOGOUT_DONE";

export const GET_USER = "GET_USER";

export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: UserCredentials){}
}

export class LoginDone implements Action {
    readonly type = LOGIN_DONE;
    constructor(public payload: string){}
}

export class Register implements Action {
    readonly type = REGISTER;
    constructor(public payload: UserCredentials){}
}

export class Logout implements Action {
    readonly type = LOGOUT;
    constructor(){}
}

export class LogoutDone implements Action {
    readonly type = LOGOUT_DONE;
    constructor(){}
}

export class GetUser implements Action {
    readonly type = GET_USER;
    constructor(public payload: User){}
}

export type Actions = Login | LoginDone | Register | Logout | LogoutDone | GetUser