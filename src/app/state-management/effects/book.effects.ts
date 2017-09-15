import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import * as BookActions from "../actions/book.actions";
import { BookService } from "../../services/book.service";

@Injectable()
export class BookEffects {

    constructor(private actions$: Actions,
                private bookService: BookService){}

    @Effect()
    getAllBooks$: Observable<Action> = this.actions$.ofType(BookActions.FETCH_ALL_BOOKS)
                .switchMap(() =>{
                    return this.bookService.getAllBooks()
                    .map(results => new BookActions.FetchAllBooksDone(results))
    });
    
    @Effect()
    getBook$: Observable<Action> = this.actions$.ofType(BookActions.GET_BOOK)
                .map(toPayload)
                .switchMap(query => {
                    return this.bookService.getBookById(query)
                    .map(book => new BookActions.GetBookDone(book));
    });

    @Effect()
    loanBook$: Observable<Action> = this.actions$.ofType(BookActions.LOAN_BOOK)
                .map(toPayload)
                .switchMap(book => {
                    return this.bookService.loanOutBook(book)
                    .map(book => new BookActions.LoanBookDone());
                });

    @Effect()
    loanBookDone$: Observable<Action> = this.actions$.ofType(BookActions.LOAN_BOOK_DONE)
                .map(toPayload)
                .switchMap(query => {
                    return this.bookService.getAllBooks()
                    .map(results => new BookActions.FetchAllBooksDone(results));
                });

    @Effect()
    bringBackBook$: Observable<Action> = this.actions$.ofType(BookActions.BRING_BACK)
                .map(toPayload)
                .switchMap(book => {
                    return this.bookService.bringBackBook(book)
                    .map(book => new BookActions.BringBackDone());
                });

    @Effect()
    bringBackBookDone$: Observable<Action> = this.actions$.ofType(BookActions.BRING_BACK_DONE)
                .map(toPayload)
                .switchMap(query => {
                    return this.bookService.getAllBooks()
                    .map(results => new BookActions.FetchAllBooksDone(results));
                });

    @Effect()
    addBook$: Observable<Action> = this.actions$.ofType(BookActions.ADD_BOOK)
                .map(toPayload)
                .switchMap(book => {
                    return this.bookService.addBook(book)
                    .map(result => new BookActions.AddBookDone(book));
                }); 
 }
