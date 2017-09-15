import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Book } from "../models/book.model";

@Injectable()
export class BookService{
    path:string;
    headers: Headers;

    constructor(private http: Http){
        this.path = "http://59b14331ffff010011b4ef98.mockapi.io/books";
        this.headers = new Headers({'Content-Type': 'application/json'});
    }

    getAllBooks(): Observable<Book[]>{ 
        return this.http.get(this.path).map((response: Response)=>
        response.json().map(book => {
            return new Book(book);
        }));
    }
    
    getBookById(id: string): Observable<Book>{
        return this.http.get(this.path+"/"+id).map(response => new Book(response.json()));
    }

    loanOutBook(book: Book): Observable<Book>{
        return this.http.put(this.path+"/"+book.id, JSON.stringify(book), {headers: this.headers}).map(response => new Book(response.json()));
    }

    bringBackBook(book: Book): Observable<Book>{
        return this.http.put(this.path+"/"+book.id, JSON.stringify(book), {headers: this.headers}).map(response => new Book(response.json()));
    }

    addBook(book: Book): Observable<Book>{
        return this.http.post(this.path, JSON.stringify(book), {headers: this.headers}).map(response => new Book(response.json()));
    }
}