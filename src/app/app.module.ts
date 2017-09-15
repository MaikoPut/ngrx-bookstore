import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { routes } from './routes';
import { environment } from '../environments/environment';

import { BookEffects } from './state-management/effects/book.effects';
import { UserEffects } from './state-management/effects/user.effects';
import { reducers } from './state-management/reducers/store';

import { BookService } from './services/book.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/authguard.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component/home.component';
import { BookComponent } from './components/book.component/book.component'; 
import { LoginComponent } from './components/auth/login.component/login.component';
import { RegisterComponent } from './components/auth/register.component/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([BookEffects, UserEffects])
  ],
  providers: [BookService, AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
