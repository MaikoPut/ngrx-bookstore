import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromBooks from './books';
import * as fromAuth from './user';

import { StoreModule } from "@ngrx/store";

export interface State {
    books: fromBooks.State;
    auth: fromAuth.State;
}

export const reducers = {
    auth: fromAuth.userReducer,
    books: fromBooks.bookReducer
    
};

export const getAppBooks = (state : State) => state.books;
export const getAppAuth = (state : State) => state.auth;

export const getBooks = createSelector(
    getAppBooks,(state: fromBooks.State) =>{
        return state.results;
    }
)

export const getLoading = createSelector(
    getAppBooks, (state: fromBooks.State) =>{
        return state.loading;
    }
)

export const getSelectedBook = createSelector(
    getAppBooks, (state: fromBooks.State)=> {
        return state.selectedBook;
    }
)

export const getLoggedInUser = createSelector(
    getAppAuth, (state: fromAuth.State) => {
        return state.loggedInUser;
    }
)