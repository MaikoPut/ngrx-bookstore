import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Book } from '../../models/book.model';

import { Store } from '@ngrx/store';
import * as fromStore from '../../state-management/reducers/store'; 
import * as Actions from '../../state-management/actions/book.actions';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    results: Observable<Book[]>;
    loading: Observable<boolean>;
    bookToAdd: Book = new Book("");
  
    constructor(private store: Store<fromStore.State>){
        this.results = this.store.select(fromStore.getBooks);
        this.loading = this.store.select(fromStore.getLoading);
    }

    ngOnInit(){
    }

    addBook() {
        this.store.dispatch(new Actions.AddBook(this.bookToAdd));
    }
}