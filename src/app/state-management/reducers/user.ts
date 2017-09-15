import { User } from '../../models/user.model';

import * as UserActions from '../actions/user.actions';

export interface State {
    loading: boolean;
    loggedInUser: User;
}

const initialState: State = {
    loading: false,
    loggedInUser: null
}

export function userReducer(state: State = initialState, action: UserActions.Actions): State {
    switch(action.type){
        case UserActions.LOGIN: {
            return{
                ...state,
                loading: true
            }
        }

        case UserActions.LOGIN_DONE: {
            return {
                ...state,
                loading: false
            }
        }

        case UserActions.REGISTER: {
            return {
                ...state,
                loading: true
            }
        }

        case UserActions.LOGOUT: {
            return {
                ...state,
                loading: true
            }
        }

        case UserActions.LOGOUT_DONE: {
            return {
                ...state,
                loading: false,
                loggedInUser: null
            }
        }

        case UserActions.GET_USER: {
            return {
                ...state,
                loggedInUser: action.payload
            }
        }

        default : {
            return state;
        }
    }
}