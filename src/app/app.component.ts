import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Book } from './models/book.model';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { AuthService } from './services/auth.service';
import { User } from './models/user.model';

import { Store } from '@ngrx/store';
import * as fromRoot from './state-management/reducers/store';
import * as BookActions from './state-management/actions/book.actions';
import * as UserActions from './state-management/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
 
  constructor(private store: Store<fromRoot.State>, private router: Router, private authService: AuthService){
    this.store.dispatch(new BookActions.FetchAllBooks());
  }

  ngOnInit(){
  }

  logout(){
    this.store.dispatch(new UserActions.Logout());
  }
}
