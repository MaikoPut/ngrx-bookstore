import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Book } from '../../models/book.model';

export const LOADING = 'BOOK_LOAD';

export const FETCH_ALL_BOOKS = "FETCH_BOOKS";
export const FETCH_ALL_BOOKS_DONE = "FETCH_BOOKS_DONE";

export const GET_BOOK = "GET_BOOK";
export const GET_BOOK_DONE = "GET_BOOK_DONE";

export const LOAN_BOOK = "LOAN_BOOK";
export const LOAN_BOOK_DONE = "LOAN_BOOK_DONE";
export const BRING_BACK = "BRING_BACK";
export const BRING_BACK_DONE = "BRING_BACK_DONE";

export const ADD_BOOK = "ADD_BOOK";
export const ADD_BOOK_DONE = "ADD_BOOK_DONE";

export class FetchAllBooks implements Action {
    readonly type = FETCH_ALL_BOOKS;
    constructor(){};
}

export class FetchAllBooksDone implements Action {
    readonly type = FETCH_ALL_BOOKS_DONE;
    constructor(public payload: Book[]){};
}

export class GetBook implements Action {
    readonly type = GET_BOOK;
    constructor(public payload: string){};
}

export class GetBookDone implements Action {
    readonly type = GET_BOOK_DONE;
    constructor(public payload: Book){};
}

export class LoanBook implements Action {
    readonly type = LOAN_BOOK;
    constructor(public payload: Book){};
}

export class LoanBookDone implements Action {
    readonly type = LOAN_BOOK_DONE;
    constructor(){};
}

export class BringBack implements Action {
    readonly type = BRING_BACK;
    constructor(public payload: Book){};
}

export class BringBackDone implements Action {
    readonly type = BRING_BACK_DONE;
    constructor(){};
}

export class AddBook implements Action {
    readonly type = ADD_BOOK;
    constructor(public payload: Book){}
}

export class AddBookDone implements Action {
    readonly type = ADD_BOOK_DONE;
    constructor(public payload: Book){}
}

export type Actions = FetchAllBooks | FetchAllBooksDone | GetBook | GetBookDone| LoanBook | LoanBookDone 
                        | BringBack | BringBackDone | AddBook | AddBookDone